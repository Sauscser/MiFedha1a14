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
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  getSmAccount,
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
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const SMASendLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);

  const [RecAccCode, setRecAccCode] = useState("");
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  

  



  const fetchSenderUsrDtls = async () => {
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSmAccount, {nationalid: SenderNatId}),
      );

      const SenderUsrBal =accountDtl.data.getSmAccount.balance;
      const usrPW =accountDtl.data.getSmAccount.pw;
      const usrAcActvStts =accountDtl.data.getSmAccount.acStatus;
      const usrLnLim =accountDtl.data.getSmAccount.loanLimit;
      const TtlActvLonsTmsLnrNonCovs =accountDtl.data.getSmAccount.TtlActvLonsTmsLnrNonCov;
      const TtlActvLonsAmtLnrNonCovs =accountDtl.data.getSmAccount.TtlActvLonsAmtLnrNonCov;
  
      const SenderSub =accountDtl.data.getSMAccount.owner;
      
      const fetchCompDtls = async () => {
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
        
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          const TotalTransacted = parseFloat(amount)  + parseFloat(UsrTransferFee)*parseFloat(amount);
          const CompErningBal = CompDtls.data.getCompany.companyEarningBal;
          const CompTtlErningBal = CompDtls.data.getCompany.companyEarning;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;
          const ttlCompEarningss = CompDtls.data.getCompany.ttlCompEarnings;

          const ttlSMLnsInAmtNonCovs = CompDtls.data.getCompany.ttlSMLnsInAmtNonCov;
          const ttlSMLnsInActvAmtNonCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtNonCov;
          const ttlSMLnsInTymsNonCovs = CompDtls.data.getCompany.ttlSMLnsInTymsNonCov;
          const ttlSMLnsInActvTymsNonCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsNonCov;

          const maxInterests = CompDtls.data.getCompany.maxInterest;

          const fetchRecUsrDtls = async () => {
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSmAccount, {nationalid: RecNatId}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSmAccount.balance;
                    const usrNoBL =RecAccountDtl.data.getSmAccount.MaxTymsBL;
                    const usrAcActvStts =RecAccountDtl.data.getSmAccount.acStatus; 
                    const recAcptncCode =RecAccountDtl.data.getSmAccount.loanAcceptanceCode; 
                    const TtlActvLonsTmsLneeNonCovs =RecAccountDtl.data.getSmAccount.TtlActvLonsTmsLneeNonCov;
                    const TtlActvLonsAmtLneeNonCovs =RecAccountDtl.data.getSmAccount.TtlActvLonsAmtLneeNonCov;
                  
                    const sendSMLn = async () => {
                      try {
                        await API.graphql(
                          graphqlOperation(createSMLoansNonCovered, {
                            input: {
                              loaneeid: RecNatId,
                              loanerId: SenderNatId,                                  
                              amountgiven: amount,
                              amountexpected: AmtExp,
                              amountrepaid: 0,
                              loanerPW: SnderPW,
                              repaymentPeriod: RepaymtPeriod,
                             
                              description: Desc,
                              status: "LoanActive",
                              owner: ownr
                            },
                          }),
                        );
                        const updtSendrAc = async () =>{
                          try{
                              await API.graphql(
                                graphqlOperation(updateSMAccount, {
                                  input:{
                                    nationalid:SenderNatId,
                                    TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrNonCovs)+1,
                                        TtlActvLonsAmtLnrNonCov: parseFloat(TtlActvLonsAmtLnrNonCovs) + parseFloat(amount),                                          
                                    balance:parseFloat(SenderUsrBal)-TotalTransacted 
                                   
                                    
                                  }
                                })
                              )

                              const updtRecAc = async () =>{
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          nationalid:RecNatId,
                                          TtlActvLonsTmsLneeNonCov: parseFloat(TtlActvLonsTmsLneeNonCovs) +1 ,
                                              TtlActvLonsAmtLneeNonCov: parseFloat(TtlActvLonsAmtLneeNonCovs)+ parseFloat(amount),
                                          balance:parseFloat(RecUsrBal) + parseFloat(amount)                                     
                                          
                                                                            
                                          
                                        }
                                      })
                                    )
                                    const updtComp = async () =>{
                                      try{
                                          await API.graphql(
                                            graphqlOperation(updateCompany, {
                                              input:{
                                                AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                                
                                                ttlCompEarnings:TotalTransacted + parseFloat(ttlCompEarningss),                                               
                                                companyEarningBal:TotalTransacted + parseFloat(CompErningBal),
                                                companyEarning: TotalTransacted + parseFloat(CompTtlErningBal),    
                                                ttlSMLnsInAmtNonCov: parseFloat(amount) + parseFloat(ttlSMLnsInAmtNonCovs),
                                                ttlSMLnsInActvAmtNonCov: parseFloat(amount) + parseFloat(ttlSMLnsInActvAmtNonCovs),
                                                ttlSMLnsInTymsNonCov: 1 + parseFloat(ttlSMLnsInTymsNonCovs),
                                                ttlSMLnsInActvTymsNonCov: 1 + parseFloat(ttlSMLnsInActvTymsNonCovs),                                     
                                                
                                              }
                                            })
                                          )

                                      }
                                      catch(error){
      
                                      }
                                    }
                                    await updtComp();
                                }
                                catch(error){

                                }
                              }
                              await updtRecAc();
                          }
                          catch(error){

                          }
                        }
                        await updtSendrAc();

                      } catch (error) {
                        
                      }
                    };

                    if (usrNoBL > 1){Alert.alert('You have exceeded number of times you maybe blacklisted; kindly clear these loans');}
                    else if(recAcptncCode !== RecAccCode){Alert.alert('Please first get the Loanee consent to loan');}
                    else if(usrAcActvStts !== "AccountActive"){Alert.alert('Your account is inactive');}
                    else if((((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))) > maxInterests)
                    {Alert.alert('Your interest is too high');}
                    
                     else {
                      await sendSMLn();
                    }
                    
                


                      
                }
    
                catch(e) {
                  
                }
                }

                if (
                  SenderUsrBal < TotalTransacted 
                ) {Alert.alert('Requested amount is more than you have in your account');}
               
                else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                else if(ownr !==SenderSub){Alert.alert('Please send from your own  account');}
                else if(usrAcActvStts !=="AccountActive"){Alert.alert('Your account is inactive');}
                else if(usrLnLim < amount){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');}
                  
                 else {
                  await fetchRecUsrDtls();
                }
    
                useEffect(() => {
                    fetchRecUsrDtls();
                    }, []);
        
        } catch (e) {
          console.log(e);
        }
          
        
      };
      await fetchCompDtls();
    
      useEffect(() => {
        fetchCompDtls();
      }, []);
      



      
      
    } catch (e) {
     
  };
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
}

  useEffect(() => {
    fetchSenderUsrDtls();
  }, []);
  

  

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
              value={AmtExp}
              onChangeText={setAmtExp}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Amount Expected Back</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={RepaymtPeriod}
              onChangeText={setRepaymtPeriod}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Repayment Period</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              multiline={true}
              value={RecAccCode}
              onChangeText={setRecAccCode}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Sender Acceptance Code</Text>
          </View>

          <View style={styles.sendAmtView}>
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
            <Text style={styles.sendAmtButtonText}>
              Loan without Advocate
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SMASendLns;