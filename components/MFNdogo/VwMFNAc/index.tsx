import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';
import { getSMAccount } from '../../../src/graphql/queries';


export interface SMAccount {
    SMAc: {
      phonecontact: string,

    
      ttlEarnings: number,

      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,

      createdAt:string,
      updatedAt:string,      
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         phonecontact,

    
         ttlEarnings,
   
         email,
         sagentregno,
         TtlFltIn,
         TtlFltOut,
         floatBal,
         latitude,
         longitude,
         agentEarningBal,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            
         
                  
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Float In (Ksh): {TtlFltIn.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Float Out (Ksh): {TtlFltOut.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Float Balance (Ksh): {floatBal.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Earnings (Ksh): {ttlEarnings.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Earning Balance (Ksh): {agentEarningBal.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       MFKubwa Number: {sagentregno}                 
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

export default ViewSMDeposts