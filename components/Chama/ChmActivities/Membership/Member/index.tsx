import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      id: string,
      groupContact: string,
      
      groupName:string,
      GrossLnsGvn:number,
      LonAmtGven: number,
      AmtRepaid:number,
      LnBal: number,
      NonLoanAcBal:number,
      ttlNonLonAcBal: number,
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
       
         groupName,
         loanStatus,
         blStatus,
         GrossLnsGvn,
         LonAmtGven,
         AmtRepaid,
         LnBal,
         NonLoanAcBal,
         ttlNonLonAcBal,
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
                     Chama Name: {groupName}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Total NonLoans Ac Bal (Ksh): {ttlNonLonAcBal.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       NonLoans Ac Bal (Ksh): {GrossLnsGvn.toFixed(2)}
                    </Text>   
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Total Loans Ac Bal (Ksh): {LonAmtGven.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loans Ac Bal (Ksh): {AmtRepaid.toFixed(2)}
                    </Text>     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       NonLoans Ac Bal (Ksh): {LnBal.toFixed(2)}
                    </Text>   
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Total Loans Ac Bal (Ksh): {NonLoanAcBal.toFixed(2)}
                    </Text>   
                      
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Chama Phone: {groupContact}                  
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
                      Black-Listing of Loans: {blStatus}                    
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