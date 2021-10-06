import React, {useEffect, useState} from 'react';
import {Alert} from "react-native"

import {createAgent, updateCompany, updateSAgent} from '../../../src/graphql/mutations';

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
import { getCompany, getSAgent } from '../../../src/graphql/queries';

  const RegisterKFNdgAcForm = props => {
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const [ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState('');
  const [saRegNo, setSARegNo] = useState('');
  const[lat, setLat] = useState('');
  const[lon, setLon] = useState("");
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
  };

    useEffect(() => {
    fetchUser();
   }, []);


   

        

  const onCreateNewMFN = async () => {
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
            owner:ownr,
            status: 'AccountActive',
          },
        }),
      );

      const gtMFKDtsl = async () =>{
        try{
        const MFKb:any = await API.graphql(
        graphqlOperation(getSAgent, {id:saRegNo})
        );
        const MFkClnts = MFKb.data.getSAgent.actMFNdog

        const updtActMFN = async()=>{
          try{await API.graphql(
            graphqlOperation(updateSAgent,{
              input:{
                id:saRegNo,
                actMFNdog:parseFloat(MFkClnts) + 1
              }
            })
          )

          const gtCompDtls = async () =>{
            try{
                const compDtls :any= await API.graphql(
                  graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const actvNdg = compDtls.data.getCompany.ttlKFNdgActv
                
                const updtActAdm = async()=>{
                  try{
                      await API.graphql(
                        graphqlOperation(updateCompany,{
                          input:{
                            AdminId:"BaruchHabaB'ShemAdonai2",
                            ttlKFNdgActv:parseFloat(actvNdg) + 1,
                          }
                        })
                      )
                  }
                  catch(error){}
                }
            
                updtActAdm();
            
              }
        
              catch(e){
              
              }
              };
      
              gtCompDtls();
              
              useEffect(() => {
              gtCompDtls();
              }, []);

          }
          catch(error){}
        }

        updtActMFN();
          }
    catch(e){}
    }

    gtMFKDtsl();
    useEffect(() =>{
      gtMFKDtsl()
      }, [])

    
    
    } 
    
    catch (error:any) {
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
            <Text style={styles.title}>Fill MFNdogo Account Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa RegNumber</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nationalId}
              onChangeText={setNationalid}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo National Id</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Name</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Email</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Pass Word</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={lat}
              onChangeText={setLat}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Latitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={lon}
              onChangeText={setLon}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Latitude</Text>
          </View>

          <TouchableOpacity
            onPress={onCreateNewMFN}
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

export default RegisterKFNdgAcForm;