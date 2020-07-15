//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import Singup from '../screens/Signup'

// create a component
class EmailAndPassword extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })

    
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }


    render() {
        return (
            <View style={styles.container}>
                 <TextInput
                    placeholder="email" 
                    keyboardType='email-address'
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                     />

                 <TextInput 
                    placeholder="password" 
                    style={styles.input}
                    secureTextEntry
                     value={this.state.password}
                     onChangeText={password => this.setState({password})}
                />

                

                 <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress} >
                     <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
                <Text style={styles.errorText} >
                    {this.state.error}
                </Text>
                 <TouchableOpacity style={styles.buttonSignup} onPress={() => this.Singup.open()} >
                     <Text style={styles.buttonText}>SignUp</Text>
                 </TouchableOpacity>
                 <Singup ref={modal => this.Singup = modal} />
                 
                 <TouchableOpacity style={styles.buttonForgotPassword} onPress={this.onBottomPress} >
                     <Text style={styles.buttonTextForgotPassword}>Forgot Password?</Text>
                 </TouchableOpacity>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
      
     
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    errorText:{
        backgroundColor: '#ffffff',
        fontSize:15,
        color:'red',
        alignSelf:'center',
        marginTop:30

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8
    },
    buttonSignup: {
        backgroundColor: '#40ff00',
        padding:10,
        borderRadius:8,
        top: 10,
        marginHorizontal: "35%"
    },
    buttonForgotPassword: {
        top: 20,
        backgroundColor: '#ffffff',
        padding:10,
        borderRadius:8,
        marginHorizontal: "20%"
    },
    buttonTextForgotPassword: {
        textAlign:'center',
        color:'#000000',
        fontSize:20
    }
});

//make this component available to the app
export default EmailAndPassword;
