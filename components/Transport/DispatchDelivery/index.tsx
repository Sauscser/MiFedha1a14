import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {View, Text,  ScrollView, Pressable, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';

import styles from './styles';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getTransportOrder, getSMAccount, getBizna, getGroup, getChamaMembers, getCompany } from '../../../src/graphql/queries';
import { updateTransportOrder, updateSMAccount, updateGroup, updateCompany } from '../../../src/graphql/mutations';
import { Linking } from 'react-native';
import {useRoute} from '@react-navigation/native';



export interface SMAccount {
  SMAc: {
    id: string;
    sellerName: string;
    buyerName: string;
    distance: number;
    
    orderCost: number;
    buyerContact: string;
    transportRequest: string;
   deliveryDesc:string
   deliveryCost: number;
    transportName: string;
    engagementStatus: string;
    chmAcNumber: string;
    bizType: string;
    transportkntct: string;
  };
}

const ViewSMDeposts = ({ SMAc }: SMAccount) => {
  const {
    id,
    transportName,
    sellerName,
    buyerName,
   deliveryCost,
    distance,
    chmAcNumber,
    orderCost,
    buyerContact,
    transportRequest,
    deliveryDesc,
    engagementStatus,
    //dispatch status,
    bizType,
    transportkntct,
  
  } = SMAc;

   const [loadingItemId, setLoadingItemId] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);

  
   const route = useRoute();

   const handleAcceptDelivery = async () => {
        setIsLoading(true);
       try {
         const user = await Auth.currentAuthenticatedUser();
         
         const orderDtl = await API.graphql(graphqlOperation(getTransportOrder, { id: id}));
             const orderDtlz = orderDtl.data.getTransportOrder;
   
              const CompDtls:any = await API.graphql(
                         graphqlOperation(getCompany, {
                           AdminId: "BaruchHabaB'ShemAdonai2",
                         }),
                       );

                       const compDtls = CompDtls.data.getCompany;
                       const compEarningShare = compDtls.transportCompanyShare;
                       const CompEarning = compEarningShare * parseFloat(orderDtlz.deliveryCost);


             if (orderDtlz.bizType === "TransportDispatched")
   
           {
             Alert.alert("Sorry", "This delivery has already been Dispatched.");
             return;
           }

           if (orderDtlz.transportRequest === "transportRequestNo")
   
           {
             Alert.alert("Sorry", "This Transporter has not been requested.");
             return;
           }


          
            else  
           
        
   
             // Update the user's and buyer's account balances
   
             /*if (orderDtlz.engagementStatus === "TransportNotEngaged")
   
           {
             Alert.alert("Sorry", "This delivery has already been Received.");
             return;
           }

          else if (orderDtlz.chmAcCommitmentStatus === "TransportChmCommitmentYes")
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
         
         */{
         
         
   
                         const updateOrdr =  await API.graphql(
           graphqlOperation(updateTransportOrder, {
             input:
             {
             id: id,
             bizType: "TransportDispatched",
            
         }}));
         if (updateOrdr?.data?.updateTransportOrder) {
         Alert.alert("Success", "Delivery Dispatched!");
       // Send SMS notification
             const sendSMS = (phoneNumber: string, message: string) => {
         const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
         Linking.openURL(url);
       };
       
       // Example usage inside registerTransport or on button press:
       sendSMS(orderDtlz.buyerContact, 
         orderDtlz.sellerName +' has dispatched your delivery of ' 
         + orderDtlz.deliveryDesc + ' through your transport service of choice '
         + orderDtlz.transportName + '.'
        
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
<Text style={styles.prodInfo}> 
                      {transportName} transport services ||
                       {sellerName} to {buyerName}
                         || Aerial Distance: {distance} Kilometer ||
                         Order Total Cost: Ksh. {orderCost} || TransportCost:
                          Ksh. {deliveryCost}
                         || Contact: {transportkntct} || {engagementStatus} 
                         || {bizType} || {transportRequest}
                       </Text>
                      
                       <Text style = {styles.prodDesc}>Order Desciption: {deliveryDesc}</Text>
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
    {isLoading ? 'Processing...' : 'Dispatch Delivery'}
  </Text>
</TouchableOpacity>

              </View>
  </View>
    );
}; 

export default ViewSMDeposts