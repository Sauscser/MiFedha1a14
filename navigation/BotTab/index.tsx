import { FontAwesome, Fontisto, MaterialCommunityIcons , Entypo, MaterialIcons, Octicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import ModalScreen from '../../screens/ModalScreen';
import NotFoundScreen from '../../screens/NotFoundScreen';
import TabOneScreen from '../../screens/TabOneScreen';
import HomeScreen from '../../screens/HomeScrn';
import KFNdogoLoc from '../../screens/MFNdogo/SearchMFN';
import FindKFNdogoLoc from '../../screens/MFNdogo/SignInMFN';
import MyAccount from '../../screens/MyAcc';
import LoanScreen from '../../screens/Loans';
import CredtSales from '../../screens/CredSls';
import ChamaScreen from '../../screens/Chama';
import EntrAdvLoc from '../../screens/Advocate/EnterAdvLoc';
import TabTwoScreen from '../../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from '../LinkingConfiguration';


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const HomeTabNavigator = props => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
      }}
      >
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="home" size={25} color={'blue'} />
          ),
        }}
      />
      <BottomTab.Screen
        name='MFNdogo'
        component={FindKFNdogoLoc}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="map-marker" size={25} color={'blue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='MyAc'
        component={MyAccount}
        options={{
          tabBarIcon: ({color: string}) => (
            <MaterialCommunityIcons name="account" size={25} color={'blue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='Loans'
        component={LoanScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="bank" size={25} color={'blue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='CredSlsHms'
        component={CredtSales}
        options={{
          tabBarIcon: ({color: string}) => (
            <Entypo name="shopping-cart" size={25} color={'blue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='Chama'
        component={ChamaScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <MaterialIcons name="groups" size={25} color={'blue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='SearchAdv'
        component={EntrAdvLoc}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'blue'} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 export default HomeTabNavigator;