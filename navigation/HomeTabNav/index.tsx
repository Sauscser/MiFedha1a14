import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BtmTbNav from '../BotTab';
import KFNdogo from "../../screens/MFNdogo"
import Homeie from "../../screens/HomeScrn"
import RegisterKFKubwaAcForm from '../../screens/MFKubwa/RegisterMFKubwa';
import CreateAcForm from '../../screens/MyAcc/CreateAc';
import DisplayRegUsrScrn from '../../components/MyAc/DisplayRegUsrDtls';


const Stack = createNativeStackNavigator();
const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MyHome'} component={BtmTbNav} />
      <Stack.Screen name={'KFNdogoo'} component={KFNdogo} />
      <Stack.Screen name={'MyHomeie'} component={Homeie} />
      <Stack.Screen name={'RegKFKbw'} component={RegisterKFKubwaAcForm} />
      <Stack.Screen name={'CreateSMAc'} component={CreateAcForm} />
      <Stack.Screen name={'RegUsrScrn'} 
      component={DisplayRegUsrScrn}/>
      
    </Stack.Navigator>
  );
};

export default HomeNavigator;