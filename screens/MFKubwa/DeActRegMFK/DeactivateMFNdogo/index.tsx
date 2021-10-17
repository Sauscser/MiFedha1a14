import React, {useEffect, useState} from 'react';

import {createSMAccount, updateAgent, updateCompany, updateSAgent} from '../../../../src/graphql/mutations';
import { getAgent, getCompany, getSMAccount, } from '../../../../src/graphql/queries';
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


  


const DeregMFKForm = (props) => {
  const navigation = useNavigation();

  const [MFKID, setMFKID] = useState("");
  
  
  const gtCompDtls = async () =>{
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFKUsrs = compDtls.data.getCompany.ttlKFKbwActv
        const InActvMFKUsrs = compDtls.data.getCompany.ttlKFKbwInActv
           
        const updtActAdm = async()=>{
              try{
                  await API.graphql(
                    graphqlOperation(updateCompany,{
                      input:{
                        AdminId:"BaruchHabaB'ShemAdonai2",
                        ttlKFKbwActv:parseFloat(ActvMFKUsrs) - 1,
                        ttlKFKbwInActv:parseFloat(InActvMFKUsrs) + 1,
                      }
                    })
                  )
              }
              catch(error){console.log(error)}

              await KFKDtls()
              setMFKID("");
            }
            await updtActAdm();

            const KFKDtls = async () => {
              try{
                  await API.graphql(
                    graphqlOperation(updateSAgent,{
                      input:{
                        phonecontact:MFKID,
                        status:"AccountInactive"
                      }
                    })
                  )        
              }
              catch(error){if(error){
                Alert.alert("Check your internet")
                return
              }}
               
            } 
          
            
          } catch (error) {
            if(error){
              Alert.alert("Check your internet")
              return
            }
          }
        };    

        useEffect(() =>{
          const mfkID=MFKID
            if(!mfkID && mfkID!=="")
            {
              setMFKID("");
              return;
            }
            setMFKID(mfkID);
            }, [MFKID]
             );

 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFKubwa Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={MFKID}
                      onChangeText={setMFKID}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFKubwa RegNo</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
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
        
        export default DeregMFKForm;