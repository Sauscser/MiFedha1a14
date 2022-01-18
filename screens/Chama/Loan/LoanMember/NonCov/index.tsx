import React, {useEffect, useState} from 'react';

import {
  
  createNonCvrdGroupLoans,
 
  updateChamaMembers,
 
  updateCompany,
  updateGroup,
  
  
  updateSMAccount,
  
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  getCompany,
  getSMAccount,
  getGroup,
  
  getChamaMembers,
} from '../../../../../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  
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
  
  const [MmbrId, setMmbrId] = useState('');
  const ChmNMmbrPhns = MmbrId+ChmPhn
  const route = useRoute();

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    
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
          
          
         
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
             
          const ttlChmLnsInAmtNonCovs = CompDtls.data.getCompany.ttlChmLnsInAmtNonCov;          
          const ttlChmLnsInTymsNonCovs = CompDtls.data.getCompany.ttlChmLnsInTymsNonCov;            
          const maxInterestGrps = CompDtls.data.getCompany.maxInterestGrp;  
          const Interest = ((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod));     
          const maxBLss = CompDtls.data.getCompany.maxBLs;

          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) )
          
         
          const MaxSMInterest = (parseFloat(amount) +
          (parseFloat(userLoanTransferFees)*parseFloat(amount) 
          ) )*parseFloat(maxInterestGrps)*parseFloat(RepaymtPeriod);
          
          const ActualMaxSMInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) 
          )

          const TransCost =  parseFloat(userLoanTransferFees)*parseFloat(amount) 
          const TtlTransCost =  parseFloat(userLoanTransferFees)*parseFloat(amount) +  parseFloat(amount)


              

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
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov;
                        const TtlActvLonsTmsLneeChmNonCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmNonCov;
                        const TtlActvLonsAmtLneeChmNonCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmNonCov;
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
                              graphqlOperation(createNonCvrdGroupLoans, {
                                input: {
                                    grpContact: groupContacts,
                                    loaneePhn: memberContacts,
                                    loanerLoanee:groupContacts+memberContacts,
                                    repaymentPeriod: RepaymtPeriod,
                                    amountGiven: parseFloat(amount).toFixed(2),
                                    amountExpectedBack: parseFloat(AmtExp).toFixed(2),
                                    amountExpectedBackWthClrnc:parseFloat(AmtExp).toFixed(2),
                                    amountRepaid: 0,
                                    description: Desc,
                                    loaneeName:namess,
                                    loanerName:grpNames,
                                    memberId:MmbrId,
                                    lonBala:parseFloat(AmtExp).toFixed(2),
                                    
                                    
                                    
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
                                    grpContact:groupContacts,
                                    TtlActvLonsTmsLnrChmNonCov: parseFloat(TtlActvLonsTmsLnrChmNonCovs)+1,
                                    TtlActvLonsAmtLnrChmNonCov: (parseFloat(TtlActvLonsAmtLnrChmNonCovs) + parseFloat(AmtExp)).toFixed(2),
                                                                              
                                    grpBal:(parseFloat(grpBals)  - TtlTransCost).toFixed(2) 
                                   
                                    
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
                                    TtlActvLonsTmsLneeChmNonCov: parseFloat(TtlActvLonsTmsLneeChmNonCovs) +1 ,
                                    TtlActvLonsAmtLneeChmNonCov: (parseFloat(TtlActvLonsAmtLneeChmNonCovs)+ parseFloat(AmtExp)).toFixed(2),
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
                                        
                                    
                                    companyEarningBal:parseFloat(userLoanTransferFees)*parseFloat(amount)+parseFloat(companyEarningBals),
                                    companyEarning: parseFloat(userLoanTransferFees)*parseFloat(amount) +(companyEarnings),                                                    
                                    
                                    ttlChmLnsInAmtNonCov: parseFloat(AmtExp) + parseFloat(ttlChmLnsInAmtNonCovs),
                                   
                                    ttlChmLnsInTymsNonCov: 1 + parseFloat(ttlChmLnsInTymsNonCovs),
                                          
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          Alert.alert("Transaction Fee:Ksh. "+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2)
                         
                          );
                          setIsLoading(false);
                          
                        }
                        
                                              
                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== groupContacts){Alert.alert('Let Loanee first request Loan');
                      return;
                    }

                    else if(parseFloat(TtlActvLonsTmsLnrCovss) !== parseFloat(amount)){Alert.alert('Enter agreed amount');
                      return;
                    }

                    else if(parseFloat(TtlActvLonsTmsLneeCovss) !== parseFloat(RepaymtPeriod)){Alert.alert('Enter agreed repayment period');
                      return;
                    }

                    
                    else if(ownr !==SenderSub){Alert.alert('You are not the creator/signitory of this Chama');}
                        else if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');}
                        else if(TtlTransCost > parseFloat(AmtExp)){Alert.alert('Amount expected Back must at least be greater');
                      return;}
                        else if(groupContacts === memberContacts){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if(ActualMaxSMInterest>MaxSMInterest)
                        {Alert.alert('Interest too high:' + ActualMaxSMInterest.toFixed(2) + "; Recom SI:" + (MaxSMInterest).toFixed(2) );}
                        else if (
                          parseFloat(grpBals) < TtlTransCost 
                        ) {Alert.alert('Requested amount is more than you have in your account');}
                        
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
           placeholder="MemberNumber+2547########"
             value={MmbrId}
             onChangeText={setMmbrId}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Chama member ID</Text>
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
           <Text style={styles.sendAmtButtonText}>Loan without Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default ChmNonCovLns;