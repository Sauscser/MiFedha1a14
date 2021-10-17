import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getAgent, getBankAdmin, getCompany, getSAgent} from '../../../src/graphql/queries';
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



const MFNSignIn = (props) => {  
  const navigation = useNavigation();

  const [MFNId, setMFNId] = useState("");
  const [MFNPW, setMFNPW] = useState("");  



  const moveToMFNHm = () => {
    navigation.navigate("MFNdogoss");
  };


    
      const fetchMFNDts = async () => {
        try {
                const MFNDtls: any = await API.graphql(
                    graphqlOperation(getAgent, {phonecontact: MFNId}
                ),);

                const pw1s = MFNDtls.data.getAgent.pw;
                

                


                if(MFNPW === pw1s )
                {
              
                  moveToMFNHm();
              }
              else{
                Alert.alert("You are not authorised to access these settings");

              }
            }

            catch (e)
            {
                console.log(e)
               
                
            }    
            setMFNId("");
            setMFNPW("");
      
    
             }

             useEffect(() =>{
              const mfnID=MFNId
                if(!mfnID && mfnID!=="")
                {
                  setMFNId("");
                  return;
                }
                setMFNId(mfnID);
                }, [MFNId]
                 );
  
                 useEffect(() =>{
                  const mfnPW=MFNPW
                    if(!mfnPW && mfnPW!=="")
                    {
                      setMFNPW("");
                      return;
                    }
                    setMFNPW(mfnPW);
                    }, [MFNPW]
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
                      value={MFNId}
                      onChangeText={setMFNId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={MFNPW}
                      onChangeText={setMFNPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={fetchMFNDts}
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
        
        export default MFNSignIn;