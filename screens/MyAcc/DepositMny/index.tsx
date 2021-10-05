import React, {useEffect, useState} from 'react';

import {
  createFloatReduction, 
  updateSMAccount,
  updateAgent,
} from '../../../src/graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';
import {getSMAccount, getAgent} from '../../../src/graphql/queries';
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


  const [AgentPhn, setAgentPhn] = useState("");

  const [amount, setAmount] = useState(0);


  

  const fetchAcDtls = async () => {
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {nationalid: nationalId}),
      );

      const usrBala = accountDtl.data.getSMAccount.balance;
      const usrPhn = accountDtl.data.getSMAccount.phonecontact;
      const usrTlDpst = accountDtl.data.getSMAccount.ttlDpstSM;


      console.log (usrTlDpst)

      
            
      const fetchAgtBal = async () => {
        try {
          const AgentBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact: AgentPhn}),
          );
    
         
          const agtTtlFtOut = AgentBal.data.getAgent.TtlFltOut;
          const agtFltBl = AgentBal.data.getAgent.floatBal;
          const agtNId = AgentBal.data.getAgent.nationalid;
        
          console.log(agtFltBl)

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
            } catch (error) {
              Alert.alert('User Details entered are wrong');
            }
          };

          if (agtFltBl >= amount) {
            await onUpdtUsrBal();
          } 
          else {
            Alert.alert('Agent Float Balance insufficient');
          }


          const CrtFltRed = async () => {
            try {
              await API.graphql(
                graphqlOperation(createFloatReduction, {
                  input: {
                    agentNationalid: agtNId,
                    depositerid: nationalId,
                    depositerPhn: usrPhn,
                    phonecontact: AgentPhn,
                    amount: amount,
                    status: 'AccountActive',
                  },
                }),
              );
            } catch (error) {
              Alert.alert('Wrong Agent Details');
              console.log(error)
            }
          };

          if (agtFltBl >= amount) {
            await CrtFltRed();
          } 
          else {
            return
          }        

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
        
             
            } catch (error) {
              Alert.alert('Wrong Agent Details');
            }
          };
    
          if (agtFltBl >= amount) {
            await onUpdtAgntBal();
          } 
          else {
            Alert.alert('Agent Float Balance insufficient');
          }

          


          
    
          
        } catch (e) {
          Alert.alert('Agent details entered are wrong');
        }
      };
    

      await fetchAgtBal()


      useEffect(() => {
        fetchAgtBal();
      }, []);

    
        
     
    } 
    
    catch (e) {
     console.log(amount);
    
    }
    

    setNationalid("");
    setAmount(0);
  
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

          <TouchableOpacity onPress={fetchAcDtls} style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Click to Deposit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SMADepositForm;