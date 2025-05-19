import React from 'react';
import {View, Text,    ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaRemitInfo {
    ChamaRemitDtls: {
      id: string,
      grpContact: string,
      recipientPhn: string,
      receiverName:string,
      memberId:string,
      amountSent: number,    
      description: string,
      
      status: string,
      createdAt:string,
      
    }}

const ChmRemitInfo = (props:ChamaRemitInfo) => {
   const {
      ChamaRemitDtls: {
         id,
         
         memberId,
         recipientPhn,
         receiverName,
         status,
         amountSent,
         createdAt,       
         description,
        
       
   }} = props ;

   /*
   const ContriToMmbr = props.ChamaRemitDtls;
   const navigation = useNavigation();

   const go2Contri2Mbr = () =>{
      navigation.navigate("ChmContrs", {ContriToMmbrId: ContriToMmbr.memberId});
   }
   */
   
    return (
       /* <Pressable 
        onPress={go2Contri2Mbr}
        style = {styles.container}>       </Pressable>       
            */
            <View style = {styles.pageContainer}>
            <View style={styles.card}>
       
        <Text style={styles.prodInfo}><Text style={styles.label}>Transaction ID: </Text> {id}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Member Chama ID: </Text> {memberId}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Amount:</Text> KES {amountSent.toLocaleString()}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Time Sent: </Text> {createdAt}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Status: </Text> {status}</Text>
        
        <Text style={styles.prodDesc}>{description}</Text>
      </View>
                  
        </View>
    );
}; 

export default ChmRemitInfo