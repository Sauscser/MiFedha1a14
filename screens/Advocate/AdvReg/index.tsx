import React, {useEffect, useState} from 'react';
import {Alert} from "react-native"

import {createAdvocate, createAgent, updateCompany} from '../../../src/graphql/mutations';

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
import Navigation from '../../../navigation';
import { getCompany } from '../../../src/graphql/queries';

  const RegisterMFAdvAcForm = props => {

  const navigation = useNavigation();

  const moveAftrSuc = () =>{
      navigation.navigate("Home")
  }
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const [ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState('');
  const [advRegNo, setAdvRegNo] = useState('');
  const[lat, setLat] = useState('');
  const[lon, setLon] = useState("");
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
  };

    useEffect(() => {
    fetchUser();
   }, []);

   const gtCompDtls = async () =>{
    try{
        const compDtls :any= await API.graphql(
          graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const actvAdv = compDtls.data.getCompany.ttlKFAdvActv


  const onCreateNewMFN = async () => {
    try {
      await API.graphql(
        graphqlOperation(createAdvocate, {
          input: {                    
            advregnu: advRegNo,
            nationalid: nationalId,
            pwd: pword,
            name: nam,
            phonecontact: phoneContact,
            email: eml,
            advBal: 0,
            TtlEarnings: 0,        
            owner:ownr,
            status: 'AccountActive',
          },
        }),
      );
      updtActAdm();
    } 
    
    
    catch (error) {       
      console.log(error)
    }  
   

    setNationalid('');
    setPW('');
    setName('');
    setEml("");  
    setPhoneContact('');
    setAdvRegNo('');
  };

  const updtActAdm = async()=>{
    try{
        await API.graphql(
          graphqlOperation(updateCompany,{
            input:{
              AdminId:"BaruchHabaB'ShemAdonai2",
              ttlKFAdvActv:parseFloat(actvAdv) + 1,
            }
          })
        )
    }
    catch(error){console.log(error)}
  }

  await onCreateNewMFN();


}

catch(e){
console.log(e)
}
};

useEffect(() => {
gtCompDtls();
}, []);

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill Advocate Account Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={advRegNo}
              onChangeText={setAdvRegNo}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate RegNumber</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate Name</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate Email</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Advocate Pass Word</Text>
          </View>
      
          <TouchableOpacity
            onPress={gtCompDtls}
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

export default RegisterMFAdvAcForm;