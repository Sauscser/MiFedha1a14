import React, {useEffect, useState} from 'react';

import {
  createCovCreditSeller,
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

const NonCovCredSls = props => {
  const [SenderNatId, setSenderNatId] = useState('');
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
  const [ItmNm, setItmNm] = useState("");
  const [ItmSrlNu, setItmSrlNu] = useState("");
  

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
      const TtlActvLonsTmsSllrNonCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsSllrNonCov;
      const TtlActvLonsAmtSllrNonCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtSllrNonCov;
      const names =accountDtl.data.getSMAccount.name;
  
      const SenderSub =accountDtl.data.getSMAccount.owner;
      
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
          const TotalTransacted = parseFloat(amount) + parseFloat(userLoanTransferFees)*parseFloat(amount);
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          
          const ttlSellerLnsInAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInAmtCov;
          
          const ttlSellerLnsInTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInTymsCov;
          const ttlSellerLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInActvAmtCov;
          
          const ttlSellerLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInActvTymsCov;
                 

          

          const maxInterests = CompDtls.data.getCompany.maxInterest;

          
          
          
              

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
                        const TtlActvLonsTmsByrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsByrCov;
                        const TtlActvLonsAmtByrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtByrCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                      
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createCovCreditSeller, {
                                input: {
                                  itemName:ItmNm,
                                  itemSerialNumber:ItmSrlNu,
                                  buyerID: RecNatId,
                                  sellerID: SenderNatId,
                                  sellerContact:SendrPhn,
                                  buyerContact: RecPhn,                                  
                                  amountSold: amount,
                                  amountexpectedBack: AmtExp,
                                  amountRepaid: 0,
                                  lonBala:0,
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: AdvRegNo,
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
                                    phonecontact:SendrPhn,
                                    TtlActvLonsTmsSllrNonCov: parseFloat(TtlActvLonsTmsSllrNonCovs)+1,
                                    TtlActvLonsAmtSllrNonCov: parseFloat(TtlActvLonsAmtSllrNonCovs) + parseFloat(amount),
                                                                              
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
                                    phonecontact:RecPhn,
                                    TtlActvLonsTmsByrCov: parseFloat(TtlActvLonsTmsByrCovs) +1 ,
                                    TtlActvLonsAmtByrCov: parseFloat(TtlActvLonsAmtByrCovs)+ parseFloat(amount),
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
                                        
                                    companyEarningBal:userLoanTransferFees * parseFloat(amount) + parseFloat(companyEarningBals),
                                    companyEarning: userLoanTransferFees * parseFloat(amount) + parseFloat(companyEarnings),                                           
                                    
                                    ttlSellerLnsInAmtCov: parseFloat(amount) + parseFloat(ttlSellerLnsInAmtCovs),
                                    ttlSellerLnsInActvAmtCov: parseFloat(amount) + parseFloat(ttlSellerLnsInActvAmtCovs),
                                    ttlSellerLnsInTymsCov: 1 + parseFloat(ttlSellerLnsInTymsCovs),
                                    ttlSellerLnsInActvTymsCov: 1 + parseFloat(ttlSellerLnsInActvTymsCovs),      
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          setIsLoading(false);
                          Alert.alert(names + " sells on credit to " + namess +"goods worth Ksh. " + amount );
                        }
                        
                                              
                        if (parseFloat(usrNoBL) > 1){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== RecAccCode){Alert.alert('Please first get the Loanee consent to loan');
                      return;
                    }
                        else if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(SendrPhn === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if((((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))) > maxInterests)
                        {Alert.alert("Too high interest:" + maxInterests + " per day");}
                        else if (
                          parseFloat(SenderUsrBal) < TotalTransacted 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                       
                        else if(usrPW !==SnderPW){Alert.alert('Wrong password');}
                        
                        
                        else if(parseFloat(usrLnLim) < parseFloat(amount)){Alert.alert('Call ' + CompPhoneContact + ' to have your Loan limit adjusted');}
                        
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
      setSenderNatId('');
      setAmount("");
      setRecNatId('');
      setAdvRegNo("");
      setAmtExp("");
      setDesc("");
      setSnderPW("");
      setRepaymtPeriod("");
      setRecAccCode("");
      setRecPhn("");
      setItmNm("");
      setItmSrlNu("");
}

useEffect(() =>{
  const ItmSrlNus=ItmSrlNu
    if(!ItmSrlNus && ItmSrlNus!=="")
    {
      setItmSrlNu("");
      return;
    }
    setItmSrlNu(ItmSrlNus);
    }, [ItmSrlNu]
     );

     useEffect(() =>{
      const ItmNms=ItmNm
        if(!ItmNms && ItmNms!=="")
        {
          setItmNm("");
          return;
        }
        setItmNm(ItmNms);
        }, [ItmNm]
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
             value={ItmNm}
             onChangeText={setItmNm}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Item Name</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
             value={ItmSrlNu}
             onChangeText={setItmSrlNu}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Item Serial Number</Text>
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
             value={AdvRegNo}
             onChangeText={setAdvRegNo}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Advocate Reg Number</Text>
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
           <Text style={styles.sendAmtButtonText}>Credit Sell without Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default NonCovCredSls;