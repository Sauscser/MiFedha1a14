import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  
  createSMLoansCovered,
  
  
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateGroup,
  updateChamaMembers,
  createBenefitContributions2,
  updateMiFedhaBankAdmin,
  updateChamaControlTable,
  
} from '../../.././../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {EQUITYTABLEID} from '@env';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';

import { getChamaControlTable, getChamaMembers, getCompany, getGroup, getMiFedhaBankAdmin, getSMAccount, listCovCreditSellers, listCvrdGroupLoans, listSMLoansCovereds } from '../../../../src/graphql/queries';


const SMASendNonLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
 
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const route = useRoute();
  const navigation = useNavigation()
  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
 }

 const grpDsNtExst = () => {
  navigation.navigate("SendNLBnftNone")
}
  
  
 
    const fetchCvLnSM = async () => {
      setIsLoading(true);

      const userInfo = await Auth.currentAuthenticatedUser();


      try {
        const Lonees1:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
          { filter: {
              and: {
                status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneeEmail: { eq: userInfo.attributes.email},
              }
            }}
            ));

            
        
                    const fetchCLCrdSl = async () => {
                      setIsLoading(true);
                      try {
                        const Lonees3:any = await API.graphql(graphqlOperation(listCovCreditSellers, 
                          { filter: {
                              and: {
                                status: { eq: "LoanBL"},
                        lonBala: { gt: 0},
                        buyerContact: { eq: userInfo.attributes.email},
                              }
                            }}
                            ));

                            

                                    const fetchCLChm = async () => {
                                      setIsLoading(true);
                                      try {
                                        const Lonees5:any = await API.graphql(graphqlOperation(listCvrdGroupLoans, 
                                          { filter: {
                                              and: {
                                                status: { eq: "LoanBL"},
                                        lonBala: { gt: 0},
                                        loaneePhn: { eq: userInfo.attributes.email},
                                              }
                                            }}
                                            ));

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const ttlNonLonsSentSMs =accountDtl.data.getSMAccount.ttlNonLonsSentSM;
      const loanLimits =accountDtl.data.getSMAccount.loanLimit;
      
      const names =accountDtl.data.getSMAccount.name;
      const owner =accountDtl.data.getSMAccount.owner;
      
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
           const p2pBenCom = CompDtls.data.getCompany.p2pBenCom;
                    const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
                    const UsrTransferFeeAmt = parseFloat(UsrTransferFee) *parseFloat(amounts);
                    const UsrTransferFee2 = parseFloat(SenderUsrBal) -parseFloat(amounts);
                    const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts);
                    const TotalTransacted2 = parseFloat(amounts)  + UsrTransferFee2;
                    const CompPhoneContact = CompDtls.data.getCompany.phoneContact; 
                          
          
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const bankAdminCom = CompDtls.data.getCompany.bankAdminCom;
          const PalBenefits = parseFloat(p2pBenCom) *  (UsrTransferFeeAmt);
          const bankAdmEarning = parseFloat(bankAdminCom)* UsrTransferFeeAmt
          const empowermentFee = bankAdmEarning + (2*PalBenefits)
                    const CompEarnings =  UsrTransferFeeAmt - (empowermentFee)    
         
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {awsemail: RecNatId}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;                    
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const ttlNonLonsRecSMs =RecAccountDtl.data.getSMAccount.ttlNonLonsRecSM;
                    const ReceiverName =RecAccountDtl.data.getSMAccount.name;
                    const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                    const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                    const MaxAcBals =RecAccountDtl.data.getSMAccount.MaxAcBal;
                    const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact;
                    const p2pchmBenefits =accountDtl.data.getSMAccount.p2pchmBenefits;
                    const ReceiverbeneficiaryType =RecAccountDtl.data.getSMAccount.beneficiaryType;
                    const ReceiverbenefitsAmount =RecAccountDtl.data.getSMAccount.benefitsAmount;
                    const receiverbeneficiary =RecAccountDtl.data.getSMAccount.beneficiary;

                    const fetchRecBenUsrDtls = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                          const RecAccountDtl2zs:any = await API.graphql(
                              graphqlOperation(getSMAccount, {awsemail: receiverbeneficiary}),
                              );
                              const RecBenUsrBal =RecAccountDtl2zs.data.getSMAccount.balance;                    
                             
                              const receiverbeneficiaryAmt =RecAccountDtl2zs.data.getSMAccount.beneficiaryAmt;


                    const fetchMmbrDtls = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                          const RecAccountDtl17:any = await API.graphql(
                              graphqlOperation(getChamaMembers, {ChamaNMember: route.params.ChamaNMember}),
                              );
                              const ttlNonLonAcBal =RecAccountDtl17.data.getChamaMembers.ttlNonLonAcBal; 
                              const groupContact =RecAccountDtl17.data.getChamaMembers.groupContact; 
                              const memberChmBenefit =RecAccountDtl17.data.getChamaMembers.memberChmBenefit; 
                              const subscribedAmt  =RecAccountDtl17.data.getChamaMembers.subscribedAmt; 
                             
                              const fetchChmDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtl117:any = await API.graphql(
                                        graphqlOperation(getGroup, {grpContact: groupContact}),
                                        );
                                        const grpBal =RecAccountDtl117.data.getGroup.grpBal; 
                                        const ChmBenefits =RecAccountDtl117.data.getGroup.ChmBenefits;
                                         const BankAdminAcNu =RecAccountDtl117.data.getGroup.BankAdminAcNu;
                                              const chamaBenSync =RecAccountDtl117.data.getGroup.chamaBenSync;
                    
                            const contlTbl:any = await API.graphql(
                                                                graphqlOperation(getChamaControlTable, {id: "EquityTable"}),
                                                                );
                                                                /*
                                                                Bank Admin Earnings
                                                                */
                                                                const DepositsEarnings =contlTbl.data.getChamaControlTable.DepositsEarnings;
                                                                const BankAdminEarnings =contlTbl.data.getChamaControlTable.BankAdminEarnings;
                                                                
                                  const BankAdmDtls:any = await API.graphql(
                                                                      graphqlOperation(getMiFedhaBankAdmin, {nationalid: BankAdminAcNu}),
                                                                      );
                                                                      const BankAdmBal =BankAdmDtls.data.getMiFedhaBankAdmin.BankAdmBal;
                                                                      

                    const sendSMNonLn = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createNonLoans, {
                            input: {
                              recPhn: RecNatId,
                              senderPhn: userInfo.attributes.email,                                  
                              amount: parseFloat(amounts).toFixed(0),                              
                              description: Desc,
                              RecName:ReceiverName,
                              SenderName:names,
                              status: "SMNonLons",
                              owner: userInfo.attributes.sub
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSendrAc();
                    };

                    


                    const updtSendrAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                ttlNonLonsSentSM: (parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts)).toFixed(0),
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) 
                               
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtRecAc();
                    }

                   

                    const updtRecAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:RecNatId,
                                ttlNonLonsRecSM: (parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts)).toFixed(0) ,
                                balance:(parseFloat(RecUsrBal)  + parseFloat(amounts)).toFixed(0),                                     
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      console.log((parseFloat(RecUsrBal) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3 + parseFloat(amounts)).toFixed(0), )
                      setIsLoading(false);
                      await updtRecBenAc();
                    }

                    const updtRecBenAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:receiverbeneficiary,
                                
                                balance:(parseFloat(RecBenUsrBal) + PalBenefits ).toFixed(0),                                     
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      console.log((parseFloat(RecUsrBal) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3 + parseFloat(amounts)).toFixed(0), )
                      setIsLoading(false);
                      await updtChmAc();
                    }

                    const updtChmAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateGroup, {
                              input:{
                                grpContact: groupContact,
                                grpBal: (parseFloat(grpBal) + PalBenefits).toFixed(0) ,
                                ChmBenefits: (parseFloat(ChmBenefits) + PalBenefits).toFixed(0) ,
                                chamaBenSync:(parseFloat(chamaBenSync)+PalBenefits).toFixed(0) 
                                   
                              
                              },
                            })
                          )  ;
                          
                          await API.graphql(
                            graphqlOperation(updateMiFedhaBankAdmin, {
                              input:{
                                nationalid:BankAdminAcNu,                                                      
                                BankAdmBal:(parseFloat(BankAdmBal) + bankAdmEarning).toFixed(0)
                              },
                            })
                          );

                          await API.graphql(
                                                          graphqlOperation(updateChamaControlTable, {
                                                            input:{
                                                              id:"EquityTable",                                                      
                                                              DepositsEarnings:(parseFloat(DepositsEarnings) + bankAdmEarning).toFixed(0),
                                                              BankAdminEarnings: (parseFloat(BankAdminEarnings) + bankAdmEarning).toFixed(0)
                                                            }
                                                          })
                                                        )
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtChmMbrAc();
                    }

                    const updtChmMbrAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateChamaMembers, {
                              input:{
                                ChamaNMember: route.params.ChamaNMember,
                                
                                memberChmBenefit: (parseFloat(memberChmBenefit) + PalBenefits).toFixed(0) ,
                                subscribedAmt: (parseFloat(subscribedAmt) + PalBenefits).toFixed(0) ,
                            
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtComp();
                    }

                    

                    const updtComp = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                               
                                companyEarningBal:CompEarnings + parseFloat(companyEarningBals),
                                companyEarning: CompEarnings + parseFloat(companyEarnings),                                                    
                                
                                ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        
                        if (error){console.log(error)
                    return;}
                      }
                      Alert.alert("Amount:Ksh. "+parseFloat(amounts).toFixed(0) + ". Transaction fee: Ksh. "+ UsrTransferFeeAmt.toFixed(0)
                      );
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + ReceiverName + ", "+names + ' has sent you a non loan of Ksh. ' 
                              + amounts 
                              +'. For clarification call the sender '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha')
                            
                            setIsLoading(false);
                    }
                   
                    const sendSMNonLn1 = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createNonLoans, {
                            input: {
                              recPhn: RecNatId,
                              senderPhn: userInfo.attributes.email,                                  
                              amount: parseFloat(amounts).toFixed(0),                              
                              description: Desc,
                              RecName:ReceiverName,
                              SenderName:names,
                              status: "SMNonLons",
                              owner: userInfo.attributes.sub
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSendrAc1();
                    };

                    


                    const updtSendrAc1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:userInfo.attributes.email,
                                ttlNonLonsSentSM: (parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts)).toFixed(0),
                                balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) 
                               
                                
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtRecAc1();
                    }

                   

                    const updtRecAc1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:RecNatId,
                                ttlNonLonsRecSM: (parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts)).toFixed(0) ,
                                balance:(parseFloat(RecUsrBal)  + parseFloat(amounts)).toFixed(0),                                     
                                benefitsAmount: (parseFloat(ReceiverbenefitsAmount) + PalBenefits).toFixed(0)
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      console.log((parseFloat(RecUsrBal) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3 + parseFloat(amounts)).toFixed(0), )
                      setIsLoading(false);
                      await updtRecBenAc1();
                    }

                    const updtRecBenAc1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(createBenefitContributions2, {
                              input:{
                                benefitsID: "String",
                                                                                          benefactorAc: userInfo.attributes.email,
                                                                                          /*benefactorName*/
                                                                                          benefactorPhone: userInfo.username,
                                                                                          beneficiaryAc: RecNatId,
                                                                                          beneficiaryPhone: "String",
                                                                                          creatorEmail: "String",
                                                                                          prodName: "String",
                                                                                          creatorName: "String",
                                                                                          owner: userInfo.attributes.sub,
                                                                                          prodCost: 0,
                                                                                          benefitsAmount: PalBenefits.toFixed(0),
                                                                                          beneficiaryType: "Pal",
                                                                                          prodDesc: "String",
                                                                                          benefitStatus: "Active",
                                                                                          amount: PalBenefits.toFixed(0)                  
                                                                                                                               
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      console.log((parseFloat(RecUsrBal) + (parseFloat(UsrTransferFee) * parseFloat(amounts))*0.3 + parseFloat(amounts)).toFixed(0), )
                      setIsLoading(false);
                      await updtChmAc1();
                    }

                    const updtChmAc1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateGroup, {
                              input:{
                                grpContact: groupContact,
                                grpBal: (parseFloat(grpBal) + PalBenefits).toFixed(0) ,
                                ChmBenefits: (parseFloat(ChmBenefits) + PalBenefits).toFixed(0) ,
                                chamaBenSync:(parseFloat(chamaBenSync)+PalBenefits).toFixed(0) 
                              
                              },
                            })
                          )  ;
                          
                           await API.graphql(
                                                          graphqlOperation(updateMiFedhaBankAdmin, {
                                                            input:{
                                                              nationalid:BankAdminAcNu,                                                      
                                                              BankAdmBal:(parseFloat(BankAdmBal) + bankAdmEarning).toFixed(0)
                                                            },
                                                          })
                                                        );

                                                        await API.graphql(
                                                                                        graphqlOperation(updateChamaControlTable, {
                                                                                          input:{
                                                                                            id:"EquityTable",                                                      
                                                                                            DepositsEarnings:(parseFloat(DepositsEarnings) + bankAdmEarning).toFixed(0),
                                                                                            BankAdminEarnings: (parseFloat(BankAdminEarnings) + bankAdmEarning).toFixed(0)
                                                                                          }
                                                                                        })
                                                                                      )
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtChmMbrAc1();
                    }

                    const updtChmMbrAc1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateChamaMembers, {
                              input:{
                                ChamaNMember: route.params.ChamaNMember,
                                subscribedAmt:(parseFloat(subscribedAmt) + PalBenefits).toFixed(0) ,
                              
                                memberChmBenefit: (parseFloat(memberChmBenefit) + PalBenefits).toFixed(0) ,
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Retry or update app or call customer care")
                        return;}
                      }
                      setIsLoading(false);
                      await updtComp1();
                    }

                    

                    const updtComp1 = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                               
                                companyEarningBal:CompEarnings + parseFloat(companyEarningBals),
                                companyEarning: CompEarnings + parseFloat(companyEarnings),                                                    
                                
                                ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        
                        if (error){console.log(error)
                    return;}
                      }
                      Alert.alert("Amount:Ksh. "+parseFloat(amounts).toFixed(0) + ". Transaction fee: Ksh. "+ UsrTransferFeeAmt.toFixed(0)
                      );
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + ReceiverName + ", "+names + ' has sent you a non loan of Ksh. ' 
                              + amounts 
                              +'. For clarification call the sender '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha')
                            
                            setIsLoading(false);
                    }
                   
                    
                    if (userInfo.attributes.sub!==owner) {
                      Alert.alert("Please first create a main account")
                      return;
                    }  else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                    else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                    else if(SenderNatId === RecNatId){Alert.alert('You cannot Send money to yourself Yourself');}
                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0){Alert.alert('Receiver ID be verified through deposit at MFNdogo');}
                    
                    else if (
                      (parseFloat(RecUsrBal) + parseFloat(amounts)) > parseFloat(MaxAcBals) 
                    ) {Alert.alert('Receiver Call customer care to have wallet capacity adjusted');}
                    
                    else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                    else if(userInfo.attributes.sub !==SenderSub){Alert.alert('Please send from your own  account');}
                    
                    else if(parseFloat(loanLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');}
                    
                    else if (Lonees1.data.listSMLoansCovereds.items.length > 0 
                      ||
                      
                      Lonees3.data.listCovCreditSellers.items.length > 0 
                      
                      ||
                      Lonees5.data.listCvrdGroupLoans.items.length > 0 
                      

                    
                      ) {
                        SndChmMmbrMny();
                    } 

                    else if (TotalTransacted > SenderUsrBal 
                      ){Alert.alert('Insufficient funds');}

                      else if (ReceiverbeneficiaryType === "Pal" 
                      ){
                        await sendSMNonLn();
                      }

                      else if (ReceiverbeneficiaryType === "Biz" 
                      ){
                        await sendSMNonLn1();
                      }

                     else {
                      Alert.alert("Please call customer care or update app")
                    }                                                
               
                  }       
                  catch(e) {   
                    
                    if (e){
                      
                      console.log(e) 
                      Alert.alert("Retry or update app or call customer care");
                      
                  }                 
                  }
                  setIsLoading(false);
                  }                    
                    await fetchChmDtls();

                  }       
                  catch(e) {   
                    
                    if (e){
                      console.log(e)  
                      
                     
                  }                 
                  }
                  setIsLoading(false);
                  }                    
                    await fetchMmbrDtls();
                  
                  }       
                catch(e) {   
                  
                  if (e){
                  console.log(e)  
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchRecBenUsrDtls();

                }       
                catch(e) {   
                  
                  if (e){
                    Alert.alert("Error Fetching receiver data")
  return;
}                 
                }
                setIsLoading(false);
                }                    
                  await fetchRecUsrDtls();


        } catch (e) {
          
          if (e){Alert.alert("Error Fetching Sender data")

      return;}
        }
        setIsLoading(false);        
      };
      await fetchCompDtls();
    
      
    }     
    catch (e) {
      console.log(e)
      if (e){console.log(e)
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchSenderUsrDtls();

  
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchCLChm();
    
   
    
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
         
    }   
    setIsLoading(false);
    };
    
    await fetchCLCrdSl();
    
    
          
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
          return;}
      };
  
      setIsLoading(false);
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      
      setDesc("");
      setSnderPW("");
      
}

