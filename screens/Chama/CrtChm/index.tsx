import React, {useEffect, useState} from 'react';

import {createChamaMembers, createGroup,   updateChamaApply,   updateChamaApply2,   updateCompany} from '../../../src/graphql/mutations';
import { getBankAdmin, getCompany, getMiFedhaBankAdmin, getSMAccount,   } from '../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


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


  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');
  const [Sign3Phn, setSign3Phn] = useState('');
  const [oprtnAreas, setoprtnAreas] = useState('');
  const [ventures, setventures] = useState('');
  const [Err1, setErr1] = useState(null);
  const [SubFreq, setSubFreq] = useState('');
  const [SubAmt, setSubAmt] = useState('');
  const [lateSub, setlateSub] = useState('');
  const route = useRoute()
  const {id, bankAdminEmail, ChamaAcNu} = route.params

 

  const ChmPhnNphoneContact = MmbaID+ChamaAcNu


  const BankAdminDtls = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
 
    try {
      const UsrDtlsx:any = await API.graphql(
        graphqlOperation(getMiFedhaBankAdmin, { nationalid:bankAdminEmail}),
                    
      )

      const BankBranch = UsrDtlsx.data.getMiFedhaBankAdmin.bank;
      const BankAdminEml = UsrDtlsx.data.getMiFedhaBankAdmin.email;
      

  

      const ChckUsrExistence = async () => {
        
     
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(getSMAccount, { awsemail:userInfo.attributes.email}),
                        
          )

          const nationalidsss = UsrDtls.data.getSMAccount.nationalid;
          const namess = UsrDtls.data.getSMAccount.name;
          const owner = UsrDtls.data.getSMAccount.owner;

          const FetchSign2 = async () => {
            try {
              const UsrDtlss:any = await API.graphql(
                graphqlOperation(getSMAccount, { awsemail:Sign2Phn}),
                            
              )
    
              const ownrsss = UsrDtlss.data.getSMAccount.owner;
              
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

                const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)
              
            const onCreateNewSMAc = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                graphqlOperation(createGroup, {
                input: {
                  grpContact: ChamaAcNu,
                  regNo:ChmRegNo,
                  signitoryContact: userInfo.attributes.phone_number,
                  SignatoryEmail: userInfo.attributes.email, 
                  SignitoryNatid: nationalidsss,
                  signitoryName: namess,
                  grpName: ChmNm,
                  signitoryPW: pword,
                  signitory2Sub: Sign2Phn,
                  signatory2Email: Sign2Phn,
 
                  Signatory3Email:Sign3Phn,
                  
                  signitory3Sub2: Sign3Phn,
                  WithdrawCnfrmtn2: "NO",
                  WithdrawCnfrmtnAmt2: 0,
                  WithdrawCnfrmtn: "NO",
                  WithdrawCnfrmtnAmt:0,
                  BankAdminEmail: BankAdminEml,
                  BankAdminAcNu: bankAdminEmail,
                  
                  GrpLoanOutSync: 0,
                  GrpLoanRpymntSync: 0,
                  MemberSubscrptnSync: 0,
                  MemberDividendSync: 0,
                  DepositSync:0,
                  WithdrawalSync:0,
                  BankName: "Equity",
                  BranchNu: BankBranch,
                  grpEmail: awsEmail,
                  oprtnArea:oprtnAreas,
                  venture: ventures,
                  grpBal: 0,
                  ttlGrpMembers: 1,
                  description: ChmDesc,
                  
                  ChmBenefits:0,
                  subscriptionFrequency: SubFreq,
                  subscriptionAmt: SubAmt,
                  lateSubscriptionPenalty:lateSub,
                  objectionStatus:"NotObjected",
                  objOfficer: "None",
                  objReason: "None",
                  AdminNo:0,
                  Admin1:"None",
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
                  owner: userInfo.attributes.sub,
                        },
                      }),
                    );
                    
                  } catch (error) {
                    console.log(error)
                    if (error){
                      Alert.alert("Creation unsuccessful; enter details correctly")
                      return
                    }
                  }
                  setIsLoading(false);
                  await CrtChm();               
                  
                  
                };
                if (pword.length < 8)
                {Alert.alert("password is too short; at least eight characters");
              
            } 
            else if (parseFloat(lateSub)>parseFloat(SubAmt))
            {
              Alert.alert("Too high late subscription panalty")
            }
            
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
                  groupContact: ChamaAcNu,
                  regNo:ChmRegNo,
                  ChamaNMember:ChmPhnNphoneContact,
                  memberContact: userInfo.attributes.email,
                  memberNatId: nationalidsss,
                  memberChmBenefit:0,
                  timeCrtd:daysUpToDate,
                  subscribedAmt:0,
                  totalSubAmt:0,
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
                  owner: userInfo.attributes.sub,
                  ttlLateSubs:0,
                  subscriptionFrequency: SubFreq,
                  subscriptionAmt: SubAmt,
                  lateSubscriptionPenalty:lateSub,
                        },
                      }),
                    );
                    
                  } catch (error) {
                    
                    
                    console.log(error)
                  }
                  
                  setIsLoading(false);
                  await updtChamaAppl();
                };
                
      
                const updtChamaAppl = async()=>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                      await API.graphql(
                        graphqlOperation(updateChamaApply2,{
                          input:{
                            id:id,
                            status: "AccountInactive"
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
                  await updtActAdm();
                   setIsLoading(false);
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
                            ttlActiveChm:parseFloat(ttlActiveChms) + 1,
                            ttlActiveChmUsers:parseFloat(ttlActiveChmUserss) + 1,
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
                  Alert.alert("Congrats " + userInfo.username + ", You have created " + ChmNm+" Chama")
                  setIsLoading(false);
                }
                
           
             
      }
      
      catch(e){
        console.log(e)
        if(e){
          Alert.alert("Retry or update app or call customer care")
          return;
      }
      }
                  
      };
        
         await gtCompDtls();

        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
          return;}
      };
         
    }

    if (userInfo.attributes.sub !== owner)
    {Alert.alert ("Please first create main account")}
    else{
    await FetchSign2();}

  } catch (e) {
    console.log(e)
    if (e){Alert.alert("Retry or update app or call customer care")
    return;}
};
   
}

 await ChckUsrExistence();
         
        
        } catch (e) {
          console.log(e)
          if (e){
            Alert.alert("Creation unsuccessful; Retry")
            return
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
                  setSign2Phn("");
                  setSign3Phn("");
                  setventures("");
                  setoprtnAreas("");
                  setSubAmt("");
                  setSubFreq("");
                  setlateSub("")
      }

      
    
      useEffect(() =>{
        const lateSubs=lateSub
          if(!lateSubs && lateSubs!=="")
          {
            setlateSub("");
            return;
          }
          setlateSub(lateSubs);
          }, [lateSub]
           );

           useEffect(() =>{
            const SubAmts=SubAmt
              if(!SubAmts && SubAmts!=="")
              {
                setSubAmt("");
                return;
              }
              setSubAmt(SubAmts);
              }, [SubAmt]
               );
           
           useEffect(() =>{
        const SubFreqs=SubFreq
          if(!SubFreqs && SubFreqs!=="")
          {
            setSubFreq("");
            return;
          }
          setSubFreq(SubFreqs);
          }, [SubFreq]
           );

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

         useEffect(() =>{
          const Sign2Phns=Sign2Phn
            if(!Sign2Phns && Sign2Phns!=="")
            {
              setSign2Phn("");
              return;
            }
            setSign2Phn(Sign2Phns);
            }, [Sign2Phn]
             );

             useEffect(() =>{
          const Sign3Phns=Sign3Phn
            if(!Sign3Phns && Sign3Phns!=="")
            {
              setSign3Phn("");
              return;
            }
            setSign3Phn(Sign3Phns);
            }, [Sign3Phn]
             );

             useEffect(() =>{
              const oprtnAreass=oprtnAreas
                if(!oprtnAreass && oprtnAreass!=="")
                {
                  setoprtnAreas("");
                  return;
                }
                setoprtnAreas(oprtnAreass);
                }, [oprtnAreas]
                 );

                 useEffect(() =>{
                  const venturess=ventures
                    if(!venturess && venturess!=="")
                    {
                      setventures("");
                      return;
                    }
                    setventures(venturess);
                    }, [ventures]
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
                     placeholder="Signitory Chama Number"
                      value={MmbaID}
                      onChangeText={setMmbaID}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    
                  </View>
                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                     placeholder="Chama Registration Number"
                      value={ChmRegNo}
                      onChangeText={setChmRegNo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    
                  </View>

                  
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Chama Name"
                      value={ChmNm}
                      onChangeText={setChmNm}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Chama Email"
                      value={awsEmail}
                      onChangeText={setAWSEmail}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    
                  </View>

                  
        
                 

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Signatory 2 Email"
                      value={Sign2Phn}
                      onChangeText={setSign2Phn}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Signatory 3 Email"
                      value={Sign3Phn}
                      onChangeText={setSign3Phn}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Chama Region"
                      value={oprtnAreas}
                      onChangeText={setoprtnAreas}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Chama Venture"
                      value={ventures}
                      onChangeText={setventures}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Chama Description"
                    multiline={true}
                      value={ChmDesc}
                      onChangeText={setChmDesc}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Signatory Subscription Amount'
                     keyboardType='decimal-pad'
                     
                      value={SubAmt}
                      onChangeText={setSubAmt}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                   
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Signatory Subscription Frequency (Days)'
                     keyboardType='decimal-pad'
                     
                      value={SubFreq}
                      onChangeText={setSubFreq}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Signatory Late Subscription Penalty'
                     keyboardType='decimal-pad'
                     
                      value={lateSub}
                      onChangeText={setlateSub}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Enter Chama PassWord"
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                   
                  </View>
        
                  <TouchableOpacity
                    onPress={BankAdminDtls}
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