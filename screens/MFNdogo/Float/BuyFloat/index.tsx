import React, {useEffect, useState} from 'react';

import {createFloatPurchase, updateAgent, updateCompany} from '../../../../src/graphql/mutations';

import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';

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
} from 'react-native';
import styles from './styles';
import { getAgent, getCompany } from '../../../../src/graphql/queries';

export type buyAgntFlts = {
    amt:number;
    fltBal1:number;
    ttlFltBal1:number,
}

const BuyFlt = (props:buyAgntFlts) => {
  
  
  const [amt, setAmt] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[ownr, setownr] =useState(null);
  const[bankAdminId, setBankAdminId] =useState("");
  const[transId, setTransId] =useState("");

const fetchUser = async () => {
  const userInfo = await Auth.currentAuthenticatedUser();  
  
  setownr(userInfo.attributes.sub);
  
};

useEffect(() => {
  fetchUser();
}, []);

const ftchAgInfo = async () => {
    try{
        const agntBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact:phoneContact}),
        );

            const fltBal: any = (agntBal.data.getAgent.floatBal)
            const ttlFltIn: any = (agntBal.data.getAgent.TtlFltIn)
            const Stts: any = (agntBal.data.getAgent.status)

            const ftchCompInfo = async () => {
              try{
                  const CompFltBal:any = await API.graphql(
                      graphqlOperation(getCompany, {AdminId:"BaruchHabaB'ShemAdonai2"}),
                  );
            
                      const CompFtBal: any = (CompFltBal.data.getCompany.agentFloatIn)
                  
                      const buyAgntFlt = async () => {
                        try {
                              await API.graphql(
                                graphqlOperation(createFloatPurchase, {
                                  input: {
                                    agentphone:  phoneContact,
                                    amount:amt,
                                    transactId:bankAdminId,
                                    bankAdminID:bankAdminId,
                                    status:"AccountActive",
                                    owner:ownr
                                                                
                                 },
                                }),
                              );
              
                              
              
                                  
                            } catch (error) {
                              if(!error){
                                Alert.alert("Float bought successfully")
                                return;
                            } 
                            else{Alert.alert("Please check your internet connection")} 
                            }   
                           await updtAgntFlt();
                          }; 

                          const updtAgntFlt = async () => {

    
                            try {
                              await API.graphql(
                                graphqlOperation(updateAgent, {
                                  input: {
                                    phonecontact: phoneContact,    
                                    floatBal: parseFloat(amt) + parseFloat(fltBal),
                                    TtlFltIn: parseFloat(amt) + parseFloat(ttlFltIn),
                                          
                                 },
                                }),
                              );
                
          
                             
                             
                            } catch (error) {
                              console.log('Error creating account', error);
                            }   
                           await updtCompFlt();
                          };
                                                  
                          const updtCompFlt = async () => {
                    
                      
                            try {
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input: {
                                    AdminId: "BaruchHabaB'ShemAdonai2",    
                                    agentFloatIn: parseFloat(amt) + parseFloat(CompFtBal),                                      
                                 },
                                }),
                              );
                            } catch (error) {
                              console.log('Error creating account', error);
                            }   
                           
                          };
                  
                        await updtCompFlt();
       
                                await updtAgntFlt();
          
                          
                          if(Stts!=="AccountActive")
                                    {Alert.alert("Your MFNdogo account has been deactivated");}
                                    else{await buyAgntFlt();}
              }            
            
              catch (e) {console.log(e)}
            
              setAmt ("");
               
            }       
                    await ftchCompInfo();


                    
            
        
    
    }

    catch (e) {console.log(e)}

    setAmt ("");
    setBankAdminId("")
    setPhoneContact('');
    setTransId("")

}

useEffect(() =>{
  const bnkId=bankAdminId
    if(!bnkId && bnkId!=="")
    {
      setBankAdminId("");
      return;
    }
    setBankAdminId(bnkId);
    }, [bankAdminId]
     );

     useEffect(() =>{
      const trId=transId
        if(!trId && trId!=="")
        {
          setTransId("");
          return;
        }
        setTransId(trId);
        }, [transId]
         );

         useEffect(() =>{
          const phn=phoneContact
            if(!phn && phn!=="")
            {
              setPhoneContact("");
              return;
            }
            setPhoneContact(phn);
            }, [phoneContact]
             );

             useEffect(() =>{
              const amount=amt
                if(!amount && amount!=="")
                {
                  setAmt("");
                  return;
                }
                setAmt(amount);
                }, [amt]
                 );  

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill MFNdogo Account Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Phone Contact</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={amt}
              onChangeText={setAmt}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Amount</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={bankAdminId}
              onChangeText={setBankAdminId}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Admin Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={transId}
              onChangeText={setTransId}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Transaction Id</Text>
          </View>          

          
          <TouchableOpacity
            onPress={ftchAgInfo}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Buy
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default BuyFlt;