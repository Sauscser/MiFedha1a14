import React from 'react';
import {View, Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loaneePhn: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountExpectedBackWthClrnc:number
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        loanerName:string,
        status: string,
        description: string,
        createdAt:string,
        updatedAt:string,
        crtnDate: number,
      interest:number,
      clearanceAmt:number,
      DefaultPenaltyChm2: number
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loaneePhn,
    amountGiven,
    amountExpectedBack,
    amountExpectedBackWthClrnc,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    loanerName,
    createdAt,
    updatedAt,
    status,
    description,
    crtnDate,
         interest,
         clearanceAmt,
         DefaultPenaltyChm2
   }} = props ;

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
        <View style = {styles.pageContainer}>              
        <View style = {styles.card}>

        <Text style={styles.prodName}>{loanerName}</Text>

        <Text style={styles.prodInfo}><Text style={styles.label}>Loan Id:</Text> {loanID}</Text>
         <Text style={styles.prodInfo}><Text style={styles.label}>Amount Given:</Text> KES {amountGiven.toFixed(2)}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Amount Repaid:</Text> KES {amountRepaid.toFixed(2)}</Text>
       
       <Text style={styles.prodInfo}><Text style={styles.label}>Loan Balance with penalties:</Text> {LonBal1.toFixed(2)}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Repayment Period in days:</Text> {repaymentPeriod}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Member Contact:</Text> {loaneePhn}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Advocate Registration Number:</Text> {advRegNu}</Text>
      
        <Text style={styles.prodInfo}><Text style={styles.label}>Loan Status:</Text> {status}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Time Loan was taken:</Text> {createdAt}</Text>
       
        <Text style={styles.prodDesc}>{description}</Text>
                    
                    
        </View>
            
       
                
        </View>
    );
}; 

export default SMCvLnStts