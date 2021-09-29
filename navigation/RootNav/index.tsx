import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import HomeNavigator from '../HomeTabNav';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View, Text} from 'react-native';
import ads from '../../screens/Adverts';
import KFKubwaScreen from '../../screens/MFKubwa';
import KFNdogoScreen from '../../screens/MFNdogo';
import KFAdminScreen from '../../screens/MFAdmin';



const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text>{props.name} </Text>
  </View>
);

const RootNavigator = props => {

  
  return (
    <NavigationContainer

    
    >
      <Drawer.Navigator
      
      screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="KFNdogo" component={KFNdogoScreen} />
        <Drawer.Screen name="KFKubwa" component={KFKubwaScreen} />
        <Drawer.Screen name="KFAdmin" component={KFAdminScreen} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;