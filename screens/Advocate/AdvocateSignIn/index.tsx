import React, {useEffect, useState} from 'react';


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
import { getAdvocate } from '../../../src/graphql/queries';



const AdvSignIn = (props) => {  
  const navigation = useNavigation();

  const [AdvId, setAdvId] = useState("");
  const [AdvPW, setAdvPW] = useState("");  



  const moveToAdvHm = () => {
    navigation.navigate("AdvHms");
  };


    
      const fetchAdvDts = async () => {
        try {
                const AdvDtls: any = await API.graphql(
                    graphqlOperation(getAdvocate, {advregnu: AdvId}
                ),);

                const pw1s = AdvDtls.data.getAdvocate.pwd;
                

                


                if(AdvPW === pw1s )
                {
              
                  moveToAdvHm();
              }
              else{
                Alert.alert("Wrong credentials; access denied");
                return;

              }
            }

            catch (e)
            {  
              if(e){
                Alert.alert("Check your internet; or Ac doesnt exist")
                return;                            
            }    
            
      
    
             }
             setAdvId("");
             setAdvPW("");

            }
            useEffect(() =>{
              const AVdIds=AdvId
                if(!AVdIds && AVdIds!=="")
                {
                  setAdvId("");
                  return;
                }
                setAdvId(AVdIds);
                }, [AdvId]
                 );

                 useEffect(() =>{
                  const AVdPWs=AdvPW
                    if(!AVdPWs && AVdPWs!=="")
                    {
                      setAdvPW("");
                      return;
                    }
                    setAdvPW(AVdPWs);
                    }, [AdvPW]
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
                      value={AdvId}
                      onChangeText={setAdvId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Advocate RegNo</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={AdvPW}
                      onChangeText={setAdvPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={fetchAdvDts}
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
        
        export default AdvSignIn;