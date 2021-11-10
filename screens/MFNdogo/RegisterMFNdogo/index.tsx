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
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { getCompany, getSAgent, getSMAccount, listSMAccounts } from '../../../src/graphql/queries';

  const RegisterKFNdgAcForm = props => {
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const [ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState('');
  const [saRegNo, setSARegNo] = useState('');
  const[lat, setLat] = useState('');
  const[twn, settwn] = useState("");
  const[lon, setLon] = useState("");
  const[isLoading, setIsLoading]=useState(false);
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
  };

    useEffect(() => {
    fetchUser();
   }, []);  


   const gtMFKDtsl = async () =>{
     if(isLoading){
       return;
     }
     setIsLoading(true);
    try{
    const MFKb:any = await API.graphql(
    graphqlOperation(getSAgent, {saPhoneContact:saRegNo})
    );
    const actvMFNdogs = MFKb.data.getSAgent.actvMFNdog;
    const names = MFKb.data.getSAgent.name

    const gtCompDtls = async () =>{
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try{
          const compDtls :any= await API.graphql(
            graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
          );
          const actvNdg = compDtls.data.getCompany.ttlKFNdgActv
          const maxMFNdogoss = compDtls.data.getCompany.maxMFNdogos

          const ChckUsrExistence = async () => {
            try {
              const UsrDtls:any = await API.graphql(
                graphqlOperation(listSMAccounts,
                  { filter: {
                      
                    phonecontact: { eq: phoneContact}
                                  
                    }}
                )
              )

          const createNewMFN = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
              await API.graphql(
                graphqlOperation(createAgent, {
                  input: {                    
                    phonecontact: phoneContact,
                    nationalid: nationalId,
                    name: nam,
                    ttlEarnings:0,
                    pw: pword,
                    email: eml,
                    sagentregno: saRegNo,
                    TtlFltIn: 0,
                    TtlFltOut: 0,
                    floatBal: 0,   
                    latitude: lat,
                    longitude: lon,              
                    agentEarningBal: 0,
                    town:twn,      
                    owner:ownr,
                    status: 'AccountActive',

                  },
                }),
              );
        
              }
            
            catch (error) {
              console.log(error)
              if(!error){
                Alert.alert("Account deactivated successfully")
                
            } 
            else{Alert.alert("Please check your internet connection")
            return;}
              
            }
            setIsLoading(false);
        await updtActAdm();
          }

          if(pword.length<8) {Alert.alert("Password is too short; at least eight characters");
        return;
      } 
      else if(phoneContact.length !==13){
        Alert.alert("Please use the hinted format of the Phone number");
        return;
      } 

      else if(UsrDtls.data.listSMAccounts.items.length > 0){Alert.alert("This number belongs to another user")}
      else if((actvMFNdogs+1)>maxMFNdogoss){
        Alert.alert("Exceeded MFNdogo slots; Open another MFKubwa account");
        return;
      }
      else{createNewMFN();}
          


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
                      ttlKFNdgActv:parseFloat(actvNdg) + 1,
                    }
                  })
                )
            }
            catch(error){if (error) {
              console.log(error)
              Alert.alert("Please check your internet connection")
            }}
            setIsLoading(false);
            await updtSA();
          }
          
          const updtSA = async()=>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
                await API.graphql(
                  graphqlOperation(updateSAgent,{
                    input:{
                      saPhoneContact:saRegNo,
                      actvMFNdog:parseFloat(actvMFNdogs) + 1,
                    }
                  })
                )
            }
            catch(error){if (error) {
              console.log(error)
              Alert.alert("Please check your internet connection")
              return;
            }}
            Alert.alert(" MFKubwa " +names+ " has registered MFNdogo "  +nam );
            setIsLoading(false)
          }   
          
        }
  
        catch(e){
          console.log(e)
        
        }
        setIsLoading(false);
        };
        await ChckUsrExistence(); 

      }
  
        catch(e){
          console.log(e)
        
        }
        setIsLoading(false);
        };
        await gtCompDtls();       
  
      }
catch(e){
  console.log(e)
  if(e) {Alert.alert("This MFKubwa does not exist");
return;
}
}
    setNationalid('');
    setPW('');
    setName('');
    setEml("");
    setLat("");
    setLon("");
    setPhoneContact('');
    setSARegNo('');
    settwn("")
  };

  useEffect(() =>{
    const natId=nationalId
      if(!natId && natId!=="")
      {
        setNationalid("");
        return;
      }
      setNationalid(natId);
      }, [nationalId]
       );

       useEffect(() =>{
        const twns=twn
          if(!twns && twns!=="")
          {
            settwn("");
            return;
          }
          settwn(twns);
          }, [twn]
           );
  
       useEffect(() =>{
        const pws=pword
          if(!pws && pws!=="")
          {
            setPW("");
            return;
          }
          setPW(pws);
          }, [pword]
           );
  
           useEffect(() =>{
            const phn=phoneContact
              if(!phn && phn!=="")
              {
                setPhoneContact("");
                return;
              }
              setPhoneContact(phn);
              }, [phoneContact]
               );
  
               useEffect(() =>{
                const name=nam
                  if(!name && name!=="")
                  {
                    setName("");
                    return;
                  }
                  setName(name);
                  }, [nam]
                   );

                   useEffect(() =>{
                    const email=eml
                      if(!email && email!=="")
                      {
                        setEml("");
                        return;
                      }
                      setEml(email);
                      }, [eml]
                       );
                  
                       useEffect(() =>{
                        const lati=lat
                          if(!lati && lati!=="")
                          {
                            setLat("");
                            return;
                          }
                          setLat(lati);
                          }, [lat]
                           );
                  
                           useEffect(() =>{
                            const long=lon
                              if(!long && long!=="")
                              {
                                setLon("");
                                return;
                              }
                              setLon(long);
                              }, [lon]
                               );
                  
                               
                    
                                   useEffect(() =>{
                                    const saRN=saRegNo
                                      if(!saRN && saRN!=="")
                                      {
                                        setSARegNo("");
                                        return;
                                      }
                                      setSARegNo(saRN);
                                      }, [saRegNo]
                                       );


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
            placeholder="+2547xxxxxxxx"
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Phone number</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
            placeholder={"+2547xxxxxxxx"}
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
            <Text style={styles.sendLoanText}>Location Latitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={lon}
              onChangeText={setLon}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Location Longitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
            
              value={twn}
              onChangeText={settwn}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Nearby Town</Text>
          </View>

          <TouchableOpacity
            onPress={gtMFKDtsl}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Create Account
            </Text>
            {isLoading && <ActivityIndicator color={'blue'} size = "large" />}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterKFNdgAcForm;