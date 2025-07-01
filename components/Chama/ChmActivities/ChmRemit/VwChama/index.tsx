
import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import { View, Text, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
  
import Communications from 'react-native-communications';
import {
  
  
  updateCompany,
  
  updateSMAccount,
  updateGroup,
  
  createGroupNonLoans,
  updateChamaMembers,
  updateMiFedhaBankAdmin,
  updateChamaControlTable,
  updateGroupNonLoans,
  
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getChamaControlTable,
  getChamaMembers,
  getCompany,
  getGroup,
  
  getMiFedhaBankAdmin,
  
  getSMAccount,
  
} from '../../../../../src/graphql/queries';




import {EQUITYTABLEID} from '@env';
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
      confirm1:string,
      confirm2:string,
      signatory2: string,
      signatory3: string,
      status: string,
      createdAt:string,
      
      
    }}

const ChmRemitInfo = (props:ChamaRemitInfo) => {
   const {
      ChamaRemitDtls: {
         id,
         confirm1,
         confirm2,
         memberId,
         recipientPhn,
         receiverName,
         status,
         amountSent,
         createdAt,       
         description,
         signatory2,
         signatory3
        
       
   }} = props ;

   /*
   const ContriToMmbr = props.ChamaRemitDtls;
   const navigation = useNavigation();

   const go2Contri2Mbr = () =>{
      navigation.navigate("ChmContrs", {ContriToMmbrId: ContriToMmbr.memberId});
   }
   */

   const navigation = useNavigation();
     
     const[isLoading, setIsLoading] = useState(false);
     const[isLoading2, setIsLoading2] = useState(false);

     const conditionalChecks = async () => {
      setIsLoading(true)
      const userInfo = await Auth.currentAuthenticatedUser();
    if(
        userInfo.attributes.email !== signatory2 
    )
    {
      Alert.alert("Unauthorised! You are not signatory 2")
    }
    else if (
      confirm1 === "YES"
    )
    {
      Alert.alert("You have already confirmed")
    }
    else {

                      try {
                        await API.graphql(
                          graphqlOperation(updateGroupNonLoans, {
                            input: {
                              id: id,
                              
                              confirm1:"YES",
                              
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Confirmation unsuccessful; Retry or update app")
                          return
                        }
                      }
                      
                  
    }
    setIsLoading(false)
  }

  const conditionalChecks2 = async () => {

    
      setIsLoading2(true);
      const userInfo = await Auth.currentAuthenticatedUser();
    if(
        userInfo.attributes.email !== signatory3
    )
    {
      Alert.alert("Unauthorised! You are not signatory 3")
    }
    else if (
      confirm2 === "YES"
    )
    {
      Alert.alert("You have already confirmed")
    }

    else if (
      confirm1 === "NO"
    )
    {
      Alert.alert("Signatory 2 should first confirm")
    }
    else

    {

    
    
      try {
          const ChmMbrtDtl:any = await API.graphql(
              graphqlOperation(getChamaMembers, {ChamaNMember: memberId}),
              );

              const groupContacts =ChmMbrtDtl.data.getChamaMembers.groupContact;
              const memberContacts =ChmMbrtDtl.data.getChamaMembers.memberContact;
              const NonLoanAcBals =ChmMbrtDtl.data.getChamaMembers.NonLoanAcBal;
              
              const ttlNonLonAcBals =ChmMbrtDtl.data.getChamaMembers.ttlNonLonAcBal;
              
  const fetchSenderUsrDtls = async () => {
   
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getGroup, {grpContact: groupContacts}),
      );

      const grpBals =accountDtl.data.getGroup.grpBal;
      const signitoryPWs =accountDtl.data.getGroup.signitoryPW;
      const statuss =accountDtl.data.getGroup.status;
      const SenderSub =accountDtl.data.getGroup.owner;
      const ttlNonLonsSentChms =accountDtl.data.getGroup.ttlNonLonsSentChm;
      
      const grpNames =accountDtl.data.getGroup.grpName;
      const MemberDividendSync =accountDtl.data.getGroup.MemberDividendSync;
            const BankAdminAcNu =accountDtl.data.getGroup.BankAdminAcNu;

      const Signatory3Email =accountDtl.data.getGroup.Signatory3Email;
      const signatory2Email =accountDtl.data.getGroup.signatory2Email;
      const SignatoryEmail =accountDtl.data.getGroup.SignatoryEmail;
           
      
      
      const fetchCompDtls = async () => {
        
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
          
         
          const BankMifedhaSyncFee = CompDtls.data.getCompany.BankMifedhaSyncFee;
          const ttlNonLonssSentChms = CompDtls.data.getCompany.ttlNonLonssSentChm; 
          const chmTransferFee = CompDtls.data.getCompany.chmTransferFee; 

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal; 
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          
          const grossCompEarning = parseFloat(chmTransferFee)*(amountSent)
          const BankAdminEarning = grossCompEarning * parseFloat(BankMifedhaSyncFee)
          const netCompEarning = grossCompEarning - BankAdminEarning;

          const TotalTransacted = grossCompEarning + (amountSent)
          


                    
          const fetchRecUsrDtls = async () => {
           
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {awsemail: memberContacts}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;   
                    const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact;                  
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                    const namess =RecAccountDtl.data.getSMAccount.name;
                    const MaxAcBals =RecAccountDtl.data.getSMAccount.MaxAcBal;
                    const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;


                    const fetchBankAdmin = async () => {
                     
                      try {
                          const BankAdmDtls:any = await API.graphql(
                              graphqlOperation(getMiFedhaBankAdmin, {nationalid: BankAdminAcNu}),
                              );
                              const BankAdmBal =BankAdmDtls.data.getMiFedhaBankAdmin.BankAdmBal;
                                                                  

                              const fetchCntrlTble = async () => {
                                                          
                                                          try {
                                                              const contlTbl:any = await API.graphql(
                                                                  graphqlOperation(getChamaControlTable, {id: "EquityTable"}),
                                                                  );
                                                                  const DividendsEarnings =contlTbl.data.getChamaControlTable.DividendsEarnings;
                                                                  const BankAdminEarnings =contlTbl.data.getChamaControlTable.BankAdminEarnings;
                                                                
                    
                    const GrpNonLns = async () => {
                     
                      try {
                        await API.graphql(
                          graphqlOperation(updateGroupNonLoans, {
                            input: {
                              id: id,
                              
                              
                              confirm2: "YES",
                              
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      }
                     
                      await updtSendrAc();
                    };

                    
                  
                    

                    const updtSendrAc = async () =>{
                      
                      try{
                          await API.graphql(
                            graphqlOperation(updateGroup, {
                              input:{
                                grpContact:groupContacts,
                                MemberDividendSync: (parseFloat(MemberDividendSync) + TotalTransacted).toFixed(0),
                                ttlNonLonsSentChm: (parseFloat(ttlNonLonsSentChms)+(amountSent)).toFixed(0),
                                grpBal:(parseFloat(grpBals)-TotalTransacted).toFixed(0) 
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                        return;}
                      }
                    
                      await updtRecAc();
                    }

                    const updtRecAc = async () =>{
                      
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:memberContacts,
                                
                                balance:(parseFloat(RecUsrBal) + (amountSent)).toFixed(0)                              
                                
                                                                  
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                        return;}
                      }
                      
                      await updtComp();
                    }

                    const updtComp = async () =>{
                      
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                companyEarningBal: parseFloat(companyEarningBals) + netCompEarning,
                                companyEarning:  parseFloat(companyEarnings) + netCompEarning,                                                    
                                
                                ttlNonLonssSentChm: (amountSent) + parseFloat(ttlNonLonssSentChms),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                    return;}
                      }
                      await updtBankAdmin ();
                      
                    }

                    const updtBankAdmin = async () =>{
                                             
                                              
                                              try{
                                                  await API.graphql(
                                                    graphqlOperation(updateMiFedhaBankAdmin, {
                                                      input:{
                                                        nationalid:BankAdminAcNu,                                                      
                                                        BankAdmBal:(parseFloat(BankAdmBal) + BankAdminEarning).toFixed(0)
                                                      }
                                                    })
                                                  )
                                                  
                                                  
                                              }
                                              catch(error){
                                                console.log(error);
                                                if (error){Alert.alert("Error! Access denied!")
                                            return;}
                                              }
                                             await updtCntrlTbl ();
                                             
                                            }
                    
                                            const updtCntrlTbl = async () =>{
                                             
                                              
                                              try{
                                                  await API.graphql(
                                                    graphqlOperation(updateChamaControlTable, {
                                                      input:{
                                                        id:"EquityTable",                                                      
                                                        DividendsEarnings:(parseFloat(DividendsEarnings) + BankAdminEarning).toFixed(0),
                                                        BankAdminEarnings: (parseFloat(BankAdminEarnings) + BankAdminEarning).toFixed(0)
                                                      }
                                                    })
                                                  )
                                                  
                                                  
                                              }
                                              catch(error){
                                                console.log(error);
                                                if (error){Alert.alert("Error! Access denied!")
                                            return;}
                                              }
                                             await updtChmMbr ();
                                            
                                            }

                    const updtChmMbr = async () =>{
                      
                      try{
                          await API.graphql(
                            graphqlOperation(updateChamaMembers, {
                              input:{
                                ChamaNMember: memberId,                                                      
                                NonLoanAcBal: (parseFloat(NonLoanAcBals) - (amountSent)).toFixed(0),
                                
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                    return;}
                      }
                      Alert.alert("Amount:Ksh. "+(amountSent).toFixed(2) );
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + namess +  grpNames 
                              + ' group has sent you Ksh. ' + amountSent
                             +'. For clarification call the group Admin: '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                      
                    }       
                      
                    
                                          
                    
                    if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');
                    return;}
                    else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
                    return;}
                    
                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0){Alert.alert('Member National ID be verified through deposit at MFNdogo');
                    return;}
                    else if (
                      (parseFloat(RecUsrBal) + (amountSent)) > parseFloat(MaxAcBals) 
                    ) {Alert.alert('Receiver Call customer care to have wallet capacity adjusted');
                    return;}
                    
                    else if (
                      parseFloat(grpBals) < TotalTransacted 
                    ) {Alert.alert("Cancelled."+ "Bal: "+ grpBals +". Deductable: " + TotalTransacted.toFixed(2) 
                    + ". "+ ((TotalTransacted) - parseFloat(grpBals)).toFixed(2) + ' more needed');
                    return;}
                    
                    
                     else {
                    await  GrpNonLns();
                    }                                                
               
                  }       
                  catch(e) {     
                    console.log(e) 
                    if (e){Alert.alert("Error! Retry or update app!")
    return;}                 
                  }
                 
                  }                    
                    await fetchCntrlTble();
                  
                  
                  }       
                catch(e) {     
                  console.log(e) 
                  if (e){Alert.alert("Error! Retry or update app!")
  return;}                 
                }
               
                }                    
                  await fetchBankAdmin();

                }       
                catch(e) {     
                  console.log(e) 
                  if (e){Alert.alert("Error! Retry or update app!")
  return;}                 
                }
                
                }                    
                  await fetchRecUsrDtls();


        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Error! Retry or update app!")
      return;}
        }
             
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error! Retry or update app!")
      return;}
  };
      
    }
    await fetchSenderUsrDtls();

    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error! Retry or update app!")
  return;}
    }
        
             
  

}
setIsLoading2(false); 
  }

   
    return (
       /* <Pressable 
        onPress={go2Contri2Mbr}
        style = {styles.container}>       </Pressable>       
            */
            <View style = {styles.pageContainer}>
            <View style={styles.card}>
       
        <Text style={styles.prodInfo}><Text style={styles.label}>Member Name: </Text> {receiverName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Transaction ID: </Text> {id}</Text>
        
        <Text style={styles.prodInfo}><Text style={styles.label}> Amount:</Text> KES {amountSent.toFixed(2)}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Time Sent: </Text> {createdAt}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Signatory 1 confirmation: </Text> {confirm1}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}> Signatory 2 confirmation: </Text> {confirm2}</Text>
        
        <Text style={styles.prodDesc}>{description}</Text>
      </View>

      <View style={styles.buttonRow}>
  <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.gradientButton}>
    <Pressable onPress={conditionalChecks} style={styles.pressableContent} disabled={isLoading}>
      {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Signatory 2 Confirm</Text>
            )}
    </Pressable>
  </LinearGradient>

  

  <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.gradientButton}>
    <Pressable onPress={conditionalChecks2} style={styles.pressableContent} disabled={isLoading2}>
            {isLoading2 ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Signatory 3 Confirm</Text>
            )}
          </Pressable>
  </LinearGradient>
</View>
                  
        </View>
    );
}; 

export default ChmRemitInfo