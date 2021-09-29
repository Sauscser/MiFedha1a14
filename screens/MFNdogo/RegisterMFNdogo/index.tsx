import React, {useEffect, useState} from 'react';

import {createAgent} from '../../../src/graphql/mutations';

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
        graphqlOperation(createAgent, {
          input: {

            
         
           
          
           
            
            sagentregno: saRegNo,
            TtlFltIn: 0,
            TtlFltOut: 0,
            floatBal: 0,
            latitude: lat,
            longitude: lon,
            ttlEarnings:0,

            agentEarningBal: 0,
            

            nationalid: nationalId,
            name: nam,
            phonecontact: phoneContact,
            pw: pword,
            email: eml,
            
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
  setEml("");
  setLat("");
  setLon("");
    setPhoneContact('');
    setSARegNo('');
  };

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill KFNdogo Account Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>SA RegNumber</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Name</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Email</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Pass Word</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={lat}
              onChangeText={setLat}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Latitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={lon}
              onChangeText={setLon}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Agent Latitude</Text>
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