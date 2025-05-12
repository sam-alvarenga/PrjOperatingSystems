import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './HomeScreen';
import Android from './pages/Android';
import Ios from './pages/Ios';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Android" component = {Android}/>
         <Stack.Screen name = "IOS" component = {Ios}/>  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

