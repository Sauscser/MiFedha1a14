import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      id: string,
      groupContact: string,
      memberContact: string,
      memberName:string,
      memberId:string,
      NonLonAcBal:number,
      ttlNonLonAcBal: number,
      ttlLoanAcBal:number,
      loanAcBal:number,
      AcStatus: string,
      loanStatus: string,
      blStatus: string,
      createdAt:string,
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         id,
         groupContact,
         memberId,
         memberContact,
         memberName,
         loanStatus,
         blStatus,
         NonLonAcBal,
         ttlNonLonAcBal,
         ttlLoanAcBal,
         loanAcBal,
         createdAt,       
         AcStatus,
       
       
   }} = props ;

   const navigation = useNavigation();

   
    return (
        <View style = {styles.container}>              
            
            
            <ScrollView >       
               

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama ID: {id}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Name: {memberName}                
                    </Text>   
                                      
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Total NonLoans Ac Bal (Ksh): {ttlNonLonAcBal.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       NonLoans Ac Bal (Ksh): {NonLonAcBal.toFixed(2)}
                    </Text>   
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Total Loans Ac Bal (Ksh): {ttlLoanAcBal.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loans Ac Bal (Ksh): {loanAcBal.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Member Phone: {memberContact}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Time Created: {createdAt}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Available Loans: {loanStatus}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Black-Listing Loans: {blStatus}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Membership Status: {AcStatus}                    
                    </Text> 
            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmMbrShpInfo