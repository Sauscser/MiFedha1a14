import React, {useEffect, useState} from 'react';

import {createGrpMembers, createSMAccount, updateCompany, updateGroup} from '../../../src/graphql/mutations';
import { getCompany, getGroup, getSMAccount, listSMAccounts, } from '../../../src/graphql/queries';
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

const AddChmMmbrs = (props:UserReg) => {

  const{usr} = props;

  


  const navigation = useNavigation();

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContacts, setPhoneContacts] = useState("");
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const[ownr, setownr] = useState(null);


  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);
      ;
          
    };

    

    useEffect(() => {
        fetchUser();
      }, []);

      const ChckUsrExistence = async () => {
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(getSMAccount, { phonecontact:phoneContacts}),
                        
          )

          const nationalidsss = UsrDtls.data.getSMAccount.nationalid;
          const namess = UsrDtls.data.getSMAccount.name;
        
          const gtCompDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const ttlActiveChmUserss = compDtls.data.getCompany.ttlActiveChmUsers;
                
                const gtChmDtls = async () =>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                    const compDtls :any= await API.graphql(
                      graphqlOperation(getGroup,{grpContact:ChmPhn})
                      );
                      const ttlGrpMemberss = compDtls.data.getGroup.ttlGrpMembers;  
                      const grpNames = compDtls.data.getGroup.grpName; 
                      const owners = compDtls.data.getGroup.owner;              
                    
                      const CrtChm = async () => {
                        if(isLoading){
                          return;
                        }
                        setIsLoading(true);
                        try {
                          await API.graphql(
                          graphqlOperation(createGrpMembers, {
                          input: {
                            groupContact: ChmPhn,
                            memberContact: phoneContacts,
                            memberNatId: nationalidsss,
                            acBal: 0,
                            ttlAcBal:0,
                            groupName:grpNames,
                            memberName:namess,
                            AcStatus: "AccountActive",
                            loanStatus: "NoLoan",
                            blStatus: "AccountNotBL",
                            owner: namess,
                            
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
                          
          
                     if (ChmPhn.length < 13)
                          {Alert.alert("Please enter phone number as hinted");
                        return;
                      } 

                      else  if (phoneContacts.length < 13)
                          {Alert.alert("Please enter phone number as hinted");
                        return;
                      } 

                      else  if (ownr === owners)
                          {Alert.alert("You are not the author of this Chama");
                        return;
                      } 
                      
                      else {
                        CrtChm();
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
                                      ttlActiveChmUsers:parseFloat(ttlActiveChmUserss) + 1,
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
                            await updtChm();
                            
                            setIsLoading(false);
                          }                       
                          const updtChm = async()=>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateGroup,{
                                    input:{
                                      grpContact:ChmPhn,
                                      ttlGrpMembers:parseFloat(ttlGrpMemberss) + 1,
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
                            Alert.alert("Congrats " + nam + ", You have added " + namess +" to " +grpNames)
                            setIsLoading(false);
                          }
                          
          
          
            }          
            
            
            catch(e){
              console.log(e)
              if(e){
                Alert.alert("Group does not exist; otherwise check internet connection")
                return;
            }
            }
                        setIsLoading(false)
                        
            };
              
               await gtChmDtls();

            
              
      }
      
      catch(e){
        console.log(e)
        if(e){
          Alert.alert("Check your internet")
          return;
      }
      }
                  setIsLoading(false)
                  setChmPhn('');
                  setPW('');
                  setPhoneContacts("")
                  setChmDesc("")
                  setChmNm("")
      };
        
         await gtCompDtls();
        
        } catch (e) {
          console.error(e);
          if (e){Alert.alert("User contact does not exist")}
        }
      }
    
      useEffect(() =>{
        const phoneContactss=phoneContacts
          if(!phoneContactss && phoneContactss!=="")
          {
            setPhoneContacts("");
            return;
          }
          setPhoneContacts(phoneContactss);
          }, [phoneContacts]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
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
                    <Text style={styles.title}>Fill Chama Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={ChmPhn}
                      onChangeText={setChmPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Phone Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={phoneContacts}
                      onChangeText={setPhoneContacts}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Member Phone</Text>
                  </View>

                 
        
                  <TouchableOpacity
                    onPress={ChckUsrExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Add Chama Member
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default AddChmMmbrs;