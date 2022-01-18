import React, {useEffect, useState} from 'react';

import {  deleteBizna, updateCompany, updateGroup, updateGrpMembers} from '../../../src/graphql/mutations';
import {  getBizna, getCompany, getGroup, getGrpMembers, getSMAccount } from '../../../src/graphql/queries';
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


  


const DissolveChm = (props) => {
  const navigation = useNavigation();
  const [SigntryPW, setSigntryPW] = useState("");
  const [groupCnt, setgroupCnt] = useState("");
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

  
        

                const ftchChmDtls = async () =>{
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                    try{
                      const compDtls :any= await API.graphql(
                        graphqlOperation(getBizna,{BusKntct:groupCnt})
                        );
                        const signitoryPWs = compDtls.data.getBizna.pw
                        const grpNames = compDtls.data.getBizna.busName
                        const owners = compDtls.data.getBizna.owner
                        
                                      const updtChmDtls = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try{
                                            await API.graphql(
                                              graphqlOperation(deleteBizna,{
                                                input:{
                                                  BusKntct:groupCnt
                                                  
                                                }
                                              })
                                            )
                                    
                                            
                                        }
                                        catch(error){if(error){
                                          console.log(error)
                                          Alert.alert("Please internet; otherwise Business doesnt exist")
                                          
                                      } 
                                    }
                                        setIsLoading(false);
                                        Alert.alert(names +" has dissolved "+grpNames+" Business");
                                      } 

                                     if(signitoryPWs!==SigntryPW)
                                      {
                                          Alert.alert("Wrong Admin password");
                                      }

                                      else if(ownr!==owners)
                                      {
                                          Alert.alert("You do not own this business");
                                      }

                                      
                                      else {updtChmDtls();}

        
                    } catch (error) {
                        if(error){
                          Alert.alert("Check internet; otherwise Business doesnt exist")
                          return
                        }
                      }
                    
                      setgroupCnt("");
                      setSigntryPW("")
                    
                    }
                      

            
        useEffect(() =>{
          const groupCnts=groupCnt
            if(!groupCnts && groupCnts!=="")
            {
              setgroupCnt("");
              return;
            }
            setgroupCnt(groupCnts);
            }, [groupCnt]
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
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={groupCnt}
                      onChangeText={setgroupCnt}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SigntryPW}
                      onChangeText={setSigntryPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business PassWord</Text>
                  </View>       
                  
        
                  <TouchableOpacity
                    onPress={ftchChmDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to dissolve Business
                    </Text>
                    {isLoading && <ActivityIndicator color={'Blue'} size="large"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DissolveChm;