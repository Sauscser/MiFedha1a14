import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../ViewAc";
import styles from './styles';
import { getSMAccount } from '../../../src/graphql/queries';


export interface SMAccount {
    SMAc: {
      id: string,
      
      recPhn: string,  
      RecName: string,
      amount: number,
      description: string, 
      status: string,
      createdAt:string,
      updatedAt:string,
              
    }}

const SMNonLnSnt = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         recPhn,  
         RecName,
         amount,
         description, 
         status,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {RecName}             
                    </Text>
            </View>
                  
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       ID: {id}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount (Ksh): {amount.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Sender Contact: {recPhn}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                      Status: {status}
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Created At: {createdAt}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Last Update: {updatedAt}                    
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                     More: {description}                  
                    </Text> 
                    
        </ScrollView>
                
        </View>
    );
}; 

export default SMNonLnSnt