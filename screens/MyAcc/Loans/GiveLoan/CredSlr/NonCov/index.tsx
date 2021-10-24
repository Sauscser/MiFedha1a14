import React, {useEffect, useState} from 'react';

import {
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  createSMLoansNonCovered,
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
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const SMASendNonCovLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  


  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {nationalid: SenderNatId}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const usrLnLim =accountDtl.data.getSMAccount.loanLimit;
      const TtlActvLonsTmsLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov;
      const TtlActvLonsAmtLnrCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLnrCov;       
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const names =accountDtl.data.getSMAccount.name;
      
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
          
          const TtlCovRateCovRate = CompDtls.data.getCompany.userTransferFee;
          const AdvCovRateofTtlCovRate = CompDtls.data.getCompany.AdvCom;
          const AdvCovRate = parseFloat(AdvCovRateofTtlCovRate)*parseFloat(TtlCovRateCovRate)
          const CompErningFrmCovrgFee = parseFloat(TtlCovRateCovRate) - AdvCovRate;
          const UsrCovFee = AdvCovRate * parseFloat(amount) + (CompErningFrmCovrgFee)*parseFloat(amount);          
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const TotalTransacted = parseFloat(amount) + UsrCovFee + parseFloat(UsrTransferFee)*parseFloat(amount);
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
          const maxInterests = CompDtls.data.getCompany.maxInterest;
          
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {nationalid: RecNatId}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                    const namess =RecAccountDtl.data.getSMAccount.name;
                    const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                    const TtlActvLonsTmsLneeCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov;
                    const TtlActvLonsAmtLneeCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLneeCov;
                    
                  
                    const sendSMLn = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createSMLoansNonCovered, {
                            input: {
                              loaneeid: RecNatId,
                              loanerId: SenderNatId,                                  
                              amountgiven: amount,
                              amountexpected: AmtExp,
                              amountrepaid: 0,
                              lonBala:0,
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
                                nationalid:SenderNatId,
                                TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrCovs)+1,
                                TtlActvLonsAmtLnrNonCov: parseFloat(TtlActvLonsAmtLnrCovs) + parseFloat(amount),
                                                                          
                                balance:parseFloat(SenderUsrBal)-TotalTransacted 
                               
                                
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
                                nationalid:RecNatId,
                                TtlActvLonsTmsLneeNonCov: parseFloat(TtlActvLonsTmsLneeCovs) +1 ,
                                TtlActvLonsAmtLneeNonCov: parseFloat(TtlActvLonsAmtLneeCovs)+ parseFloat(amount),
                                loanStatus:"LoanActive",
                                balance:parseFloat(RecUsrBal) + parseFloat(amount)                                     
                                
                                                                  
                                
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
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany, {
                              input:{
                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                    
                                ttlCompCovEarnings:(CompErningFrmCovrgFee) * parseFloat(amount) + parseFloat(ttlCompCovEarningss),
                                AdvEarningBal:(AdvCovRate) * parseFloat(amount) + parseFloat(AdvEarningBals),                                                                                                                                                     
                                AdvEarning:(AdvCovRate) * parseFloat(amount) + parseFloat(AdvEarnings),
                                companyEarningBal:CompErningFrmCovrgFee * parseFloat(amount) + parseFloat(companyEarningBals),
                                companyEarning: CompErningFrmCovrgFee * parseFloat(amount) + parseFloat(companyEarnings),                                                    
                                
                                ttlSMLnsInAmtNonCov: parseFloat(amount) + parseFloat(ttlSMLnsInAmtCovs),
                                ttlSMLnsInActvAmtNonCov: parseFloat(amount) + parseFloat(ttlSMLnsInActvAmtCovs),
                                ttlSMLnsInTymsNonCov: 1 + parseFloat(ttlSMLnsInTymsCovs),
                                ttlSMLnsInActvTymsNonCov: 1 + parseFloat(ttlSMLnsInActvTymsCovs),      
                                
                                 
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        if (error){Alert.alert("Check your internet connection")
                    return;}
                      }
                      Alert.alert(names + " has loaned " + namess +" Ksh. " + amount ); 
                      setIsLoading(false);
                    }
                    
                                          
                    if (parseFloat(usrNoBL) > 1){Alert.alert('Receiver does not qualify');
                  return
                }
                    else if(recAcptncCode !== RecAccCode){Alert.alert('Please first get the Loanee consent to loan');
                  return;
                }
                    else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');
                  return;
                }
                    else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
                  return;
                }
                else if(SenderNatId === RecNatId){Alert.alert('You cannot Loan Yourself');}
                    else if((((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))) > parseFloat(maxInterests))
                    {Alert.alert('Your interest is too high');
                  return;
                }
                    else if (
                      parseFloat(SenderUsrBal) < TotalTransacted 
                    ) {Alert.alert('Requested amount is more than you have in your account');
                  return;
                }
                    
                    else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                  return;
                }
                    else if(ownr !==SenderSub){Alert.alert('Please send from your own  account');
                  return;
                }
                    
                    else if(parseFloat(usrLnLim) < parseFloat(amount)){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');
                  return;
                }
                    
                     else {
                      sendSMLn();
                    }                                                
                }       
                catch(e) {     
                  if (e){Alert.alert("Receiver does not exist");
                  
            
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
      if (e){Alert.alert("Sender does not exist")
      return;}
  };
      setIsLoading(false);
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
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
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill Loan Details Below</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={SenderNatId}
              onChangeText={setSenderNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender National Id</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={RecNatId}
              onChangeText={setRecNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Receiver National Id</Text>
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
              value={SnderPW}
              onChangeText={setSnderPW}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender PassWord</Text>
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
            <Text style={styles.sendAmtButtonText}>Loan without Advocate Coverage</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default SMASendNonCovLns;