import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import SendSMS from 'react-native-sms';
import {
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateCompany,
  updateReqLoan,
  updateSAgent,
  updateSMAccount,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  
  listChamasNPwnBrkrs,
  listChamasRegConfirms,
  getReqLoan,
  listSMLoansCovereds,
  listSMLoansNonCovereds,
  listCovCreditSellers,
  listNonCovCreditSellers,
  listCvrdGroupLoans,
  listNonCvrdGroupLoans,
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
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const SMASendLns = props => {
 
  const [RecPhn, setRecPhn] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [Desc, setDesc] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  
  const [PwnBrkr, setPwnBrkr] = useState('');
  
  
  const route = useRoute();
  const navigation = useNavigation()
  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
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
                loaneePhn: { eq: userInfo.attributes.email},
              }
            }}
            ));

            const fetchNCLSM = async () => {
              setIsLoading(true);
              try {
                const Lonees2:any = await API.graphql(graphqlOperation(listSMLoansNonCovereds, 
                  { filter: {
                      and: {
                        status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneePhn: { eq: userInfo.attributes.email},
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

                            const fetchNCLCrdSl = async () => {
                              setIsLoading(true);
                              try {
                                const Lonees4:any = await API.graphql(graphqlOperation(listNonCovCreditSellers, 
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

                                            const fetchNCLChm = async () => {
                                              setIsLoading(true);
                                              try {
                                                const Lonees6:any = await API.graphql(graphqlOperation(listNonCvrdGroupLoans, 
                                                  { filter: {
                                                      and: {
                                                        status: { eq: "LoanBL"},
                                                lonBala: { gt: 0},
                                                loaneePhn: { eq: userInfo.attributes.email},
                                                      }
                                                    }}
                                                    ));



    const fetchLnReq = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
        const accountDtlszs:any = await API.graphql(
          graphqlOperation(getReqLoan, {id: route.params.id}),
        );

        const owner =accountDtlszs.data.getReqLoan.owner;
        const loaneeEmail =accountDtlszs.data.getReqLoan.loaneeEmail;
    
        const amount =accountDtlszs.data.getReqLoan.amount;
        const AmtExp =accountDtlszs.data.getReqLoan.repaymentAmt;
        const RepaymtPeriod =accountDtlszs.data.getReqLoan.repaymentPeriod;
        const DefaultPenaltyRate = parseFloat(PwnBrkr)/parseFloat(AmtExp) *100;
        const RecomDfltPnltyRate = (parseFloat(AmtExp)*20) / 100;

        
        const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const usrLnLim =accountDtl.data.getSMAccount.loanLimit;
      const TtlActvLonsTmsLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
      const TtlActvLonsAmtLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;
      const TtlActvLonsTmsLneeCovs2 =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov;                        
      const TtlActvLonsAmtLneeCovs2 =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeCov;

      const names =accountDtl.data.getSMAccount.name;
      const SenderNatId =accountDtl.data.getSMAccount.nationalid;
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const TymsIHvGivnLns =accountDtl.data.getSMAccount.TymsIHvGivnLn;
      const TymsMyLnClrds =accountDtl.data.getSMAccount.TymsMyLnClrd;

      const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)
      
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
          
          const userLoanTransferFees = CompDtls.data.getCompany.userLoanTransferFee;
          const AdvComs = CompDtls.data.getCompany.AdvCom;
          const CoverageFees = CompDtls.data.getCompany.CoverageFee;
          const AdvCompanyComs = CompDtls.data.getCompany.AdvCompanyCom;
          const AdvCovFee =(parseFloat(CoverageFees)*parseFloat(AdvComs))
          const CompCovFee = parseFloat(CoverageFees)*parseFloat(AdvCompanyComs);
          const AdvCovAmt = AdvCovFee*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)
                   
          const CompanyTotalEarnings = CompCovFee*parseFloat(amount) + parseFloat(userLoanTransferFees)*parseFloat(amount)
          
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlSMLnsInAmtCovs = CompDtls.data.getCompany.ttlSMLnsInAmtCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtCov;
          const ttlSMLnsInTymsCovs = CompDtls.data.getCompany.ttlSMLnsInTymsCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsCov;       
          const maxInterestSMs = CompDtls.data.getCompany.maxInterestSM;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
        
          
          
          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) + ttlCovFeeAmount)

          
          const phoneContacts = CompDtls.data.getCompany.phoneContact;
          const maxInterestPwnBrkrs = CompDtls.data.getCompany.maxInterestPwnBrkr;
          const MaxSMInterest = (parseFloat(AmtExp) -  
              (parseFloat(userLoanTransferFees)*parseFloat(amount) 
              + ttlCovFeeAmount) )*parseFloat(maxInterestSMs)*parseFloat(RepaymtPeriod);
          const MaxPwnBrkrInterest = (parseFloat(amount) +  
          (parseFloat(userLoanTransferFees)*parseFloat(amount) 
          + ttlCovFeeAmount) )*parseFloat(maxInterestPwnBrkrs)*parseFloat(RepaymtPeriod);
          const ActualMaxSMInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
          ttlCovFeeAmount);
          const ActualMaxPwnBrkrInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
          ttlCovFeeAmount);
          
          const TtlTransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount);
          const AllTtlCost = TtlTransCost + (parseFloat(AmtExp)-parseFloat(amount));
          const TotalAmtExp = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + parseFloat(AmtExp);

          
          
          const fetchAdv = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{

              const AdvDtls:any = await API.graphql(
                graphqlOperation(getAdvocate,
                  {advregnu: AdvRegNo}),
                  
              );
              const advTtlAern = AdvDtls.data.getAdvocate.TtlEarnings;
              const advBl = AdvDtls.data.getAdvocate.advBal;
              const advStts = AdvDtls.data.getAdvocate.status;
              const namesssssss = AdvDtls.data.getAdvocate.name;
              

              const fetchRecUsrDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSMAccount, {awsemail: loaneeEmail}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const RecNatId =RecAccountDtl.data.getSMAccount.nationalid;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact; 
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const TtlActvLonsTmsLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
                        const TtlActvLonsAmtLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                        const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;


                        
                      
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createSMLoansCovered, {
                                input: {
                                  loaneeid: RecNatId,
                                  loanerId: SenderNatId,
                                  loanerPhn:userInfo.attributes.email,
                                  loaneePhn: loaneeEmail,  
                                  loanerLoanee:userInfo.attributes.email+RecPhn,
                                  loanerLoaneeAdv:  userInfo.attributes.email+RecPhn+ AdvRegNo ,                          
                                  amountgiven: parseFloat(amount).toFixed(0),
                                  loaneename:namess,
                                  loanername:names,
                                  amountexpected: TotalAmtExp.toFixed(0),
                                  amountExpectedBackWthClrnc:TotalAmtExp.toFixed(0),
                                  DefaultPenaltySM:PwnBrkr,
                                  DefaultPenaltySM2:0,
                                  amountrepaid: 0,
                                  timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                  timeExpBack2: 61 + daysUpToDate,
                                  lonBala:TotalAmtExp.toFixed(0),
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: AdvRegNo,
                                  description: Desc,
                                  status: "LoanActive",
                                  owner: userInfo.attributes.sub
                                },
                              }),
                            );


                          } catch (error) {
                            console.log(error)
                            if(error){Alert.alert("Please check your internet connection")
                          return;}
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
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs) + TotalAmtExp).toFixed(0),
                                    TtlActvLonsTmsLneeCov: parseFloat(TtlActvLonsTmsLneeCovs2) +1 ,
                                    TtlActvLonsAmtLneeCov: (parseFloat(TtlActvLonsAmtLneeCovs2)+ TotalAmtExp).toFixed(0),
                                    TymsIHvGivnLn: parseFloat(TymsIHvGivnLns) + 1,                                       
                                    balance:(parseFloat(SenderUsrBal)-TtlTransCost).toFixed(0) 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Check your internet connection")
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
                                    awsemail:loaneeEmail,
                                    
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs1)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs1) + TotalAmtExp).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount) ).toFixed(0) ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                 
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Check your internet connection")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings:CompCovAmt + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:AdvCovAmt + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:AdvCovAmt + parseFloat(AdvEarnings),
                                    companyEarningBal:CompanyTotalEarnings + parseFloat(companyEarningBals), 
                                    
                                    companyEarning: CompanyTotalEarnings + parseFloat(companyEarnings),                    
                                   
                                    ttlSMLnsInAmtCov: TotalAmtExp + parseFloat(ttlSMLnsInAmtCovs),
                                    
                                    ttlSMLnsInTymsCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          setIsLoading(false);
                          await updtAdv();
                        }

                        const updtAdv = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateAdvocate, {
                                  input:{
                                    advregnu: AdvRegNo,
                                    advBal: (AdvCovAmt + parseFloat(advBl)).toFixed(0) ,
                                    TtlEarnings:(AdvCovAmt + parseFloat(advTtlAern)).toFixed(0),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Check your internet connection")
      return;}
                          }
                          Alert.alert("Success. AdvocateFee:" +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) 
                          + ", TransactionFee:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2)
                          );
                          setIsLoading(false);
                          await updtRecAc3();
                        }


                        const updtRecAc3 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoan, {
                                  input:{
                                    id:route.params.id,
                                    status:"Approved"                  
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            
                          }
                          
                          setIsLoading(false);
                          
                        }
                        

                        
                                              
                        if (userInfo.attributes.sub!==SenderSub) {
                          Alert.alert("Please first create a main account")
                          return;
                        }  else if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        

                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0)
                    {Alert.alert('Loanee ID be verified through deposit at MFNdogo');}

                    else if((parseFloat(TymsIHvGivnLns) - parseFloat(TymsMyLnClrds)) > 4 
                    ){Alert.alert("Call customer care to have limit increased");}

                   

                        else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(userInfo.attributes.email === loaneeEmail){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        
                        else if (
                          parseFloat(SenderUsrBal) < TtlTransCost 
                        ) {Alert.alert("Cancelled."+ "Bal: "+ SenderUsrBal +". Deductable: " + TtlTransCost.toFixed(2) 
                        + ". "+ ((TtlTransCost) - parseFloat(SenderUsrBal)).toFixed(2) + ' more needed');}
                        else if(advStts !=="AccountActive"){Alert.alert('Advocate Account is inactive');}
                        else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                        else if((DefaultPenaltyRate) > 20)
                    {Alert.alert('Please enter Default Penalty less than ' + RecomDfltPnltyRate);
                      return;
                    }
                        else if(userInfo.attributes.sub !==SenderSub){Alert.alert('You can only loan from your account');}
                        
                        else if(parseFloat(usrLnLim) < parseFloat(amount)){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');}
                        else if (Lonees1.data.listSMLoansCovereds.items.length > 0 
                          ||
                          Lonees2.data.listSMLoansNonCovereds.items.length > 0 
                          ||
                          Lonees3.data.listCovCreditSellers.items.length > 0 
                          ||
                          Lonees4.data.listNonCovCreditSellers.items.length > 0 
                          ||
                          Lonees5.data.listCvrdGroupLoans.items.length > 0 
                          ||
                          Lonees6.data.listNonCvrdGroupLoans.items.length > 0 
                          
    
                        
                          ) {
                            SndChmMmbrMny();
                        } 
                         else {
                          sendSMLn();
                        }                                                
                   
                   
                   
                    
                      }       
                    catch(e) {     
                      console.log(e)
                      if (e){Alert.alert("Check your internet connection")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await fetchRecUsrDtls();        
                    

            }
            catch (e){
              console.log(e)
              if (e){Alert.alert("Advocate not registered")
      return;}
            }
            setIsLoading(false);
          }
          
          await fetchAdv();

          
        
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Check your internet connection")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Check your internet connection")
  return;}
    } 
    setIsLoading(false);       
  };
  await fetchSenderUsrDtls();

} catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
return;}
} 
setIsLoading(false);       
};
await fetchLnReq();
}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
  return;}
     
}   
setIsLoading(false);
};

