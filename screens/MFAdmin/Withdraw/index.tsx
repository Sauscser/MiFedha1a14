import React, {useEffect, useState} from 'react';

import {
  createBankAdmWithdrawals,
  createFloatAdd,
  createFloatReduction, 

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
  const [BnkkAdmNatId, setBnkkAdmNatId] = useState("");
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
         
      
      const fetchAdmnDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const AdmnDtl:any = await API.graphql(
            graphqlOperation(getBankAdmin, {nationalid: BnkkAdmNatId}),
          );    
         
          const BankAdmBals = AdmnDtl.data.getBankAdmin.BankAdmBal;
          const pws = AdmnDtl.data.getBankAdmin.pw;
          const names = AdmnDtl.data.getBankAdmin.name;
          const statussssss = AdmnDtl.data.getBankAdmin.status;
          
          
                          
                          const CrtAdmnWthdrwls = async () => {
                            try {
                              await API.graphql(
                                graphqlOperation(createBankAdmWithdrawals, {
                                  input: {
                                  
                                    bankAdmNatId: BnkkAdmNatId,                    
                                    
                                    owner: ownr,
                                    amount: amount,
                                    status: 'AccountActive',
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
                              phonecontact: WthDrwrPhn,
                  
                              balance: parseFloat(usrBala) + parseFloat(amount) ,
                              
                            },
                          }),
                        );
                      }
        
                      catch (error) {
                        if (error){Alert.alert("Check internet Connection")
                        return;}
                      }
                      Alert.alert(names + ", You have transfer Ksh. "+ amount +" to your SM account")
                      setIsLoading(false);
                      
                      }; 
        
                      
                    
                    if (parseFloat(amount) > parseFloat(BankAdmBals)) {
                      Alert.alert("Insufficient Admin Balance")
                      return;
                    } 
        
                    else if (usrStts!=="AccountActive") {
                      Alert.alert("User Account has been deactivated")
                      return;
                    } 

                    else if (statussssss!=="AccountActive") {
                      Alert.alert("Admin Account is inactive")
                      return;
                    } 

                    else if (ownr!==owners) {
                      Alert.alert("You cannot withdraw from another account")
                      return;
                    }  

                    
                   
                    
                    if (UsrPWd!==pws) {
                      Alert.alert("Admin credentials are wrong; access denied")
                      return;
                    } 
        
                    else{await CrtAdmnWthdrwls()}   
        
        
                   
                    
      
    }     
    catch (e) {
      if (e){Alert.alert("Check your internet connection")
      return;}
         
    }   
  setIsLoading(false);
};

    await fetchAdmnDtls();
    }

    catch (e) {
      if (e){Alert.alert("Check your internet connection")
      return;}
          
     }       
    setIsLoading(false)
    
    setAmount("");
    setUsrPWd("")
    setBnkkAdmNatId("");    
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
                const BnkkAdmNatIds=BnkkAdmNatId
                  if(!BnkkAdmNatIds && BnkkAdmNatIds!=="")
                  {
                    setBnkkAdmNatId("");
                    return;
                  }
                  setBnkkAdmNatId(BnkkAdmNatIds);
                  }, [BnkkAdmNatId]
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
              value={BnkkAdmNatId}
              onChangeText={setBnkkAdmNatId}
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
              value={UsrPWd}
              onChangeText={setUsrPWd}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>User PW</Text>
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