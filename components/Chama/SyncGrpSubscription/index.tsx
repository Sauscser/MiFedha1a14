import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text,   ScrollView, Pressable, Alert, TouchableOpacity} from 'react-native';
import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';



import styles from './styles';
import { createChamaDepositSync, createChamaDividendsSync, createChamaLoanSync, createChamaSubscrptnSync, updateGroup } from '../../../src/graphql/mutations';
import { getGroup } from '../../../src/graphql/queries';


export interface SMAccount {
    SMAc: {
      grpContact: string,
      grpName: string,
      signitoryContact: string,

      signitoryName:string,
      MemberSubscrptnSync:number

    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        grpContact ,
        grpName,
        signitoryContact,
        signitoryName,
        MemberSubscrptnSync
        
   }} = props ;

   const navigation = useNavigation();
   const[isLoading, setIsLoading] = useState(false);

   const SyncGrpSubscription = () => {
    navigation.navigate("SyncGrpSubscription")    
    
}

   
  const gtUsrDtls4AdminDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                  const resp:any = await API.graphql(
                    graphqlOperation(getGroup, { grpContact: grpContact })
                  );
                  const BranchNu = resp.data.getGroup.BranchNu; 
                  const SignatoryEmail = resp.data.getGroup.SignatoryEmail; 
                  const BankAdminEmail = resp.data.getGroup.BankAdminEmail; 
                 
                  
                  
                 
                              await API.graphql(
                                 graphqlOperation(updateGroup, {
                                   input: {
                                    grpContact: grpContact,
                                    MemberSubscrptnSync: 0
                                  
                                   
                                   },
                                 }),
                               );

   
                           

                           
                                                      await API.graphql(
                                                         graphqlOperation(createChamaDepositSync, {
                                                           input: {
                                                              
                                                            amount: MemberSubscrptnSync,
                                                            GrpAc: grpContact,
                                                            GrpAdmEmail:SignatoryEmail,
                                                            BankAdminEmail:  BankAdminEmail,  
                                                            ChamaName: grpName,
                                                            BankName: "Equity",
                                                            BranchNu: BranchNu,
                                                            transactionType:"MemberSubscrptnSync",
                                                            status: "AccountActive",
                                                               
                                                          },
                                                         }),
                                                       );
                                      


                                                   } catch (error) {
                                                                   if(error){
                                                                     console.log(error)
                                                                     Alert.alert("Error, retry or update app")
                                                                     return;
                                                                   }
                                                                 }
                                                             
                                                               };
                                                   
                                                                
                           


    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Group Name: {grpName}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Group Account: {grpContact}                  
                    </Text> 

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Group Admin Contact: {signitoryContact}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Group Admin Name: {signitoryName}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                     Sync Amount: {MemberSubscrptnSync}                  
                    </Text>
                   
                    


        </View >
        <View style = {styles.viewForPressables2}>
<View>
<TouchableOpacity
onPress={gtUsrDtls4AdminDtls}
style = {styles.loanFriendButton}
>            
  <Text>Click to sync</Text>            
</TouchableOpacity>
</View>   


</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts