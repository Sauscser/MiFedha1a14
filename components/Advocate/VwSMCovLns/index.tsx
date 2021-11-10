import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';



export interface SMAccount {
   SMAc: {
      id:string,
      loaneePhn: string,      
      loanerPhn: string,  
      loanername:string,
      loaneeName: string,  
      amountgiven:number,
      amountexpected: number,      
      amountrepaid: number,  
      lonBala:number,
      repaymentPeriod:number,
      advregnu:number,
      description:string,
      createdAt:string,
      updatedAt:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         loaneePhn,
         loanerPhn,  
         loanername,
         loaneeName,
         amountgiven,
         amountexpected,
         amountrepaid,
         lonBala,
         repaymentPeriod,
         advregnu,
         description,
         createdAt,
         updatedAt,
                 
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
                       Chama Name : {loanername}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Member Name: {loaneeName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Loan Amount (Ksh): {amountgiven.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Amount Expected Back (Ksh): {amountexpected.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Repayment Period : {repaymentPeriod}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount Repaid : {amountrepaid.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Balance: {lonBala.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Contact : {loanerPhn}                 
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