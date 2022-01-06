import React, {useEffect, useState} from 'react';

import {createSMAccount, updateCompany} from '../../../src/graphql/mutations';
import { getCompany, listSMAccounts, } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';


  


const CreateAcForm = (props) => {

  
  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState('');
  
  const [awsEmail, setAWSEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');

  

  const moveToWelcomPg = () => {
    navigation.navigate("WelcomePgss", {awsEmail});
  };


  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setAWSEmail(userInfo.attributes.email);
      const name = userInfo.username;
     const ownr = userInfo.attributes.sub;
      const phoneContact = userInfo.attributes.phone_number;
      const awsEmails = userInfo.attributes.email;   
      
      const ChckUsrExistence = async () => {
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listSMAccounts,
              { filter: {
                  
                    nationalid: { eq: nationalId}
                              
                }}
            )
          )

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
                name: name,
                phonecontact: phoneContact,
                awsemail: awsEmails,
                balance: 0,
                                   
                pw: pword,
                loanAcceptanceCode:awsEmails,
      
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
                MaxTymsIHvBL: 0,
                acStatus: 'AccountActive',
                deActvtnReason:"None",
                blStatus: 'AccountNotBL',
                loanStatus: "NoLoan",
                loanLimit: 1000000000,
                nonLonLimit:300000,
                withdrawalLimit: 1000000,
                depositLimit: 10000000,
                owner:ownr
                        },
                      }),
                    );
                    
                  } catch (error) {
                    console.log(error)
                    if(error){
                      Alert.alert("Sign up using a different Phone Number")
                      return;
                  } 
                  
                  }
                  await updtActAdm();
                  setIsLoading(false);
                  
                };
                if (pword.length < 8)
                {Alert.alert("Short password; at least 8 mixed characters");
             
            } 
      
            else if (phoneContact.length !== 13)
                {Alert.alert("Re-SignUp: Phone number format +2547########");
             
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
                    console.log(error)
                    if(error){
                      Alert.alert("Check your internet connection")
                      return;
                  }
                  }
                  moveToWelcomPg();
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

          
          if (UsrDtls.data.listSMAccounts.items.length > 0) {
            Alert.alert("This National ID is already registered");
            return;
            
          }
          else{
          await gtCompDtls();
        }
        } catch (e) {
          if(e){Alert.alert("Please first sign up")}
          console.error(e);
        }
      }

      await ChckUsrExistence();
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
                    <Text style={styles.title}>Enter Your Details Below</Text>
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
                    onPress={fetchUser}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Create Single Member A/c
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateAcForm;