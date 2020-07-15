//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './components/LoginForm';
import BG from './images/bg.png'
import Loading from './components/Loading'
import Home from './screens/Home';
import Nav from './navigation/Nav';


// create a component
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBAN0g7RDUc8TJhVC7Zb59gXGMl39fkMeI",
      authDomain: "pubg-eats.firebaseapp.com",
      databaseURL: "https://pubg-eats.firebaseio.com",
      projectId: "pubg-eats",
      storageBucket: "pubg-eats.appspot.com",
      messagingSenderId: "316236916843",
      appId: "1:316236916843:web:dfe0e2b051957f1050292e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Nav/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
