import React, {useEffect, useState} from 'react';

import {updateCompany, updateSmAccount, } from '../../../../src/graphql/mutations';
import {getCompany } from '../../../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

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


  


const DeregUsrForm = (props) => {
  const navigation = useNavigation();

  const [UsrId, setUsrId] = useState("");
  
  const KFUsrDtls = async () => {
    try{
        await API.graphql(
          graphqlOperation(updateSmAccount,{
            input:{
              nationalid:UsrId,
              status:"AccountInactive"
            }
          })
        )

        const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const ActvMFUsrs = compDtls.data.getCompany.ttlActiveUsers
                const inactMFUsrs = compDtls.data.getCompany.ttlInactvUsrs
                   
                const updtActAdm = async()=>{
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany,{
                              input:{
                                AdminId:"BaruchHabaB'ShemAdonai2",
                                ttlActiveUsers:parseFloat(ActvMFUsrs) - 1,
                                ttlInactvUsrs:parseFloat(inactMFUsrs) + 1,
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
    setUsrId("") 
  } 
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill User Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={UsrId}
                      onChangeText={setUsrId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>User National ID</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={KFUsrDtls}
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
        
        export default DeregUsrForm;