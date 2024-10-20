/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from './screens/MenuScreen'
import HomeScreen from './screens/HomeScreen'
import OrderScreen from './screens/OrderScreen'
import LoginScreen from './screens/LoginScreen'


const stack = createNativeStackNavigator();

export default function App() {

  console.log("App starting up");

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Login" component={LoginScreen}/>
        <stack.Screen name="Menu" component={MenuScreen}/>
        <stack.Screen name="Order" component={OrderScreen}/>
      </stack.Navigator>
    </NavigationContainer>
    
  );


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


