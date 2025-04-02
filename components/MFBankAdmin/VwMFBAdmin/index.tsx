import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      name: string,
  phonecontact: string,
 
  BankAdmBal: number,
 
  bank:string,

              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         name,
         phonecontact,
        
         BankAdmBal,
        
         bank,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
                      
            <ScrollView >              
                      
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Name : {name}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Account Balance (Ksh): {BankAdmBal.toFixed(2)}                 
                    </Text>
                                      
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Phone Number: {phonecontact}                 
                    </Text>

                    
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts