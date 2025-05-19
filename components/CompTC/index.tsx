import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import {  graphqlOperation, API,Auth, signOu} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      termsNconditions:string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        termsNconditions
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   

const SgnOut = async () => {
  await Auth.signOut();
}

const CreateSMAcs = () => {
  navigation.navigate('CreateSMAc');
};
 


    return (
        <View style = {styles.pageContainer}>
                      <View style = {styles.card}>
                        <Text style={styles.prodName}>{termsNconditions}</Text>
                      </View> 
                      <View style = {styles.buttonRow}>
                    
                        <Pressable
                          onPress={CreateSMAcs}
                          style = {styles.loanFriendButton}
                        >            
                        <Text>Accept</Text>            
                        </Pressable>
                    
                        <Pressable
                          onPress={SgnOut}
                          style = {styles.redeemButton}>            
                        <Text>Decline</Text>            
                        </Pressable>  
                      </View>
            </View>
            
    );
}; 

export default SMCvLnStts