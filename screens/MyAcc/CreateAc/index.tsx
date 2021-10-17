import React, {useEffect, useState} from 'react';

import {createSMAccount, updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, } from '../../../src/graphql/queries';
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
      
    const gtCompDtls = async () =>{
      try{
        const compDtls :any= await API.graphql(
          graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
          );
          const actvSMUsrs = compDtls.data.getCompany.ttlActiveUsers
        
      const onCreateNewSMAc = async () => {
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
          TtlClrdBLLonsTmsLnrCov: 0,
          TtlClrdBLLonsTmsLneeCov: 0,
          TtlClrdBLLonsAmtLnrCov: 0,
          TtlClrdBLLonsAmtLneeCov: 0,
          TtlClrdNvrBLLonsTmsLnrCov: 0,
          TtlClrdNvrBLLonsTmsLneeCov: 0,
          TtlClrdNvrBLLonsAmtLnrCov: 0,
          TtlClrdNvrBLLonsAmtLneeCov: 0,
          TtlActvLonsTmsLneeChmCov: 0,
          TtlActvLonsAmtLneeChmCov: 0,
          TtlBLLonsTmsLneeChmCov: 0,
          TtlBLLonsAmtLneeChmCov: 0,
          TtlClrdLonsTmsLneeChmCov: 0,
          TtlClrdLonsAmtLneeChmCov: 0,
          TtlClrdBLLonsTmsLneeChmCov: 0,
          TtlClrdBLLonsAmtLneeChmCov: 0,
          TtlClrdNvrBLLonsTmsLneeChmCov: 0,
          TtlClrdNvrBLLonsAmtLneeChmCov: 0,
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
          TtlClrdBLLonsTmsSllrCov: 0,
          TtlClrdBLLonsTmsByrCov: 0,
          TtlClrdBLLonsAmtSllrCov: 0,
          TtlClrdBLLonsAmtByrCov: 0,
          TtlClrdNvrBLLonsTmsSllrCov: 0,
          TtlClrdNvrBLLonsTmsByrCov: 0,
          TtlClrdNvrBLLonsAmtSllrCov: 0,
          TtlClrdNvrBLLonsAmtByrCov: 0,
        
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
          TtlClrdBLLonsTmsLnrNonCov: 0,
          TtlClrdBLLonsTmsLneeNonCov: 0,
          TtlClrdBLLonsAmtLnrNonCov: 0,
          TtlClrdBLLonsAmtLneeNonCov: 0,
          TtlClrdNvrBLLonsTmsLnrNonCov: 0,
          TtlClrdNvrBLLonsTmsLneeNonCov: 0,
          TtlClrdNvrBLLonsAmtLnrNonCov: 0,
          TtlClrdNvrBLLonsAmtLneeNonCov: 0,
          TtlActvLonsTmsLneeChmNonCov: 0,
          TtlActvLonsAmtLneeChmNonCov: 0,
          TtlBLLonsTmsLneeChmNonCov: 0,
          TtlBLLonsAmtLneeChmNonCov: 0,
          TtlClrdLonsTmsLneeChmNonCov: 0,
          TtlClrdLonsAmtLneeChmNonCov: 0,
          TtlClrdBLLonsTmsLneeChmNonCov: 0,
          TtlClrdBLLonsAmtLneeChmNonCov: 0,
          TtlClrdNvrBLLonsTmsLneeChmNonCov: 0,
          TtlClrdNvrBLLonsAmtLneeChmNonCov: 0,
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
          TtlClrdBLLonsTmsSllrNonCov: 0,
          TtlClrdBLLonsTmsByrNonCov: 0,
          TtlClrdBLLonsAmtSllrNonCov: 0,
          TtlClrdBLLonsAmtByrNonCov: 0,
          TtlClrdNvrBLLonsTmsSllrNonCov: 0,
          TtlClrdNvrBLLonsTmsByrNonCov: 0,
          TtlClrdNvrBLLonsAmtSllrNonCov: 0,
          TtlClrdNvrBLLonsAmtByrNonCov: 0,
        
          MaxTymsBL: 0,
          
          acStatus: 'AccountActive',
          blStatus: 'LoanCleared',
          loanStatus: "NoLoan",
          loanLimit: 100000,
          withdrawalLimit: 100000,
          depositLimit: 100000,
          owner:ownr
                  },
                }),
              );
              
            } catch (error) {
              if(error){
                Alert.alert("Check your internet")
                return;
            }
            }
            await updtActAdm();
          };
          onCreateNewSMAc();

          const updtActAdm = async()=>{
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
                Alert.alert("Check your internet")
                return;
            }
            }
          }
          await updtActAdm();
        
}

catch(e){
  if(e){
    Alert.alert("Check your internet")
    return;
}
}
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
        
        export default CreateAcForm;