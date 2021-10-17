import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getBankAdmin, getCompany} from '../../../src/graphql/queries';
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



const AdminSignIn = (props) => {  
  const navigation = useNavigation();

  const [AdmnId, setAdminId] = useState("");
  const [AdminPW, setAdminPW] = useState("");  



  const moveToAdminHm = () => {
    navigation.navigate("MFAdminstrator");
  };


    
      const fetchAdmnDts = async () => {
        try {
                const AdminDtls: any = await API.graphql(
                    graphqlOperation(getBankAdmin, {nationalid: AdmnId}
                ),);

                const pw1s = AdminDtls.data.getBankAdmin.pw;
                

                


                if(AdminPW === pw1s )
                {
              
                    moveToAdminHm();
              }
              else{
                Alert.alert("Access denied");

              }
            }

            catch (e)
            {                
            }    
            setAdminId("");
            setAdminPW("");
      
    
             }

             useEffect(() =>{
              const admId=AdmnId
                if(!admId && admId!=="")
                {
                  setAdminId("");
                  return;
                }
                setAdminId(admId);
                }, [AdmnId]
                 );

                 useEffect(() =>{
                  const pws=AdminPW
                    if(!pws && pws!=="")
                    {
                      setAdminPW("");
                      return;
                    }
                    setAdminPW(pws);
                    }, [AdminPW]
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
                      value={AdmnId}
                      onChangeText={setAdminId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Admin Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={AdminPW}
                      onChangeText={setAdminPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={fetchAdmnDts}
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
        
        export default AdminSignIn;