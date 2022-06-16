import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';
import { deleteReqLoan, updateReqLoan, updateReqLoanChama } from '../../../../src/graphql/mutations';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      id:string,
      loaneeEmail:string,
      loaneePhone:string,
      amount:number,
      repaymentAmt:number,
      repaymentPeriod:number
      loaneeName:string,
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        loaneeEmail,
        loaneePhone,
        amount,
        repaymentAmt,
        repaymentPeriod,
        loaneeName,
        id
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   const SndChmMmbrMny = () => {
       navigation.navigate("ChmNonCovLons", {id})

       
      
   }

   const updtRecAc2 = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
        await API.graphql(
          graphqlOperation(updateReqLoanChama, {
            input:{
              id:id,
              status:"Declined"                  
              
            }
          })
        )                              
    }
    catch(error){
      console.log(error)
      
    }
    setIsLoading(false);
    
  }
 


    return (
        
                  
                  
            <View style = {{marginTop:"10%"}}>

                  
                       
                      <View >
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Hi! it's {loaneeName}. Kindly Loan me Ksh. {amount}. I 
                      commit to repay a Total of Ksh. {repaymentAmt} within {repaymentPeriod} days. 
                      You can reach me through {loaneePhone}.       
                    </Text>
                    </View>  
                     
                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={SndChmMmbrMny}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>Accept</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={updtRecAc2}
                      style = {styles.loanFriendButton}>            
                        <Text>Decline</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
                      

      
            </View>
            
                
        
    );
}; 

export default SMCvLnStts