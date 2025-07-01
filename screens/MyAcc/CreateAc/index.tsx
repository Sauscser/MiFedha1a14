import React, {useEffect, useState} from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import {createSMAccount, updateCompany} from '../../../src/graphql/mutations';
import { getCompany, listSMAccounts, } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


  


const CreateAcForm = (props) => {

  
  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState('');
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');

  
      const ChckUsrExistence = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        const userInfo = await Auth.currentAuthenticatedUser();
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listSMAccounts,
              { filter: 
                {
                  and:{
                    nationalid: { eq: nationalId},
                    
                }                          
                }}
            )
          )

          const ChckUsrExistence2 = async () => {
            try {
              const UsrDtlsz:any = await API.graphql(
                graphqlOperation(listSMAccounts,
                  { filter: 
                    {
                      and:{
                        awsemail: { eq: userInfo.attributes.email},
                        
                    }                          
                    }}
                )
              )

          const gtCompDtls = async () =>{
            
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const actvSMUsrs = compDtls.data.getCompany.ttlActiveUsers;
                
              
            const onCreateNewSMAc = async () => {
             
              try {
                await API.graphql(
                graphqlOperation(createSMAccount, {
                input: {
                nationalid: nationalId,
                name: userInfo.username,
                phonecontact: userInfo.attributes.phone_number,
                awsemail: userInfo.attributes.email,
                balance: 0,
                p2pchmBenefits:0,           
                pw: pword,
                nationality: "Kenyan",
                MFKubwaCost: 0,
                MFKubwaNetCost: 0,
                MFNdogoDue: 0,
                MFNdogoNet: 0,
                beneficiary:   userInfo.attributes.email,
                beneficiaryAmt:0,
                loanAcceptanceCode:userInfo.attributes.email,
                beneficiaryType: "Biz",
                benefitsAmount: 0,
                mfchampEarnings:0,
      
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

                TtlActvLonsTmsLnrCredSlsP2P: 0,
                TtlActvLonsAmtLnrCredSlsP2P: 0,
                TtlBLLonsTmsLnrCredSlsP2P: 0,
                TtlBLLonsAmtLnrCredSlsP2P: 0,
                TtlClrdLonsTmsLnrCredSlsP2P: 0,
                TtlClrdLonsAmtLnrCredSlsP2P: 0,
              
                TtlActvLonsTmsLnrCredSlsP2B: 0,
                TtlActvLonsAmtLnrCredSlsP2B: 0,
                TtlBLLonsTmsLnrCredSlsP2B: 0,
                TtlBLLonsAmtLnrCredSlsP2B: 0,
                TtlClrdLonsTmsLnrCredSlsP2B: 0,
                TtlClrdLonsAmtLnrCredSlsP2B: 0,
              
                TtlActvLonsTmsLneeB2P: 0,
                TtlActvLonsAmtLneeB2P: 0,
                TtlBLLonsTmsLneeB2P: 0,
                TtlBLLonsAmtLneeB2P: 0,
                TtlClrdLonsLneeB2P: 0,
                TtlClrdLonsAmtLneeB2P: 0,
              
                TtlActvLonsTmsLneeP2P: 0,
                TtlActvLonsAmtLneeP2P: 0,
                TtlBLLonsTmsLneeP2P: 0,
                TtlBLLonsAmtLneeP2P: 0,
                TtlClrdLonsLneeP2P: 0,
                TtlClrdLonsAmtLneeP2P: 0,
              
                TtlActvLonsTmsLnrP2P: 0,
                TtlActvLonsAmtLnrP2P: 0,
                TtlBLLonsTmsLnrP2P: 0,
                TtlBLLonsAmtLnrP2P: 0,
                TtlClrdLonsLnrP2P: 0,
                TtlClrdLonsAmtLnrP2P: 0,
      
                ttlNonLonsRecSM: 0,
                ttlNonLonsSentSM:0,
                ttlNonLonsRecChm: 0,
                ttlNonLonsSentChm:0,
              
                MaxTymsBL: 0,
                MaxTymsIHvBL: 0,

                TymsIHvGivnLn: 0,
                TymsMyLnClrd: 0,
                

                DefaultPenaltySM:0,

                MaxAcBal:10000000,

                acStatus: 'AccountActive',
                deActvtnReason:"None",
                blStatus: 'AccountNotBL',
                loanStatus: "NoLoan",
                loanLimit: 10000000,
                nonLonLimit:100000,
                withdrawalLimit: 3000000,
                depositLimit: 500000,
                owner:userInfo.attributes.sub
                        },
                      }),
                    );
                    
                  } catch (error) {
                    if (error){
                      Alert.alert("Creation unsuccessful; Retry")
                      return
                    }
                  
                  }
                  await updtActAdm();
                 
                  
                };
                
                if (pword.length < 8)
                {Alert.alert("Short password; at least 8 mixed characters");
             
            } 
      
            else if (UsrDtls.data.listSMAccounts.items.length > 0) {
              Alert.alert("National ID already exists");
             
            }

           else if (UsrDtlsz.data.listSMAccounts.items.length > 0) {
              Alert.alert("Email already exists");
             
            }
           
            else {
              onCreateNewSMAc();
            }
      
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
                    console.log(error)
                    if(error){
                      Alert.alert("Retry or update app or call customer care")
                      return;
                  }
                  }
                  Alert.alert("Account successfully created")    
                  
                }

                           
                
      }
      
      catch(e){
        console.log(e)
        if(e){
          Alert.alert("Retry or update app or call customer care")
          return;
      }
      }
        console.log(UsrDtls.data.listSMAccounts.items.length)          
      };

      
         
          await gtCompDtls();
        
      } catch (e) {
        if(e){Alert.alert("Retry or update app or call customer care")
      return}
        
      }
                
    }
    
    await ChckUsrExistence2 ();
   
  
  } catch (e) {
          if(e){Alert.alert("Retry or update app or call customer care")}
          return
        }
                  setIsLoading(false)
                  setNationalid('');
                  setPW('');
      }


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
          <LinearGradient
            colors={['#e58d29', 'skyblue']}
            start={[0, 0]}
            end={[1, 1]}
            style={{ flex: 1 }}
          >
            <View style={styles.container}>
              <ScrollView>

    <View style={styles.formContainer}>
      <TextInput
       placeholder="National ID"
        value={nationalId}
        onChangeText={setNationalid}
        style={styles.input}
        editable={true}></TextInput>
      
     
     

     <View style={styles.passwordContainer}>
                                                   <TextInput
                                                     placeholder="Main Account Password"
                                                 style={styles.passwordInput}
                                                                                      
                                                 value={pword}
                                                 onChangeText={setPW}
                                                 secureTextEntry={!isPasswordVisible}
                                                 placeholderTextColor="#ccc"
                                                         />
                                                 <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                 </TouchableOpacity>
                                                 </View>
       
                                                
    <TouchableOpacity
      onPress={ChckUsrExistence}
      style={styles.button}>
      {isLoading ? (
                                <ActivityIndicator color="#fff" />
                              ) : (
                                <Text style={styles.locationText}>Submit</Text>
                              )}
                            </TouchableOpacity>
                          </View>
                        </ScrollView>
                      </View>
                    </LinearGradient>
                  );
                };
                
                const styles = StyleSheet.create({
                    gradient: {
                      flex: 1,
                    },
                    container: {
                      flex: 1,
                      padding: 20,
                    },
                    loanTitleView: {
                      marginBottom: 20,
                      alignItems: 'center',
                    },
                    title: {
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: '#ffffff',
                      textAlign: 'center',
                    },
                    formContainer: {
                      backgroundColor: '#ffffff',
                      borderRadius: 10,
                      padding: 20,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5,
                    },
                    input: {
                      height: 45,
                      borderColor: '#ccc',
                      borderWidth: 1,
                      marginBottom: 15,
                      borderRadius: 5,
                      paddingLeft: 10,
                    },
                    button: {
                      backgroundColor: '#e58d29',
                      paddingVertical: 12,
                      borderRadius: 5,
                      alignItems: 'center',
                      marginTop: 20,
                    },
                    locationContainer: {
                      marginVertical: 10,
                    },
                    locationText: {
                      fontSize: 16,
                      color: '#333',
                    },
                    passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                        backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
                passwordInput: { flex: 1, padding: 12 },
                  });
        
        export default CreateAcForm;