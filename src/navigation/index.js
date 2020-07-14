import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStart from '../screens/GetStart/GetStart';
import ShopSettings from '../screens/ShopSettings/ShopSettings';
import Home from '../screens/ShopHome/ShopHome';
import Signup from '../screens/Signup/Signup';


  
const Stack = createStackNavigator();
const MaterialBottomTaps = createBottomTabNavigator();



export default class Index extends React.Component {
  render () {

    createBottomTab = () => {
      return  <MaterialBottomTaps.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                  activeTintColor: '#000000',
                }}
              >
                <MaterialBottomTaps.Screen 
                  name="Home"
                  component={Home}
                />
                <MaterialBottomTaps.Screen name="Profile" component={ShopSettings}/>
              </MaterialBottomTaps.Navigator>
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GetStart"  options={{
            headerShown: false}}component={GetStart} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={createBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};