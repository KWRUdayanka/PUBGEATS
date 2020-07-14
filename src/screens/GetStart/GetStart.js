import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'

import styles from './style';

export default class GetStart extends Component {

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/background.jpg')}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
                <View style={styles.margin}>
                    <Text style={styles.text}>Get Start With PUBGEATS</Text>
                    <TouchableOpacity style={styles.regbutton} onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.buttontext}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
