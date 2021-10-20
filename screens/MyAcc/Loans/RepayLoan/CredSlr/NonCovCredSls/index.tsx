import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateSMLoansNonCovered,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getCompany,
  getSMAccount,
  getSMLoansCovered,
  getSMLoansNonCovered,
  
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


const RepayNonCovLnsss = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  const[LnId, setLnId] = useState("")
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  
  

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
      const SenderSub =accountDtl.data.getSMAccount.owner;
      const ttlNonLonsSentSMs =accountDtl.data.getSMAccount.ttlNonLonsSentSM;
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const TtlActvLonsTmsLneeNonCovss =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeNonCov;
      const TtlActvLonsAmtLneeNonCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeNonCov;
      const TtlClrdLonsTmsLneeNonCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeNonCov;
      const TtlClrdLonsAmtLneeNonCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeNonCov;
      
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
          
            
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
          
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;      
          const ttlSMLnsInClrdAmtNonCovs = CompDtls.data.getCompany.ttlSMLnsInClrdAmtNonCov; 
          const ttlSMLnsInClrdTymsNonCovs = CompDtls.data.getCompany.ttlSMLnsInClrdTymsNonCov;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
         
                    
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
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const ttlNonLonsRecSMs =RecAccountDtl.data.getSMAccount.ttlNonLonsRecSM;
                    const TtlActvLonsTmsLnrNonCovssss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrNonCov;
                    const TtlActvLonsAmtLnrNonCovssss =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLnrNonCov;
                    const TtlClrdLonsTmsLneeNonCovssss =accountDtl.data.getSMAccount.TtlClrdLonsTmsLnrNonCov;
                    const TtlClrdLonsAmtLneeNonCovssss =accountDtl.data.getSMAccount.TtlClrdLonsAmtLnrNonCov;

                    const ftchCvdSMLn = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                          const RecAccountDtl:any = await API.graphql(
                              graphqlOperation(getSMLoansNonCovered, {id: LnId}),
                              );
                              
                              const amountexpecteds =RecAccountDtl.data.getSMLoansNonCovered.amountexpected; 
                              const amountrepaids =RecAccountDtl.data.getSMLoansNonCovered.amountrepaid; 
                              const LonBal = parseFloat(amountexpecteds) - parseFloat(amountrepaids); 
                              const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts); 
                               

                              const updtSMCvLn  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMLoansCovered, {
                                        input:{
                                          id:LnId,
                                          amountrepaid: parseFloat(amounts) + parseFloat(amountrepaids)
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
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
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recId: RecNatId,
                                        senderID: SenderNatId,                                  
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "SMCovLonRepayment",
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
                                await updtSendrAcLonOvr();
                              };
          
                              const updtSendrAcLonOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          nationalid:SenderNatId,
                                          ttlNonLonsSentSM: parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts),
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted ,
                                          TtlActvLonsTmsLneeNonCov:parseFloat(TtlActvLonsTmsLneeNonCovss)-1,                                          
                                          TtlActvLonsAmtLneeNonCov: parseFloat(TtlActvLonsAmtLneeNonCovs) - parseFloat(amounts), 
                                          TtlClrdLonsTmsLneeNonCov: 1 + parseFloat(TtlClrdLonsTmsLneeNonCovs),
                                          TtlClrdLonsAmtLneeNonCov: parseFloat(TtlClrdLonsAmtLneeNonCovs) + parseFloat(amounts),
                                                                             
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              }
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          nationalid:RecNatId,
                                          ttlNonLonsRecSM: parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts) ,
                                          balance:parseFloat(RecUsrBal) + parseFloat(amounts),                                     
                                          TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrNonCovssss) - 1,
                                          TtlActvLonsAmtLnrNonCov: parseFloat(TtlActvLonsAmtLnrNonCovssss) - parseFloat(amounts),
                                          TtlClrdLonsTmsLnrNonCov: parseFloat(TtlClrdLonsTmsLneeNonCovssss) + 1,
                                          TtlClrdLonsAmtLnrNonCov: parseFloat(TtlClrdLonsAmtLneeNonCovssss) + parseFloat(amounts),
                                                                            
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings),                                                    
                                          
                                          ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                          ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                          ttlSMLnsInClrdAmtNonCov: parseFloat(ttlSMLnsInClrdAmtNonCovs) + parseFloat(amounts), 
                                          ttlSMLnsInClrdTymsNonCov: parseFloat(ttlSMLnsInClrdTymsNonCovs) + 1
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                              return;}
                                }
                                
                                setIsLoading(false);
                              }                                                                                                            
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMLoansCovered, {
                                        input:{
                                          id:LnId,
                                          amountrepaid: parseFloat(amounts) + parseFloat(amountrepaids)
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                                  return;}
                                }
                                setIsLoading(false);
                                await sendNonLn();
                              }
                              
                              const sendNonLn = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recId: RecNatId,
                                        senderID: SenderNatId,                                  
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "SMCovLonRepayment",
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
                                          ttlNonLonsSentSM: parseFloat(ttlNonLonsSentSMs)+parseFloat(amounts),
                                          balance:parseFloat(SenderUsrBal)-TotalTransacted,
                                          TtlActvLonsTmsLneeNonCov:parseFloat(TtlActvLonsTmsLneeNonCovss)-1,                                          
                                          TtlActvLonsAmtLneeNonCov: parseFloat(TtlActvLonsAmtLneeNonCovs) - parseFloat(amounts), 
                                          
                                         
                                          
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
                                          ttlNonLonsRecSM: parseFloat(ttlNonLonsRecSMs) + parseFloat(amounts) ,
                                          balance:parseFloat(RecUsrBal) + parseFloat(amounts),
                                          TtlActvLonsTmsLnrNonCov: parseFloat(TtlActvLonsTmsLnrNonCovssss) - 1,
                                          TtlActvLonsAmtLnrNonCov: parseFloat(TtlActvLonsAmtLnrNonCovssss) - parseFloat(amounts),
                                                                        
                                          
                                                                            
                                          
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals),
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings),                                                    
                                          
                                          ttlNonLonssRecSM: parseFloat(amounts) + parseFloat(ttlNonLonssRecSMs),
                                          ttlNonLonssSentSM: parseFloat(amounts) + parseFloat(ttlNonLonssSentSMs),
                                          
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  if (error){Alert.alert("Check your internet connection")
                              return;}
                                }
                                
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
                              if(usrAcActvStts !== "AccountActive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
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
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > LonBal){Alert.alert("Your Loan Balance is lesser: " +LonBal)}

                          else if(parseFloat(amounts) === LonBal){updtSMCvLn();}                         
                          
                              
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){Alert.alert("There is no such a loan")
                            return;}
                        };
                      }
                    
                      await ftchCvdSMLn();
                    
                    
                  
                                                
                }       
                catch(e) {     
                  if (e){Alert.alert("Reciever does not exist")
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
              value={SenderNatId}
              onChangeText={setSenderNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loanee National Id</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={RecNatId}
              onChangeText={setRecNatId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loaner National Id</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
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
              multiline={true}
              value={LnId}
              onChangeText={setLnId}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loan Id</Text>
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
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default RepayNonCovLnsss;