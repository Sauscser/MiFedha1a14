import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChmCvLnSttusSent {
    Loaner: {

      grpName: String!
      signitoryPW: String!
      grpEmail: String!
      grpBal: Float!
      ttlGrpMembers: Float!
      description: String
    
      ttlNonLonsRecChm: Float!
      ttlNonLonsSentChm:Float!
    
      ttlDpst: Float!
      ttlWthdrwn: Float!
    
      tymsChmHvBL:Float!
    
      TtlActvLonsTmsLnrChmCov: Float!
      TtlActvLonsAmtLnrChmCov: Float!
      TtlBLLonsTmsLnrChmCov: Float!
      TtlBLLonsAmtLnrChmCov: Float!
      TtlClrdLonsTmsLnrChmCov: Float!
      TtlClrdLonsAmtLnrChmCov: Float!
    
      TtlActvLonsTmsLnrChmNonCov: Float!
      TtlActvLonsAmtLnrChmNonCov: Float!
      TtlBLLonsTmsLnrChmNonCov: Float!
      TtlBLLonsAmtLnrChmNonCov: Float!
      TtlClrdLonsTmsLnrChmNonCov: Float!
      TtlClrdLonsAmtLnrChmNonCov: Float!
        
    }}

const ChmCvLnSttsSent = (props:ChmCvLnSttusSent) => {
   const {
    Loaner: {
    id,    
    amountGiven,
    amountExpectedBack,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    advRegNu,
    status,
    loaneeName,
    description,
    loaneePhn,
    grpContact,
    createdAt,
    updatedAt,
    id,    
    amountGiven,
    amountExpectedBack,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    advRegNu,
    status,
    loaneeName,
    description,
    loaneePhn,
    grpContact,
    createdAt,
    updatedAt,
   }} = props ;

   const navigation = useNavigation();

   const TryChmLn = () => {
      navigation.navigate("ChmLnsGvnOuts", {grpContact});
   }
    return (
        <View style = {styles.container}>              
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {loaneeName}               
                    </Text>
            </View>
            
            <ScrollView >              
                       
                        

                    
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {id}                 
                    </Text>
                    
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Amount Given (Ksh): {amountGiven.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount Expected Back(Ksh): {amountExpectedBack.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount Repaid(Ksh): {amountRepaid.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Loan Balance(Ksh): {lonBala.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Repayment Period in days: {repaymentPeriod}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Advocate Registration Number: {loaneePhn}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Advocate Registration Number: {advRegNu}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Loan Status: {status}                    
                    </Text> 
                    <ScrollView>
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Created At: {createdAt}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Last Update: {updatedAt}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       More: {description}                 
                    </Text>   
                    </ScrollView>              
            
                
                
            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmCvLnSttsSent