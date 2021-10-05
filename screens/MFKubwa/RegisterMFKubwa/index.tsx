import React, {useEffect, useState} from 'react';

import {createSAgent} from '../../../src/graphql/mutations';

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

const RegisterMFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState("");
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const[ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState("");



  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const CreateNewSA = async () => {
    try {
      await API.graphql(
        graphqlOperation(createSAgent, {
          input: {
            
            saNationalid: nationalId,
            name: nam,
            phonecontact: phoneContact,
            pw: pword,
            TtlEarnings: 0,
            email: eml,
            saBalance: 0,   
            status: 'AccountActive',
            owner:ownr,
          },
        }),
      );
    } catch (error) {
      console.log('Error creating account', error);
    }

    setNationalid('');
    setPW("");
    setName("");
  setEml("");
    setPhoneContact("");
  
  };

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill MFKubwa Account Details Below</Text>
          </View>

          
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Name</Text>
          </View>

         

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Pass Word</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Email</Text>
          </View>
          

          <TouchableOpacity
            onPress={CreateNewSA}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Create Account
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterMFKubwaAcForm;