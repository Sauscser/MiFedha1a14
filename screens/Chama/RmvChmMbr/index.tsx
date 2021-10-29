import React, {useEffect, useState} from 'react';

import {  updateCompany, updateGroup, updateGrpMembers} from '../../../src/graphql/mutations';
import {  getCompany, getGroup, getGrpMembers, getSMAccount } from '../../../src/graphql/queries';
import {  graphqlOperation, API,Auth} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../src/graphql/mutations';


  


const DeregChmMmbr = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [ChmMmbrId, setChmMmbrId] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    
    setName(userInfo.username);
    setownr(userInfo.attributes.sub);
      
  };
  useEffect(() => {
    fetchUser();
  }, []);

  
        const fetchChmMmbrDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getGrpMembers,{id:ChmMmbrId})
                );
                const groupContacts = compDtls.data.getGrpMembers.groupContact                
                const loanStatuss = compDtls.data.getGrpMembers.loanStatus
                const blStatuss = compDtls.data.getGrpMembers.blStatus
                const acBals = compDtls.data.getGrpMembers.acBal

                const ftchChmDtls = async () =>{
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                    try{
                      const compDtls :any= await API.graphql(
                        graphqlOperation(getGroup,{grpContact:groupContacts})
                        );
                        const signitoryPWs = compDtls.data.getGroup.signitoryPW
                        const grpNames = compDtls.data.getGroup.grpName
                        const ttlGrpMemberss = compDtls.data.getGroup.ttlGrpMembers
                        const owners = compDtls.data.getGroup.owner

                        const updateChmMmbrAc = async()=>{
                                    if(isLoading){
                                      return;
                                    }
                                    setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(updateGrpMembers,{
                                                input:{
                                                  id:ChmMmbrId,
                                                  AcStatus:"AccountInactive",
                                                  
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
                                          setIsLoading(false)
                                        await updtChmDtls();
                                      }
                                      if(blStatuss==="AccountBlackListed")
                                      {
                                          Alert.alert("Member has been blacklisted by the Chama");
                                      }
                                      else if(loanStatuss==="LoanActive")
                                      {
                                          Alert.alert("Member has an Chama loan");
                                      }

                                      else if(signitoryPWs!==SigntryPW)
                                      {
                                          Alert.alert("Wrong signitory password");
                                      }

                                      else if(ownr!==owners)
                                      {
                                          Alert.alert("You are not the author of the Chama");
                                      }

                                      else if(acBals!==0)
                                      {
                                          Alert.alert("Member has money in this Chama account");
                                      }
                                      else {updateChmMmbrAc();}
                          
                                      const updtChmDtls = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(updateGroup,{
                                                input:{
                                                  groupContact:groupContacts,
                                                  ttlGrpMembers:parseFloat(ttlGrpMemberss)-1
                                                }
                                              })
                                            )
                                    
                                            
                                        }
                                        catch(error){if(!error){
                                          Alert.alert("Member deregistered successfully")
                                          
                                      } 
                                      else{Alert.alert("Please check your internet connection")
                                    return;} }
                                        setIsLoading(false);
                                        Alert.alert(grpNames+" has deregistered "+names);
                                      } 

        
                    } catch (error) {
                        if(error){
                          Alert.alert("Check your internet")
                          return
                        }
                      }}
                      await ftchChmDtls();

            } catch (error) {
                if(error){
                  Alert.alert("Check your internet")
                  return
                }
              }

              
           

            setIsLoading(false);
              setChmMmbrId("");
              setSigntryPW("")
          
            }
        
        useEffect(() =>{
          const ChmMmbrIds=ChmMmbrId
            if(!ChmMmbrIds && ChmMmbrIds!=="")
            {
              setChmMmbrId("");
              return;
            }
            setChmMmbrId(ChmMmbrIds);
            }, [ChmMmbrId]
             );

             useEffect(() =>{
                const SigntryPWs=SigntryPW
                  if(!SigntryPWs && SigntryPWs!=="")
                  {
                    setSigntryPW("");
                    return;
                  }
                  setSigntryPW(SigntryPWs);
                  }, [SigntryPW]
                   );
  
  
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill MFNdogo Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={ChmMmbrId}
                      onChangeText={setChmMmbrId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Member Registration Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SigntryPW}
                      onChangeText={setSigntryPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Signitory PassWord</Text>
                  </View>       
                  
        
                  <TouchableOpacity
                    onPress={fetchChmMmbrDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister Chama Member
                    </Text>
                    {isLoading && <ActivityIndicator color={'Blue'} size="large"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregChmMmbr;