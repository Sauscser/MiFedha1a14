import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      MembaId: string,
      ChamaNMember: string,
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
         MembaId,
         ChamaNMember,
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
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {groupName}             
                    </Text>
            </View>
            
            <ScrollView >       
               

            <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama Number: {MembaId}                
                    </Text>    

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama ID: {ChamaNMember}                
                    </Text>                                                 
                                   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Contribution to Chama (Ksh): {NonLoanAcBal.toFixed(2)}
                    </Text>  

                     <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Remittance from Chama (Ksh): {(ttlNonLonAcBal).toFixed(2)}
                    </Text>    

                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Gross Loans (Ksh): {GrossLnsGvn.toFixed(2)}
                    </Text>  

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Actual Loans (Ksh): {LonAmtGven.toFixed(2)}
                    </Text>   
                    
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                      Amount repaid (Ksh): {AmtRepaid.toFixed(2)}
                    </Text>     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loan Balance (Ksh): {LnBal.toFixed(2)}
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
                      Loan Status: {loanStatus}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Black-Listing status: {blStatus}                    
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