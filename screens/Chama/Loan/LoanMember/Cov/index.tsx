import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/core';

import {
    createCvrdGroupLoans,
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateChamaMembers,
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
  
  getChamaMembers,
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

const ChmCovLns = props => {
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
  const [MmbrId, setMmbrId] = useState('');
  const route = useRoute();

  const ChmNMmbrPhns = MmbrId+ChmPhn

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrPhn(userInfo.attributes.phone_number);
  }

  useEffect(() => {
    fetchUser();
    }, []);  

    
const fetchChmMbrDtls = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
          const ChmMbrtDtl:any = await API.graphql(
              graphqlOperation(getChamaMembers, {ChamaNMember: MmbrId}),
              );

              const groupContacts =ChmMbrtDtl.data.getChamaMembers.groupContact;
              const memberContacts =ChmMbrtDtl.data.getChamaMembers.memberContact;
              const GrossLnsGvns =ChmMbrtDtl.data.getChamaMembers.GrossLnsGvn;
              const LonAmtGvens =ChmMbrtDtl.data.getChamaMembers.LonAmtGven;
              const LnBals =ChmMbrtDtl.data.getChamaMembers.LnBal;
                         


  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getGroup, {grpContact: groupContacts}),
      );

      const grpBals =accountDtl.data.getGroup.grpBal;
      const signitoryPWs =accountDtl.data.getGroup.signitoryPW;
      const statuss =accountDtl.data.getGroup.status;
      
      const TtlActvLonsTmsLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsTmsLnrChmCov;
      const TtlActvLonsAmtLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsAmtLnrChmCov;
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
          const AdvCovFee =(parseFloat(CoverageFees)*parseFloat(AdvComs))
          const CompCovFee = parseFloat(CoverageFees)*(1 - parseFloat(AdvComs));
          const AdvCovAmt =AdvCovFee*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)                
          
          const TotalTransacted = parseFloat(amount) + ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount);             
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning;          
          const ttlChmLnsInAmtCovs = CompDtls.data.getCompany.ttlChmLnsInAmtCov;          
          const ttlChmLnsInTymsCovs = CompDtls.data.getCompany.ttlChmLnsInTymsCov;            
          const maxInterestGrps = CompDtls.data.getCompany.maxInterestGrp;  
          const IntAmt = parseFloat(AmtExp) - parseFloat(amount)
          const Interest = (((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))).toFixed(2);     
          const maxBLss = CompDtls.data.getCompany.maxBLs;
          const vats = CompDtls.data.getCompany.vat;
          const vatFee = (parseFloat(vats)*IntAmt)
          const ttlvats = CompDtls.data.getCompany.ttlvat;

          const MaxSMInterest = parseFloat(amount)*parseFloat(maxInterestGrps)*parseFloat(RepaymtPeriod);
          
          const ActualMaxSMInterest = parseFloat(AmtExp) - parseFloat(amount);
        console.log(TotalTransacted)
          
          
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
                        graphqlOperation(getSMAccount, {phonecontact: memberContacts}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLneeChmCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmCov;
                        const TtlActvLonsAmtLneeChmCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                      
                        const updatMmbr = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(updateChamaMembers, {
                                input: {
                                  ChamaNMember: MmbrId,
                                  LonAmtGven: (parseFloat(LonAmtGvens) + parseFloat(amount)).toFixed(2),
                                  GrossLnsGvn: (parseFloat(GrossLnsGvns) + parseFloat(AmtExp)).toFixed(2),
                                  LnBal: (parseFloat(LnBals) + parseFloat(amount)).toFixed(2),                                  
                                  loanStatus:"LoanActive",                                    
                                  blStatus: "AccountNotBL",
                                
                                },
                              }),
                            );


                          } catch (error) {
                            if(!error){
                              Alert.alert("Account deactivated successfully")
                              
                          } 
                          else{Alert.alert("Check internet")
                          return;}
                          }
                          setIsLoading(false);
                          await sendSMLn();
                        };
                        
                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createCvrdGroupLoans, {
                                input: {
                                    grpContact: groupContacts,
                                    loaneePhn: memberContacts,
                                    loanerLoanee:groupContacts+memberContacts,
                                    loanerLoaneeAdv:  groupContacts+memberContacts+ AdvRegNo ,  
                                    repaymentPeriod: RepaymtPeriod,
                                    amountGiven: parseFloat(amount).toFixed(2),
                                    amountExpectedBack: parseFloat(AmtExp).toFixed(2),
                                    amountExpectedBackWthClrnc: parseFloat(AmtExp).toFixed(2),
                                    amountRepaid: 0,
                                    description: Desc,
                                    lonBala:parseFloat(AmtExp).toFixed(2),
                                    advRegNu: AdvRegNo,
                                    loaneeName:namess,
                                    LoanerName:grpNames,
                                    memberId:MmbrId,
                                    status: "LoanActive",
                                    owner: ownr,
                                },
                              }),
                            );


                          } catch (error) {
                            
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
                                    grpContact:groupContacts,
                                    TtlActvLonsTmsLnrChmCov: parseFloat(TtlActvLonsTmsLnrChmCovs)+1,
                                    TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + parseFloat(AmtExp)).toFixed(2),
                                                                              
                                    grpBal:(parseFloat(grpBals)-TotalTransacted + vatFee).toFixed(2) 
                                   
                                    
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
                                    phonecontact:memberContacts,
                                    TtlActvLonsTmsLneeChmCov: parseFloat(TtlActvLonsTmsLneeChmCovs) +1 ,
                                    TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs)+ parseFloat(AmtExp)).toFixed(2),
                                    balance:(parseFloat(parseFloat(RecUsrBal) + parseFloat(amount).toFixed(2)) ).toFixed(2),
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
                                    companyEarningBal:CompCovAmt + parseFloat(companyEarningBals) + parseFloat(userLoanTransferFees)*parseFloat(amount),
                                    companyEarning: CompCovAmt + parseFloat(companyEarnings) + parseFloat(userLoanTransferFees)*parseFloat(amount),                                                    
                                    
                                    ttlChmLnsInAmtCov: parseFloat(AmtExp) + parseFloat(ttlChmLnsInAmtCovs),
                                    ttlvat:parseFloat(ttlvats)+vatFee,
                                    ttlChmLnsInTymsCov: 1 + parseFloat(ttlChmLnsInTymsCovs),
                                          
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
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
                                    advBal: AdvCovAmt + parseFloat(advBl) ,
                                    TtlEarnings:AdvCovAmt + parseFloat(advTtlAern),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Check your internet connection")
      return;}
                          }
                          Alert.alert("Coverage:" +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) 
                          + ", Transaction:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2)
                          +", I VAT:"+ vatFee.toFixed(2));
                          setIsLoading(false);
                        }
                                              
                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== groupContacts){Alert.alert('Let the Loanee first request Loan');
                      return;
                    }

                    else if(amount > AmtExp){Alert.alert('Amount expected Back must at least be greater');
                      return;
                    }
                    else if(ownr !==SenderSub){Alert.alert('You are not the creator/signitory of this Chama');}
                        else if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(groupContacts === memberContacts){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if(ActualMaxSMInterest>MaxSMInterest)
                        {Alert.alert('Interest too high:' + ActualMaxSMInterest.toFixed(2) + "; Recom SI:" + (MaxSMInterest).toFixed(2) );}
                        else if (
                          parseFloat(grpBals) < TotalTransacted 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        else if(advStts !=="AccountActive"){Alert.alert('Advocate Account is inactive');}
                        else if(signitoryPWs !==SnderPW){Alert.alert('Wrong password');}
                                                                 
            
                                                 else {
                                                  updatMmbr();
                        }                                                
                    }       
                    catch(e) {    
                      console.log(e); 
                      if (e){Alert.alert("Check your internet connection")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await fetchRecUsrDtls();        
                    

            }
            catch (e){
              console.log(e);
              if (e){Alert.alert("Advocate not registered")
      return;}
            }
            setIsLoading(false);
          }
          
          await fetchAdv();

          
        
        } catch (e) {
          console.log(e);
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
      
      
}
await fetchSenderUsrDtls();

} catch (e) {
  console.log(e);
  if (e){Alert.alert("Check internet or enter correct Member ID")
return;}
}
setAmount("");
      
setAdvRegNo("");
setAmtExp("");
setDesc("");
setSnderPW("");
setRepaymtPeriod("");
setRecAccCode("");

setMmbrId("")
setIsLoading(false);        
};

useEffect(() =>{
  const SnderNatIds=MmbrId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setMmbrId("");
      return;
    }
    setMmbrId(SnderNatIds);
    }, [MmbrId]
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
           placeholder="MemberNu+2547########"
             value={MmbrId}
             onChangeText={setMmbrId}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Chama member ID</Text>
         </View>

        


         <View style={styles.sendAmtView}>
           <TextInput
             value={SnderPW}
             multiline={false}
             autoCompleteType ="off"
             
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
           onPress={fetchChmMbrDtls}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Loan with Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default ChmCovLns;