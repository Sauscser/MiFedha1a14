import React, {useEffect, useState} from 'react';

import {createSAgent, updateCompany} from '../../../src/graphql/mutations';

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
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { getCompany, getSMAccount, listSMAccounts } from '../../../src/graphql/queries';

const RegisterMFKubwaAcForm = props => {
  const [nationalId, setNationalid] = useState("");
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");
  const[ownr, setOwnr] = useState(null);
  const [pword, setPW] = useState("");
  const [BkName, setBkName] = useState('');
  const [BkAcNu, setBkAcNu] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const [UsrPhn, setUsrPhn] = useState(null);



  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();   
    setOwnr(userInfo.attributes.sub); 
    setUsrPhn(userInfo.attributes.phone_number);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
        const compDtls :any= await API.graphql(
          graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const actvAKbwa = compDtls.data.getCompany.ttlKFKbwActv


        const ChckPhnUse = async () => {
          try {
            const UsrDtlss:any = await API.graphql(
              graphqlOperation(listSMAccounts,
                { filter: {
                    
                  phonecontact: { eq: phoneContact}
                                
                  }}
              )
            )

            const ChckUsrExistence = async () => {
              try {
                const UsrDtls:any = await API.graphql(
                  graphqlOperation(getSMAccount, 
                    { 
                      phonecontact:UsrPhn
                    }
                  )
                )
                const nationalidssss = UsrDtls.data.getSMAccount.nationalid

            const CreateNewSA = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                  graphqlOperation(createSAgent, {
                    input: {
                      
                      saNationalid: nationalidssss,
                      name: nam,
                      saPhoneContact: phoneContact,
                      pw: pword,
                      TtlEarnings: 0,
                      bankName:BkAcNu,
                      bkAcNo:BkName,
                      actvMFNdog:0,
                      InctvMFNdog:0,
                      email: eml,
                      saBalance: 0,   
                      status: 'AccountActive',
                      owner:ownr,
                      MFKWithdrwlFee:0.4
                    },
                  }),
                );
    
                
              } 
    
              catch (error) {
                console.log(error)
                if(error){
                  Alert.alert("Account already registered or unauthorised ");
                  return;
                  
              } 
              
              }
              setIsLoading(false); 
              await  updtActAdm();              
            };
            if(phoneContact.length!==13)
            {Alert.alert("Please use the hinted format of the Phone number");
          return;
        }
        else if (pword.length<8)
        {Alert.alert("Password is too short; at least eight characters");
      return;
    }

    

   else {
          CreateNewSA();
        }
            
    
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
                        ttlKFKbwActv:parseFloat(actvAKbwa) + 1,
                      }
                    })
                  )
              }
              catch(error){if(error){
                Alert.alert("Check your internet")
                return
              }}
              Alert.alert("Account registered successfully")
              setIsLoading(false);
            }
            
          } catch (e) {
            if(e){Alert.alert("Please first sign up")}
            console.error(e);
          }
        }
         if(UsrDtlss.data.listSMAccounts.items.length > 0){Alert.alert("This Phone number is in use in a Single Member Account")}
         else{
        await ChckUsrExistence();}
      
      } catch (e) {
            if(e){Alert.alert("Please first sign up")}
            console.error(e);
          }
        }

        await ChckPhnUse();

        



       
      }

  catch(e){
    if(e){
      Alert.alert("Please ensure all details are filled correctly")
      return
    }
  }
          setIsLoading(false);
          setNationalid('');
          setPW("");
          setName("");
          setEml("");
          setPhoneContact("");
          setBkAcNu("");
          setBkName("");
};

useEffect(() =>{
  const BkNames=BkName
    if(!BkNames && BkNames!=="")
    {
      setBkName("");
      return;
    }
    setBkName(BkNames);
    }, [BkName]
     );

     useEffect(() =>{
      const BkAcNus=BkAcNu
        if(!BkAcNus && BkAcNus!=="")
        {
          setBkAcNu("");
          return;
        }
        setBkAcNu(BkAcNus);
        }, [BkAcNu]
         );
         
         useEffect(() =>{
  const mfkID=nationalId
    if(!mfkID && mfkID!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(mfkID);
    }, [nationalId]
     );

     useEffect(() =>{
      const mfkpw=pword
        if(!mfkpw && mfkpw!=="")
        {
          setPW("");
          return;
        }
        setPW(mfkpw);
        }, [pword]
         );

         useEffect(() =>{
          const mfknm=nam
            if(!mfknm && mfknm!=="")
            {
              setName("");
              return;
            }
            setName(mfknm);
            }, [nam]
             );

             useEffect(() =>{
              const mfkeml=eml
                if(!mfkeml && mfkeml!=="")
                {
                  setEml("");
                  return;
                }
                setEml(mfkeml);
                }, [eml]
                 );

                 useEffect(() =>{
                  const mfkphn=phoneContact
                    if(!mfkphn && mfkphn!=="")
                    {
                      setPhoneContact("");
                      return;
                    }
                    setPhoneContact(mfkphn);
                    }, [phoneContact]
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
            placeholder="+2547xxxxxxxx"
            value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Phone</Text>
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
              value={BkAcNu}
              onChangeText={setBkAcNu}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Bank Ac Number</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={BkName}
              onChangeText={setBkName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Bank Name</Text>
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
            onPress={gtCompDtls}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Create Account
            </Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterMFKubwaAcForm;