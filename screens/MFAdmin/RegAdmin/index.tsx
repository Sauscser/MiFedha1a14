import React, {useEffect, useState} from 'react';

import {createBankAdmin, updateCompany} from '../../../src/graphql/mutations';
import {getCompany, getSMAccount, } from '../../../src/graphql/queries';
import {Auth, graphqlOperation, API} from 'aws-amplify';

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

const CreateAdminForm = () => { 

  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState("");
  const [ownr, setOwner] = useState(null);
  const [pword, setPW] = useState("");

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
    setOwner(userInfo.attributes.sub);    
   

      };
      useEffect(() => {
      fetchUser();
    }, []); 

    const gtCompDtls = async () =>{
        try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
            );
            const actvAdm = compDtls.data.getCompany.ttlKFAdmActv
            

            const gtUsrDtls4AdminDtls = async () => {
              try {
                const resp:any = await API.graphql(
                  graphqlOperation(getSMAccount, { nationalid: nationalId })
                );
                const adminId = resp.data.getSMAccount.nationalid; 
                const adminName = resp.data.getSMAccount.name; 
                const adminPhn = resp.data.getSMAccount.phonecontact;     
                const adminEml = resp.data.getSMAccount.awsemail;  
                
                
                
                const CrtAdminAc = async () => {
                  try {
                    await API.graphql(
                      graphqlOperation(createBankAdmin, {
                        input: {
                          nationalid: adminId,
                          name: adminName,
                          phonecontact: adminPhn,
                          TtlEarnings: 0,
                          pw: pword,
                          BankAdmBal: 0,
                          email: adminEml,
                          status: "AccountActive",
                          owner:ownr,
                        },
                      }),
                    );
        
                    const updtActAdm = async()=>{
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany,{
                              input:{
                                AdminId:"BaruchHabaB'ShemAdonai2",
                                ttlKFAdmActv:parseFloat(actvAdm) + 1,
                              }
                            })
                          )
                      }
                      catch(error){}
                    }

                    await updtActAdm();
                   
                  } catch (error) {
                    

                    
                  }
                  
                 
                  setPW("");
                };
              
                await CrtAdminAc();
          
                
              } catch (e) {
                if(e)
                {Alert.alert("Account Details not found")}
          
                else {Alert.alert("Click Okey to proceed")}
              }
              setNationalid("");
              setPW("");
            };

            gtUsrDtls4AdminDtls();
          
           
            useEffect(() => {
              gtUsrDtls4AdminDtls();
            }, []);
            
        }

        catch(e){

        }
    };

    useEffect(() => {
      gtCompDtls();
    }, []);




  
            
        
      return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Account Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={nationalId}
                      onChangeText={setNationalid}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>National Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Create Account
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateAdminForm;