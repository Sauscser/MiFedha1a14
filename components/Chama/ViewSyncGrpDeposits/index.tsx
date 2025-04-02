import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text,   ScrollView, Pressable, Alert} from 'react-native';
import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';



import styles from './styles';
import { createChamaDepositSync, createChamaDividendsSync, createChamaLoanSync, updateGroup } from '../../../src/graphql/mutations';
import { getGroup } from '../../../src/graphql/queries';


export interface SMAccount {
    SMAc: {
      
      GrpAc: string,
     
      ChamaName: string,
      amount:number,
      createdAt: string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        GrpAc,
     
        ChamaName,
        amount,
        createdAt
        
   }} = props ;

   const navigation = useNavigation();
   const[isLoading, setIsLoading] = useState(false);
   
  
                                                               


    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Group Name: {ChamaName}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Group Account: {GrpAc}                  
                    </Text> 

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Amount Synced: {amount}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                     Time Synced: {createdAt}                  
                    </Text> 

                   


        </View >
        <View style = {styles.viewForPressables2}>
   


</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts