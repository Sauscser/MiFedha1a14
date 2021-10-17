import React, {useEffect, useState} from 'react';

import {createBankAdmin, updateCompany} from '../../../src/graphql/mutations';
import {getCompany, getSmAccount, getSMAccount, } from '../../../src/graphql/queries';
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
                  graphqlOperation(getSmAccount, { nationalid: nationalId })
                );
                const adminId = resp.data.getSmAccount.nationalid; 
                const adminName = resp.data.getSmAccount.name; 
                const adminPhn = resp.data.getSmAccount.phonecontact;     
                const adminEml = resp.data.getSmAccount.awsemail;  
                
                
                
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
        
                    
                    
                   
                  } catch (error) {
                    if(error){
                      Alert.alert("Check your internet")
                      return
                    }                    
                  }
                  await updtActAdm();                  
                 
                  setPW("");
                };
              
                await CrtAdminAc();

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
                  catch(error){if(error){
                    Alert.alert("Check your internet")
                    return
                  }}
                }

          
                
              } catch (e) {
                if(e){
                  Alert.alert("Check your internet")
                  return
                }
              }
              
            };

            gtUsrDtls4AdminDtls();
                  
        }

        catch(e){
          if(e){
            Alert.alert("Check your internet")
            return
          }
        }
              setNationalid("");
              setPW("");
    };

    useEffect(() =>{
      const NatId=nationalId
        if(!NatId && NatId!=="")
        {
          setNationalid("");
          return;
        }
        setNationalid(NatId);
        }, [nationalId]
         );

         useEffect(() =>{
          const pws=pword
            if(!pws && pws!=="")
            {
              setPW("");
              return;
            }
            setPW(pws);
            }, [pword]
             );
            
        
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