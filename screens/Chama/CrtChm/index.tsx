import React, {useEffect, useState} from 'react';

import {createChamaMembers, createGroup,   updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, listChamasRegConfirms, vwViaPhonss,  } from '../../../src/graphql/queries';
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

export type UserReg = {
  usr:String;
  
}

const CreateChama = (props:UserReg) => {

  const{usr} = props;

  


  const navigation = useNavigation();

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
  const [phoneContact, setPhoneContact] = useState(null);
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const[ownr, setownr] = useState(null);

  const ChmPhnNphoneContact = MmbaID+ChmPhn


  

  
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      
      setName(userInfo.username);
      setownr(userInfo.attributes.sub);
      setPhoneContact(userInfo.attributes.phone_number);
          
    };

    

    useEffect(() => {
        fetchUser();
      }, []);

      const ChckUsrExistence = async () => {
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(getSMAccount, { phonecontact:phoneContact}),
                        
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
                const ttlActiveChms = compDtls.data.getCompany.ttlActiveChm;
                const phoneContacts = compDtls.data.getCompany.phoneContact;
                const ttlActiveChmUserss = compDtls.data.getCompany.ttlActiveChmUsers;

                const confrmReg = async () =>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                    const compDtls :any= await API.graphql(
                      graphqlOperation(vwViaPhonss,{contact:ChmPhn}
                    
                        
                                      
                        ))
              
            const onCreateNewSMAc = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                graphqlOperation(createGroup, {
                input: {
                  grpContact: ChmPhn,
                  regNo:ChmRegNo,
                  signitoryContact: phoneContact,
                  SignitoryNatid: nationalidsss,
                  signitoryName: namess,
                  grpName: ChmNm,
                  signitoryPW: pword,
                  grpEmail: awsEmail,
                  grpBal: 0,
                  ttlGrpMembers: 1,
                  description: ChmDesc,
                
                  ttlNonLonsRecChm: 0,
                  ttlNonLonsSentChm:0,
                
                  ttlDpst: 0,
                  ttlWthdrwn: 0,
                  tymsChmHvBL:0,
                  TtlActvLonsTmsLnrChmCov: 0,
                  TtlActvLonsAmtLnrChmCov: 0,
                  TtlBLLonsTmsLnrChmCov: 0,
                  TtlBLLonsAmtLnrChmCov: 0,
                  TtlClrdLonsTmsLnrChmCov: 0,
                  TtlClrdLonsAmtLnrChmCov: 0,                
                  TtlActvLonsTmsLnrChmNonCov: 0,
                  TtlActvLonsAmtLnrChmNonCov: 0,
                  TtlBLLonsTmsLnrChmNonCov: 0,
                  TtlBLLonsAmtLnrChmNonCov: 0,
                  TtlClrdLonsTmsLnrChmNonCov: 0,
                  TtlClrdLonsAmtLnrChmNonCov: 0,
                  
                  status: "AccountActive",
                  owner: ownr,
                        },
                      }),
                    );
                    
                  } catch (error) {
                    console.log(error)
                    if(error){
                      Alert.alert("Not authorised to create Chama. Call: "+phoneContacts)
                      return;
                  } 
                  
                  }
                  await CrtChm();
                  setIsLoading(false);
                  
                };
                if (pword.length < 8)
                {Alert.alert("password is too short; at least eight characters");
              
            } 
            else if(phoneContact===ChmPhn)
            {Alert.alert("This Phone number has been used in a single member Account")}

            
            
            else {
              onCreateNewSMAc();
            }


            const CrtChm = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                graphqlOperation(createChamaMembers, {
                input: {
                  MembaId:MmbaID,
                  groupContact: ChmPhn,
                  regNo:ChmRegNo,
                  ChamaNMember:ChmPhnNphoneContact,
                  memberContact: phoneContact,
                  memberNatId: nationalidsss,
                  
                  
                  GrossLnsGvn:0,
                  LonAmtGven: 0,
                  AmtRepaid:0,
                  LnBal: 0,
                  NonLoanAcBal: 0,
                  ttlNonLonAcBal: 0,
                  groupName:ChmNm,
                  memberName:namess,
                  AcStatus: "AccountActive",
                  loanStatus: "NoLoan",
                  blStatus: "AccountNotBL",
                  owner: ownr,
                  
                        },
                      }),
                    );
                    
                  } catch (error) {
                    console.log(error)
                    if(error){
                      Alert.alert("Enter details correctly; NB: Chama Phone should be new")
                      return;
                  } 
                  
                  }
                  await updtActAdm();
                  setIsLoading(false);
                  
                };
                
      
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
                            ttlActiveChm:parseFloat(ttlActiveChms) + 1,
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
                  Alert.alert("Congrats " + nam + ", You have created " + ChmNm+" Chama")
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
                          
              };
              await confrmReg();

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
                  setAWSEmail("")
                  setChmDesc("")
                  setChmNm("")
                  setChmRegNo("")
                  setMmbaID("")
      };
        
         await gtCompDtls();
        
        } catch (e) {
          console.error(e);
        }
      }
    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs!=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const ChmRegNos=ChmRegNo
          if(!ChmRegNos && ChmRegNos!=="")
          {
            setChmRegNo("");
            return;
          }
          setChmRegNo(ChmRegNos);
          }, [ChmRegNo]
           );
           
           useEffect(() =>{
        const awsEmails=awsEmail
          if(!awsEmails && awsEmails!=="")
          {
            setAWSEmail("");
            return;
          }
          setAWSEmail(awsEmails);
          }, [awsEmail]
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
                     
                      value={MmbaID}
                      onChangeText={setMmbaID}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Signitory Chama Number</Text>
                  </View>
                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                     
                      value={ChmRegNo}
                      onChangeText={setChmRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Registration Number</Text>
                  </View>

                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={ChmNm}
                      onChangeText={setChmNm}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Name</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={awsEmail}
                      onChangeText={setAWSEmail}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama email</Text>
                  </View>

                  
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Pass Word</Text>
                  </View>

                  <View style={styles.sendAmtViewDesc}>
                    <TextInput
                      value={ChmDesc}
                      onChangeText={setChmDesc}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Description</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={ChckUsrExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Create Chama
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateChama;