import React, {useEffect, useState} from 'react';

import {updateCompany, updateSMAccount, updateCvrdGroupLoans, updateGroup,  updateChamaMembers, } from '../../../../src/graphql/mutations';
import {getCompany, getSMAccount, getCvrdGroupLoans, getGroup } from '../../../../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


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
  ActivityIndicator
} from 'react-native';
import styles from './styles';


  


const BLChmCovLoanee = (props) => {
  const navigation = useNavigation();

  const [LonId, setLonId] = useState("");
  const [ChmMbrId, setChmMbrId] = useState("");
  const [SigntryPW, setSigntryPW] = useState("");
  
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  


  const route = useRoute();
  

  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setownr(userInfo.attributes.sub);  
     
  }

  useEffect(() => {
    fetchUser();
    }, []);  
    
    const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ttlChmLnsInBlTymsCovs = compDtls.data.getCompany.ttlChmLnsInBlTymsCov
        const ttlChmLnsInBlAmtCovs = compDtls.data.getCompany.ttlChmLnsInBlAmtCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getCvrdGroupLoans,{id:route.params.id})
              );
              const loaneePhns = compDtls.data.getCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls.data.getCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls.data.getCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls.data.getCvrdGroupLoans.amountRepaid
              const amountGivens = compDtls.data.getCvrdGroupLoans.amountGiven
              const amountExpectedBackWthClrncs = compDtls.data.getCvrdGroupLoans.amountExpectedBackWthClrnc
              
              const statusssss = compDtls.data.getCvrdGroupLoans.status
              const memberIds = compDtls.data.getCvrdGroupLoans.memberId
              
              const DefaultPenaltyChms = compDtls.data.getCvrdGroupLoans.DefaultPenaltyChm
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs) + parseFloat(DefaultPenaltyChms)
              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids)

              const gtLoanerDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const compDtls :any= await API.graphql(
                    graphqlOperation(getGroup,{grpContact:loanerPhns})
                    );
                    const owners = compDtls.data.getGroup.owner
                    const acStatuss = compDtls.data.getGroup.status
                    const TtlBLLonsTmsLnrChmCovs = compDtls.data.getGroup.TtlBLLonsTmsLnrChmCov
                    const TtlBLLonsAmtLnrChmCovs = compDtls.data.getGroup.TtlBLLonsAmtLnrChmCov
                    const TtlActvLonsTmsLnrChmCovs = compDtls.data.getGroup.TtlActvLonsTmsLnrChmCov
                    const TtlActvLonsAmtLnrChmCovs = compDtls.data.getGroup.TtlActvLonsAmtLnrChmCov
                    const grpNames = compDtls.data.getGroup.grpName
                    const tymsChmHvBLs = compDtls.data.getGroup.tymsChmHvBL
                    const signitoryPWs = compDtls.data.getGroup.signitoryPW
                         
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeChmCovs = compDtls.data.getSMAccount.TtlBLLonsTmsLneeChmCov
                          const TtlBLLonsAmtLneeChmCovs = compDtls.data.getSMAccount.TtlBLLonsAmtLneeChmCov
                          const TtlActvLonsTmsLneeChmCovs = compDtls.data.getSMAccount.TtlActvLonsTmsLneeChmCov
                          const TtlActvLonsAmtLneeChmCovs = compDtls.data.getSMAccount.TtlActvLonsAmtLneeChmCov
                          const acStatusss = compDtls.data.getSMAccount.acStatus
                          const namess = compDtls.data.getSMAccount.name
                          const MaxTymsBLs =compDtls.data.getSMAccount.MaxTymsBL;

                          const updateLoanerDtls = async () => {
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateGroup,{
                                    input:{
                                      grpContact:loanerPhns,
                                      tymsChmHvBL: parseFloat(tymsChmHvBLs) + 1,
                                      TtlBLLonsTmsLnrChmCov: parseFloat(TtlBLLonsTmsLnrChmCovs) + 1,
                                      TtlBLLonsAmtLnrChmCov: (parseFloat(TtlBLLonsAmtLnrChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                      TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                      
                                    }
                                  })
                                )
                        
                                
                            }
                            catch(error){ 
                        console.log(error)
                      }

                            setIsLoading(false);          
                            await updtActAdm ();
                          } 
                          
                          if(LonBal === 0){
                            Alert.alert("Loanee has cleared this loan")
                          }

                          else if(owners !== ownr){
                            Alert.alert("You are not the one owed this loan")
                          } 
                          

                          else if(statusssss === "LoanBL"){
                            Alert.alert("This Loan is already Black Listed")
                          } 

                          else if(acStatuss === "AccountInactive"){
                            Alert.alert("Loaner account has been deactivated")
                          } 

                          else if(acStatusss === "AccountInactive"){
                            Alert.alert("Loanee account has been deactivated")
                          } 
                          else{updateLoanerDtls();}
                          
                  
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
                                          ttlChmLnsInBlTymsCov: parseFloat(ttlChmLnsInBlTymsCovs) + 1,
                                          ttlChmLnsInBlAmtCov: (parseFloat(ttlChmLnsInBlAmtCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          ttlBLUsrs:parseFloat(ttlBLUsrss) + 1,
                                        }
                                      })
                                    )
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Check your internet")
                                  return;
                              }}
                              await updateLoaneeDtls();
                              setIsLoading(false);
                              }
                              
                              const updateLoaneeDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount,{
                                        input:{
                                          awsemail:loaneePhns,
                                          MaxTymsBL: parseFloat(MaxTymsBLs) + 1,
                                          TtlBLLonsTmsLneeChmCov: parseFloat(TtlBLLonsTmsLneeChmCovs) + 1,
                                          TtlBLLonsAmtLneeChmCov: (parseFloat(TtlBLLonsAmtLneeChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                          
                                          TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                          loanStatus: "LoanActive"
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  }
                              await updateLoanDtls();
                                setIsLoading(false);          
                              } 

                              const updateLoanDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          id:route.params.id,
                                          amountExpectedBackWthClrnc:amountExpectedBackWthClrncss,
                                          lonBala:LonBal.toFixed(0),
                                          status:"LoanBL",
                                          DefaultPenaltyChm2:DefaultPenaltyChms.toFixed(0),
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Ensure Member Exists");
                                  return;
                              } 
                               }
                              await updateMbrDtls();
                              
                                setIsLoading(false);          
                              } 

                              const updateMbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateChamaMembers, {
                                        input:{
                                          ChamaNMember:memberIds,
                                          
                                          blStatus:"AccountBlackListed",
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                   }
                              Alert.alert(grpNames +", you have blacklisted "+ namess)
                                setIsLoading(false);          
                              } 
                              
                        }
            
                        
                        catch(error){
                          console.log(error)
                          if(!error){
                          Alert.alert("Account deactivated successfully")
                          
                      } 
                      else{Alert.alert("Please check your internet connection")
                      return;} }
                        setIsLoading(false);         
                        
                      }
                      await gtLoaneeDtls(); 
                  }
      
                  catch(error){ console.log(error)}
                  setIsLoading(false);         
                  
                }
                await gtLoanerDtls(); 
            }

            catch(error){
              console.log(error)
              if(error){
              Alert.alert("Loan does not exist")
              return;              
          } 
           }
            setIsLoading(false);                     
          } 
          await gtLoanDtls();        
            
          } catch (error) {
            console.log(error)
            
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          }
          
          setIsLoading(false);
          setLonId("") 
          setChmMbrId("")
          setSigntryPW("")
        };    

        useEffect(() =>{
          const usId=LonId
            if(!usId && usId!=="")
            {
              setLonId("");
              return;
            }
            setLonId(usId);
            }, [LonId]
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
    

             useEffect(() =>{
              const ChmMbrIds=ChmMbrId
                if(!ChmMbrIds && ChmMbrIds!=="")
                {
                  setChmMbrId("");
                  return;
                }
                setChmMbrId(ChmMbrIds);
                }, [ChmMbrId]
                 );
        
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill User Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={SigntryPW}
                      onChangeText={setSigntryPW}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Comment</Text>
                  </View>       
                  
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Black List 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default BLChmCovLoanee;