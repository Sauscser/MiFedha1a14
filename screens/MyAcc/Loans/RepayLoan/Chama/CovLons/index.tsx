import React, {useEffect, useState} from 'react';

import {
  
  
  
  updateCompany,
  
  updateSMAccount,
  
  updateCvrdGroupLoans,
  updateGroup,
  
  updateChamaMembers,
  createLoanRepayments,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getChamaMembers,
  getCompany,
  getCvrdGroupLoans,
  getGroup,
  
  getSMAccount,
  
  
} from '../../../../../../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


const RepayCovChmLnsss = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  const[LnId, setLnId] = useState("")
  const [Desc, setDesc] = useState("");

  const[isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  
  

  


    const ftchCvdSMLn = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      const userInfo = await Auth.currentAuthenticatedUser();

      try {
          const RecAccountDtl:any = await API.graphql(
              graphqlOperation(getCvrdGroupLoans, {loanID: route.params.loanID}),
              );
              
              const amountExpectedBackWthClrncs =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBackWthClrnc; 
              const memberIds =RecAccountDtl.data.getCvrdGroupLoans.memberId;
              
              const grpContactssss =RecAccountDtl.data.getCvrdGroupLoans.grpContact; 
              const loaneePhnssss =RecAccountDtl.data.getCvrdGroupLoans.loaneePhn;
              const lonBalas =RecAccountDtl.data.getCvrdGroupLoans.lonBala;
              const interest =RecAccountDtl.data.getCvrdGroupLoans.interest;
              const amountExpectedBacks =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBack;
              const amountRepaidss =RecAccountDtl.data.getCvrdGroupLoans.amountRepaid; 
              const amountGiven = RecAccountDtl.data.getCvrdGroupLoans.amountGiven
              const crtnDate =RecAccountDtl.data.getCvrdGroupLoans.crtnDate; 
              const dfltUpdate = RecAccountDtl.data.getCvrdGroupLoans.dfltUpdate
              const repaymentPeriod = RecAccountDtl.data.getCvrdGroupLoans.repaymentPeriod
              const DefaultPenaltyChm2s =RecAccountDtl.data.getCvrdGroupLoans.DefaultPenaltyChm2;
                                            const clearanceAmts = RecAccountDtl.data.getCvrdGroupLoans.clearanceAmt;
                              
                                              const ClranceAmt = parseFloat(clearanceAmts) + parseFloat(DefaultPenaltyChm2s);
                              

              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              
              
              
              
              
             

        
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)


              const tmDif = daysUpToDate - dfltUpdate;
              const tmDif2 = daysUpToDate - crtnDate;

              const netLnBal = parseFloat(amountExpectedBackWthClrncs) - 
              parseFloat(clearanceAmts) - parseFloat (DefaultPenaltyChm2s)
      
              const netLnBal2 = (netLnBal) * 
              ((Math.pow(1 + parseFloat(interest)/36500, tmDif2)))

              const LonBal1 = (netLnBal2 + parseFloat(clearanceAmts) + parseFloat (DefaultPenaltyChm2s)).toFixed(0)

              const LonBalsss = parseFloat(LonBal1) - parseFloat(amounts);
              

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: loaneePhnssss}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlClrdLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeChmCov;
      const TtlActvLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmCov;
      const TtlActvLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmCov;
      const TtlClrdLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeChmCov;
      const TtlBLLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsLneeChmCov;
      const TtlBLLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtLneeChmCov;
      const names =accountDtl.data.getSMAccount.name;
      
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLss =accountDtl.data.getSMAccount.MaxTymsBL;
      
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
          
            
          const UsrTransferFee = CompDtls.data.getCompany.chmLnRpymntFee;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;  
          const ttlChmLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlChmLnsInClrdTymsCov; 
          const ttlChmLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlChmLnsInClrdAmtCov;
          const ttlChmLnsInBlTymsCovs = CompDtls.data.getCompany.ttlChmLnsInBlTymsCov; 
          const ttlChmLnsInBlAmtCovs = CompDtls.data.getCompany.ttlChmLnsInBlAmtCov;
          const ttlChmLnsInActvAmtCov = CompDtls.data.getCompany.ttlChmLnsInActvAmtCov;
          const ttlChmLnsInActvTymsCov = CompDtls.data.getCompany.ttlChmLnsInActvTymsCov;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlCompTrnsfrEarningsCovs = CompDtls.data.getCompany.ttlCompTrnsfrEarningsCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtCov;
          const totalLnsRecovereds = CompDtls.data.getCompany.totalLnsRecovered;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
         
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts); 

         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getGroup, {grpContact: grpContactssss}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getGroup.grpBal;                    
                    const usrAcActvSttss =RecAccountDtl.data.getGroup.status; 
                   
                    const tymsChmHvBLs =RecAccountDtl.data.getGroup.tymsChmHvBL;                    
                    const TtlClrdLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlClrdLonsTmsLnrChmCov;
                    const TtlClrdLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlClrdLonsAmtLnrChmCov;
                    const TtlBLLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlBLLonsTmsLnrChmCov;
                    const TtlBLLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlBLLonsAmtLnrChmCov;
                    const namess =RecAccountDtl.data.getGroup.grpName;
                    const TtlActvLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlActvLonsTmsLnrChmCov;
                    const GrpLoanRpymntSync =RecAccountDtl.data.getGroup.GrpLoanRpymntSync;
                    
                    

                    
                              
                              const fetchMmbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtlxz:any = await API.graphql(
                                        graphqlOperation(getChamaMembers, {ChamaNMember: memberIds}),
                                        );
                                        
                                        const AmtRepaids =RecAccountDtlxz.data.getChamaMembers.AmtRepaid;
                                        const LnBals =RecAccountDtlxz.data.getChamaMembers.LnBal;
                                         
                                        
                                        const updtSendrAcLonOvr1 = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateSMAccount, {
                                                  input:{
                                                    awsemail:userInfo.attributes.email,
                                                    balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                                    MaxTymsBL:0 ,
                                                    TtlClrdLonsTmsLneeChmCov:parseFloat(TtlClrdLonsTmsLneeChmCovs)+1,                                          
                                                    TtlClrdLonsAmtLneeChmCov: (parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts)).toFixed(0), 
                                                    
                                                    
                                                  }
                                                })
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){
                                              Alert.alert("Repayment unsuccessful; Retry")
                                              return
                                            }
                                          }
                                          setIsLoading(false);
                                          await updtChmMbrTTlBlOvr();
                                        }

                                        const updtSendrAcLonOvr2 = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateSMAccount, {
                                                  input:{
                                                    awsemail:userInfo.attributes.email,
                                                    balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0) ,
                                                    MaxTymsBL:parseFloat(MaxTymsBLss)-1 ,
                                                    TtlClrdLonsTmsLneeChmCov:parseFloat(TtlClrdLonsTmsLneeChmCovs)+1,                                          
                                                    TtlClrdLonsAmtLneeChmCov: (parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts)).toFixed(0), 
                                                    TtlBLLonsTmsLneeChmCov: parseFloat(TtlBLLonsTmsLneeChmCovs) - 1,
                                                    TtlBLLonsAmtLneeChmCov: (parseFloat(TtlBLLonsAmtLneeChmCovs) - parseFloat(amounts)).toFixed(0)
                                                  }
                                                })
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){
                                              Alert.alert("Repayment unsuccessful; Retry")
                                              return
                                            }
                                          }
                                          setIsLoading(false);
                                          await updtChmMbrTTlBlOvr();
                                        }


                                        const updtChmMbrTTlBlOvr  = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateChamaMembers, {
                                                  input:{
                                                    ChamaNMember:memberIds,
                                                    AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(0) ,
                                                    LnBal: LonBalsss.toFixed(0)  ,
                                                    
                                                    
                                                }})
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){Alert.alert("Retry or update app or call customer care")
                                            return;}
                                          }
                                          setIsLoading(false);
                                          await updtSMCvLnLnOver();
                                        }

                                        
                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          loanID: route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(0),
                                          lonBala: (LonBalsss).toFixed(0),
                                          amountExpectedBackWthClrnc:LonBalsss.toFixed(0),
                                          DefaultPenaltyChm2:0,
                                          clearanceAmt:0,
                                          status: "LoanCleared",
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendNonLnLnOver();
                              }
                              
                              const sendNonLnLnOver = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        senderPhn: loaneePhnssss,
                                        recPhn: grpContactssss,  
                                        RecName:namess,
                                        loanId1: "route.params.id",
                                        loanId2: "route.params.id",
                                        loanId3: route.params.loanID,  
                                        SenderName:names,                                
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "ChmLonRepayment",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if(error){
                                    Alert.alert("Retry or update app or call customer care")
                                return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              };
                              
                             

                              
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                          GrpLoanRpymntSync: parseFloat(GrpLoanRpymntSync) + parseFloat(amounts).toFixed(0),
                                          grpBal:(parseFloat(RecUsrBal) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0),                                     
                                          
                                          TtlClrdLonsTmsLnrChmCov: parseFloat(TtlClrdLonsTmsLnrChmCovs) + 1,
                                          tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1,
                                          TtlClrdLonsAmtLnrChmCov: (parseFloat(TtlClrdLonsAmtLnrChmCovs) + parseFloat(amounts)).toFixed(0),
                                          
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
                                await updtCompLnOvr();
                              }
          
                              const updtCompLnOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt - parseFloat(DefaultPenaltyChm2s),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt - parseFloat(DefaultPenaltyChm2s),                                                    
                                          
                                          
                                          ttlChmLnsInClrdAmtCov: parseFloat(ttlChmLnsInClrdAmtCovs) + parseFloat(amounts) ,
                                          ttlChmLnsInClrdTymsCov: parseFloat(ttlChmLnsInClrdTymsCovs) + 1 ,
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Cleared. ClearanceFee: " +ClranceAmt.toFixed(2) + ". TransactionFee: "+( parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2) );
                                setIsLoading(false);
                              }    
                              
                              const updtChmMbrTTlBl  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateChamaMembers, {
                                        input:{
                                          ChamaNMember:memberIds,
                                          AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(0) ,
                                          LnBal: LonBalsss.toFixed(0) ,
                                          
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await repyCovLn();
                              }
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          loanID: route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(0),
                                          lonBala: (LonBalsss).toFixed(0),
                                          amountExpectedBackWthClrnc:LonBalsss.toFixed(0),
                                          DefaultPenaltyChm2:0,
                                          clearanceAmt:0
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
                                await updtSendrAc();
                              }
                              
                              
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
                                          
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(0),
                                                                               
                                          TtlClrdLonsAmtLneeChmCov: (parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts)).toFixed(0),                       
                                          
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
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                         
                                          GrpLoanRpymntSync: parseFloat(GrpLoanRpymntSync) + parseFloat(amounts).toFixed(0),
                                          TtlClrdLonsAmtLnrChmCov: (parseFloat(TtlClrdLonsAmtLnrChmCovs) + parseFloat(amounts)).toFixed(0),
                                          grpBal:(parseFloat(RecUsrBal) + (parseFloat(amounts) - parseFloat(clearanceAmts))).toFixed(0),                                     
                                          
                                          
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
                                          ttlChmLnsInClrdAmtCov: parseFloat(ttlChmLnsInClrdAmtCovs) + parseFloat(amounts) ,
                                          totalLnsRecovered: parseFloat(totalLnsRecovereds) + parseFloat(amounts) ,
                                          companyEarningBal:parseFloat(UsrTransferFee) * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt - parseFloat(DefaultPenaltyChm2s),
                                          companyEarning: parseFloat(UsrTransferFee) * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt - parseFloat(DefaultPenaltyChm2s),                                                    
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Partially repaid. Clearance: " +ClranceAmt.toFixed(2) + ". Transaction: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);

                                await sendCovLn();
                              }

                              const sendCovLn = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        recPhn: grpContactssss,
                                        senderPhn: userInfo.attributes.email,  
                                        RecName:namess,
                                        loanId3: route.params.loanID,  
                                        loanId1: "route.params.id",
                                        loanId2: "route.params.id",
                                        
                                        SenderName:names,                                  
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "ChmLonRepayment",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if(error){Alert.alert("Retry or update app or call customer care")
                                return;}
                                }
                                setIsLoading(false);
                                
                              };

                                                          
                                                    
                              
                              if(usrAcActvStts === "AccountInactive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              else if(usrAcActvSttss === "AccountInactive"){Alert.alert('Receiver account is inactive');
                              return;
                            }
                              
                              else if (
                                parseFloat(SenderUsrBal) < TotalTransacted 
                              ) {Alert.alert('Requested amount is more than you have in your account');
                            return;
                          }
                          
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(ClranceAmt > parseFloat(amounts) ){Alert.alert( "Too little repayment: at least "+ClranceAmt);
                          return;
                        }


                          else if(parseFloat(amounts) > parseFloat(LonBal1)){Alert.alert("Your Loan Balance is lesser: Ksh. "+LonBal1)}
                          

                          else if(parseFloat(amounts) === parseFloat(LonBal1)  && parseFloat(MaxTymsBLss) === parseFloat(maxBLss) )
                          {updtSendrAcLonOvr1();}          
                          
                          else if(parseFloat(amounts) === parseFloat(LonBal1)  && parseFloat(MaxTymsBLss) > parseFloat(maxBLss))
                          {updtSendrAcLonOvr2();} 
                              
                               else {
                                updtChmMbrTTlBl();
                              }

                            }
                            catch (e) {
                              console.log(e)
                              if (e){Alert.alert("Retry or update app or call customer care")
                              return;}
                          };
                        }
                      
                        await fetchMmbrDtls();
                          }
                          catch (e) {
                            console.log(e)
                            if (e){Alert.alert("Retry or update app or call customer care")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  console.log(e)
                  if (e){Alert.alert("Retry or update app or call customer care")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchSenderUsrDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
      setLnId("");
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

                             useEffect(() =>{
                              const LnIds=LnId
                                if(!LnIds && LnIds!=="")
                                {
                                  setLnId("");
                                  return;
                                }
                                setLnId(LnIds);
                                }, [LnId]
                                 );
    

                             

                                 

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill account Details Below</Text>
          </View>

        
          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
          </View>


          <View style={styles.sendAmtViewDesc}>
            <TextInput
              multiline={true}
              value={Desc}
              onChangeText={setDesc}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Description</Text>
          </View>
          
          

          <TouchableOpacity
            onPress={ftchCvdSMLn}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default RepayCovChmLnsss;