useEffect(() =>{
  const SnderNatIds=SenderNatId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setSenderNatId("");
      return;
    }
    setSenderNatId(SnderNatIds);
    }, [SenderNatId]
     );

     useEffect(() =>{
      const amt=amounts
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amounts]
         );

         useEffect(() =>{
          const RecNatIds=RecNatId
            if(!RecNatIds && RecNatIds!=="")
            {
              setRecNatId("");
              return;
            }
            setRecNatId(RecNatIds);
            }, [RecNatId]
             );

             

                 

                     useEffect(() =>{
                      const descr=Desc
                        if(!descr && descr!=="")
                        {
                          setDesc("");
                          return;
                        }
                        setDesc(descr);
                        }, [Desc]
                         );

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );
return (
<LinearGradient
                            colors={['#e58d29', 'skyblue']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={{ flex: 1 }}
                          >
                            <View style={styles.container}>
                              <ScrollView>
          
                    <View style={styles.formContainer}>
                      <TextInput
                       placeholder="Receiver Email"
                        value={RecNatId}
                        onChangeText={setRecNatId}
                        style={styles.input}
                        editable={true}>                          
                        </TextInput>

                        <TextInput
                       placeholder="Amount"
                        value={amounts}
                        onChangeText={setAmount}
                        style={styles.input}
                        editable={true}
                        keyboardType='decimal-pad'>                                                                         
                        </TextInput>   

                        <TextInput
                       placeholder="Description"
                        value={Desc}
                        onChangeText={setDesc}
                        style={styles.input}
                        editable={true}
                        
                        multiline={true}
                        >                                                                         
                        </TextInput>                     
                     
                     <View style={styles.passwordContainer}>
                                                                   <TextInput
                                                                     placeholder="My Main Account Password"
                                                                 style={styles.passwordInput}
                                                                                                      
                                                                 value={SnderPW}
                                                                 onChangeText={setSnderPW}
                                                                 secureTextEntry={!isPasswordVisible}
                                                                 placeholderTextColor="#ccc"
                                                                         />
                                                                 <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                                <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                                 </TouchableOpacity>
                                                                 </View>
                       
                                                                
                    <TouchableOpacity
                      onPress={fetchCvLnSM}
                      style={styles.button}>
                      {isLoading ? (
                                                <ActivityIndicator color="#fff" />
                                              ) : (
                                                <Text style={styles.locationText}>Submit</Text>
                                              )}
                                            </TouchableOpacity>
                                          </View>
                                        </ScrollView>
                                      </View>
                                    </LinearGradient>
                                  );
                                };
                                
                                const styles = StyleSheet.create({
                                    gradient: {
                                      flex: 1,
                                    },
                                    container: {
                                      flex: 1,
                                      padding: 20,
                                    },
                                    loanTitleView: {
                                      marginBottom: 20,
                                      alignItems: 'center',
                                    },
                                    title: {
                                      fontSize: 24,
                                      fontWeight: 'bold',
                                      color: '#ffffff',
                                      textAlign: 'center',
                                    },
                                    formContainer: {
                                      backgroundColor: '#ffffff',
                                      borderRadius: 10,
                                      padding: 20,
                                      shadowColor: '#000',
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowOpacity: 0.25,
                                      shadowRadius: 4,
                                      elevation: 5,
                                    },
                                    input: {
                                      height: 45,
                                      borderColor: '#ccc',
                                      borderWidth: 1,
                                      marginBottom: 15,
                                      borderRadius: 5,
                                      paddingLeft: 10,
                                    },
                                    button: {
                                      backgroundColor: '#e58d29',
                                      paddingVertical: 12,
                                      borderRadius: 5,
                                      alignItems: 'center',
                                      marginTop: 20,
                                    },
                                    locationContainer: {
                                      marginVertical: 10,
                                    },
                                    locationText: {
                                      fontSize: 16,
                                      color: '#333',
                                    },
                                    passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                                        backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
                                passwordInput: { flex: 1, padding: 12 },
                                  });
        

export default SMASendNonLns;
