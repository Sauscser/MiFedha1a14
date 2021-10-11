import React, {useEffect, useState} from 'react';

import {
  createFloatReduction, 
  updateSMAccount,
  updateAgent,
  updateCompany,
} from '../../../src/graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';
import {getSMAccount, getAgent, getCompany} from '../../../src/graphql/queries';
import {
  View,
  Text,

  TextInput,
  ScrollView,

  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

const SMAWthdrwForm = props => {
  const [nationalId, setNationalid] = useState("");

  const[agPWd, setAgPWd] = useState("");
  const [AgentPhn, setAgentPhn] = useState("");
  const [amount, setAmount] = useState("");  

  const fetchAcDtls = async () => {
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {nationalid: nationalId}),
      );

      const usrBala = accountDtl.data.getSMAccount.balance;      
      const usrTlDpst = accountDtl.data.getSMAccount.ttlDpstSM;
      const usrStts = accountDtl.data.getSMAccount.acStatus;
      const crtdAt = accountDtl.data.getSMAccount.createdAt;

      console.log((crtdAt))    
            
      const fetchAgtBal = async () => {
        try {
          const AgentBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact: AgentPhn}),
          );    
         
          const agtTtlFtOut = AgentBal.data.getAgent.TtlFltOut;
          const agtFltBl = AgentBal.data.getAgent.floatBal;
          const agPW = AgentBal.data.getAgent.pw;
          const AgAcAct = AgentBal.data.getAgent.status;

          

          const CrtFltRed = async () => {
            try {
              await API.graphql(
                graphqlOperation(createFloatReduction, {
                  input: {
                  
                    depositerid: nationalId,                    
                    agContact: AgentPhn,
                    amount: amount,
                    status: 'AccountActive',
                  },
                }),
              );

              const onUpdtUsrBal = async () => {
                try {
                  await API.graphql(
                    graphqlOperation(updateSMAccount, {
                      input: {
                        nationalid: nationalId,
            
                        balance: parseFloat(usrBala) + parseFloat(amount),
                        ttlDpstSM: parseFloat(usrTlDpst) + parseFloat(amount),
                      },
                    }),
                  );

                  const onUpdtAgntBal = async () => {
                    try {
                      await API.graphql(
                        graphqlOperation(updateAgent, {
                          input: {
                            phonecontact: AgentPhn,
                
                           
                            TtlFltOut: parseFloat(agtTtlFtOut) + parseFloat(amount),
                            floatBal: parseFloat(agtFltBl) - parseFloat(amount),
                          },
                        }),
                      );
                  const gtCompDtls = async () =>{
                    try{
                      const compDtls :any= await API.graphql(
                      graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                        );
                          const ttlUsrDpsts = compDtls.data.getCompany.ttlUsrDep
        
           
                          const updtActAdm = async()=>{
                            try{
                              await API.graphql(
                                graphqlOperation(updateCompany,{
                                input:{
                                  AdminId:"BaruchHabaB'ShemAdonai2",
                                  ttlUsrDep:parseFloat(ttlUsrDpsts) + parseFloat(amount),
                        
                                                    }
                                          })
                                        )
                                    }
                                    catch(error){}
                                  }
                            await updtActAdm();
            
          } catch (error) {
            console.log('Error creating account', error);
          }
        };    

        await gtCompDtls();
      useEffect(() => {
      gtCompDtls();
      }, []);
                     
                    } catch (error) {
                      console.log(error)
                      
                    }
                  };
            
                  if (parseFloat(agtFltBl) >= parseFloat(amount)) {
                    await onUpdtAgntBal();
                  } 
                  else {
                    Alert.alert('Agent Float Balance insufficient or Wrong Agent Details');
                  }
        
                } catch (error) {
                  console.log(error)
                  
                }
              };
    
              if (parseFloat(agtFltBl) >= parseFloat(amount)) {
                await onUpdtUsrBal();
              } 
              else {
                Alert.alert('Agent Float Balance insufficient');
              }
    
            } catch (error) {
              
              console.log(error)
            }
          };

          if (parseFloat(agtFltBl) >= parseFloat(amount) && agPW===agPWd && AgAcAct==="AccountActive") {
            await CrtFltRed();
          } 
          else {
            Alert.alert("Agent is not in a position to receive your cash")
          }        

          
          


          
    
          
        } catch (e) {
          console.log(e)
          
        }
      };
    
if(usrStts==="AccountActive")
      {await fetchAgtBal();}
      else{Alert.alert("User Account has been deactivated")}

     useEffect(() => {
        fetchAgtBal();
      }, []);  
            
    } 
    
    catch (e) {
     console.log(e);
     
    
    }   

    setNationalid("");
    setAmount("");
    setAgPWd("")
    setAgentPhn("");    
  }; 

  useEffect(() => {
    fetchAcDtls();
  }, []);

  

  


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
              value={agPWd}
              onChangeText={setAgPWd}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Agent PW</Text>
          </View>

          <TouchableOpacity onPress={fetchAcDtls} style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Click to Deposit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SMAWthdrwForm;