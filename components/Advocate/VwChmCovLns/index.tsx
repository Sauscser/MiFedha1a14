import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';



export interface SMAccount {
    SMAc: {
      id:string,
      advRegNu: string,      
      grpContact: string,  
      loaneePhn:string,

      amountGiven:number,
      amountExpectedBack: number,      
      amountRepaid: number,  
      lonBala:number,
      repaymentPeriod:number,
      LoanerName: string,      
      loaneeName: string,  

      description:string,
      createdAt:string,
      updatedAt:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         id,
        
         grpContact,  
         loaneePhn,
         amountGiven,
         amountExpectedBack,
         amountRepaid,
         lonBala,
         repaymentPeriod,
         LoanerName,
         loaneeName,
         createdAt,
         updatedAt,
         description
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Transaction ID: {id}             
                    </Text>
            </View>
            <ScrollView >              
                       
                        
                   <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Name : {LoanerName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Member Name: {loaneeName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Loan Amount (Ksh): {amountGiven.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Amount Expected Back (Ksh): {amountExpectedBack.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Repayment Period : {repaymentPeriod}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount Repaid : {amountRepaid.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Balance: {lonBala.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Contact : {grpContact}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Member Contact: {loaneePhn}                 
                    </Text>
                                                               
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Created At: {createdAt}
                    </Text>
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Last Update: {updatedAt}
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      More: {description}                 
                    </Text>
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts