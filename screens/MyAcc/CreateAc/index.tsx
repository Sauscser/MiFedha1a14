import React, {useEffect, useState} from 'react';

import {createSMAccount, updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, listSMAccounts, } from '../../../src/graphql/queries';
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
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

export type UserReg = {
  usr:String;
  
}

const CreateAcForm = (props:UserReg) => {

  const{usr} = props;

  


  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContact, setPhoneContact] = useState(null);
  const [awsEmail, setAWSEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');

  const[ownr, setownr] = useState(null);


  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);
      setPhoneContact(userInfo.attributes.phone_number);
      setAWSEmail(userInfo.attributes.email);      
    };

    

    useEffect(() => {
        fetchUser();
      }, []);

      const ChckUsrExistence = async () => {
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listSMAccounts,
              { filter: {
                  
                    nationalid: { eq: nationalId}
                              
                }}
            )
          )
          if (UsrDtls.data.listSMAccounts.items.length > 0) {
            Alert.alert("This National ID is already registered");
            return;
            
          }
          else{
          gtCompDtls();
        }
        } catch (e) {
          console.error(e);
        }
      }
    
      
    const gtCompDtls = async () =>{
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try{
        const compDtls :any= await API.graphql(
          graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
          );
          const actvSMUsrs = compDtls.data.getCompany.ttlActiveUsers;
        
      const onCreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          await API.graphql(
          graphqlOperation(createSMAccount, {
          input: {
          nationalid: nationalId,
          name: nam,
          phonecontact: phoneContact,
          awsemail: awsEmail,
          balance: 0,
                             
          pw: pword,
          loanAcceptanceCode:awsEmail,

          ttlDpstSM: 0,
          TtlWthdrwnSM: 0,

          TtlActvLonsTmsLnrCov: 0,
          TtlActvLonsTmsLneeCov: 0,
          TtlActvLonsAmtLnrCov: 0,
          TtlActvLonsAmtLneeCov: 0,
          TtlBLLonsTmsLnrCov: 0,
          TtlBLLonsTmsLneeCov: 0,
          TtlBLLonsAmtLnrCov: 0,
          TtlBLLonsAmtLneeCov: 0,
          TtlClrdLonsTmsLnrCov: 0,
          TtlClrdLonsTmsLneeCov: 0,
          TtlClrdLonsAmtLnrCov: 0,
          TtlClrdLonsAmtLneeCov: 0,
          
          TtlActvLonsTmsLneeChmCov: 0,
          TtlActvLonsAmtLneeChmCov: 0,
          TtlBLLonsTmsLneeChmCov: 0,
          TtlBLLonsAmtLneeChmCov: 0,
          TtlClrdLonsTmsLneeChmCov: 0,
          TtlClrdLonsAmtLneeChmCov: 0,
             
          TtlActvLonsTmsSllrCov: 0,
          TtlActvLonsTmsByrCov: 0,
          TtlActvLonsAmtSllrCov: 0,
          TtlActvLonsAmtByrCov: 0,
          TtlBLLonsTmsSllrCov: 0,
          TtlBLLonsTmsByrCov: 0,
          TtlBLLonsAmtSllrCov: 0,
          TtlBLLonsAmtByrCov: 0,
          TtlClrdLonsTmsSllrCov: 0,
          TtlClrdLonsTmsByrCov: 0,
          TtlClrdLonsAmtSllrCov: 0,
          TtlClrdLonsAmtByrCov: 0,
          
        
          TtlActvLonsTmsLnrNonCov: 0,
          TtlActvLonsTmsLneeNonCov: 0,
          TtlActvLonsAmtLnrNonCov: 0,
          TtlActvLonsAmtLneeNonCov: 0,
          TtlBLLonsTmsLnrNonCov: 0,
          TtlBLLonsTmsLneeNonCov: 0,
          TtlBLLonsAmtLnrNonCov: 0,
          TtlBLLonsAmtLneeNonCov: 0,
          TtlClrdLonsTmsLnrNonCov: 0,
          TtlClrdLonsTmsLneeNonCov: 0,
          TtlClrdLonsAmtLnrNonCov: 0,
          TtlClrdLonsAmtLneeNonCov: 0,
          
          TtlActvLonsTmsLneeChmNonCov: 0,
          TtlActvLonsAmtLneeChmNonCov: 0,
          TtlBLLonsTmsLneeChmNonCov: 0,
          TtlBLLonsAmtLneeChmNonCov: 0,
          TtlClrdLonsTmsLneeChmNonCov: 0,
          TtlClrdLonsAmtLneeChmNonCov: 0,
          
          TtlActvLonsTmsSllrNonCov: 0,
          TtlActvLonsTmsByrNonCov: 0,
          TtlActvLonsAmtSllrNonCov: 0,
          TtlActvLonsAmtByrNonCov: 0,
          TtlBLLonsTmsSllrNonCov: 0,
          TtlBLLonsTmsByrNonCov: 0,
          TtlBLLonsAmtSllrNonCov: 0,
          TtlBLLonsAmtByrNonCov: 0,
          TtlClrdLonsTmsSllrNonCov: 0,
          TtlClrdLonsTmsByrNonCov: 0,
          TtlClrdLonsAmtSllrNonCov: 0,
          TtlClrdLonsAmtByrNonCov: 0,

          ttlNonLonsRecSM: 0,
          ttlNonLonsSentSM:0,
          ttlNonLonsRecChm: 0,
          ttlNonLonsSentChm:0,
        
          MaxTymsBL: 0,
          
          acStatus: 'AccountActive',
          blStatus: 'AccountNotBL',
          loanStatus: "NoLoan",
          loanLimit: 100000,
          nonLonLimit:100000,
          withdrawalLimit: 100000,
          depositLimit: 100000,
          owner:ownr
                  },
                }),
              );
              
            } catch (error) {
              console.log(error)
              if(error){
                Alert.alert("Please Sign up using as a different Phone number")
                return;
            } 
            
            }
            await updtActAdm();
            setIsLoading(false);
            
          };
          if (pword.length < 8)
          {Alert.alert("password is too short; at least eight characters");
        return;
      } 
      
      else {
        onCreateNewSMAc();
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
                      ttlActiveUsers:parseFloat(actvSMUsrs) + 1,
                    }
                  })
                )
            }
            catch(error){
              if(error){
                Alert.alert("Check your internet connection")
                return;
            }
            }
            Alert.alert("Congrats " + nam + ", You have created an account")
            setIsLoading(false);
          }
          
        
}

catch(e){
  console.log(e)
  if(e){
    Alert.alert("Check your internet")
    return;
}
}
            setIsLoading(false)
            setNationalid('');
            setPW('');
};


useEffect(() =>{
  const natid=nationalId
    if(!natid && natid!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(natid);
    }, [nationalId]
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
        
          return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Your Account Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={nationalId}
                      onChangeText={setNationalid}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>National Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={ChckUsrExistence}
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
        
        export default CreateAcForm;