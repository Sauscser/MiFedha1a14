import React, {useEffect, useState} from 'react';

import {
  createCovCreditSeller,
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateBizna,
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
  getPersonel,
  getBizna,
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
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const CovCredSls = props => {
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
  const [SendrEmail, setSendrEmail] = useState(null);
  const [ItmNm, setItmNm] = useState("");
  const [ItmSrlNu, setItmSrlNu] = useState("");
  const [DfltPnlty, setDfltPnlty] = useState("");

  const route = useRoute();
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrEmail(userInfo.attributes.email);
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
      const PersnlDtl:any = await API.graphql(
        graphqlOperation(getPersonel, {workerId: route.params.workerId}),
      );

      const BusinessRegNos =PersnlDtl.data.getPersonel.BusinessRegNo;
      
      
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
         
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning; 
         
          const ttlSellerLnsInAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInAmtCov;
          
          const ttlSellerLnsInTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInTymsCov;
          const ttlSellerLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInActvAmtCov;
          
          const ttlSellerLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInActvTymsCov;
          const maxInterestCredSllrs = CompDtls.data.getCompany.maxInterestCredSllr;
          const maxBLss = CompDtls.data.getCompany.maxBLs; 
          
          const Interest = ((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))    

          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
          parseFloat(userLoanTransferFees)*parseFloat(amount) + ttlCovFeeAmount)

          
          
          const ActualMaxPwnBrkrInterest = parseFloat(AmtExp) - parseFloat(amount)
          const phoneContacts = CompDtls.data.getCompany.phoneContact;  
          const TransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) 
          const TtlTransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount)
          const MaxSMInterest = (parseFloat(amount) + 
          (parseFloat(userLoanTransferFees)*parseFloat(amount) + 
              ttlCovFeeAmount))*parseFloat(maxInterestCredSllrs)*parseFloat(RepaymtPeriod);

          const ActualMaxSMInterest = parseFloat(AmtExp) - 
                  (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
                  ttlCovFeeAmount);

          const AllTtlTrnsCst = TtlTransCost + MaxSMInterest;
          
          
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
                        graphqlOperation(getSMAccount, {awsemail: RecPhn}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLnrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov; 
                        const TtlActvLonsTmsByrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsByrCov;
                        const DefaultPenaltySMs =RecAccountDtl.data.getSMAccount.DefaultPenaltySM;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const nationalidss =RecAccountDtl.data.getSMAccount.nationalid;

                        const FetchBiznaDtls = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                              const BiznaDtl:any = await API.graphql(
                                  graphqlOperation(getBizna, {BusKntct: BusinessRegNos}),
                                  );
                                  const TtlEarningsz =BiznaDtl.data.getBizna.TtlEarnings;
                                  const earningsBalsz =BiznaDtl.data.getBizna.earningsBal;
                                  const busNames =BiznaDtl.data.getBizna.busName;
                                  

                                  const FetchWrkrDtls = async () => {
                                    if(isLoading){
                                      return;
                                    }
                                    setIsLoading(true);
                                    try {
                                        const RecAccountDtl:any = await API.graphql(
                                            graphqlOperation(getSMAccount, {awsemail: SendrEmail}),
                                            );
                                            const pwz =RecAccountDtl.data.getSMAccount.pw;
                                            const nationalids =RecAccountDtl.data.getSMAccount.nationalid;
                                            
                      
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
                                  buyerID: nationalidss,
                                  sellerID: nationalids,
                                  sellerContact:BusinessRegNos,
                                  buyerContact: RecPhn, 
                                  loanerLoanee:BusinessRegNos+RecPhn,
                                  loanerLoaneeAdv:  BusinessRegNos+RecPhn+ AdvRegNo,                                   
                                  amountSold: amount,
                                  amountexpectedBack: (parseFloat(AmtExp) - TransCost).toFixed(2),
                                  amountExpectedBackWthClrnc:(parseFloat(AmtExp) - TransCost).toFixed(2),
                                  amountRepaid: 0,
                                  buyerName:namess,
                                  SellerName:busNames,
                                  lonBala:(parseFloat(AmtExp) - TransCost).toFixed(2),
                                  repaymentPeriod: RepaymtPeriod,
                                  advregnu: AdvRegNo,
                                  description: Desc,
                                  DefaultPenaltyCredSl:DfltPnlty,
                                  DefaultPenaltyCredSl2:0,
                                  status: "LoanActive",
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
                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        else if(recAcptncCode !== BusinessRegNos){Alert.alert('Let the Loanee first request Loan');
                      return;
                    }

                    else if(parseFloat(TtlActvLonsTmsLnrCovs) !== parseFloat(amount)){Alert.alert('Enter the agreed amount');
                      return;
                    }

                    else if(parseFloat(TtlActvLonsTmsLneeCovs) !== parseFloat(RepaymtPeriod)){Alert.alert('Enter the agreed repayment period');
                      return;
                    }

                    else if(parseFloat(DfltPnlty) !== parseFloat(DefaultPenaltySMs)){Alert.alert('Enter the agreed Default penalty');
                      return;
                    }

                        
                        else if(BusinessRegNos === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        else if(ActualMaxSMInterest>MaxSMInterest)
                        {Alert.alert('High S.I: enter repayment btw Ksh ' + TtlTransCost.toFixed(2) + " and " + (AllTtlTrnsCst).toFixed(2) );}
                        else if (
                          parseFloat(RecUsrBal) < TransCost 
                        ) {Alert.alert('Buyer cannot facilitate; should recharge');}
                        else if(TtlTransCost > parseFloat(AmtExp)){Alert.alert('Little repayment: enter btw Ksh ' + TtlTransCost.toFixed(2) + " and " + (AllTtlTrnsCst).toFixed(2) );
                      return;}
                      
                        else if(advStts !=="AccountActive"){Alert.alert('Advocate Account is inactive');}
                        else if(pwz !==SnderPW){Alert.alert('Wrong password');}
                        
                        
                         else {
                          sendSMLn();
                        }                     

                        const updtSendrAc = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateBizna, {
                                  input:{
                                    BusKntct:BusinessRegNos,
                                    TtlEarnings: (parseFloat(TtlEarningsz)+parseFloat(AmtExp)).toFixed(2),
                                    
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
                                    awsemail:RecPhn,
                                    
                                    balance:(parseFloat(RecUsrBal) - TransCost).toFixed(2),
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
                                   
                                    ttlSellerLnsInAmtCov: parseFloat(AmtExp) + parseFloat(ttlSellerLnsInAmtCovs),
                                    
                                    ttlSellerLnsInTymsCov: 1 + parseFloat(ttlSellerLnsInTymsCovs),
                                       
                                    
                                     
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
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
                            if (error){Alert.alert("Check your internet connection")
      return;}
                          }
                          Alert.alert("Coverage:" 
                          +(parseFloat(CoverageFees)*parseFloat(amount)).toFixed(2) + ", Transaction:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
                         );
                          setIsLoading(false);
                        }
                                              
                                                   
                    }       
                    catch(e) {     
                      if (e){Alert.alert("Check internet network or Buyer does not exist")
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                      await FetchWrkrDtls();  
                      
                    }
                    catch (e){
                      if (e){Alert.alert("Advocate not registered")
              return;}
                    }
                    setIsLoading(false);
                  }

                  await FetchBiznaDtls();  
                      
                  
                    }
                    catch (e){
                      if (e){Alert.alert("Advocate not registered")
              return;}
                    }
                    setIsLoading(false);
                  }

                  await fetchRecUsrDtls();

            }
            catch (e){
              if (e){Alert.alert("Advocate not registered")
      return;}
            }
            setIsLoading(false);
          }
          
          await fetchAdv();

          
        
        } catch (e) {
          if (e){Alert.alert("Please fill details correctly or check your internet connection")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Check internet network or seller does not exist")
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
      setDfltPnlty("")
}

useEffect(() =>{
  const DfltPnltys=DfltPnlty
    if(!DfltPnltys && DfltPnltys!=="")
    {
      setDfltPnlty("");
      return;
    }
    setDfltPnlty(DfltPnltys);
    }, [DfltPnlty]
     );

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
           placeholder="Buyer Email"
             value={RecPhn}
             onChangeText={setRecPhn}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Buyer Email</Text>
         </View>

         <View style={styles.sendAmtView}>
           <TextInput
             value={SnderPW}
             onChangeText={setSnderPW}
             secureTextEntry = {true}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Sales Officer User PassWord</Text>
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
           keyboardType={"decimal-pad"}
             value={DfltPnlty}
             onChangeText={setDfltPnlty}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
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
           <Text style={styles.sendAmtButtonText}>Credit Sell with Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default CovCredSls;