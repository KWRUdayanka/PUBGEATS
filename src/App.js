import React, { Component } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Navigation from './navigation/index'

export default class App extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require('./assets/background.jpg')}>
        <Navigation/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
  }
})
