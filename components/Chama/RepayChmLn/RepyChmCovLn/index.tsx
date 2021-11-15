import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      id: string,
      lonBala:number,
      LoanerName:string,
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         id,
         lonBala,
         LoanerName,
         
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("RepyChmCovLns", {id})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Loan ID: {id}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Chama Name: {LoanerName}                
                    </Text>   
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     loan Balance Ksh: {lonBala.toFixed(2)}                
                    </Text>  
                                
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo