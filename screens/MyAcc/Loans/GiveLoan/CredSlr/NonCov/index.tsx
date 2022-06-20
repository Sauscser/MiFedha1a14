import React, {useEffect, useState} from 'react';

import {
  createCovCreditSeller,
  createFloatAdd,
  createNonCovCreditSeller,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateBizna,
  updateCompany,
  updateReqLoanCredSl,
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
  getBizna,
  getPersonel,
  getReqLoanCredSl,
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

const NonCovCredSls = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [RecPhn, setRecPhn] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
  
  const [Desc, setDesc] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  const [SendrEmail, setSendrEmail] = useState(null);
  const [ItmNm, setItmNm] = useState("");
  const [ItmSrlNu, setItmSrlNu] = useState("");
  const [DfltPnlty, setDfltPnlty] = useState('');
  const route = useRoute();
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setSendrEmail(userInfo.attributes.email);
  }

  useEffect(() => {
    fetchUser();
    }, []);  

  



  const fetchCredSlLnReq = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const PersnlDtl:any = await API.graphql(
        graphqlOperation(getReqLoanCredSl, {id: route.params.id}),
      );
      const RecPhn =PersnlDtl.data.getReqLoanCredSl.loaneeEmail;
      const BusinessRegNos =PersnlDtl.data.getReqLoanCredSl.businessNo;
      const loaneePhone =PersnlDtl.data.getReqLoanCredSl.loaneePhone;
      const loaneeName =PersnlDtl.data.getReqLoanCredSl.loaneeName;
      const amount =PersnlDtl.data.getReqLoanCredSl.amount;
      const AmtExp =PersnlDtl.data.getReqLoanCredSl.repaymentAmt;
      const RepaymtPeriod =PersnlDtl.data.getReqLoanCredSl.repaymentPeriod;

      
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
          
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;         
          

          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          
          const ttlSellerLnsInAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInAmtNonCov;
          
          const ttlSellerLnsInTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInTymsNonCov;
          const ttlSellerLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSellerLnsInActvAmtNonCov;
          
          const ttlSellerLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSellerLnsInActvTymsNonCov;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
          const maxInterestCredSllrs = CompDtls.data.getCompany.maxInterestCredSllr;       
        
          const Interest = ((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))
          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + parseFloat(userLoanTransferFees)*parseFloat(amount));

          

          const maxInterestSMs = CompDtls.data.getCompany.maxInterestSM;

          const TransCost =  parseFloat(userLoanTransferFees)*parseFloat(amount) 
          const TtlTransCost =  parseFloat(userLoanTransferFees)*parseFloat(amount)  + parseFloat(amount)
          const MaxSMInterest = (parseFloat(amount) 
                + parseFloat(userLoanTransferFees)*parseFloat(amount))*parseFloat(maxInterestCredSllrs)*parseFloat(RepaymtPeriod);
          
          const AllTtlTrnsCst = TtlTransCost + MaxSMInterest;
                
          const ActualMaxSMInterest = parseFloat(AmtExp) - 
                (parseFloat(amount) + parseFloat(userLoanTransferFees)*parseFloat(amount));
          
              

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
                        const TtlActvLonsTmsByrCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsByrNonCov;
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
                              graphqlOperation(createNonCovCreditSeller, {
                                input: {
                                  itemName:ItmNm,
                                  itemSerialNumber:ItmSrlNu,
                                  buyerID: nationalidss,
                                  sellerID: nationalids,
                                  sellerContact:BusinessRegNos,
                                  buyerContact: RecPhn, 
                                  loanerLoanee:BusinessRegNos+RecPhn,
                                  DefaultPenaltyCredSl:DfltPnlty,    
                                  DefaultPenaltyCredSl2:0,                     
                                  amountSold: parseFloat(amount).toFixed(0),
                                  amountexpectedBack: (parseFloat(AmtExp) - TransCost).toFixed(0),
                                  amountExpectedBackWthClrnc:(parseFloat(AmtExp) - TransCost).toFixed(0),
                                  amountRepaid: 0,
                                  buyerName:namess,
                                  SellerName:busNames,
                                  lonBala:(parseFloat(AmtExp) - TransCost).toFixed(0),
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

                        if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Receiver does not qualify');
                      return;
                    }
                        
                        else if(BusinessRegNos === RecPhn){Alert.alert('You cannot Loan Yourself');}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');}
                        
                        else if (
                          parseFloat(userLoanTransferFees)*parseFloat(amount) > parseFloat(RecUsrBal)) 
                                                   {Alert.alert('Buyer cannot facilitate; should recharge');}
                        
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
                                    TtlEarnings: (parseFloat(TtlEarningsz)+parseFloat(AmtExp)).toFixed(0),
                                   
                                  }
                                })
                              )


                          }
                          catch(error){
                            if (error){Alert.alert("Check internet or seller does not exist")
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
                                    
                                    balance:(parseFloat(RecUsrBal) - parseFloat(userLoanTransferFees)*parseFloat(amount) ).toFixed(0)  ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                               
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check internet or buyer does not exist")
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
                                    
                                    ttlSellerLnsInAmtNonCov: parseFloat(AmtExp) + parseFloat(ttlSellerLnsInAmtCovs),
                                   
                                    ttlSellerLnsInTymsNonCov: 1 + parseFloat(ttlSellerLnsInTymsCovs),
                                    
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          await updtLnReq();
                          setIsLoading(false);
                          Alert.alert("Transaction:"+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
                          );
                        }

                        const updtLnReq = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoanCredSl, {
                                  input:{
                                    id:route.params.id,                                                      
                                    status:"Approved"
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Check your internet connection")
                        return;}
                          }
                          Alert.alert("Transaction: "+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
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
        
        } catch (e) {
          if (e){Alert.alert("Check internet network or Buyer does not exist")
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
      setDfltPnlty('');
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
             value={DfltPnlty}
             onChangeText={setDfltPnlty}
             style={styles.sendAmtInput}
             editable={true}></TextInput>
           <Text style={styles.sendAmtText}>Default Penalty</Text>
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
           onPress={fetchCredSlLnReq}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Credit Sell without Advocate Coverage</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default NonCovCredSls;