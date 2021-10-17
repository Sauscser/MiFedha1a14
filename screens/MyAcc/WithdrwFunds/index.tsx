import React, {useEffect, useState} from 'react';

import {
  createFloatReduction, 

  updateAgent,
  updateCompany,
  updateSAgent,
  updateSmAccount,
} from '../../../src/graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getAgent, getCompany, getSAgent, getSmAccount} from '../../../src/graphql/queries';
import {
  View,
  Text,

  TextInput,
  ScrollView,

  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

const SMADepositForm = props => {
  const [nationalId, setNationalid] = useState("");

  const[UsrPWd, setUsrPWd] = useState("");
  const [AgentPhn, setAgentPhn] = useState("");
  const [amount, setAmount] = useState("");
  
  const [ownr, setownr] = useState(null);

  
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  


  const fetchAcDtls = async () => {
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSmAccount, {nationalid: nationalId}),
      );

      const usrBala = accountDtl.data.getSmAccount.balance;      
      const TtlWthdrwnSMs = accountDtl.data.getSmAccount.TtlWthdrwnSM;
      const usrStts = accountDtl.data.getSmAccount.acStatus; 
      const withdrawalLimits = accountDtl.data.getSmAccount.withdrawalLimit;  
      const pws = accountDtl.data.getSmAccount.pw;
      const owners = accountDtl.data.getSmAccount.owner;
         
      
      const fetchAgtBal = async () => {
        try {
          const AgentBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact: AgentPhn}),
          );    
         
          const TtlFltIns = AgentBal.data.getAgent.TtlFltIn;
          const floatBals = AgentBal.data.getAgent.floatBal;
          const AgAcAct = AgentBal.data.getAgent.status;
          const sagentregnos = AgentBal.data.getAgent.sagentregno;
          const names = AgentBal.data.getAgent.name;

          const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
              graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                  const ttlUserWthdrwls = compDtls.data.getCompany.ttlUserWthdrwl;
                  const agentComs = compDtls.data.getCompany.agentCom;
                  const sagentComs = compDtls.data.getCompany.sagentCom;
                  const companyComs = compDtls.data.getCompany.companyCom;
                  const UsrWithdrawalFee = parseFloat(agentComs)*parseFloat(amount)
                                            parseFloat(sagentComs)*parseFloat(amount)
                                            parseFloat(companyComs)*parseFloat(amount)
                  const AgentCommission = parseFloat(agentComs)*parseFloat(amount)
                                                
                  const saCommission =    parseFloat(sagentComs)*parseFloat(amount)
                  
                  const TTlAmtTrnsctd = parseFloat(amount) + UsrWithdrawalFee
                  const compCommission = parseFloat(companyComs)*parseFloat(amount)
                  const companyEarningBals = compDtls.data.getCompany.companyEarningBal
                  const companyEarnings = compDtls.data.getCompany.companyEarning
                  const agentEarningBals = compDtls.data.getCompany.agentEarningBal
                  const agentEarnings = compDtls.data.getCompany.agentEarning
                  const saEarningBals = compDtls.data.getCompany.saEarningBal
                  const saEarnings = compDtls.data.getCompany.saEarning
                  const agentFloatIns = compDtls.data.getCompany.agentFloatIn                 
                  
                  const gtsaDtls = async () =>{
                    try{
                      const compDtls :any= await API.graphql(
                      graphqlOperation(getSAgent,{id:sagentregnos})
                        );
                          const TtlEarningss = compDtls.data.getCompany.TtlEarnings;
                          const saBalances = compDtls.data.getCompany.saBalance;
                          
                          const CrtFltAdd = async () => {
                            try {
                              await API.graphql(
                                graphqlOperation(createFloatReduction, {
                                  input: {
                                  
                                    withdrawerid: nationalId,                    
                                    agentPhonecontact: AgentPhn,
                                    sagentId: AgentPhn,
                                    owner: ownr,
                                    amount: amount,
                                    status: 'AccountActive',
                                  },
                                }),
                              );
            
                    } catch (error) {
                      if(!error){
                        Alert.alert("Funds withdrawn successfully from " + names + "MFNdogo")
                        return;
                    } 
                    else{Alert.alert("Please check your internet connection")} 
                    }
                    await onUpdtUsrBal();
                    };  
        
                    const onUpdtUsrBal = async () => {
                      try {
                        await API.graphql(
                          graphqlOperation(updateSmAccount, {
                            input: {
                              nationalid: nationalId,
                  
                              balance: parseFloat(usrBala) - TTlAmtTrnsctd ,
                              TtlWthdrwnSM: parseFloat(TtlWthdrwnSMs) + parseFloat(amount),
                            },
                          }),
                        );
                      }
        
                      catch (error) {
                        if (error){Alert.alert("Check internet Connection")
                        return;}
                      }
                      await onUpdtAgntBal();
                      }; 
        
                      const onUpdtAgntBal = async () => {
                        try {
                          await API.graphql(
                            graphqlOperation(updateAgent, {
                              input: {
                                phonecontact: AgentPhn,
                    
                               
                                TtlFltIn: parseFloat(TtlFltIns) + parseFloat(amount),
                                floatBal: parseFloat(floatBals) + parseFloat(amount),
                              },
                            }),
                          );
                        }
        
                        catch (error) {
                          if (error){Alert.alert("Check internet Connection")
                          return;}
                        }
                        await onUpdtCompDtls();
                        }; 
        
                        const onUpdtCompDtls = async () => {
                          try {
                            await API.graphql(
                              graphqlOperation(updateCompany, {
                                input: {
                                  AdminId:"BaruchHabaB'ShemAdonai2",                    
                                 
                                  companyEarningBal: parseFloat(companyEarningBals) + compCommission,
                                  companyEarning: parseFloat(companyEarnings) + compCommission,
                                  agentEarningBal: parseFloat(agentEarningBals) + AgentCommission,
                                  agentEarning: parseFloat(agentEarnings) + AgentCommission,
                                  saEarningBal: parseFloat(saEarningBals) + saCommission,
                                  saEarning: parseFloat(saEarnings) + saCommission,
                                  ttlUserWthdrwl: parseFloat(ttlUserWthdrwls) + parseFloat(amount),
                                  agentFloatIn: parseFloat(agentFloatIns) + parseFloat(amount),
                                  
                                },
                              }),
                            );
                          }
          
                          catch (error) {
                            if (error){Alert.alert("Check internet Connection")
                            return;}
                          }
                          await onUpdtsaDtls();
                          }; 
        
                          const onUpdtsaDtls = async () => {
                            try {
                              await API.graphql(
                                graphqlOperation(updateSAgent, {
                                  input: {
                                    id: sagentregnos,
                        
                                   
                                    TtlEarnings: parseFloat(TtlEarningss) + saCommission,
                                    saBalance: parseFloat(saBalances) + saCommission,
                                      
                                  },
                                }),
                              );
                            }
            
                            catch (error) {
                              if (error){Alert.alert("Check internet Connection")
                              return;}
                            }
                            }; 
                    
                    
                    if (TTlAmtTrnsctd > usrBala) {
                      Alert.alert("Insufficient user Balance")
                      return;
                    } 
        
                    else if (usrStts!=="AccountActive") {
                      Alert.alert("User Account has been deactivated")
                      return;
                    } 
                    else if(amount>withdrawalLimits) {
                      Alert.alert('Withdrawal limit exceeded');
                      return;
                    }
                    if (AgAcAct!=="AccountActive") {
                      Alert.alert("MFNdogo Account has been deactivated")
                      return;
                    } 
                    
                    if (UsrPWd!==pws) {
                      Alert.alert("User credentials are wrong; access denied")
                      return;
                    } 
        
                    else{await CrtFltAdd()}   
        
        
                    } catch (error) {
                  if (error){Alert.alert("Check your internet connection")
                          return;}
                    }
                    };    
        
                    await gtsaDtls();         
            
            } catch (error) {
          if (error){Alert.alert("Check your internet connection")
                  return;}
            }
           
            };    

            await gtCompDtls();           
      
    }     
    catch (e) {
      if (e){Alert.alert("Check your internet connection")
      return;}
         
    }   };

    await fetchAgtBal();
    }

    catch (e) {
      if (e){Alert.alert("Check your internet connection")
      return;}
          
     }       

    setNationalid("");
    setAmount("");
    setUsrPWd("")
    setAgentPhn("");    
  }; 

  useEffect(() =>{
    const usId=nationalId
      if(!usId && usId!=="")
      {
        setNationalid("");
        return;
      }
      setNationalid(usId);
      }, [nationalId]
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
            const UsrPWdss=UsrPWd
              if(!UsrPWdss && UsrPWdss!=="")
              {
                setUsrPWd("");
                return;
              }
              setUsrPWd(UsrPWdss);
              }, [UsrPWd]
               );

               useEffect(() =>{
                const agphn=AgentPhn
                  if(!agphn && agphn!=="")
                  {
                    setAgentPhn("");
                    return;
                  }
                  setAgentPhn(agphn);
                  }, [AgentPhn]
                   );

  

  


  return (
    <View>
      <View>
        
        <ScrollView>
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill Account Details Below</Text>
          </View>

         

          <View style={styles.sendAmtView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Depositer Nat Id</Text>
          </View>

         

          <View style={styles.sendAmtView}>
            <TextInput
              value={AgentPhn}
              onChangeText={setAgentPhn}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Agent Phone</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Amount</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={UsrPWd}
              onChangeText={setUsrPWd}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>User PW</Text>
          </View>

          <TouchableOpacity onPress={fetchAcDtls} style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Click to Withdraw</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SMADepositForm;