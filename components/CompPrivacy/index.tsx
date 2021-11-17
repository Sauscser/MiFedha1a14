import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      privacy: string,
      
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      privacy,
      
   }} = props ;
   const navigation = useNavigation();

   
    return (
                
            <ScrollView style = {{alignItems:"center", justifyContent:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {privacy}               
                    </Text>
            </ScrollView>
            
                     
        
                
        
    );
}; 

export default CredSlrCvLnStts