import React, {useEffect, useState} from 'react';

import {
  createFloatReduction, 

  updateAgent,
  updateCompany,
  updateSmAccount,
} from '../../../src/graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getAgent, getCompany, getSmAccount} from '../../../src/graphql/queries';
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

  const[agPWd, setAgPWd] = useState("");
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
      const usrTlDpst = accountDtl.data.getSmAccount.ttlDpstSM;
      const usrStts = accountDtl.data.getSmAccount.acStatus; 
      const depositLimits = accountDtl.data.getSmAccount.depositLimit;  
         
      
      const fetchAgtBal = async () => {
        try {
          const AgentBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact: AgentPhn}),
          );    
         
          const agtTtlFtOut = AgentBal.data.getAgent.TtlFltOut;
          const agtFltBl = AgentBal.data.getAgent.floatBal;
          const agPW = AgentBal.data.getAgent.pw;
          const AgAcAct = AgentBal.data.getAgent.status;

          const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
              graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                  const ttlUsrDpsts = compDtls.data.getCompany.ttlUsrDep

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
    
            } catch (error) {
              if (error){Alert.alert("Unsuccessful transaction; check internet connectiction")
              return;}
            }
            await onUpdtUsrBal();
            };  

            const onUpdtUsrBal = async () => {
              try {
                await API.graphql(
                  graphqlOperation(updateSmAccount, {
                    input: {
                      nationalid: nationalId,
          
                      balance: parseFloat(usrBala) + parseFloat(amount),
                      ttlDpstSM: parseFloat(usrTlDpst) + parseFloat(amount),
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
            
                       
                        TtlFltOut: parseFloat(agtTtlFtOut) + parseFloat(amount),
                        floatBal: parseFloat(agtFltBl) - parseFloat(amount),
                      },
                    }),
                  );
                }

                catch (error) {
                  if (error){Alert.alert("Check internet Connection")
                  return;}
                }
                }; 
            
            if (usrStts!=="AccountActive") {
              Alert.alert("User Account has been deactivated")
              return;
            } 
            else if(amount>depositLimits) {
              Alert.alert('Deposit limit exceeded');
              return;
            }
            if (AgAcAct!=="AccountActive") {
              Alert.alert("MFNdogo Account has been deactivated")
              return;
            } 
            if (agtFltBl<amount) {
              Alert.alert("MFNdogo cannot dispense this Amount")
              return;
            } 
            if (agPW!==agPWd) {
              Alert.alert("MFNdogo access denied")
              return;
            } 

            else{await CrtFltRed()}   
            
            
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
    setAgPWd("")
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
            const pws=agPWd
              if(!pws && pws!=="")
              {
                setAgPWd("");
                return;
              }
              setAgPWd(pws);
              }, [agPWd]
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

export default SMADepositForm;