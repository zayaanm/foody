import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Components/Home';
import Pantry from './Components/Pantry';
import AddIngredients from './Components/AddIngredients';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pantry" component={Pantry} /> 
        <Tab.Screen name="Add" component={AddIngredients} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;