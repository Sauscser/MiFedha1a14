import React, {useEffect, useState} from 'react';

import {
    createCvrdGroupLoans,
  createFloatAdd,
  createNonCovCreditSeller,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateCompany,
  updateGroup,
  updateSAgent,
  updateSMAccount,
  
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  getGroup,
} from '../../../../../src/graphql/queries';

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

const ChmNonCovLns = props => {
  const [ChmPhn, setChmPhn] = useState('');
  const [RecNatId, setRecNatId] = useState('');
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
        graphqlOperation(getGroup, {grpContact: ChmPhn}),
      );

      const grpBals =accountDtl.data.getGroup.grpBal;
      const signitoryPWs =accountDtl.data.getGroup.signitoryPW;
      const statuss =accountDtl.data.getGroup.status;
      
      const TtlActvLonsTmsLnrChmNonCovs =accountDtl.data.getGroup.TtlActvLonsTmsLnrChmNonCov;
      const TtlActvLonsAmtLnrChmNonCovs =accountDtl.data.getGroup.TtlActvLonsAmtLnrChmNonCov;
      const grpNames =accountDtl.data.getGroup.grpName;
  
      const SenderSub =accountDtl.data.getGroup.owner;
      
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
          const CompCovFee =1- (parseFloat(CoverageFees)*parseFloat(AdvComs))
          const AdvCovAmt = parseFloat(AdvComs)*parseFloat(CoverageFees)*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)
                   
          
          const TotalTransacted = parseFloat(amount) + ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount);
             
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlChmLnsInAmtNonCovs = CompDtls.data.getCompany.ttlChmLnsInAmtNonCov;
          
          const ttlChmLnsInTymsNonCovs = CompDtls.data.getCompany.ttlChmLnsInTymsNonCov;
            
          const maxInterests = CompDtls.data.getCompany.maxInterest;          

          const maxBLss = CompDtls.data.getCompany.maxBLs;

          
          
          

              
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
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLneeChmNonCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmNonCov;
                        const TtlActvLonsAmtLneeChmNonCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmNonCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                      
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createNonCovCreditSeller, {
                                input: {
                                    grpContact: ChmPhn,
                                    loaneePhn: RecPhn,
                                    repaymentPeriod: RepaymtPeriod,
                                    amountGiven: amount,
                                    amountExpectedBack: AmtExp,
                                    amountRepaid: 0,
                                    description: Desc,
                                    lonBala:parseFloat(grpBals)-TotalTransacted,
                                    status: "LoanActive",
                                    owner: ownr,
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
                                graphqlOperation(updateGroup, {
                                  input:{
                                    phonecontact:ChmPhn,
                                    TtlActvLonsTmsLnrChmNonCov: parseFloat(TtlActvLonsTmsLnrChmNonCovs)+1,
                                    TtlActvLonsAmtLnrChmNonCov: parseFloat(TtlActvLonsAmtLnrChmNonCovs) + parseFloat(amount),
                                                                              
                                    grpBal:parseFloat(grpBals)-TotalTransacted 
                                   
                                    
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
                                    phonecontact:RecPhn,
                                    TtlActvLonsTmsLneeChmNonCov: parseFloat(TtlActvLonsTmsLneeChmNonCovs) +1 ,
                                    TtlActvLonsAmtLneeChmNonCov: parseFloat(TtlActvLonsAmtLneeChmNonCovs)+ parseFloat(amount),
                                    balance:parseFloat(RecUsrBal) + parseFloat(amount)  ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                                                      
                                    
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
                                        
                                    ttlCompCovEarnings:CompCovAmt + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:AdvCovAmt + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:AdvCovAmt + parseFloat(AdvEarnings),
                                    companyEarningBal:CompCovAmt + parseFloat(companyEarningBals),
                                    companyEarning: CompCovAmt + parseFloat(companyEarnings),                                                    
                                    
                                    ttlChmLnsInAmtNonCov: parseFloat(amount) + parseFloat(ttlChmLnsInAmtNonCovs),
                                    
                                    ttlChmLnsInTymsNonCov: 1 + parseFloat(ttlChmLnsInTymsNonCovs),
                                          
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          Alert.alert(grpNames + " loans " + namess +" Ksh. " + amount );
                          setIsLoading(false);
                          
                        }
                        
                                              
                        if (parseFloat(usrNoBL) > maxBLss){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== RecAccCode){Alert.alert('Please first get the Loanee consent to loan');
                      return;
                    }
                    else if(ownr !==SenderSub){Alert.alert('You are not the creator/signitory of this group');}
                        else if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(ChmPhn === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if((((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))) > maxInterests)
                        {Alert.alert('Your interest is too high');}
                        else if (
                          parseFloat(grpBals) < TotalTransacted 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        
                        else if(signitoryPWs !==SnderPW){Alert.alert('Wrong password');}
                                                                 
            
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
                      await fetchRecUsrDtls();        
                    

            
        } catch (e) {
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
      setChmPhn('');
      setAmount("");
      setRecNatId('');
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
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
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
             value={ChmPhn}
             onChangeText={setChmPhn}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Chama Phone</Text>
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
           <Text style={styles.sendAmtText}>Signitory PassWord</Text>
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
             multiline={true}
             value={RecAccCode}
             onChangeText={setRecAccCode}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Reciever Acceptance Code</Text>
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

export default ChmNonCovLns;