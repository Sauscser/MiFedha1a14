import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getBankAdmin, getCompany, getSAgent} from '../../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 
} from 'react-native';
import styles from './styles';



const MFKSignIn = (props) => {  
  const navigation = useNavigation();

  const [MFKId, setMFKId] = useState("");
  const [MFKPW, setMFKPW] = useState("");  



  const moveToMFKHm = () => {
    navigation.navigate("MFKbwa");
  };


    
      const fetchMFKDts = async () => {
        try {
                const MFKDtls: any = await API.graphql(
                    graphqlOperation(getSAgent, {id: MFKId}
                ),);

                const pw1s = MFKDtls.data.getSAgent.pw;
                

                


                if(MFKPW === pw1s )
                {
              
                  moveToMFKHm();
              }
              else{
                Alert.alert("You are not authorised to access these settings");

              }
            }

            catch (e)
            {
              if(e){
                Alert.alert("Check your internet")
                return
              }
               
                
            }    
            setMFKId("");
            setMFKPW("");
      
    
             }

             useEffect(() =>{
              const mfkid=MFKId
                if(!mfkid && mfkid!=="")
                {
                  setMFKId("");
                  return;
                }
                setMFKId(mfkid);
                }, [MFKId]
                 );

                 useEffect(() =>{
                  const mfkpws=MFKPW
                    if(!mfkpws && mfkpws!=="")
                    {
                      setMFKPW("");
                      return;
                    }
                    setMFKPW(mfkpws);
                    }, [MFKPW]
                     );


         return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={MFKId}
                      onChangeText={setMFKId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFKubwa Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={MFKPW}
                      onChangeText={setMFKPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={fetchMFKDts}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Sign In
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default MFKSignIn;