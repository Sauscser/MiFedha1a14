import React, {useEffect, useState} from 'react';

import {createSMAccount, updateAgent, updateCompany} from '../../../../../src/graphql/mutations';
import { getAgent, getCompany, getSMAccount, } from '../../../../../src/graphql/queries';
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
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../../../src/graphql/mutations';


  


const DeregMFAdvForm = (props) => {
  const navigation = useNavigation();

  const [AdvRegNo, setAdvRegNo] = useState("");
  
  const KFAdminDtls = async () => {
    try{
        await API.graphql(
          graphqlOperation(updateBankAdmin,{
            input:{
              advregnu:AdvRegNo,
              status:"AccountInactive"
            }
          })
        )

        const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const ActvMFAdv = compDtls.data.getCompany.ttlKFAdvActv
                const actvMFAdv = compDtls.data.getCompany.ttlKFAdvInActv
                   
                const updtActAdm = async()=>{
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany,{
                              input:{
                                AdminId:"BaruchHabaB'ShemAdonai2",
                                ttlKFAdvActv:parseFloat(ActvMFAdv) - 1,
                                ttlKFAdvInActv:parseFloat(actvMFAdv) + 1,
                              }
                            })
                          )
                      }
                      catch(error){console.log(error)}
                    }
                    await updtActAdm();
                    
                  } catch (error) {
                    console.log('Error creating account', error);
                  }
                };    

                gtCompDtls();
              useEffect(() => {
              gtCompDtls();
              }, []);
    }
    catch(error){console.log(error)}
    setAdvRegNo("") 
  } 
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFAdvocate Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={AdvRegNo}
                      onChangeText={setAdvRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFAdvocate National Id</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={KFAdminDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister 
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregMFAdvForm;