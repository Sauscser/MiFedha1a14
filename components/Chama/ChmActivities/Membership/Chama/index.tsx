import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      MembaId: string,
      ChamaNMember: string,
      memberContact: string,
      memberName:string,
      memberNatId:string,
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
         memberNatId,
         memberContact,
         memberName,
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
                       {memberName}             
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
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Member Phone: {memberContact}                  
                    </Text>                                       
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Remittance to members (Ksh): {ttlNonLonAcBal.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                      Contributions from members (Ksh): {NonLoanAcBal.toFixed(2)}
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
                      Black-Listing Status: {blStatus}                    
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