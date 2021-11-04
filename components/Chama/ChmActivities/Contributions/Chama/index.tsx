import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaContriInfo {
   ChamaContriDtls: {
     id: string,
     grpContact: string,
     memberPhn: string,
     mmberNme:string,
     
     contriAmount: number,
   
    
   
     status: string,
     createdAt:string,
     
   }}

const ChmContriInfo = (props:ChamaContriInfo) => {
  const {
     ChamaContriDtls: {
        id,
        grpContact,
        memberPhn,
        mmberNme,
        status,
        contriAmount,
        createdAt,       
      
      
      
  }} = props ;

  const navigation = useNavigation;

  const TryChmLn = () => {
   navigation.navigate("ChmLnsGvnOuts", {grpContact});
  }
   return (
       <View style = {styles.container}>              
           
           
           <ScrollView >       
              

                    <Text style = {styles.ownerContact}>                       
                      {/*loaner details */}  
                      Transaction ID: {id}                
                   </Text>                                               
                   <Text style = {styles.ownerContact}>                       
                      {/*loaner details */}  
                    Member Name: {mmberNme}                
                   </Text>                     
                   <Text style ={styles.amountoffered}>                       
                      {/* amount*/} 
                      Amount (Ksh): {contriAmount.toFixed(2)}
                   </Text>   
                   <Text style = {styles.repaymentPeriod}>                       
                      {/* repaymentPeriod*/}
                     Member Phone: {memberPhn}                  
                   </Text> 
                   <Text style = {styles.interest}>                       
                      {/* interest*/}
                      Time Sent: {createdAt}                    
                   </Text> 
                   <Text style = {styles.interest}>                       
                      {/* interest*/}
                     Status: {status}                    
                   </Text> 

       </ScrollView>
               
       </View>
   );
}; 

export default ChmContriInfo