import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, Image, TextInput, Button } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators';
// import { HelperText } from 'react-native-paper';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading     : false,
          displayModal: false,
					email       : '',
					password    : '',
          helperText  : null,
        };
      }

    open = () => {
        this.setState({ displayModal: true });
    }
    
    
    close = () => {
        this.setState({ displayModal: false });
    }

    renderActivityIndicator = () => (
        <UIActivityIndicator color={'#00B5EC'} size={50} />
    );

    renderModalContent = () => (
        <View style={styles.container}>
    
          <Text style={styles.contentTitle}>Sign Up</Text>
          <Text style={styles.contentInfo}>Please provide your details to register with PUBGEATS.</Text>

          <View style={styles.inputContainer}>
            <Image source={require('../icon/email.png')} style={styles.inputIcon}/>
            <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType='email-address'
              underlineColorAndroid='transparent'
              autoCapitalize = 'none'
              onChangeText={(email) => this.onChangeText(email)} />
          </View>

					<View style={styles.inputContainer}>
            <Image source={require('../icon/password.png')} style={styles.inputIcon}/>
            <TextInput style={styles.inputs}
              placeholder="Password"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.onChangeText(password)} />
          </View>
					<Button
						title="Learn More"
						color="#841584"
					/>
    
        </View>
    );
    

    render() {
        return (
            <View>
                <Modal>
                    {this.state.loading ? this.renderActivityIndicator() : this.renderModalContent()}
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1A1A1A',
        borderColor: '#333333',
        borderRadius: 10,
        borderWidth: 1,
      },
      contentTitle: {
        fontFamily: 'Bold',
        fontSize: 22,
        color: '#FFAA00',
        textAlign: 'center',
        marginBottom: 20
      },
      contentInfo: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#B3B3B3',
        width: 290,
        marginBottom: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 290,
        height: 40,
        marginBottom: 20,
      },
      inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 12,
        justifyContent: 'center'
      },
      inputs: {
        flex: 1,
        height: 40,
        marginLeft: 15,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 300,
        marginBottom: 10
      },
      helperText: {
        marginTop: -15,
        marginBottom: 10,
        width: 290,
      }
})