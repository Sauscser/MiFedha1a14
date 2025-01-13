import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      name: string,
      phonecontact: string,
      awsemail:string,
      

        
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
         name,
         phonecontact,   
        
         awsemail,
       
    
   }} = props ;

   const navigation = useNavigation();
   let LnrEml = awsemail;

   const SndChmMmbrMny = () => {
       navigation.navigate("PlaceLnReq")
   }
    return (
        
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Name: {name}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Email: {awsemail}                  
                    </Text> 
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Phone: {phonecontact}                  
                    </Text> 


        </View >
                
       
    );
}; 

export default SMCvLnStts