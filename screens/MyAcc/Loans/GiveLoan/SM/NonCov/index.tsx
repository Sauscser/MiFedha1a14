import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansNonCovered,
  
  updateCompany,
  
  updateReqLoan,
  
  updateSMAccount,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  
  getCompany,
  getReqLoan,
  getSMAccount,
  
  listChamasNPwnBrkrs,
  listCovCreditSellers,
  listCvrdGroupLoans,
  listNonCovCreditSellers,
  listNonCvrdGroupLoans,
  listSMLoansCovereds,
  listSMLoansNonCovereds,
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

const SMASendNonCovLns = props => {
  
  const [RecPhn, setRecPhn] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [AdvRegNo, setAdvRegNo] = useState("");
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  const [SendrEmail, setSendrEmail] = useState(null);
  const [PwnBrkr, setPwnBrkr] = useState('');

  const navigation = useNavigation()

  const SndChmMmbrMny = () => {
    navigation.navigate("AutomaticRepayAllTyps")
 }
  
const route = useRoute();

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrEmail(userInfo.attributes.email);
  }

  useEffect(() => {
    fetchUser();
    }, []);  

  

    const fetchCvLnSM = async () => {
      setIsLoading(true);
      try {
        const Lonees1:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
          { filter: {
              and: {
                status: { eq: "LoanBL"},
                lonBala: { gt: 0},
                loaneePhn: { eq: SendrEmail},
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
                loaneePhn: { eq: SendrEmail},
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
                        buyerContact: { eq: SendrEmail},
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
                                buyerContact: { eq: SendrEmail},
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
                                        loaneePhn: { eq: SendrEmail},
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
                                                loaneePhn: { eq: SendrEmail},
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

        const loaneeEmail =accountDtlszs.data.getReqLoan.loaneeEmail;
        const loanerEml =accountDtlszs.data.getReqLoan.owner;
        const amount =accountDtlszs.data.getReqLoan.amount;
        const AmtExp =accountDtlszs.data.getReqLoan.repaymentAmt;
        const RepaymtPeriod =accountDtlszs.data.getReqLoan.repaymentPeriod;

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: SendrEmail}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const usrLnLim =accountDtl.data.getSMAccount.loanLimit;
      const TtlActvLonsTmsLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLnrNonCov;
      const TtlActvLonsAmtLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLnrNonCov;
      const TtlActvLonsTmsLneeCovs2 =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeNonCov;
      const TtlActvLonsAmtLneeCovs2 =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeNonCov;
      const names =accountDtl.data.getSMAccount.name;
      const SenderNatId =accountDtl.data.getSMAccount.nationalid;
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const TymsIHvGivnLns =accountDtl.data.getSMAccount.TymsIHvGivnLn;
      const TymsMyLnClrds =accountDtl.data.getSMAccount.TymsMyLnClrd;
      
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
          
          
          
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          
          
          const ttlSMLnsInAmtCovs = CompDtls.data.getCompany.ttlSMLnsInAmtNonCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtNonCov;
          const ttlSMLnsInTymsCovs = CompDtls.data.getCompany.ttlSMLnsInTymsNonCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsNonCov;  
          const maxInterestSMs = CompDtls.data.getCompany.maxInterestSM;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
          const Interest = ((parseFloat(AmtExp) - 
                parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod));
          
          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) )

          
          const maxInterestPwnBrkrs = CompDtls.data.getCompany.maxInterestPwnBrkr;
          const MaxSMInterest = (parseFloat(amount) +
          (parseFloat(userLoanTransferFees)*parseFloat(amount) ))*parseFloat(maxInterestSMs)*parseFloat(RepaymtPeriod);
          const MaxPwnBrkrInterest = (parseFloat(amount) + 
          (parseFloat(userLoanTransferFees)*parseFloat(amount) 
            ) )*parseFloat(maxInterestPwnBrkrs)*parseFloat(RepaymtPeriod);

          const ActualMaxSMInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) 
          );
          const ActualMaxPwnBrkrInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) 
          );
          const TransCost =  parseFloat(userLoanTransferFees)*parseFloat(amount) ;
          const TtlTransCost =  TransCost +  parseFloat(amount);
          const AllTtlCost = TtlTransCost + MaxPwnBrkrInterest

          
          
              

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
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                        const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                        const TtlActvLonsTmsLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrNonCov;
                        const TtlActvLonsAmtLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrNonCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;
                        const RecNatId =RecAccountDtl.data.getSMAccount.nationalid;

                        const confrmReg = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                            const compDtls :any= await API.graphql(
                              graphqlOperation(listChamasNPwnBrkrs,{ filter: {
                            
                                contact: { eq: SendrEmail}
                                              
                                }}))
                                
                                const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createSMLoansNonCovered, {
                                input: {
                                  loaneeid: RecNatId,
                                  loanerId: SenderNatId,
                                  loanerPhn:SendrEmail,
                                  loanerLoanee:SendrEmail+RecPhn,
                                  DefaultPenaltySM:DefaultPenaltySMs,
                                  DefaultPenaltySM2:0,
                                  loaneePhn: loaneeEmail,                                  
                                  amountgiven: parseFloat(amount).toFixed(0),
                                  amountexpected: AmtExp,
                                  amountExpectedBackWthClrnc:AmtExp,
                                  amountrepaid: 0,
                                  loaneename:namess,
                                  loanername:names,
                                  lonBala:parseFloat(AmtExp).toFixed(0),
                                  repaymentPeriod: RepaymtPeriod,
                                  
                                  description: Desc,
                                  status: "LoanActive",
                                  owner: ownr
                                },
                              }),
                            );


                          } catch (error) {
                            if(!error){
                              Alert.alert("Account deactivated successfully")
                              
                          } 
                          else{Alert.alert("Please check your internet connection")
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
                                    awsemail:SendrEmail,
                                    TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrCovs)+1,
                                    TtlActvLonsAmtLnrNonCov: (parseFloat(TtlActvLonsAmtLnrCovs) + parseFloat(AmtExp)).toFixed(0),
                                    TtlActvLonsTmsLneeNonCov: parseFloat(TtlActvLonsTmsLneeCovs2) +1 ,
                                    TtlActvLonsAmtLneeNonCov: (parseFloat(TtlActvLonsAmtLneeCovs2)+ parseFloat(AmtExp)).toFixed(0),                                        
                                    balance:(parseFloat(SenderUsrBal)-TtlTransCost).toFixed(0), 
                                    TymsIHvGivnLn: parseFloat(TymsIHvGivnLns) + 1,   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
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
                                    
                                    TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrCovs1)+1,
                                    TtlActvLonsAmtLnrNonCov: (parseFloat(TtlActvLonsAmtLnrCovs1) + parseFloat(AmtExp)).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount) ).toFixed(0),
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
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
                                        
                                    
                                    companyEarningBal:userLoanTransferFees * parseFloat(amount) + parseFloat(companyEarningBals),
                                    companyEarning: userLoanTransferFees * parseFloat(amount) + parseFloat(companyEarnings),                                                    
                                    
                                    ttlSMLnsInAmtNonCov: parseFloat(AmtExp) + parseFloat(ttlSMLnsInAmtCovs),
                                   
                                    ttlSMLnsInTymsNonCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                    
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          Alert.alert("U'v Loaned "+ namess +" "+amount+ ": TransactionFee:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) );
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
                        
                                              
                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        
                    

                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0){Alert.alert('Loanee ID be verified through deposit at MFNdogo');}

                    
                        else if((parseFloat(TymsIHvGivnLns) - parseFloat(TymsMyLnClrds)) > 4 
                    && compDtls.data.listChamasNPwnBrkrs.items.length < 1){Alert.alert("Call customer care to have limit increased");}

                    


                        else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(SendrEmail === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        
                        
                        else if (
                          parseFloat(SenderUsrBal) < TtlTransCost 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        
                        else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                        else if(ownr !==SenderSub){Alert.alert('You can only loan from your account');}
                        
                        else if(parseFloat(usrLnLim) < parseFloat(amount)){Alert.alert('Call ' + CompPhoneContact 
                        + ' to have your Loan limit adjusted');}
                        
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
                        if (e){Alert.alert("Check your internet connection")
        return;}                 
                      }
                      setIsLoading(false);
                      }                    
                        await confrmReg();   
                      
                      }       
                    catch(e) {     
                      if (e){Alert.alert("Check your internet connection")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await fetchRecUsrDtls();        
                    

            
          
        
        } catch (e) {
          if (e){Alert.alert("Check your internet connection")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
    } catch (e) {
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
           <Text style={styles.sendAmtButtonText}>Loan without Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default SMASendNonCovLns;