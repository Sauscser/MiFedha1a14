import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking, TouchableOpacity } from 'react-native';

import HomeTabNav from "../HomeTabNav";
import FindKFNdogoLoc from '../../screens/MFNdogo/SignInMFN';
import MyAccount from '../../screens/MyAcc';
import SrchLoanAdz from "../../screens/Ads/Search/SrchLoanAd";
import SearchPal from '../../screens/MyAcc/LoanRequest/VwMakeLnReq';
import HowTo from '../../screens/HowTos'


const BottomTab = createBottomTabNavigator();


const HomeTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
      }}
      >
      <BottomTab.Screen
        name='Home'
        component={HomeTabNav}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="home" size={25} color={'skyblue'} />
          ),
        }}
      />

      {/* MFNdogo (Location) */}
      <BottomTab.Screen
        name="MFNdogo"
        component={FindKFNdogoLoc}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="map-marker" size={25} color={color} />,
        }}
      />

      {/* My Account */}
      <BottomTab.Screen
        name="MyAc"
        component={MyAccount}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={25} color={color} />,
        }}
      />

      {/* Pal Deals */}
      <BottomTab.Screen
        name="PalDeals"
        component={SrchLoanAdz}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={25} color={color} />,
        }}
      />

      {/* How To (Opens YouTube Channel) */}
      <BottomTab.Screen
        name="How To"
        component={HowTo} // No actual screen, just an action
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="youtube-play" size={25} color={color} />,
          
        }}
      />

      {/* Search Pal */}
      <BottomTab.Screen
        name="Search Pal"
        component={SearchPal}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={25} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeTabNavigator;
