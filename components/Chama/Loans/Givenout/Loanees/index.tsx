import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    Pressable} from 'react-native';
import styles from './styles';


export interface ChmNonCvLnSttusSent {
    Loaner: {
        id:string,
        loaneeName: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        loaneePhn:string,
        status: string,
        grpContact:string,
        memberId:string,
        description: string,
        loanername:string,
        createdAt:string,
        updatedAt:string,
        
    }}

const ChmNonCvLnSttsSent = (props:ChmNonCvLnSttusSent) => {
   const {
    Loaner: {
    id,
    loaneePhn,
    amountGiven,
    amountExpectedBack,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    
    status,
    loaneeName,
    memberId,
    description,
    
    createdAt,
    updatedAt,
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("ChmLoaneesDtls", {id})
   }

   const VwRpayments = () => {
      navigation.navigate ("ViewNonLnsRecChm", {id})
   }

   const Blacklist = () => {
      navigation.navigate ("BLChmMmberCovs", {id})
   }

   
    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Loanee Name: {loaneeName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                 Loan Id: {id}                 
              </Text>
              <Text style = {styles.ownerName}>                       
                
                 Loanee Contact: {loaneePhn}                 
              </Text>

              <Text style = {styles.ownerName}>                       
                 {/* interest*/}
                 Loan Balance(Ksh): {lonBala.toFixed(2)}                    
              </Text> 

              </Pressable>

              <View style = {styles.viewForPressables2}>
              <View>
              <Pressable
                onPress={VwRpayments}
                style = {styles.loanFriendButton}
                >            
                  <Text>ViewRpymnts</Text>            
              </Pressable>
              </View>   
              <View>
              <Pressable
                onPress={Blacklist}
                style = {styles.loanFriendButton}>            
                  <Text>BL/Penalise</Text>            
              </Pressable>  
              </View>
               
              </View>
  </View>
    );
}; 

export default ChmNonCvLnSttsSent