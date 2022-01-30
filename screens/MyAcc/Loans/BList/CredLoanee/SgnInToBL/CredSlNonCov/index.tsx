import React, {useEffect, useState} from 'react';


import { getCompany, getGroup, getSMAccount, listPersonels, listSMAccounts, } from '../../../../../../../src/graphql/queries';
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


  


const ChmSignIn = (props) => {

  
  
  

  const navigation = useNavigation();

  const [grpContact, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContacts, setPhoneContacts] = useState("");
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [SendrPhn, setSendrPhn] = useState(null);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [memberPhn, setmemberPhn] = useState(''); 
  const[ownr, setownr] = useState(null);
  const ChmNMmbrPhns = ChmDesc+memberPhn

  

  const FetchGrpLonsSts = () => {
    navigation.navigate("Vw2BLCredSlsNonCovs", {ChmNMmbrPhns});
  };
  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);    
      setSendrPhn(userInfo.attributes.phone_number);     
          
    };
    useEffect(() => {
      fetchUser();
    }, []);

    const ChckPersonelExistence = async () => {
      try {
        const UsrDtls:any = await API.graphql(
          graphqlOperation(listPersonels,
            { filter: {
                
              phoneKontact: { eq: SendrPhn},
              BusinessRegNo:{eq: ChmDesc}
                            
              }}
          )
        )

        const gtChmDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getSMAccount,{phonecontact:SendrPhn})
              );
              const signitoryPWs = compDtls.data.getSMAccount.pw;  
              const owners = compDtls.data.getSMAccount.owner; 

              if(signitoryPWs!==pword){Alert.alert("Wrong User credentials")}
    else if (UsrDtls.data.listPersonels.items.length < 1) {
      Alert.alert("You do not work here");
      return;
      
    }
    else if(ownr!==owners){Alert.alert("This is not your Account")}
    else{FetchGrpLonsSts();}
                    }

                    
            
            catch(e){
              console.log(e)
              if(e){
                Alert.alert("Group does not exist; otherwise check inernet connection")
                return;
            }
            }
            
                        setIsLoading(false)
                        
            };

            await gtChmDtls();

          }catch(e){
              console.log(e)
              if(e){
                Alert.alert("Group does not exist; otherwise check inernet connection")
                return;
            }
            }
            
            setChmPhn('');
            setPW('');
            setPhoneContacts("")
            setChmDesc("")
            setChmNm("")
            setmemberPhn("")
                        setIsLoading(false)
                        
            };
              
               

            
              
      
                  
    
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
            const memberPhns=memberPhn
              if(!memberPhns && memberPhns!=="")
              {
                setmemberPhn("");
                return;
              }
              setmemberPhn(memberPhns);
              }, [memberPhn]
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
  const ChmPhns=grpContact
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [grpContact]
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
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={ChmDesc}
                      onChangeText={setChmDesc}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>

        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={memberPhn}
                      onChangeText={setmemberPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Buyer Phone</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    
                      value={pword}
                      onChangeText={setPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Sales Officer User PW</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={ChckPersonelExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to View
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default ChmSignIn;