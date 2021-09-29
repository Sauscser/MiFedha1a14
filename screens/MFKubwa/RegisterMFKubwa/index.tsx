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

const RegisterKFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
const[eml, setEml] =useState("");

  const [pword, setPW] = useState('');
  const [stts, setStatus] = useState('');
  const [saRegNo, setSARegNo] = useState('');
  const[lat, setLat] = useState('');
  const[lon, setLon] = useState("");


  const onCreateNewSMAc = async () => {
    try {
      await API.graphql(
        graphqlOperation(createSAgent, {
          input: {
            agentNnationalid: nationalId,
            name: nam,
            phonecontact: phoneContact,
            pw: pword,
            TtlEarnings: 0,
           saBalance: 0,   
            status: 'AccountActive',
          },
        }),
      );
    } catch (error) {
      console.log('Error creating account', error);
    }

    setNationalid('');
    setPW('');
    setName('');
  
    setPhoneContact('');
  
  };

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill KFKubwa Account Details Below</Text>
          </View>

          
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>SAgent Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>SAgent National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>SAgent Name</Text>
          </View>

         

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>SAgent Pass Word</Text>
          </View>

          

          <TouchableOpacity
            onPress={onCreateNewSMAc}
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

export default RegisterKFKubwaAcForm;