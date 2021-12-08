import React, {useEffect, useState} from 'react';

import {
  createBankAdmWithdrawals,
  createFloatAdd,
  createFloatReduction, 

  createSAgentWithdrawals, 

  updateAgent,
  updateCompany,
  updateSAgent,
  updateSMAccount,
  
} from '../../../src/graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getAgent, getBankAdmin, getCompany, getSAgent, getSMAccount} from '../../../src/graphql/queries';
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

const AdminWthdwl = props => {
  const [WthDrwrPhn, setWthDrwrPhn] = useState(null);

  const[UsrPWd, setUsrPWd] = useState("");
  const [MFKPhn, setMFKPhn] = useState("");
  const [amount, setAmount] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const [ownr, setownr] = useState(null);

  
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
    setWthDrwrPhn(userInfo.attributes.phone_number); 
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
        graphqlOperation(getSMAccount, {phonecontact: WthDrwrPhn}),
      );

      const usrBala = accountDtl.data.getSMAccount.balance;      
      
      const usrStts = accountDtl.data.getSMAccount.acStatus; 
      
     
      const owners = accountDtl.data.getSMAccount.owner;
      const names = accountDtl.data.getSMAccount.name;
         
      
      const fetchMFKDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const MFKDtl:any = await API.graphql(
            graphqlOperation(getSAgent, {saPhoneContact: MFKPhn}),
          );    
         
          const saBalances = MFKDtl.data.getSAgent.saBalance;
          const pws = MFKDtl.data.getSAgent.pw;
          const names = MFKDtl.data.getSAgent.name;
          const statussssss = MFKDtl.data.getSAgent.status;
          
          
                          
                          const CrtMFKWthdrwls = async () => {
                            try {
                              await API.graphql(
                                graphqlOperation(createSAgentWithdrawals, {
                                  input: {
                                  
                                    bankAdmnId: "BnkkAdmNatId",                    
                                    saId:MFKPhn,
                                    owner: ownr,
                                    amount: amount,
                                    status: 'AccountActive',
                                  },
                                }),
                              );
            
                    } catch (error) {
                      console.log(error)
                      if(error){Alert.alert("Please check your internet connection")
                    return;}
                    }
                    setIsLoading(false);
                    Alert.alert(names + ", You have Withdrawn Ksh. "+ amount)
                    
                    };  
        
                    
                      
                    
                    if (parseFloat(amount) > parseFloat(saBalances)) {
                      Alert.alert("Insufficient MFKubwa Balance")
                      return;
                    } 
        
                    

                    else if (statussssss!=="AccountActive") {
                      Alert.alert("MFKubwa Account is inactive")
                      return;
                    } 

                    else if (ownr!==owners) {
                      Alert.alert("You cannot withdraw from another account")
                      return;
                    }  

                    
                   
                    
                    if (UsrPWd!==pws) {
                      Alert.alert("MFKubwa credentials are wrong; access denied")
                      return;
                    } 
        
                    else{await CrtMFKWthdrwls()}   
        
        
                   
                    
      
    }     
    catch (e) {
      console.log(e)
      if (e){Alert.alert("Check your internet connection")
      return;}
         
    }   
  setIsLoading(false);
};

    await fetchMFKDtls();
    }

    catch (e) {
      console.log(e)
      if (e){Alert.alert("Check your internet connection")
      return;}
          
     }       
    setIsLoading(false)
    
    setAmount("");
    setUsrPWd("")
    setMFKPhn("");    
  }; 

  

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
                const MFKPhns=MFKPhn
                  if(!MFKPhns && MFKPhns!=="")
                  {
                    setMFKPhn("");
                    return;
                  }
                  setMFKPhn(MFKPhns);
                  }, [MFKPhn]
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
              value={MFKPhn}
              onChangeText={setMFKPhn}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>MFKubwa Phone</Text>
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
              value={UsrPWd}
              onChangeText={setUsrPWd}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>MFKubwa PW</Text>
          </View>

          <TouchableOpacity onPress={fetchAcDtls} style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Click to Withdraw</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default AdminWthdwl;