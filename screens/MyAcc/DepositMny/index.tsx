import React, {useEffect, useState} from 'react';

import {
  createFloatReduction, 

  updateAgent,
  updateCompany,
  updateSMAccount,
} from '../../../src/graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getAgent, getCompany, getSMAccount} from '../../../src/graphql/queries';
import {
  View,
  Text,

  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

const SMADepositForm = props => {
  const [nationalId, setNationalid] = useState("");

  const[agPWd, setAgPWd] = useState("");
  const [AgentPhn, setAgentPhn] = useState("");
  const [amount, setAmount] = useState("");
  const [UsrId, setUsrId] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const [ownr, setownr] = useState(null);

  
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  


  const fetchAcDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {phonecontact: nationalId}),
      );

      const usrBala = accountDtl.data.getSMAccount.balance;      
      const usrTlDpst = accountDtl.data.getSMAccount.ttlDpstSM;
      const usrStts = accountDtl.data.getSMAccount.acStatus; 
      const depositLimits = accountDtl.data.getSMAccount.depositLimit;
      const names = accountDtl.data.getSMAccount.name;  
      const nationalids = accountDtl.data.getSMAccount.nationalid;  
         
      
      const fetchAgtBal = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const AgentBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact: AgentPhn}),
          );    
         
          const agtTtlFtOut = AgentBal.data.getAgent.TtlFltOut;
          const agtFltBl = AgentBal.data.getAgent.floatBal;
          const agPW = AgentBal.data.getAgent.pw;
          const agentNames = AgentBal.data.getAgent.name;
          const AgAcAct = AgentBal.data.getAgent.status;
          const owners = AgentBal.data.getAgent.owner;
          
          
          const gtCompDtls = async () =>{
            if(isLoading){
                return;
            }
            setIsLoading(true)
            try{
              const compDtls :any= await API.graphql(
              graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                  const ttlUsrDpsts = compDtls.data.getCompany.ttlUsrDep
                  const agentFloatOuts = compDtls.data.getCompany.agentFloatOut

                  const CrtFltRed = async () => {
                    try {
                      await API.graphql(
                        graphqlOperation(createFloatReduction, {
                          input: {
                            
                            depositerid: nationalId,                    
                            agContact: AgentPhn,
                            agentName:agentNames,
                            userName:names,
                            amount: amount,
                            status: 'AccountActive',
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
            await onUpdtUsrBal();
            };  

            const onUpdtUsrBal = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                  graphqlOperation(updateSMAccount, {
                    input: {
                      phonecontact: nationalId,
          
                      balance: parseFloat(usrBala) + parseFloat(amount),
                      ttlDpstSM: parseFloat(usrTlDpst) + parseFloat(amount),
                    },
                  }),
                );
              }

              catch (error) {
                console.log(error)
                if (error){Alert.alert("Check internet Connection")
                return;}
              }
              setIsLoading(false);
              await onUpdtAgntBal();
              }; 

              const onUpdtAgntBal = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
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
                  console.log(error)
                  if (error){Alert.alert("Check internet Connection")
                  return;}
                }
                setIsLoading(false);
                await onUpdtCompBal();
                }; 

                const onUpdtCompBal = async () => {
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try {
                    await API.graphql(
                      graphqlOperation(updateCompany, {
                        input: {
                          AdminId:"BaruchHabaB'ShemAdonai2",
              
                         
                          ttlUsrDep: parseFloat(ttlUsrDpsts) + parseFloat(amount),
                          agentFloatOut: parseFloat(agentFloatOuts) + parseFloat(amount),
                        },
                      }),
                    );
                  }
  
                  catch (error) {
                    console.log(error)
                    
                  }
                  Alert.alert("Ksh. " + amount+" deposited in "+ names+ "'s ac ");
                  setIsLoading(false);
                  }; 
            
            if (usrStts!=="AccountActive") {
              Alert.alert("User Account has been deactivated")
              return;
            } 

            else if (nationalids!==UsrId) {
              Alert.alert("Depositer ID is wrong")
              return;
            } 
            else if (owners!==ownr) {
              Alert.alert("This MFNdogo is not your's")
              return;
            } 
            else if(parseFloat(amount)>parseFloat(depositLimits)) {
              Alert.alert('Deposit limit exceeded');
              return;
            }
           else if (AgAcAct!=="AccountActive") {
              Alert.alert("MFNdogo Account has been deactivated")
              return;
            } 
           else if (parseFloat(agtFltBl)<parseFloat(amount)) {
              Alert.alert("Insufficient MFNdogo Balance")
              return;
            } 
            else if (agPW!==agPWd) {
              Alert.alert("MFNdogo access denied")
              return;
            } 
            
          

            else{CrtFltRed()}   
            
            
            } catch (error) {
              console.log(error)
          if (error){Alert.alert("Check your internet connection")
                  return;}
            }
            setIsLoading(false);
            };    

            await gtCompDtls();           
      
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("MFNdogo does not exist")
      return;}
         
    }   
  setIsLoading(false);
};

    await fetchAgtBal();
    }

    catch (e) {
      console.log(e)
      if (e){Alert.alert("User does not exist")
      return;}
          
     }       
    setIsLoading(false);
    setNationalid("");
    setAmount("");
    setAgPWd("")
    setAgentPhn("");  
    setUsrId("");   
  }; 

  useEffect(() =>{
    const UsrIds=UsrId
      if(!UsrIds && UsrIds!=="")
      {
        setUsrId("");
        return;
      }
      setUsrId(UsrIds);
      }, [UsrId]
       );
       
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
            placeholder="+2547xxxxxxxx"
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Depositer Phone Number</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
              value={UsrId}
              onChangeText={setUsrId}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Depositer ID</Text>
          </View>

         

          <View style={styles.sendAmtView}>
            <TextInput
            placeholder="+2547xxxxxxxx"
              value={AgentPhn}
              onChangeText={setAgentPhn}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Agent Phone</Text>
          </View>

          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
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
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SMADepositForm;