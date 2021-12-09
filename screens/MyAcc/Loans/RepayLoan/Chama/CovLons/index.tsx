import React, {useEffect, useState} from 'react';

import {
  
  createSMLoansCovered,
  
  createSMLoansNonCovered,
  
  createNonLoans,
  
  updateCompany,
  
  updateSMAccount,
  updateSMLoansCovered,
  updateCvrdGroupLoans,
  updateGroup,
  updateGrpMembers,
  updateChamaMembers,
  
} from '../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getChamaMembers,
  getCompany,
  getCvrdGroupLoans,
  getGroup,
  getGrpMembers,
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


const RepayCovChmLnsss = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  const[LnId, setLnId] = useState("")
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


    const ftchCvdSMLn = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
          const RecAccountDtl:any = await API.graphql(
              graphqlOperation(getCvrdGroupLoans, {id: route.params.id}),
              );
              
              const amountExpectedBackWthClrncs =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBackWthClrnc; 
              const memberIds =RecAccountDtl.data.getCvrdGroupLoans.memberId;

              const grpContactssss =RecAccountDtl.data.getCvrdGroupLoans.grpContact; 
              const loaneePhnssss =RecAccountDtl.data.getCvrdGroupLoans.loaneePhn;
              const lonBalas =RecAccountDtl.data.getCvrdGroupLoans.lonBala;
              const amountExpectedBacks =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBack;
              const amountRepaidss =RecAccountDtl.data.getCvrdGroupLoans.amountRepaid; 
              const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountRepaidss); 
              const ClranceAmt = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountExpectedBacks); 

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: loaneePhnssss}),
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
          
            
          const UsrTransferFee = CompDtls.data.getCompany.userTransferFee;
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
          const ttlCompBLClrncEarningsCovs = CompDtls.data.getCompany.ttlCompBLClrncEarningsCov;
         
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 

         
                    
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
                    const TtlActvLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlActvLonsAmtLnrChmCov;
                    
                    

                    
                              
                              const fetchMmbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtl:any = await API.graphql(
                                        graphqlOperation(getChamaMembers, {ChamaNMember: memberIds}),
                                        );
                                        
                                        const AmtRepaids =RecAccountDtl.data.getChamaMembers.AmtRepaid;
                                        const LnBals =RecAccountDtl.data.getChamaMembers.LnBal;
                                         
                                        
                                        const updtSendrAcLonOvr1 = async () =>{
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
                                                    MaxTymsBL:0 ,
                                                    TtlClrdLonsTmsLneeChmCov:parseFloat(TtlClrdLonsTmsLneeChmCovs)+1,                                          
                                                    TtlClrdLonsAmtLneeChmCov: (parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts)).toFixed(2), 
                                                    
                                                    
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
                                                    phonecontact:SendrPhn,
                                                    balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(2) ,
                                                    MaxTymsBL:parseFloat(MaxTymsBLss)-1 ,
                                                    TtlClrdLonsTmsLneeChmCov:parseFloat(TtlClrdLonsTmsLneeChmCovs)+1,                                          
                                                    TtlClrdLonsAmtLneeChmCov: (parseFloat(TtlClrdLonsAmtLneeChmCovs) + parseFloat(amounts)).toFixed(2), 
                                                    
                                                    
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
                                                    AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(2) ,
                                                    LnBal: (parseFloat(LnBals)-parseFloat(amounts)).toFixed(2)  ,
                                                    
                                                    
                                                }})
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){Alert.alert("Check your internet connection")
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
                                          id:route.params.id,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(2),
                                          lonBala: (LonBalsss-parseFloat(amounts)).toFixed(2),
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
                                        senderPhn: loaneePhnssss,
                                        recPhn: grpContactssss,  
                                        RecName:namess,
                                        SenderName:names,                                
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "ChmLonRepayment",
                                        owner: ownr
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  console.log(error)
                                  if(error){
                                    Alert.alert("Please check your internet connection")
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
                                          
                                          grpBal:(parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt)).toFixed(2),                                     
                                          
                                          TtlClrdLonsTmsLnrChmCov: parseFloat(TtlClrdLonsTmsLnrChmCovs) + 1,
                                          tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1,
                                          TtlClrdLonsAmtLnrChmCov: (parseFloat(TtlClrdLonsAmtLnrChmCovs) + parseFloat(amounts)).toFixed(2),
                                          
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
                                          
                                          
                                          ttlChmLnsInClrdAmtCov: parseFloat(ttlChmLnsInClrdAmtCovs) + parseFloat(amounts) ,
                                          ttlChmLnsInClrdTymsCov: parseFloat(ttlChmLnsInClrdTymsCovs) + parseFloat(amounts) ,
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Fully repaid. Clearance: " +ClranceAmt.toFixed(2) + ". Transaction: "+( parseFloat(UsrTransferFee)*parseFloat(amounts)).toFixed(2) );
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
                                          AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(2) ,
                                          LnBal: (parseFloat(LnBals)-parseFloat(amounts)).toFixed(2) ,
                                          
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Check your internet connection")
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
                                          id:route.params.id,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(2),
                                          lonBala: (parseFloat(lonBalas)-parseFloat(amounts)).toFixed(2),
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
                                          phonecontact:SendrPhn,
                                          
                                          balance:(parseFloat(SenderUsrBal)-TotalTransacted).toFixed(2),
                                                                 
                                          
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
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                          
                                          grpBal:(parseFloat(RecUsrBal) + (parseFloat(amounts) - ClranceAmt)).toFixed(2),                                     
                                          
                                          
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
                                         
                                          companyEarningBal:parseFloat(UsrTransferFee) * parseFloat(amounts) + parseFloat(companyEarningBals) + ClranceAmt,
                                          companyEarning: parseFloat(UsrTransferFee) * parseFloat(amounts) + parseFloat(companyEarnings) + ClranceAmt,                                                    
                                          
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
                                    graphqlOperation(createNonLoans, {
                                      input: {
                                        recPhn: grpContactssss,
                                        senderPhn: SendrPhn,  
                                        RecName:namess,
                                        SenderName:names,                                  
                                        amount: amounts,                              
                                        description: Desc,
                                        status: "ChmLonRepayment",
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
                          
                              else if(usrPW !==SnderPW){Alert.alert('Wrong password');
                            return;
                          }
                              
                              
                              else if(parseFloat(nonLonLimits) < parseFloat(amounts)){Alert.alert('Call ' + CompPhoneContact + ' to have your send Amount limit adjusted');
                            return;
                          }

                          else if(parseFloat(amounts) > lonBalas){Alert.alert("Your Loan Balance is lesser: Ksh. "+lonBalas)}
                          

                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) < 1)
                          {updtSendrAcLonOvr1();}          
                          
                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) >=1)
                          {updtSendrAcLonOvr2();} 
                              
                               else {
                                updtChmMbrTTlBl();
                              }

                            }
                            catch (e) {
                              console.log(e)
                              if (e){Alert.alert("There is no such a member")
                              return;}
                          };
                        }
                      
                        await fetchMmbrDtls();
                          }
                          catch (e) {
                            console.log(e)
                            if (e){Alert.alert("There is no such a loan")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  console.log(e)
                  if (e){Alert.alert("Reciever does not exist")
  return;}                 
                }
                setIsLoading(false);
                }                    
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
      if (e){Alert.alert("Sender does not exist")
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