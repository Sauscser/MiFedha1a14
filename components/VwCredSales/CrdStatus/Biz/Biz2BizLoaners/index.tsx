import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
   Loanee: {
      loanID: string,
     itemName: string,
 
     sellerContact: string,
     
     SellerName:string,
  
     amountSold: number,
     amountexpectedBack: number,
     amountRepaid: number,
     repaymentPeriod: number,
     lonBala:number,
     description: string,
     status: string,
     advregnu: string,
     createdAt:string,
     updatedAt:string,
     crtnDate: number,
     interest:number,
     amountExpectedBackWthClrnc:number,
      DefaultPenaltyCredSl2:number,
      clearanceAmt:number
       
   }}

const CredByrCvLnStts = (props:ChmCvLnSttusRec) => {
  const {
   Loanee: {
      loanID,
     itemName,
     amountExpectedBackWthClrnc,
     DefaultPenaltyCredSl2,
     clearanceAmt,
     
     sellerContact,
     
     SellerName,
  
     amountSold,
     amountexpectedBack,
     amountRepaid,
     repaymentPeriod,
     lonBala,
     description,
     status,
     advregnu,
     createdAt,
     updatedAt,
     crtnDate,
         interest

  }} = props ;
  const navigation = useNavigation();
  const SndChmMmbrMny = () => {
     navigation.navigate ("VwMyBizLoanersDtld", {loanID})
  }

  const VwRpayments = () => {
     navigation.navigate ("CredB2BSent", {loanID})
  }

  const Repay = () => {
     navigation.navigate ("CredRPyBiz2Biz", {loanID})
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
              (clearanceAmt) -  (DefaultPenaltyCredSl2)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + (interest)/36500, dayselapsed)))

              const LonBal1 = netLnBal2 + (clearanceAmt) +  (DefaultPenaltyCredSl2)

  
   return (
       <View style = {{marginTop:"10%"}}>              
           
           <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
           <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Seller Name: {SellerName}               
                   </Text>
                 
           <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Loan Id: {loanID}                 
                   </Text>
                   <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Seller Contact: {sellerContact}                 
                   </Text>

                   <Text style = {styles.ownerName}>                       
                      {/* interest*/}
                      Loan Balance with Penalties(Ksh): {LonBal1.toFixed(0)}                    
                   </Text> 

                   </Pressable>

                   <View style = {styles.viewForPressables2}>
                   <View>
                   <Pressable
                     onPress={VwRpayments}
                     style = {styles.loanFriendButton}
                     >            
                       <Text style = {styles.loanAFriendText}>ViewRpymnts</Text>            
                   </Pressable>
                   </View>   
                   <View>
                   <Pressable
                     onPress={Repay}
                     style = {styles.loanFriendButton}>            
                       <Text style = {styles.loanAFriendText}>Repay</Text>            
                   </Pressable>  
                   </View>
                    
                   </View>
       </View>
   );
}; 

export default CredByrCvLnStts