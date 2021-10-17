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
  Alert,
} from 'react-native';
import styles from './styles';


  


const DeregUsrForm = (props) => {
  const navigation = useNavigation();

  const [UsrId, setUsrId] = useState("");
  
  

  const gtCompDtls = async () =>{
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFUsrs = compDtls.data.getCompany.ttlActiveUsers
        const inactMFUsrs = compDtls.data.getCompany.ttlInactvUsrs
           
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
      
              
          }
          catch(error){if(!error){
            Alert.alert("Account deactivated successfully")
            return;
        } 
        else{Alert.alert("Please check your internet connection")} }
          
          await updtActAdm ();
        } 

        await KFUsrDtls();

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
              catch(error){if(error){
                Alert.alert("Check your internet")
                return;
            }}
            }
            
            
          } catch (error) {
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          }
          setUsrId("") 
        };    

        useEffect(() =>{
          const usId=UsrId
            if(!usId && usId!=="")
            {
              setUsrId("");
              return;
            }
            setUsrId(usId);
            }, [UsrId]
             );
        
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
        
        export default DeregUsrForm;