await fetchNCLChm();

}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
  return;}
     
}   
setIsLoading(false);
};

await fetchCLChm();

}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
  return;}
     
}   
setIsLoading(false);
};

await fetchNCLCrdSl();

}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
  return;}
     
}   
setIsLoading(false);
};

await fetchCLCrdSl();

}     
catch (e) {
  console.log(e)
  if (e){Alert.alert("Check your internet connection")
  return;}
     
}   
setIsLoading(false);
};

await fetchNCLSM();
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Please fill details correctly or check your internet connection")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
      setRecPhn("");
      setPwnBrkr("")
}

useEffect(() =>{
  const PwnBrkrs=PwnBrkr
    if(!PwnBrkrs && PwnBrkrs!=="")
    {
      setPwnBrkr("");
      return;
    }
    setPwnBrkr(PwnBrkrs);
    }, [PwnBrkr]
     );
     
     useEffect(() =>{
  const RecPhns=RecPhn
    if(!RecPhns && RecPhns!=="")
    {
      setRecPhn("");
      return;
    }
    setRecPhn(RecPhns);
    }, [RecPhn]
     );
     
     

     useEffect(() =>{
      const amt=amount
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amount]
         );

         

             useEffect(() =>{
              const AdvRegNoss=AdvRegNo
                if(!AdvRegNoss && AdvRegNoss!=="")
                {
                  setAdvRegNo("");
                  return;
                }
                setAdvRegNo(AdvRegNoss);
                }, [AdvRegNo]
                 );

                 useEffect(() =>{
                  const AmtExpss=AmtExp
                    if(!AmtExpss && AmtExpss!=="")
                    {
                      setAmtExp("");
                      return;
                    }
                    setAmtExp(AmtExpss);
                    }, [AmtExp]
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
                              const RepaymtPeriods=RepaymtPeriod
                                if(!RepaymtPeriods && RepaymtPeriods!=="")
                                {
                                  setRepaymtPeriod("");
                                  return;
                                }
                                setRepaymtPeriod(RepaymtPeriods);
                                }, [RepaymtPeriod]
                                 );

                                 useEffect(() =>{
                                  const RecAccCodes=RecAccCode
                                    if(!RecAccCodes && RecAccCodes!=="")
                                    {
                                      setRecAccCode("");
                                      return;
                                    }
                                    setRecAccCode(RecAccCodes);
                                    }, [RecAccCode]
                                     );

  return (
    
      <View style={styles.image}>
        <ScrollView >
         
         <View style={styles.amountTitleView}>
           <Text style={styles.title}>Fill Loan Details Below</Text>
         </View>

         

         <View style={styles.sendAmtView}>
           <TextInput
           placeholder='Penalty if Defaulted'
           keyboardType={"decimal-pad"}
             value={PwnBrkr}
             onChangeText={setPwnBrkr}
             style={styles.sendAmtInput}
             editable={true}
             ></TextInput>
          
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
           placeholder='Advocate License Number'
             value={AdvRegNo}
             onChangeText={setAdvRegNo}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           
         </View>

         <View style={styles.sendAmtViewDesc}>
           <TextInput
           placeholder='Loan Description'
             multiline={true}
             value={Desc}
             onChangeText={setDesc}
             style={styles.sendAmtInputDesc}
             editable={true}></TextInput>
           
         </View>

         
         <View style={styles.sendAmtView}>
           <TextInput
           placeholder='Sender PassWord'
             value={SnderPW}
             onChangeText={setSnderPW}
             secureTextEntry = {true}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           
         </View>

         <TouchableOpacity
           onPress={fetchCvLnSM}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Loan with Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default SMASendLns;