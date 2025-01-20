import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers, createGroup,   createPersonel,   updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, listBiznas,  } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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




const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
 
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const WorkerID = "00001"+ChmPhn


  const fetchAcDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
   
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
      );

  
      const owners = accountDtl.data.getSMAccount.owner;
      const nationalid = accountDtl.data.getSMAccount.nationalid

      const ChckBizExistence = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listBiznas,
              { filter: 
                {
                  and:{
                    licenseNo: { eq: Sign2Phn},
                    status: {eq: "AccountActive"},
                    noBL: {gt: 0}
                    
                }                          
                }}
            )
          )

          const ChckBizExistence2 = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const UsrDtls2:any = await API.graphql(
                graphqlOperation(listBiznas,
                  { filter: 
                    {
                      and:{
                        email: { eq: userInfo.attributes.email},
                        status: {eq: "AccountActive"},
                        noBL: {gt: 0}
                        
                    }                          
                    }}
                )
              )

      const CreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        const userInfo = await Auth.currentAuthenticatedUser();
      
     
        try {
          await API.graphql(
          graphqlOperation(createBizna, {
          input: {
           
            BusKntct:ChmPhn,
            busName: ChmNm,
            pw: pword,
            email: userInfo.attributes.email,
            owner2email:userInfo.attributes.email,
            TtlEarnings: 0,
            earningsBal: 0,
            bizBeneficiary:userInfo.attributes.email,
            netEarnings:0,
            description: ChmDesc,
            licenseNo: Sign2Phn,
            bizType:"bizType",
            status: "AccountActive",
            owner: userInfo.attributes.sub,
            beneficiaryType: "Biz",
            benefitsAmount: 0,
            noBL:0,

            TtlActvLonsTmsLnrCredSlsB2B: 0,
            TtlActvLonsAmtLnrCredSlsB2B: 0,
            TtlBLLonsTmsLnrCredSlsB2B: 0,
            TtlBLLonsAmtLnrCredSlsB2B: 0,
            TtlClrdLonsTmsLnrCredSlsB2B: 0,
            TtlClrdLonsAmtLnrCredSlsB2B: 0,
            TtlActvLonsTmsLneeCredSlsB2B: 0,
            TtlActvLonsAmtLneeCredSlsB2B: 0,
            TtlBLLonsTmsLneeCredSlsB2B: 0,
            TtlBLLonsAmtLneeCredSlsB2B: 0,
            TtlClrdLonsTmsLneeCredSlsB2B: 0,
            TtlClrdLonsAmtLneeCredSlsB2B: 0,
          
            TtlActvLonsTmsLnrCredSlsB2P: 0,
            TtlActvLonsAmtLnrCredSlsB2P: 0,
            TtlBLLonsTmsLnrCredSlsB2P: 0,
            TtlBLLonsAmtLnrCredSlsB2P: 0,
            TtlClrdLonsTmsLnrCredSlsB2P: 0,
            TtlClrdLonsAmtLnrCredSlsB2P: 0,
            TtlActvLonsTmsLneeCredSlsP2B: 0,
            TtlActvLonsAmtLneeCredSlsP2B: 0,
            TtlBLLonsTmsLneeCredSlsP2B: 0,
            TtlBLLonsAmtLneeCredSlsP2B: 0,
            TtlClrdLonsTmsLneeCredSlsP2B: 0,
            TtlClrdLonsAmtLneeCredSlsP2B: 0,
            
            objectionStatus:"NotObjected",
            objOfficer: "None",
            objReason: "None",
            AdminNo:1,
            Admin1:userInfo.attributes.email,
            Admin2:"None",
            Admin3:"None",
            Admin4:"None",
            Admin5:"None",
            Admin6:"None",
            Admin7:"None",
            Admin8:"None",
            Admin9:"None",
            Admin10:"None",
            Admin11:"None",
            Admin12:"None",
            Admin13:"None",
            Admin14:"None",
            Admin15:"None",
            Admin16:"None",
            Admin17:"None",
            Admin18:"None",
            Admin19:"None",
            Admin20:"None",
            Admin21:"None",
            Admin22:"None",
            Admin23:"None",
            Admin24:"None",
            Admin25:"None",
            Admin26:"None",
            Admin27:"None",
            Admin28:"None",
            Admin29:"None",
            Admin30:"None",
            Admin31:"None",
            Admin32:"None",
            Admin33:"None",
            Admin34:"None",
            Admin35:"None",
            Admin36:"None",
            Admin37:"None",
            Admin38:"None",
            Admin39:"None",
            Admin40:"None",
            Admin41:"None",
            Admin42:"None",
            Admin43:"None",
            Admin44:"None",
            Admin45:"None",
            Admin46:"None",
            Admin47:"None",
            Admin48:"None",
            Admin49:"None",
            Admin50:"None",
                  },
                })
                
                ,
              );

              
              
            } catch (error) {
              if (error){
                Alert.alert("Creation unsuccessful; Retry")
                return
              }
            
            }
            await onCreateNewSMAc();
            
                     };

                     const onCreateNewSMAc = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                        await API.graphql(
                        graphqlOperation(createPersonel, {
                        input: {
                          BusinessRegNo: ChmPhn,
                          phoneKontact:userInfo.attributes.email,
                          name: userInfo.username,
                          workerId: WorkerID,
                          workId:"00001",
                          email: userInfo.attributes.email,
                          nationalid:nationalid,
                          BiznaName:ChmNm,
                          ownrsss: owners,
                                },
                              }),
                            );
                            
                          } catch (error) {
                            if (error){
                              Alert.alert("Error: possible this Business Phone exists here")
                              return
                            }
                          
                          }
                          Alert.alert("Business and owner accounts successfully created")
                          
                          setIsLoading(false);
                          
                          
                        };

                     if (pword.length < 8)
          {Alert.alert("password is too short; at least eight characters");
        
      } 
      
     else if (userInfo.attributes.sub !== owners)
    {Alert.alert ("Please first create main account")}

    else if (UsrDtls.data.listBiznas.items.length > 0)
    {Alert.alert ("This license number is blacklisted by one of your clients")}

    else if (UsrDtls2.data.listBiznas.items.length> 0)
    {Alert.alert ("You have a business blacklisted by one of your clients")}

    else if (pword !== ChmRegNo) {
      Alert.alert('Passwords do not match.');
      return;
    }


    else{
                           await CreateNewSMAc();}

                          } catch (e) {
                            if(e){Alert.alert("Retry or update app or call customer care")
                          return}
                            
                          }
                                    
                        }
                        
                        await ChckBizExistence2 ();
                      
                      } catch (e) {
                            if(e){Alert.alert("Retry or update app or call customer care")
                          return}
                            
                          }
                                    
                        }
                        
                        await ChckBizExistence ();
                      
                      }

        catch (e) {
          console.log(e)
          if (e){Alert.alert("Check your Details")
          return;}
              
         }       
         setIsLoading(false);
         setChmPhn('');
         setPW('');
         setAWSEmail("")
         setChmDesc("")
         setChmNm("")
         setChmRegNo("")
         setMmbaID("")
         setSign2Phn(""); 
      }; 
          
    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs !=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const ChmRegNos=ChmRegNo
          if(!ChmRegNos && ChmRegNos !=="")
          {
            setChmRegNo("");
            return;
          }
          setChmRegNo(ChmRegNos);
          }, [ChmRegNo]
           );
           
           useEffect(() =>{
        const awsEmails=awsEmail
          if(!awsEmails && awsEmails !=="")
          {
            setAWSEmail("");
            return;
          }
          setAWSEmail(awsEmails);
          }, [awsEmail]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms !=="")
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

         useEffect(() =>{
          const Sign2Phns=Sign2Phn
            if(!Sign2Phns && Sign2Phns !=="")
            {
              setSign2Phn("");
              return;
            }
            setSign2Phn(Sign2Phns);
            }, [Sign2Phn]
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
                        placeholder="Business Phone Number"
                        value={ChmPhn}
                        onChangeText={setChmPhn}
                        style={styles.input}
                      />
                      <TextInput
                        placeholder="Business Name"
                        value={ChmNm}
                        onChangeText={setChmNm}
                        style={styles.input}
                      />
                      <TextInput
                        placeholder="Registration Number"
                        value={Sign2Phn}
                        onChangeText={setSign2Phn}
                        style={styles.input}
                      />
                      <TextInput
                        placeholder="Business Description"
                        value={ChmDesc}
                        onChangeText={setChmDesc}
                        style={styles.input}
                        multiline={true}  // Enables multi-line input
                textAlignVertical="top"
                      />

                      <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Biz Account Password"
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
                     
                                                               <View style={styles.passwordContainer}>
                                                                 <TextInput
                                                                   placeholder="Confirm Biz Account Password"
                                                               style={styles.passwordInput}
                                                                                                    
                                                               value={ChmRegNo}
                                                               onChangeText={setChmRegNo}
                                                               secureTextEntry={!isPasswordVisible}
                                                               placeholderTextColor="#ccc"
                                                               />
                                                               <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                              <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                                               </TouchableOpacity>
                                                              </View>
                      
                      <TouchableOpacity onPress={fetchAcDtls} style={styles.button}>
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
        
        export default CreateBiz;