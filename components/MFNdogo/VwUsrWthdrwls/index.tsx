import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';
import { getSMAccount } from '../../../src/graphql/queries';


export interface SMAccount {
   SMAc: {
     id: string,
     
     withdrawerid: string,  
     agentPhonecontact: string,
     amount: number,
     userName:string,
     
     createdAt:string,
     updatedAt:string,
             
   }}

const ViewSMWithdrwls = (props:SMAccount) => {
  const {
     SMAc: {
        id,
        withdrawerid,  
        agentPhonecontact,
        amount,
        userName,
        createdAt,
        updatedAt,
                
  }} = props ;


   return (
       <View style = {styles.container}>              
           
           
           <View style = {{alignItems:"center"}}>
           <Text style = {styles.subTitle}>                       
                      {/*loaner details */}   
                      {userName}             
                   </Text>
           </View>
                 
                 
           
           <ScrollView >              
                      
                       
                    <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Transaction ID: {id}                 
                   </Text>

                   <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Amount (Ksh): {amount.toFixed(2)}                 
                   </Text>
                   <Text style = {styles.ownerContact}>                       
                      {/*loaner details */}  
                      User Contact: {withdrawerid}                
                   </Text>                     
                   
                   <Text style ={styles.amountoffered}>                       
                      {/* amount*/} 
                      Created At: {createdAt}
                   </Text>
                   <Text style ={styles.amountoffered}>                       
                      {/* amount*/} 
                    Last Update: {updatedAt}
                   </Text>
                   
                   
       </ScrollView>
               
       </View>
   );
}; 

export default ViewSMWithdrwls