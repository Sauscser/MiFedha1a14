import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChmaInfo {
    ChmDtls: {

      grpName: string,
      grpBal: number,
      ttlGrpMembers: number
      ttlDpst: number,
      ttlWthdrwn: number,
    
      tymsChmHvBL:number,
     
      
    
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm:number,
    
      
    
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
    
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      description: string,
        
    }}

const ChmInfo = (props:ChmaInfo) => {
   const {
      ChmDtls: {
      grpName,
      grpBal,
      ttlGrpMembers,
      ttlDpst,
      ttlWthdrwn,
    
      tymsChmHvBL,
     
      
    
      ttlNonLonsRecChm,
      ttlNonLonsSentChm,
    
      
    
      TtlActvLonsTmsLnrChmCov,
      TtlActvLonsAmtLnrChmCov,
      TtlBLLonsTmsLnrChmCov,
      TtlBLLonsAmtLnrChmCov,
      TtlClrdLonsTmsLnrChmCov,
      TtlClrdLonsAmtLnrChmCov,
    
      TtlActvLonsTmsLnrChmNonCov,
      TtlActvLonsAmtLnrChmNonCov,
      TtlBLLonsTmsLnrChmNonCov,
      TtlBLLonsAmtLnrChmNonCov,
      TtlClrdLonsTmsLnrChmNonCov,
      TtlClrdLonsAmtLnrChmNonCov,
      description,
   }} = props ;

   const navigation = useNavigation();

   const TryChmLn = () => {
      navigation.navigate("ChmLnsGvnOuts", {grpContact});
   }
    return (
        <View style = {styles.container}>              
            
            
            <ScrollView >       
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       General Chama Info              
                    </Text>
            </View>      

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Chama Name: {grpName}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Account Balance (Ksh): {grpBal.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Chama Members: {ttlGrpMembers}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Chama Deposits(Ksh): {ttlDpst.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Chama Withdrawals(Ksh): {ttlWthdrwn.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Chama BlackListings: {tymsChmHvBL}                    
                    </Text> 



                    <View style = {{alignItems:"center"}}>
                     <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Non-Loans               
                    </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Members Contributions: {ttlNonLonsRecChm.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Money Sent to Members (Ksh): {ttlNonLonsSentChm.toFixed(2)}                    
                    </Text> 


                    <View style = {{alignItems:"center"}}>
                     <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Covered Loans               
                    </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Total Active Loans: {TtlActvLonsTmsLnrChmCov}                    
                    </Text> 
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Amount of Total Active Loans: {TtlActvLonsAmtLnrChmCov.toFixed(2)}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Black Listed loans: {TtlBLLonsTmsLnrChmCov}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Black-Listed amount (Ksh): {TtlBLLonsAmtLnrChmCov.toFixed(2)}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                      Cleared Loans: {TtlClrdLonsTmsLnrChmCov}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Amount of Cleared Loans (Ksh): {TtlClrdLonsAmtLnrChmCov.toFixed(2)}                 
                    </Text>   
                   


                     <View style = {{alignItems:"center"}}>
                     <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       NonCovered Loans               
                    </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Total Active Loans: {TtlActvLonsTmsLnrChmNonCov}                    
                    </Text> 
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Amount of Total Active Loans: {TtlActvLonsAmtLnrChmNonCov.toFixed(2)}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Black Listed loans: {TtlBLLonsTmsLnrChmNonCov}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Black-Listed amount (Ksh): {TtlBLLonsAmtLnrChmNonCov.toFixed(2)}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                      Cleared Loans: {TtlClrdLonsTmsLnrChmNonCov}                 
                    </Text>   
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Amount of Cleared Loans (Ksh): {TtlClrdLonsAmtLnrChmNonCov.toFixed(2)}                 
                    </Text>     
                    <ScrollView>
                    
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       More about Chama: {description}                 
                    </Text>   
                    </ScrollView>              
            
                
                
            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmInfo