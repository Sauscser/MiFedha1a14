import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ActivityIndicator, Pressable, Alert} from 'react-native';


import styles from './styles';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getLinkBeneficiary2 } from '../../../../src/graphql/queries';
import { updateLinkBeneficiary2 } from '../../../../src/graphql/mutations';


export interface SMAccount {
    SMAc: {
      beneficiaryID: string,
benefactorAc: string,
benefactorPhone: string,
beneficiaryPhone:string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
createdAt: string,
benefitsAmount:number,
benefitStatus:string,
beneficiaryType:string

    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        beneficiaryID ,
        benefactorAc,
        benefactorPhone,
        beneficiaryPhone,
        prodName,
        creatorName,
        prodCost,
        beneficiaryType,
        prodDesc,
        benefitsAmount,
        benefitStatus
    
   }} = props ;

   const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false)
   
   const VwBenefactorContriDtls = () => {
    navigation.navigate("VwPalBenefactorContriDtls", 
      {benefactorAc, benefactorPhone, creatorName, prodName})
}

const updtSendrAc = async () =>{

         

    if (isLoading){
      return
    }
     setIsLoading(true)

const userInfo = await Auth.currentAuthenticatedUser();
       
                       
                        try{
                          const result2 =  await API.graphql(
                              graphqlOperation(getLinkBeneficiary2, {
                                
                                  beneficiaryID:beneficiaryID,
                              })
                            )

                            const owners= result2.data.getLinkBeneficiary2.owner
                            const benefitStatusz= result2.data.getLinkBeneficiary2.benefitStatus
                            const benefitsAmountz= result2.data.getLinkBeneficiary2.benefitsAmount

                            const now = new Date();
                            const currentDate = now.toLocaleDateString();   // e.g., "6/29/2025"
                            const currentTime = now.toLocaleTimeString();   // e.g., "2:25:45 PM"

                            const dateTime = `${currentDate} ${currentTime}`;
                            console.log(dateTime); 
                            // Output: "6/29/2025 2:25:45 PM"

                            if(owners !== userInfo.username)
                            {
                              Alert.alert("You are not the owner of this Business")
                            }
                            
                            else if (benefitsAmountz === 0)
                            {Alert.alert("Benefits at 0")}
                           
                            else {
                              const result = await API.graphql(
                              graphqlOperation(updateLinkBeneficiary2, {
                                input:{
                                  beneficiaryID:beneficiaryID,
                                  
                                  benefitStatus: benefitStatusz + ", Redeemed at KES " + benefitsAmount + " on " + dateTime,
                                  benefitsAmount:0
                                  
                                }
                              })
                            )

                            const updateResult = result?.data?.updateLinkBeneficiary2;
                            
                            if (updateResult)
                            {
                            Alert.alert("Benefits successfully redeemed")
                            }
                            else {
                              Alert.alert("Redemption was unsuccessful")
                              }
  
                            }

                            
                        }
                        catch(error){
                          console.log(error)
                          if (error){Alert.alert("Update app or call customer care")
                          return;}
                        }
setIsLoading(false)
                      }
    return (
        
             <View style = {styles.pageContainer}>
            <View style = {styles.card}>              
                        <Text style={styles.prodName}>{prodName}</Text>

        <Text style={styles.prodInfo}><Text style={styles.label}>Benefactor Name:</Text> {creatorName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Product Creator Account:</Text> {benefactorPhone}</Text>
         <Text style={styles.prodInfo}><Text style={styles.label}>Beneficiary Name:</Text> {beneficiaryPhone}</Text>
        
        <Text style={styles.prodInfo}><Text style={styles.label}>Status:</Text> {benefitStatus}</Text>
       
       <Text style={styles.prodInfo}><Text style={styles.label}>Cost:</Text> KES {prodCost.toLocaleString()}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Benefits Pooled:</Text> KES {benefitsAmount.toLocaleString()}</Text>
       <Text style={styles.prodDesc}>{prodDesc}</Text>
                   
        </View >
        <View style = {styles.buttonRow}>

<Pressable
onPress={VwBenefactorContriDtls}
style = {styles.loanFriendButton}
>            
  <Text>View My Contributions</Text>            
</Pressable>

<Pressable
onPress={updtSendrAc}
style = {styles.loanFriendButton}
>  {isLoading? (<ActivityIndicator color = "#fff"/>)
: (<Text style = {styles.buttonText}>Redeem Benefits</Text> )}          
             
</Pressable>
</View>   


</View>

    );
}; 

export default SMCvLnStts