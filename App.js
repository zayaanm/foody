import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Components/Home';
import Pantry from './Components/Pantry';
import AddIngredients from './Components/AddIngredients';
import Camera from './Components/Camera';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return(
      <Tab.Navigator >

        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }}/>
        <Tab.Screen name="Pantry" component={Pantry} options={{ headerShown: false, }}/> 
        <Tab.Screen name="Add" component={AddIngredients} options={{ headerShown: false, }}/> 

      </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator >

          <RootStack.Screen
            name="Tabs"
            component={HomeTabs}
            options={{
              headerShown: false,
            }}
      />

      <RootStack.Screen
            name="Camera"
            component={Camera}
            options={{
              headerShown: false,
            }}
      />

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;