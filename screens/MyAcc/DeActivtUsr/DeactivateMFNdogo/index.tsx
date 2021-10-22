import React, {useEffect, useState} from 'react';

import {updateCompany, updateSMAccount, } from '../../../../src/graphql/mutations';
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
  ActivityIndicator
} from 'react-native';
import styles from './styles';


  


const DeregUsrForm = (props) => {
  const navigation = useNavigation();

  const [UsrId, setUsrId] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  

  const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFUsrs = compDtls.data.getCompany.ttlActiveUsers
        const inactMFUsrs = compDtls.data.getCompany.ttlInactvUsrs
           
        const KFUsrDtls = async () => {
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
              await API.graphql(
                graphqlOperation(updateSMAccount,{
                  input:{
                    phonecontact:UsrId,
                    status:"AccountInactive"
                  }
                })
              )
      
              
          }
          catch(error){if(!error){
            Alert.alert("Account deactivated successfully")
            
        } 
        else{Alert.alert("Please check your internet connection")
        return;} }
          setIsLoading(false);          
          await updtActAdm ();
        } 

        await KFUsrDtls();

        const updtActAdm = async()=>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
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
            Alert.alert("User has been deactivated")
            setIsLoading(false);
            }
            
            
          } catch (error) {
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          }
          setIsLoading(false);
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
                    <Text style={styles.sendLoanText}>User Phone Number</Text>
                  </View>
        
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregUsrForm;