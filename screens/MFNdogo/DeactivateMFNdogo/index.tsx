import React, {useEffect, useState} from 'react';

import {createSMAccount, updateAgent, updateCompany} from '../../../src/graphql/mutations';
import { getAgent, getCompany, getSMAccount, } from '../../../src/graphql/queries';
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


  


const DeregMFNForm = (props) => {
  const navigation = useNavigation();

  const [phoneContact, setPhoneContact] = useState("");
  
  const KFNDtls = async () => {
    try{
        await API.graphql(
          graphqlOperation(updateAgent,{
            input:{
              phonecontact:phoneContact,
              status:"AccountInactive"
            }
          })
        )

        const gtCompDtls = async () =>{
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const inActvMFNUsrs = compDtls.data.getCompany.ttlKFNdgActv
                const actvMFNUsrs = compDtls.data.getCompany.ttlKFNdgInActv
                   
                const updtActAdm = async()=>{
                      try{
                          await API.graphql(
                            graphqlOperation(updateCompany,{
                              input:{
                                AdminId:"BaruchHabaB'ShemAdonai2",
                                ttlKFNdgActv:parseFloat(actvMFNUsrs) - 1,
                                ttlKFNdgInActv:parseFloat(inActvMFNUsrs) + 1,
                              }
                            })
                          )
                      }
                      catch(error){}
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
    catch(error){}
    setPhoneContact("") 
  } 
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFNdogo Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={phoneContact}
                      onChangeText={setPhoneContact}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={KFNDtls}
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
        
        export default DeregMFNForm;