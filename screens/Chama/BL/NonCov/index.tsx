import React, {useEffect, useState} from 'react';

import {updateChamaMembers, updateCompany, updateGroup,  updateNonCvrdGroupLoans, updateSMAccount, updateSMLoansCovered, updateSMLoansNonCovered, } from '../../../../src/graphql/mutations';
import {getCompany, getGroup, getNonCvrdGroupLoans, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../src/graphql/queries';
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



  


const BLChmNonCovLoanee = (props) => {
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
        const ttlChmLnsInBlAmtNonCovs = compDtls.data.getCompany.ttlChmLnsInBlAmtNonCov
        const ttlChmLnsInBlTymsNonCovs = compDtls.data.getCompany.ttlChmLnsInBlTymsNonCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs


        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getNonCvrdGroupLoans,{id:route.params.id})
              );
              const loaneePhns = compDtls.data.getNonCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls.data.getNonCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls.data.getNonCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls.data.getNonCvrdGroupLoans.amountRepaid
              const amountGivens = compDtls.data.getNonCvrdGroupLoans.amountGiven
              const amountExpectedBackWthClrncs = compDtls.data.getNonCvrdGroupLoans.amountExpectedBackWthClrnc
              
              const statusssss = compDtls.data.getNonCvrdGroupLoans.status
              const memberIds = compDtls.data.getNonCvrdGroupLoans.memberId
              const DefaultPenaltyChms = compDtls.data.getNonCvrdGroupLoans.DefaultPenaltyChm
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
                    const TtlBLLonsTmsLnrChmNonCovs = compDtls.data.getGroup.TtlBLLonsTmsLnrChmNonCov
                    const TtlBLLonsAmtLnrChmNonCovs = compDtls.data.getGroup.TtlBLLonsAmtLnrChmNonCov
                    const grpNames = compDtls.data.getGroup.grpName
                    const tymsChmHvBLs = compDtls.data.getGroup.tymsChmHvBL
                    const TtlActvLonsAmtLnrChmNonCovs = compDtls.data.getGroup.TtlActvLonsAmtLnrChmNonCov    
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{phonecontact:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeChmNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsLneeChmNonCov
                          const TtlBLLonsAmtLneeChmNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtLneeChmNonCov
                          const acStatusss = compDtls.data.getSMAccount.acStatus
                          const namess = compDtls.data.getSMAccount.name
                          const MaxTymsBLs =compDtls.data.getSMAccount.MaxTymsBL;
                          const TtlActvLonsAmtLneeChmNonCovs = compDtls.data.getSMAccount.TtlActvLonsAmtLneeChmNonCov


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
                                      TtlBLLonsTmsLnrChmNonCov: parseFloat(TtlBLLonsTmsLnrChmNonCovs) + 1,
                                      TtlBLLonsAmtLnrChmNonCov: parseFloat(TtlBLLonsAmtLnrChmNonCovs) + amountExpectedBackWthClrncss,
                                      TtlActvLonsAmtLnrChmNonCov: (parseFloat(TtlActvLonsAmtLnrChmNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(2),
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
                                          ttlChmLnsInBlAmtNonCov: (parseFloat(ttlChmLnsInBlAmtNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(2),
                                          ttlChmLnsInBlTymsNonCov: parseFloat(ttlChmLnsInBlTymsNonCovs) + 1,
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
                                          phonecontact:loaneePhns,
                                          MaxTymsBL: parseFloat(MaxTymsBLs) + 1,
                                          TtlBLLonsTmsLneeChmNonCov: parseFloat(TtlBLLonsTmsLneeChmNonCovs) + 1,
                                          TtlBLLonsAmtLneeChmNonCov: (parseFloat(TtlBLLonsAmtLneeChmNonCovs) + amountExpectedBackWthClrncss).toFixed(2),
                                          TtlActvLonsAmtLneeChmNonCov: (parseFloat(TtlActvLonsAmtLneeChmNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(2),
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
                                      graphqlOperation(updateNonCvrdGroupLoans, {
                                        input:{
                                          id:route.params.id,
                                          amountExpectedBackWthClrnc:amountExpectedBackWthClrncss,
                                          lonBala:LonBal.toFixed(2),
                                          status:"LoanBL",
                                          DefaultPenaltyChm2:DefaultPenaltyChms,
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
                           }
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
          const usId=LonId
            if(!usId && usId!=="")
            {
              setLonId("");
              return;
            }
            setLonId(usId);
            }, [LonId]
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
                    <Text style={styles.sendLoanText}>Chama Signitory PassWprd</Text>
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
        
        export default BLChmNonCovLoanee;