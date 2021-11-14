import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../components/MyAc/ViewAc";
import styles from './styles';
import { getSMAccount } from '../../../src/graphql/queries';


export interface SMAccount {
    SMAc: {
      name: string,
      balance: number,  
      loanStatus: string,
      acStatus: string,
      blStatus: string, 
      ttlDpstSM: number,
      TtlWthdrwnSM: number,
      ttlNonLonsRecSM: number,
      ttlNonLonsSentSM:number,
    
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm:number,
    
      MaxTymsBL: number,
      MaxTymsIHvBL: number,
      
    

      
    
    
      TtlActvLonsTmsLnrCov: number,
      TtlActvLonsTmsLneeCov: number,
      TtlActvLonsAmtLnrCov: number,
      TtlActvLonsAmtLneeCov: number,
      TtlBLLonsTmsLnrCov: number,
      TtlBLLonsTmsLneeCov: number,
      TtlBLLonsAmtLnrCov: number,
      TtlBLLonsAmtLneeCov: number,
      TtlClrdLonsTmsLnrCov: number,
      TtlClrdLonsTmsLneeCov: number,
      TtlClrdLonsAmtLnrCov: number,
      TtlClrdLonsAmtLneeCov: number,
      
      TtlActvLonsTmsLneeChmCov: number,
      TtlActvLonsAmtLneeChmCov: number,
      TtlBLLonsTmsLneeChmCov: number,
      TtlBLLonsAmtLneeChmCov: number,
      TtlClrdLonsTmsLneeChmCov: number,
      TtlClrdLonsAmtLneeChmCov: number,
         
      TtlActvLonsTmsSllrCov: number,
      TtlActvLonsTmsByrCov: number,
      TtlActvLonsAmtSllrCov: number,
      TtlActvLonsAmtByrCov: number,
      TtlBLLonsTmsSllrCov: number,
      TtlBLLonsTmsByrCov: number,
      TtlBLLonsAmtSllrCov: number,
      TtlBLLonsAmtByrCov: number,
      TtlClrdLonsTmsSllrCov: number,
      TtlClrdLonsTmsByrCov: number,
      TtlClrdLonsAmtSllrCov: number,
      TtlClrdLonsAmtByrCov: number,
      
    
      TtlActvLonsTmsLnrNonCov: number,
      TtlActvLonsTmsLneeNonCov: number,
      TtlActvLonsAmtLnrNonCov: number,
      TtlActvLonsAmtLneeNonCov: number,
      TtlBLLonsTmsLnrNonCov: number,
      TtlBLLonsTmsLneeNonCov: number,
      TtlBLLonsAmtLnrNonCov: number,
      TtlBLLonsAmtLneeNonCov: number,
      TtlClrdLonsTmsLnrNonCov: number,
      TtlClrdLonsTmsLneeNonCov: number,
      TtlClrdLonsAmtLnrNonCov: number,
      TtlClrdLonsAmtLneeNonCov: number,
      
      TtlActvLonsTmsLneeChmNonCov: number,
      TtlActvLonsAmtLneeChmNonCov: number,
      TtlBLLonsTmsLneeChmNonCov: number,
      TtlBLLonsAmtLneeChmNonCov: number,
      TtlClrdLonsTmsLneeChmNonCov: number,
      TtlClrdLonsAmtLneeChmNonCov: number,
      
      TtlActvLonsTmsSllrNonCov: number,
      TtlActvLonsTmsByrNonCov: number,
      TtlActvLonsAmtSllrNonCov: number,
      TtlActvLonsAmtByrNonCov: number,
      TtlBLLonsTmsSllrNonCov: number,
      TtlBLLonsTmsByrNonCov: number,
      TtlBLLonsAmtSllrNonCov: number,
      TtlBLLonsAmtByrNonCov: number,
      TtlClrdLonsTmsSllrNonCov: number,
      TtlClrdLonsTmsByrNonCov: number,
      TtlClrdLonsAmtSllrNonCov: number,
      TtlClrdLonsAmtByrNonCov: number,
    
      

        
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
         name,
         balance,   
         ttlDpstSM,
         TtlWthdrwnSM,
       
       
         TtlActvLonsTmsLnrCov,
         TtlActvLonsTmsLneeCov,
         TtlActvLonsAmtLnrCov,
         TtlActvLonsAmtLneeCov,
         TtlBLLonsTmsLnrCov,
         TtlBLLonsTmsLneeCov,
         TtlBLLonsAmtLnrCov,
         TtlBLLonsAmtLneeCov,
         TtlClrdLonsTmsLnrCov,
         TtlClrdLonsTmsLneeCov,
         TtlClrdLonsAmtLnrCov,
         TtlClrdLonsAmtLneeCov,
         
         TtlActvLonsTmsLneeChmCov,
         TtlActvLonsAmtLneeChmCov,
         TtlBLLonsTmsLneeChmCov,
         TtlBLLonsAmtLneeChmCov,
         TtlClrdLonsTmsLneeChmCov,
         TtlClrdLonsAmtLneeChmCov,
            
         TtlActvLonsTmsSllrCov,
         TtlActvLonsTmsByrCov,
         TtlActvLonsAmtSllrCov,
         TtlActvLonsAmtByrCov,
         TtlBLLonsTmsSllrCov,
         TtlBLLonsTmsByrCov,
         TtlBLLonsAmtSllrCov,
         TtlBLLonsAmtByrCov,
         TtlClrdLonsTmsSllrCov,
         TtlClrdLonsTmsByrCov,
         TtlClrdLonsAmtSllrCov,
         TtlClrdLonsAmtByrCov,
         
       
         TtlActvLonsTmsLnrNonCov,
         TtlActvLonsTmsLneeNonCov,
         TtlActvLonsAmtLnrNonCov,
         TtlActvLonsAmtLneeNonCov,
         TtlBLLonsTmsLnrNonCov,
         TtlBLLonsTmsLneeNonCov,
         TtlBLLonsAmtLnrNonCov,
         TtlBLLonsAmtLneeNonCov,
         TtlClrdLonsTmsLnrNonCov,
         TtlClrdLonsTmsLneeNonCov,
         TtlClrdLonsAmtLnrNonCov,
         TtlClrdLonsAmtLneeNonCov,
         
         TtlActvLonsTmsLneeChmNonCov,
         TtlActvLonsAmtLneeChmNonCov,
         TtlBLLonsTmsLneeChmNonCov,
         TtlBLLonsAmtLneeChmNonCov,
         TtlClrdLonsTmsLneeChmNonCov,
         TtlClrdLonsAmtLneeChmNonCov,
         
         TtlActvLonsTmsSllrNonCov,
         TtlActvLonsTmsByrNonCov,
         TtlActvLonsAmtSllrNonCov,
         TtlActvLonsAmtByrNonCov,
         TtlBLLonsTmsSllrNonCov,
         TtlBLLonsTmsByrNonCov,
         TtlBLLonsAmtSllrNonCov,
         TtlBLLonsAmtByrNonCov,
         TtlClrdLonsTmsSllrNonCov,
         TtlClrdLonsTmsByrNonCov,
         TtlClrdLonsAmtSllrNonCov,
         TtlClrdLonsAmtByrNonCov,
       
         ttlNonLonsRecSM,
         ttlNonLonsSentSM,
       
         ttlNonLonsRecChm,
         ttlNonLonsSentChm,
       
         MaxTymsBL,
         MaxTymsIHvBL,
         
       
         loanStatus,
         acStatus,
         blStatus,
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       General Info              
                    </Text>
            </View>
                  
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Ac Balance (Ksh): {balance.toFixed(2)}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Times I am Black-Listed: {MaxTymsBL}                  
                    </Text> 

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Loanees (Ksh): {TtlActvLonsAmtLnrCov - TtlClrdLonsAmtLnrCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Loanees: {TtlActvLonsTmsLneeCov - TtlClrdLonsTmsLneeCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Loaners (Ksh): {TtlActvLonsAmtLnrCov - TtlClrdLonsAmtLnrCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Loanees: {TtlActvLonsTmsLneeCov - TtlClrdLonsTmsLneeCov}                 
                    </Text> 
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Buyers (Ksh): {TtlActvLonsAmtByrCov - TtlClrdLonsAmtByrCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Buyers: {TtlActvLonsTmsByrCov - TtlClrdLonsTmsByrCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Sellers (Ksh): {TtlActvLonsAmtSllrCov - TtlClrdLonsAmtSllrCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Sellers: {TtlActvLonsTmsSllrCov - TtlClrdLonsTmsSllrCov}                 
                    </Text>  
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Chama Loans (Ksh): {TtlActvLonsAmtLneeChmCov - TtlClrdLonsAmtLneeChmCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current Covered Active Chama Loans: {TtlActvLonsTmsLneeChmCov - TtlClrdLonsTmsLneeChmCov}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Loanees (Ksh): {TtlActvLonsAmtLnrNonCov - TtlClrdLonsAmtLnrNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Loanees: {TtlActvLonsTmsLneeNonCov - TtlClrdLonsTmsLneeNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Loaners (Ksh): {TtlActvLonsAmtLnrNonCov - TtlClrdLonsAmtLnrNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Loanees: {TtlActvLonsTmsLneeNonCov - TtlClrdLonsTmsLneeNonCov}                 
                    </Text> 
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Buyers (Ksh): {TtlActvLonsAmtByrNonCov - TtlClrdLonsAmtByrNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Buyers: {TtlActvLonsTmsByrNonCov - TtlClrdLonsTmsByrNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Sellers (Ksh): {TtlActvLonsAmtSllrNonCov - TtlClrdLonsAmtSllrNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Sellers: {TtlActvLonsTmsSllrNonCov - TtlClrdLonsTmsSllrNonCov}                 
                    </Text>  
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Chama Loans (Ksh): {TtlActvLonsAmtLneeChmNonCov - TtlClrdLonsAmtLneeChmNonCov}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Current NonCovered Active Chama Loans: {TtlActvLonsTmsLneeChmNonCov - TtlClrdLonsTmsLneeChmNonCov}                 
                    </Text>       
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have Blacklisted: {MaxTymsIHvBL}                    
                    </Text> 

                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Cash Flow           
                        </Text>
                     </View>
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Total Deposits(Ksh): {ttlDpstSM.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Total Withdrawn (Ksh): {TtlWthdrwnSM.toFixed(2)}                    
                    </Text> 
                   <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Total Non Loans Received (Ksh): {ttlNonLonsRecSM.toFixed(2)}                    
                    </Text> 
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Total Non Loans Sent (Ksh): {ttlNonLonsSentSM.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Total Non-Loans from Chamas: {ttlNonLonsRecChm.toFixed(2)}                    
                    </Text> 

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Non-Loans to Chamas: {ttlNonLonsSentChm.toFixed(2)}                 
                    </Text>

                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Covered Single Member Loans           
                        </Text>
                     </View>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Times I have given Covered Loans: {TtlActvLonsTmsLnrCov}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Times I have received Covered Loans: {TtlActvLonsTmsLneeCov}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount I have given as Covered Loans (Ksh): {TtlActvLonsAmtLnrCov.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount I have received as Covered Loans (Ksh): {TtlActvLonsAmtLneeCov.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have BlackListed SingleMembers Covered Loans: {TtlBLLonsTmsLnrCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been BlackListed by SingleMembers Covered Loans: {TtlBLLonsTmsLneeCov}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have BlackListed SingleMembers Covered Loans (Ksh): {TtlBLLonsAmtLnrCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been BlackListed by SingleMembers Covered Loans (Ksh): {TtlBLLonsAmtLneeCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have cleared SingleMembers Covered Loans: {TtlClrdLonsTmsLnrCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been cleared by SingleMembers Covered Loans: {TtlClrdLonsTmsLneeCov}                    
                    </Text> 
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have cleared SingleMembers Covered Loans (Ksh): {TtlClrdLonsAmtLnrCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been cleared by SingleMembers Covered Loans (Ksh): {TtlClrdLonsAmtLneeCov.toFixed(2)}                    
                    </Text> 



                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                      Covered Chama Loans           
                        </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Active Chama Covered Loans: {TtlActvLonsTmsLneeChmCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount of Active Chama Covered Loans (Ksh): {TtlActvLonsAmtLneeChmCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Black Listed Chama Covered Loans: {TtlBLLonsTmsLneeChmCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Amount of BlackListed Chama Covered Loans (Ksh): {TtlBLLonsAmtLneeChmCov.toFixed(2)}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Cleared Chama Covered Loans: {TtlClrdLonsTmsLneeChmCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount of Cleared Chama Covered Loans (Ksh): {TtlClrdLonsAmtLneeChmCov.toFixed(2)}                    
                    </Text>



                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Covered Credit Sales           
                        </Text>
                     </View>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Times I have made Covered Credit sales: {TtlActvLonsTmsSllrCov}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Times I have received Covered Credit Sales: {TtlActvLonsTmsByrCov}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount I have sold as Covered Credit Sales (Ksh): {TtlActvLonsAmtSllrCov.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount I have received as Covered Credit Sales (Ksh): {TtlActvLonsAmtByrCov.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have BlackListed Credit Buyers' Covered Loans: {TtlBLLonsTmsSllrCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been BlackListed as Credit Buyer's Covered Loans: {TtlBLLonsTmsByrCov}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have BlackListed Credit Buyer Covered Loans (Ksh): {TtlBLLonsAmtSllrCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been BlackListed as Credit Buyer's Covered Loans (Ksh): {TtlBLLonsAmtByrCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have cleared Credit Buyers' Covered Loans: {TtlClrdLonsTmsSllrCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been cleared as Credit Buyer's Covered Loans: {TtlClrdLonsTmsByrCov}                    
                    </Text> 
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have cleared Credit Buyers' Covered Loans (Ksh): {TtlClrdLonsAmtSllrCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been cleared as Credit Buyer's Covered Loans (Ksh): {TtlClrdLonsAmtByrCov.toFixed(2)}                    
                    </Text> 

                    



                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Non-Covered Single Member Loans           
                        </Text>
                     </View>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Times I have given Non-Covered Loans: {TtlActvLonsTmsLnrNonCov.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Times I have received Non-Covered Loans: {TtlActvLonsTmsLneeNonCov.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount I have given as Non-Covered Loans (Ksh): {TtlActvLonsAmtLnrNonCov.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount I have received as Non-Covered Loans (Ksh): {TtlActvLonsAmtLneeNonCov.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have BlackListed SingleMembers Non-Covered Loans: {TtlBLLonsTmsLnrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been BlackListed by SingleMembers Non-Covered Loans: {TtlBLLonsTmsLneeNonCov.toFixed(2)}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have BlackListed SingleMembers Non-Covered Loans (Ksh): {TtlBLLonsAmtLnrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been BlackListed by SingleMembers Non-Covered Loans (Ksh): {TtlBLLonsAmtLneeNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have cleared SingleMembers Non-Covered Loans: {TtlClrdLonsTmsLnrNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been cleared by SingleMembers Non-Covered Loans: {TtlClrdLonsTmsLneeNonCov}                    
                    </Text> 
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have cleared SingleMembers Non-Covered Loans (Ksh): {TtlClrdLonsAmtLnrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been cleared by SingleMembers Non-Covered Loans (Ksh): {TtlClrdLonsAmtLneeNonCov.toFixed(2)}                    
                    </Text> 


                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Non-Covered Chama Loans           
                        </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Active Chama Non-Covered Loans: {TtlActvLonsTmsLneeChmNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount of Active Chama Non-Covered Loans (Ksh): {TtlActvLonsAmtLneeChmNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Black Listed Chama Non-Covered Loans: {TtlBLLonsTmsLneeChmNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Amount of BlackListed Chama Non-Covered Loans (Ksh): {TtlBLLonsAmtLneeChmNonCov.toFixed(2)}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Cleared Chama Non-Covered Loans: {TtlClrdLonsTmsLneeChmNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount of Cleared Chama Non-Covered Loans (Ksh): {TtlClrdLonsAmtLneeChmNonCov.toFixed(2)}                    
                    </Text> 


                    <View style = {{alignItems:"center"}}>
                        <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Non-Covered Credit Sales          
                        </Text>
                     </View>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Times I have made Non-Covered Credit sales: {TtlActvLonsTmsSllrNonCov}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Times I have received Non-Covered Credit Sales: {TtlActvLonsTmsByrNonCov}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount I have sold as Non-Covered Credit Sales (Ksh): {TtlActvLonsAmtSllrNonCov.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount I have received as Non-Covered Credit Sales (Ksh): {TtlActvLonsAmtByrNonCov.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have BlackListed Credit Buyers' Non-Covered Loans: {TtlBLLonsTmsSllrNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been BlackListed as Credit Buyer's Non-Covered Loans: {TtlBLLonsTmsByrNonCov}                    
                    </Text>                     
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have BlackListed Credit Buyer Non-Covered Loans (Ksh): {TtlBLLonsAmtSllrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been BlackListed as Credit Buyer's Non-Covered Loans (Ksh): {TtlBLLonsAmtByrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have cleared Credit Buyers' Non-Covered Loans: {TtlClrdLonsTmsSllrNonCov}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Times I have been cleared as Credit Buyer's Non-Covered Loans: {TtlClrdLonsTmsByrNonCov}                    
                    </Text> 
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have cleared Credit Buyers' Non-Covered Loans (Ksh): {TtlClrdLonsAmtSllrNonCov.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Amount I have been cleared as Credit Buyer's Non-Covered Loans (Ksh): {TtlClrdLonsAmtByrNonCov.toFixed(2)}                    
                    </Text>    

                    
                
                
            
        </ScrollView>
                
        </View>
    );
}; 

export default SMCvLnStts