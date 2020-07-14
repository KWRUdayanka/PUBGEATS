import React, { useState, Component } from 'react';
import { 
    View, 
    Text,
    Button, 
    TextInput, 
    StyleSheet, 
    SafeAreaView,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Modal,
    FlatList
 } from 'react-native';
import { Container, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';
import data from './Countries'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Signup extends Component {
  

  state = {
    flag: '+94',
    modalVisible: false,
    phoneNumber: '',
  }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView 
                    style={styles.container} 
                    behavior='padding' enabled >
                    <TouchableWithoutFeedback 
                    style={styles.container} 
                    onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <Container style={styles.infoContainer}>
                                <Item style={styles.itemStyle}>
                                    <View><Text>{this.state.flag}</Text></View>
                                    <Icon
                                      active
                                      name="user"
                                      style={[styles.iconStyle, { marginLeft: 0 }]}
                                    />
                                    <Input 
                                        placeholder='766554433'
                                        placeholderTextColor='#adb4bc'
                                        keyboardType={'phone-pad'}
                                        returnKeyType='done'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        secureTextEntry={false}
                                        style={styles.inputStyle}
                                    />
                                </Item>
                            </Container>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <TouchableOpacity>
                    <PhoneSignIn/>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}


function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Next"
        onPress={() => signInWithPhoneNumber('+94 76 692 1621')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}


