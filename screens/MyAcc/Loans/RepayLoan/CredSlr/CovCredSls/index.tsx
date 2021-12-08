import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateCovCreditSeller,
  updateGroup,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getCompany,
  getCovCreditSeller,
  getGroup,
  getSMAccount,
  getSMLoansCovered,
  
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


const RepayCovSellerLnsss = props => {
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [SendrPhn, setSendrPhn] = useState(null);
  
  const route = useRoute();
  

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
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: SendrPhn}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlClrdLonsTmsByrCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsByrCov;
      const TtlActvLonsTmsByrCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsByrCov;
      const TtlActvLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtByrCov;
      const TtlClrdLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtByrCov;
      const TtlBLLonsTmsByrCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsByrCov;
      const TtlBLLonsAmtByrCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtByrCov;
      const names =accountDtl.data.getSMAccount.name;
      const ttlNonLonsSentSMs =accountDtl.data.getSMAccount.ttlNonLonsSentSM;
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLss =accountDtl.data.getSMAccount.MaxTymsBL;

      const ftchCvdSMLn = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
            const RecAccountDtl:any = await API.graphql(
                graphqlOperation(getCovCreditSeller, {id: route.params.id}),
                );
                
                const amountExpectedBackWthClrncs =RecAccountDtl.data.getCovCreditSeller.amountExpectedBackWthClrnc; 
                
                const lonBalas =RecAccountDtl.data.getCovCreditSeller.lonBala; 
                const amountrepaids =RecAccountDtl.data.getCovCreditSeller.amountRepaid; 
                const sellerContacts =RecAccountDtl.data.getCovCreditSeller.sellerContact; 
                const buyerNames =RecAccountDtl.data.getCovCreditSeller.buyerName; 
                const SellerNames =RecAccountDtl.data.getCovCreditSeller.SellerName; 
                const amountExpectedBacks =RecAccountDtl.data.getCovCreditSeller.amountexpectedBack;
                const amountRepaidss =RecAccountDtl.data.getCovCreditSeller.amountRepaid; 
                const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountRepaidss); 
              const ClranceAmt = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountExpectedBacks); 
      
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
          const ttlSellerLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdTymsCov; 
          const ttlSellerLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInClrdAmtCov;
          const ttlSellerLnsInBlTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInBlTymsCov; 
          const ttlSellerLnsInBlAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInBlAmtCov;
          
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlNonLonssRecSMs = CompDtls.data.getCompany.ttlNonLonssRecSM;
          const ttlNonLonssSentSMs = CompDtls.data.getCompany.ttlNonLonssSentSM; 
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {phonecontact: sellerContacts}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;                    
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.status; 
                    
                    const MaxTymsIHvBLs =RecAccountDtl.data.getSMAccount.MaxTymsIHvBL;                    
                    const TtlClrdLonsTmsSllrCovs =RecAccountDtl.data.getSMAccount.TtlClrdLonsTmsSllrCov;
                    const TtlClrdLonsAmtSllrCovs =RecAccountDtl.data.getSMAccount.TtlClrdLonsAmtSllrCov;
                    const TtlBLLonsTmsSllrCovs =RecAccountDtl.data.getSMAccount.TtlBLLonsTmsSllrCov;
                    const TtlBLLonsAmtSllrCovs =RecAccountDtl.data.getSMAccount.TtlBLLonsAmtSllrCov;
                    const TtlActvLonsTmsSllrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsSllrCov;
                    const TtlActvLonsAmtSllrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtSllrCov;
                    const namess =RecAccountDtl.data.getSMAccount.name;
                    
                    

                    
                               
                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCovCreditSeller, {
                                        input:{
                                          id:route.params.id,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(2),
                                          lonBala: (parseFloat(lonBalas)-parseFloat(amounts)).toFixed(2),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(2),
                                          status: "LoanCleared",
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
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
                                        senderPhn: SendrPhn,
                                        recPhn: sellerContacts,    
                                        RecName:SellerNames,
                                        SenderName:buyerNames,                             
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "CredSlrLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
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
                                          phonecontact:SendrPhn,
                                          
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(2) ,
                                          TtlClrdLonsTmsByrCov:parseFloat(TtlClrdLonsTmsByrCovs)+1,                                          
                                          TtlClrdLonsAmtByrCov: (parseFloat(TtlClrdLonsAmtByrCovs) + parseFloat(amounts)).toFixed(2), 
                                          TtlActvLonsTmsByrCov:parseFloat(TtlActvLonsTmsByrCovs)-1,
                                          TtlActvLonsAmtByrCov:(parseFloat(TtlActvLonsAmtByrCovs)-parseFloat(amounts)).toFixed(2),
                                          TtlBLLonsTmsByrCov:  parseFloat(TtlBLLonsTmsByrCovs) - 1,
                                          TtlBLLonsAmtByrCov: (parseFloat(TtlBLLonsAmtByrCovs) - parseFloat(amounts)).toFixed(2),
                                          MaxTymsBL: parseFloat(MaxTymsBLss) - 1, 
                                                                             
                                          
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
                                          phonecontact:sellerContacts,
                                          
                                          balance:(parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt)).toFixed(2),                                     
                                          TtlBLLonsTmsSllrCov: parseFloat(TtlBLLonsTmsSllrCovs) - 1,
                                          TtlBLLonsAmtSllrCov: (parseFloat(TtlBLLonsAmtSllrCovs) - parseFloat(amounts)).toFixed(2),
                                          TtlClrdLonsTmsSllrCov: parseFloat(TtlClrdLonsTmsSllrCovs) + 1,
                                          TtlActvLonsTmsSllrCov:parseFloat(TtlActvLonsTmsSllrCovs)-1,
                                          TtlActvLonsAmtSllrCov:(parseFloat(TtlActvLonsAmtSllrCovs)-parseFloat(amounts)).toFixed(2),
                                          MaxTymsIHvBL: parseFloat(MaxTymsIHvBLs) - 1,
                                          TtlClrdLonsAmtSllrCov: (parseFloat(TtlClrdLonsAmtSllrCovs) + parseFloat(amounts)).toFixed(2),
                                                                            
                                          
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
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt,
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt,                                                    
                                          
                                          
                                          ttlSellerLnsInClrdAmtCov: parseFloat(ttlSellerLnsInClrdAmtCovs) + parseFloat(amounts) ,
                                          ttlSellerLnsInClrdTymsCov: parseFloat(ttlSellerLnsInClrdTymsCovs) + 1 ,
                                          ttlSellerLnsInBlTymsCov: parseFloat(ttlSellerLnsInBlTymsCovs) - 1, 
                                          ttlSellerLnsInBlAmtCov: parseFloat(ttlSellerLnsInBlAmtCovs) + parseFloat(amounts), 
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert("Fully Paid. Clearance: " +ClranceAmt.toFixed(2) + " TransactionFee: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }                                                                                                            
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCovCreditSeller, {
                                        input:{
                                          id:route.params.id,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountrepaids)).toFixed(2),
                                          lonBala: (parseFloat(lonBalas) - parseFloat(amounts)).toFixed(2),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(2),
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
                                await sendCovLn();
                              }
                              
                              const sendCovLn = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recPhn: sellerContacts,
                                        senderPhn: SendrPhn, 
                                        RecName:SellerNames,
                                        SenderName:buyerNames,                                    
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "CredSlrLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
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
                                          
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(2),
                                                                                 
                                          TtlActvLonsTmsByrCov: (parseFloat(TtlActvLonsTmsByrCovs) - parseFloat(amounts)).toFixed(2), 
                                          
                                         
                                          
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
                                          phonecontact:sellerContacts,
                                          
                                          balance:(parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt)).toFixed(2),                                     
                                          TtlActvLonsTmsSllrCov: (parseFloat(TtlActvLonsTmsSllrCovs) - parseFloat(amounts)).toFixed(2),                                         
                                          
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
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                          companyEarningBal:UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt,
                                          companyEarning: UsrTransferFee * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt,                                                    
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  
                                }
                                Alert.alert("Partially paid. Clearance: " +(ClranceAmt).toFixed(2) + " TransactionFee: "+ (parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2));
                                setIsLoading(false);
                              }

                                                          
                                                    
                              
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
                          
                              else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                            return;
                          }
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > LonBalsss){Alert.alert("Your Loan Balance is lesser: "+LonBalsss)}
                          

                          else if(parseFloat(amounts) === LonBalsss){updtSMCvLnLnOver();}                         
                          
                              
                               else {
                                repyCovLn();
                              }
                          }
                          catch (e) {
                            if (e){Alert.alert("There is no such a loan")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  if (e){Alert.alert("Reciever does not exist")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls ();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Check your internet connection")
      return;}
        }
        setIsLoading(false);        
      };
      await ftchCvdSMLn ();
    
      
    } catch (e) {
      if (e){Alert.alert("Sender does not exist")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");

      
      setDesc("");
      setSnderPW("");
      
}


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


          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Loanee PassWord</Text>
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
export default RepayCovSellerLnsss;