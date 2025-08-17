import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {View, Text,  ScrollView, Pressable, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';

import styles from './styles';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getTransportOrder, getSMAccount, getBizna, getGroup, getChamaMembers } from '../../../src/graphql/queries';
import { updateTransportOrder, updateSMAccount, updateGroup } from '../../../src/graphql/mutations';
import { Linking } from 'react-native';
import {useRoute} from '@react-navigation/native';




export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      MembaId: string,
      ChamaNMember: string,
      memberContact: string,
      groupName:string,
      memberNatId:string,
      GrossLnsGvn:number,
      LonAmtGven: number,
      AmtRepaid:number,
      groupContact: string,
      NonLoanAcBal:number,
      ttlNonLonAcBal: number,
      AcStatus: string,
      loanStatus: string,
      blStatus: string,
      createdAt:string,
      
                  subscriptionFrequency:number,
      subscriptionAmt:number,
      lateSubscriptionPenalty:number,
      ttlLateSubs:number,
      timeCrtd:number,
      subscribedAmt:number,
      totalSubAmt:number
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         MembaId,
         ChamaNMember,
         memberNatId,
         memberContact,
         groupName,
         loanStatus,
         blStatus,
         GrossLnsGvn,
         LonAmtGven,
         AmtRepaid,
         groupContact,
         NonLoanAcBal,
         ttlNonLonAcBal,
         createdAt,       
         AcStatus,
         subscribedAmt,
         totalSubAmt,
         subscriptionFrequency,
         subscriptionAmt,
         lateSubscriptionPenalty,
         ttlLateSubs,
         timeCrtd,
         
   }} = props ;

   const [loadingItemId, setLoadingItemId] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   
   const route = useRoute();

   const handleAcceptDelivery = async () => {
        setIsLoading(true);
       try {
         const user = await Auth.currentAuthenticatedUser();
         
         const orderDtl = await API.graphql(graphqlOperation(getTransportOrder, { id: route.params.id }));
             const orderDtlz = orderDtl.data.getTransportOrder;
   
             const totalCost = orderDtlz.deliveryCost + orderDtlz.orderCost
             
             const userDtls = await API.graphql(graphqlOperation(getGroup, { grpContact: groupContact}));
             const userDtlsz = userDtls.data.getGroup;

             const membaDtls = await API.graphql(graphqlOperation(getChamaMembers, { ChamaNMember: ChamaNMember}));
             const membaDtlz = membaDtls.data.getChamaMembers;             
   
             const BuyerDtls = await API.graphql(graphqlOperation(getSMAccount, { awsemail: orderDtlz.customerEmail}));
             const BuyerDtlsz = BuyerDtls.data.getSMAccount;

             console.log(route.params.id);
             console.log(orderDtlz);
             console.log(userDtlsz);
               console.log(BuyerDtlsz);
               console.log(Date.now());
               console.log(ChamaNMember);
   
        
   
             // Update the user's and buyer's account balances
   
             if (orderDtlz.engagementStatus === "TransportEngaged")
   
           {
             Alert.alert("Error", "This delivery has already been accepted.");
             return;
           }

          else if (BuyerDtlsz.balance < orderDtlz.deliveryCost)
            {
              Alert.alert("Sorry", "Buyer cannot cover delivery cost.");
              return;
            }
            
            else if (membaDtlz.transportApproved === "ChamaTransportApprovedNo")
            {
              Alert.alert("Sorry", "Group Admin has cancelled your approval.");
              return;
            }

            
         
         else if (parseFloat(orderDtlz.orderCost) > parseFloat(userDtlsz.grpBal)) 
         {
           Alert.alert("Sorry!", "Your group's balance is less than the purchase cost: Ksh."
            + orderDtlz.orderCost )
             return;
         }
   
         else if (parseFloat(userDtlsz.grpBal ) >= parseFloat(orderDtlz.orderCost)) 
         {
         
          await API.graphql(
                           graphqlOperation(updateGroup, {
                           input: {
                             grpContact: groupContact,
                             grpBal: parseFloat(userDtlsz.grpBal) - parseFloat(orderDtlz.orderCost),
                             
                           }}))
   
                           await API.graphql(
                           graphqlOperation(updateSMAccount, {
                           input: {
                             awsemail: orderDtlz.customerEmail,
                             balance: parseFloat(BuyerDtlsz.balance) - parseFloat(orderDtlz.deliveryCost),
                             
                           }}))
   
                         const updateOrdr =  await API.graphql(
           graphqlOperation(updateTransportOrder, {
             input:
             {
             id: route.params.id,
             engagementStatus: "TransportEngaged",
             ChmAcCommitment: orderDtlz.orderCost,
             deliveryStart: Date.now(),
             chmAcNumber: groupContact,
             chmAcCommitmentStatus: "TransportChmCommitmentYes"

             
         }}));
         if (updateOrdr?.data?.updateTransportOrder) {
         Alert.alert("Success", "Delivery accepted!");
       // Send SMS notification
             const sendSMS = (phoneNumber: string, message: string) => {
         const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
         Linking.openURL(url);
       };
       
       // Example usage inside registerTransport or on button press:
       sendSMS(orderDtlz.buyerContact, 
         orderDtlz.transportName +' has accepted your transport request from ' 
         + orderDtlz.sellerName + '. '
         + ' You may contact them through '+ orderDtlz.transportkntct);}
       }
          
       
        
       } catch (err) {
         console.error("Accept error:", err);
         Alert.alert("Error", "Could not accept delivery.");
       }
       finally {
       setIsLoading(false); 
     }
     };
   
    return (
      <View style = {styles.pageContainer}>              
            
      <Pressable  style = {styles.card}>
      <Text style={styles.prodName}>{groupName} Self Help Group</Text>

<Text style={styles.prodInfo}><Text style={styles.label}>Member Chama Number:</Text> {MembaId}</Text>

              </Pressable>

              <View style = {styles.buttonRow}>
             <TouchableOpacity
  onPress= {() => handleAcceptDelivery()}
  style={[
    styles.loanFriendButton,
    {
      backgroundColor: '#e58d29',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isLoading ? 0.7 : 1,
    },
  ]}
  disabled={isLoading}
>
  {isLoading && (
    <ActivityIndicator size="small" color="#fff" style={{ marginRight: 6 }} />
  )}
  <Text style={{ color: 'white', fontSize: 12 }}>
    {isLoading ? 'Processing...' : 'Accept Transport Request'}
  </Text>
</TouchableOpacity>

              </View>
  </View>
    );
}; 

export default ChmMbrShpInfo