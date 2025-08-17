
import React, { useState, useMemo } from 'react';
import {View, Text,  ScrollView, Pressable, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';

import styles from './styles';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getTransportOrder, getSMAccount, getBizna, getGroup, getChamaMembers, getCompany, getTransportRegister } from '../../../src/graphql/queries';
import { updateTransportOrder, updateSMAccount, updateGroup, updateCompany, createNonLoans, updateTransportRegister } from '../../../src/graphql/mutations';
import { Linking } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import {useRoute, useNavigation} from '@react-navigation/native';



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
    deliveryStart: number;
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
    deliveryStart,
    transportkntct,
  
  } = SMAc;

   const [loadingItemId, setLoadingItemId] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);
     const [isLoading2, setIsLoading2] = useState(false);
      const [isLoading3, setIsLoading3] = useState(false);
     
const [distanceMeters, setDistanceMeters] = useState<number>(0);
  

  
   const navigation = useNavigation();
   

   const ChangeDeliveryLocation = () => {
    navigation.navigate("ChangeDeliveryLocation", {id})
}
 

     const handleAcceptDelivery = async () => {
        setIsLoading(true);
       try {
         const user = await Auth.currentAuthenticatedUser();
         
         const orderDtl = await API.graphql(graphqlOperation(getTransportOrder, { id: id}));
             const orderDtlz = orderDtl.data.getTransportOrder;

             const TransportDtls = await API.graphql(graphqlOperation(getTransportRegister, { id: orderDtlz.bizAc}));
             const transportDtlz = TransportDtls.data.getTransportRegister;
   
              const CompDtls:any = await API.graphql(
                         graphqlOperation(getCompany, {
                           AdminId: "BaruchHabaB'ShemAdonai2",
                         }),
                       );

                       const compDtls = CompDtls.data.getCompany;
                       const compEarningShare = compDtls.transportCompanyShare;
                       const CompEarning = compEarningShare * parseFloat(orderDtlz.deliveryCost);
                       const TransporterEarning = parseFloat(orderDtlz.deliveryCost) - CompEarning

                       
        

             if (orderDtlz.engagementStatus === "TransportNotEngaged")
   
           {
             Alert.alert("Sorry", "This delivery has already been Received.");
             return;
           }

          else if (orderDtlz.chmAcCommitmentStatus === "TransportChmCommitmentYes")
            {              
   
             const userDtls = await API.graphql(graphqlOperation(getGroup, { grpContact: orderDtlz.chmAcNumber}));
             const userDtlsz = userDtls.data.getGroup;

            
             const BuyerDtls = await API.graphql(graphqlOperation(getSMAccount, { awsemail: orderDtlz.customerEmail}));
             const BuyerDtlsz = BuyerDtls.data.getSMAccount;

            
             
             console.log(orderDtlz);
             console.log(userDtlsz);
               console.log(BuyerDtlsz);
               console.log(Date.now());
   
        
   
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
         
          await API.graphql(
                           graphqlOperation(updateGroup, {
                           input: {
                             grpContact: orderDtlz.chmAcNumber,
                             grpBal: parseFloat(userDtlsz.grpBal) + parseFloat(orderDtlz.orderCost),
                             
                           }}))
   
                          

                           await API.graphql(
                           graphqlOperation(createNonLoans, {
                           input: {
                             senderPhn: orderDtlz.customerEmail,
                             recPhn: orderDtlz.transportOwnerEmail,
                             RecName: orderDtlz.transportName,
                             description: `Payment for delivery of ${orderDtlz.deliveryDesc} to ${orderDtlz.buyerName}.`,
                             SenderName: orderDtlz.buyerName,
                             amount: parseFloat(orderDtlz.deliveryCost) - CompEarning,
                             status: "DeliveryPayment",
                             owner: user.attributes.sub,
                           }}))

                           

                            await API.graphql(
                           graphqlOperation(updateCompany, {
                           input: {
                             AdminId: "BaruchHabaB'ShemAdonai2",
                             companyEarningBal: parseFloat(compDtls.companyEarningBal) + CompEarning,
                             companyEarning: parseFloat(compDtls.companyEarning) + CompEarning,
                             
                           }}))
   
        
        await API.graphql(
           graphqlOperation(updateTransportOrder, {
             input:
             {
             id: id,
             engagementStatus: "TransportNotEngaged",
             transportRequest: "transportRequestNo",
             
             chmAcCommitmentStatus: "TransportChmCommitmentNo",
            
         }}));
         
         const TransportUpdate =  await API.graphql(
           graphqlOperation(updateTransportRegister, {
             input:
             {
             id: orderDtlz.bizAc,
             
             Earnings: TransporterEarning + parseFloat(transportDtlz.Earnings),

             
         }}));
         if (TransportUpdate?.data?.updateTransportRegister) {
         Alert.alert("Success", "Delivery Received!");
       // Send SMS notification
             const sendSMS = (phoneNumber: string, message: string) => {
         const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
         Linking.openURL(url);
       };
       
       // Example usage inside registerTransport or on button press:
       sendSMS(orderDtlz.transportkntct, 
         orderDtlz.buyerName +' has received your delivery of ' 
         + orderDtlz.deliveryDesc + '. '
        
         + ' You may contact them through '+ orderDtlz.buyerContact);}
       }
      } 

      else if (orderDtlz.chmAcCommitmentStatus !== "TransportChmCommitmentYes")
            {  

             const BuyerDtls = await API.graphql(graphqlOperation(getSMAccount, { awsemail: orderDtlz.customerEmail}));
             const BuyerDtlsz = BuyerDtls.data.getSMAccount;

              const TransporterDtls = await API.graphql(graphqlOperation(getSMAccount, { awsemail: orderDtlz.transportOwnerEmail}));
             const TransporterDtlsz = TransporterDtls.data.getSMAccount;

            
             console.log(orderDtlz);
             
               console.log(BuyerDtlsz);
               console.log(Date.now());
   
            {


                           await API.graphql(
                           graphqlOperation(createNonLoans, {
                           input: {
                             senderPhn: orderDtlz.customerEmail,
                             recPhn: orderDtlz.transportOwnerEmail,
                             RecName: orderDtlz.transportName,
                             description: `Payment for delivery of ${orderDtlz.deliveryDesc} to ${orderDtlz.buyerName}.`,
                             SenderName: orderDtlz.buyerName,
                             amount: parseFloat(orderDtlz.deliveryCost) - CompEarning,
                             status: "DeliveryPayment",
                             owner: user.attributes.sub,
                           }}))

                           

                           await API.graphql(
                           graphqlOperation(updateCompany, {
                           input: {
                             AdminId: "BaruchHabaB'ShemAdonai2",
                            companyEarningBal: parseFloat(compDtls.companyEarningBal) + CompEarning,
                             companyEarning: parseFloat(compDtls.companyEarning) + CompEarning,
                             
                           }}))

                           
   
          
          await API.graphql(
           graphqlOperation(updateTransportRegister, {
             input:
             {
             id: orderDtlz.bizAc,
             Earnings: TransporterEarning + parseFloat(transportDtlz.Earnings),

             
         }}));
         
         
         const updateOrdr =  await API.graphql(
           graphqlOperation(updateTransportOrder, {
             input:
             {
             id: id,
             engagementStatus: "TransportNotEngaged",
             transportRequest: "transportRequestNo",
            
         }}));
         if (updateOrdr?.data?.updateTransportOrder) {
         Alert.alert("Success", "Delivery Received!");
       // Send SMS notification
             const sendSMS = (phoneNumber: string, message: string) => {
         const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
         Linking.openURL(url);
       };
       
       // Example usage inside registerTransport or on button press:
       sendSMS(orderDtlz.transportkntct, 
         orderDtlz.buyerName +' has received your delivery of ' 
         + orderDtlz.deliveryDesc + '. '
        
         + ' You may contact them through '+ orderDtlz.buyerContact);}
       }
      } 
       
        
       } catch (err) {
         console.error("Accept error:", err);
         Alert.alert("Error", "Could not accept delivery.");
       }
       finally {
       setIsLoading(false); 
     }
     };

   const CancelRequest = async () => {
        setIsLoading2(true);
       try {
         const user = await Auth.currentAuthenticatedUser();
         
         const orderDtl = await API.graphql(graphqlOperation(getTransportOrder, { id: id}));
             const orderDtlz = orderDtl.data.getTransportOrder;
   
             
             if (orderDtlz.engagementStatus === "TransportEngaged")
   
           {
             Alert.alert("Sorry", " this delivery request has already been accepted.");
             return;
           }

          
   else {
                         const updateOrdr =  await API.graphql(
           graphqlOperation(updateTransportOrder, {
             input:
             {
             id: id,
           
             transportRequest: "transportRequestNo",
             
           
         }}));
         if (updateOrdr?.data?.updateTransportOrder) {
         Alert.alert("Success", "Delivery request cancelled!");
       // Send SMS notification
             const sendSMS = (phoneNumber: string, message: string) => {
         const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
         Linking.openURL(url);
       };
       
       // Example usage inside registerTransport or on button press:
       sendSMS(orderDtlz.transportkntct, 
         +' your delivery request has been cancelled by ' 
         + orderDtlz.buyerName + '. '
        
         + ' You may contact them through '+ orderDtlz.buyerContact);
        }
       }
   

     
       
        
       } catch (err) {
         console.error("Accept error:", err);
         Alert.alert("Error", "Could not handle delivery.");
       }
       finally {
       setIsLoading2(false); 
     }
     };

       const fetchLocation = async () => {
       setIsLoading(true);
       try {
         

         
       } catch (error) {
         console.warn("Error fetching location:", error);
         Alert.alert("Failed to get location. Try again.");
       } finally {
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
                         || {((Date.now() - deliveryStart)/3600000).toFixed(4)} hours ago
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
    {isLoading ? 'Processing...' : 'Accept Delivery'}
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress= {() => CancelRequest()}
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
  disabled={isLoading2}
>
  {isLoading2 && (
    <ActivityIndicator size="small" color="#fff" style={{ marginRight: 6 }} />
  )}
  <Text style={{ color: 'white', fontSize: 12 }}>
    {isLoading2 ? 'Processing...' : 'Cancel Request'}
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress= {() => ChangeDeliveryLocation()}
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
  disabled={isLoading3}
>
  {isLoading3 && (
    <ActivityIndicator size="small" color="#fff" style={{ marginRight: 6 }} />
  )}
  <Text style={{ color: 'white', fontSize: 12 }}>
    {isLoading3 ? 'Processing...' : 'Change Delivery Location'}
  </Text>
</TouchableOpacity>


              </View>
  </View>
    );
}; 

export default ViewSMDeposts