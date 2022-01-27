import React, {useEffect, useState} from 'react';

import {
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateCompany,
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
} from '../../../../../../src/graphql/queries';

import {useNavigation} from '@react-navigation/native';

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
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  const [SendrPhn, setSendrPhn] = useState(null);
  const [PwnBrkr, setPwnBrkr] = useState('');
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrPhn(userInfo.attributes.phone_number);
  }

  useEffect(() => {
    fetchUser();
    }, []);  

  



  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: SendrPhn}),
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
          ttlCovFeeAmount)
          const TransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + vatFee
          const TtlTransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + vatFee + parseFloat(amount)
          
          
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
                        graphqlOperation(getSMAccount, {phonecontact: RecPhn}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const RecNatId =RecAccountDtl.data.getSMAccount.nationalid;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const TtlActvLonsTmsLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
                        const TtlActvLonsAmtLnrCovs1 =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;


                        const confrmReg = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                            const compDtls :any= await API.graphql(
                              graphqlOperation(listChamasNPwnBrkrs,{ filter: {
                            
                                contact: { eq: SendrPhn}
                                              
                                }}))

                                
                      
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
                                  loanerPhn:SendrPhn,
                                  loaneePhn: RecPhn,  
                                  loanerLoanee:SendrPhn+RecPhn,
                                  loanerLoaneeAdv:  SendrPhn+RecPhn+ AdvRegNo ,                          
                                  amountgiven: parseFloat(amount).toFixed(2),
                                  loaneename:namess,
                                  loanername:names,
                                  amountexpected: AmtExp,
                                  amountExpectedBackWthClrnc:AmtExp,
                                  DefaultPenaltySM:PwnBrkr,
                                  DefaultPenaltySM2:0,
                                  amountrepaid: 0,
                                  lonBala:parseFloat(AmtExp).toFixed(2),
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: AdvRegNo,
                                  description: Desc,
                                  status: "LoanActive",
                                  owner: ownr
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
                                    phonecontact:SendrPhn,
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs) + parseFloat(AmtExp)).toFixed(2),
                                    TtlActvLonsTmsLneeCov: parseFloat(TtlActvLonsTmsLneeCovs2) +1 ,
                                    TtlActvLonsAmtLneeCov: (parseFloat(TtlActvLonsAmtLneeCovs2)+ parseFloat(AmtExp)).toFixed(2),
                                    TymsIHvGivnLn: parseFloat(TymsIHvGivnLns) + 1,                                       
                                    balance:(parseFloat(SenderUsrBal)-TtlTransCost).toFixed(2) 
                                   
                                    
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
                                    phonecontact:RecPhn,
                                    
                                    TtlActvLonsTmsLnrCov: parseFloat(TtlActvLonsTmsLnrCovs1)+1,
                                    TtlActvLonsAmtLnrCov: (parseFloat(TtlActvLonsAmtLnrCovs1) + parseFloat(AmtExp)).toFixed(2),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount) ).toFixed(2) ,
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
                                   
                                    ttlSMLnsInAmtCov: parseFloat(AmtExp) + parseFloat(ttlSMLnsInAmtCovs),
                                    
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
                                    advBal: (AdvCovAmt + parseFloat(advBl)).toFixed(2) ,
                                    TtlEarnings:(AdvCovAmt + parseFloat(advTtlAern)).toFixed(2),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Check your internet connection")
      return;}
                          }
                          Alert.alert("Coverage:" +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) 
                          + ", Transaction:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2)
                          );
                          setIsLoading(false);
                        }
                                              
                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== SendrPhn){Alert.alert('Let Loanee first request Loan');
                      return;
                    }

                    else if(parseFloat(TtlActvLonsTmsLnrCovss) !== parseFloat(amount)){Alert.alert('Enter the agreed amount');
                      return;
                    }

                    else if(parseFloat(ttlDpstSMs) === 0){Alert.alert('Loanee ID be verified through deposit at MFNdogo');}

                    else if((parseFloat(TymsIHvGivnLns) - parseFloat(TymsMyLnClrds)) > 4 
                    && compDtls.data.listChamasNPwnBrkrs.items.length < 1){Alert.alert("Call customer care to have limit increased");}

                    else if(parseFloat(TtlActvLonsTmsLneeCovss) !== parseFloat(RepaymtPeriod)){Alert.alert('Enter agreed repayment period');
                      return;
                    }

                        else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(SendrPhn === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if(TtlTransCost > parseFloat(AmtExp)){Alert.alert('Amount expected Back must at least be greater');
                      return;}

                      else if(parseFloat(DefaultPenaltySMs) !== parseFloat(PwnBrkr)){Alert.alert('Enter the agreed default penalty');
                      return;}

                        else if(compDtls.data.listChamasNPwnBrkrs.items.length < 1 && parseFloat(AmtExp) > TtlTransCost)
                        {Alert.alert("Friend-Friend Loans can't earn interest. Repayment: Ksh. "  + TtlTransCost);}

                        else if(compDtls.data.listChamasNPwnBrkrs.items.length = 1 && parseFloat(RepaymtPeriod) < 60)
                        {Alert.alert("Repayment period must be greater than 60 days");}

                        else if(ActualMaxPwnBrkrInterest > MaxPwnBrkrInterest)
                        {Alert.alert('Interest too high:' + ActualMaxPwnBrkrInterest.toFixed(2) + "; Recom SI: Ksh. " + (MaxPwnBrkrInterest).toFixed(2));}
                        else if (
                          parseFloat(SenderUsrBal) < TtlTransCost 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        else if(advStts !=="AccountActive"){Alert.alert('Advocate Account is inactive');}
                        else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                        else if(ownr !==SenderSub){Alert.alert('You can only loan from your account');}
                        
                        else if(parseFloat(usrLnLim) < parseFloat(amount)){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');}
                        
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
                        await confrmReg();        
                    
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
}

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
           placeholder="+2547xxxxxxxx"
             value={RecPhn}
             onChangeText={setRecPhn}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Receiver Phone</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
             value={SnderPW}
             onChangeText={setSnderPW}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Sender PassWord</Text>
         </View>


         <View style={styles.sendAmtView}>
           <TextInput
           keyboardType={"decimal-pad"}
             value={amount}
             onChangeText={setAmount}
             style={styles.sendAmtInput}
             editable={true}
             ></TextInput>
             
           <Text style={styles.sendAmtText}>Amount Loaned</Text>
         </View>

                  
         <View style={styles.sendAmtView}>
           <TextInput
           keyboardType={"decimal-pad"}
             value={AmtExp}
             onChangeText={setAmtExp}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Amount Expected Back</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
           keyboardType={"decimal-pad"}
             value={RepaymtPeriod}
             onChangeText={setRepaymtPeriod}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Repayment Period in days</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
           keyboardType={"decimal-pad"}
             value={PwnBrkr}
             onChangeText={setPwnBrkr}
             style={styles.sendAmtInput}
             editable={true}
             ></TextInput>
             
           <Text style={styles.sendAmtText}>Default Penalty</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
             value={AdvRegNo}
             onChangeText={setAdvRegNo}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Advocate Reg Number</Text>
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
           onPress={fetchSenderUsrDtls}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Loan with Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default SMASendLns;