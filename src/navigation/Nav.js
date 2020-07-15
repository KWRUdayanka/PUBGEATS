import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Other from '../screens/Other';


// (...)
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
          <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          name="Other"
          component={Other}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    );
  }

export default function Nav() {

  return (
    <NavigationContainer>
        {/* <MyStack /> */}
        <MyTabs/>
    </NavigationContainer>
  );
}