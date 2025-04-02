import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    Pressable} from 'react-native';
import styles from './styles';


export interface ChmNonCvLnSttusSent {
    Loaner: {
      loanID:string,
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
        amountExpectedBackWthClrnc:number,
        crtnDate: number,
      interest:number,
      clearanceAmt:number,
      DefaultPenaltyChm2: number
        
    }}

const ChmNonCvLnSttsSent = (props:ChmNonCvLnSttusSent) => {
   const {
    Loaner: {
      loanID,
    loaneePhn,
    clearanceAmt,
    DefaultPenaltyChm2,
    amountRepaid,
    lonBala,
    amountExpectedBackWthClrnc,
    
    status,
    loaneeName,
    memberId,
    description,
    
    createdAt,
    updatedAt,
    crtnDate,
         interest
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("ChmLoaneesDtls", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("ViewNonLnsRecChm", {loanID})
   }

   const Blacklist = () => {
      navigation.navigate ("BLChmMmberCovs", {loanID})
   }

   const WaiveChmCov = () => {
      navigation.navigate ("WaiveChmCov", {loanID})
   }

   const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

              const dayselapsed = (crtnDate - daysUpToDate) *(-1)


    const netLnBal = (amountExpectedBackWthClrnc) - 
              (clearanceAmt) -  (DefaultPenaltyChm2)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + (interest)/36500, dayselapsed)))

              const LonBal1 = netLnBal2 + (clearanceAmt) +  (DefaultPenaltyChm2)

   

   
    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Loanee Name: {loaneeName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                 Loan Id: {loanID}                 
              </Text>
              <Text style = {styles.ownerName}>                       
                
                 Loanee Contact: {loaneePhn}                 
              </Text>

             

              <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     loan Balance with penalties Ksh: {LonBal1.toFixed(0)}                
                    </Text> 

              </Pressable>

              <View style = {styles.viewForPressables2}>
              <Pressable
                      onPress={VwRpayments}
                      style = {styles.loanFriendButton}
                      >            
                        <Text style = {styles.loanAFriendText}>ViewRpymnts</Text>            
                    </Pressable>
                    
                    
                    <Pressable
                      onPress={WaiveChmCov}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>Waive</Text>            
                    </Pressable>  
                   
                  
                    <Pressable
                      onPress={Blacklist}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>BL/Penalise</Text>            
                    </Pressable> 
               
              </View>
  </View>
    );
}; 

export default ChmNonCvLnSttsSent