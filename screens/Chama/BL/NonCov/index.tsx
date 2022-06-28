import React, {useEffect, useState} from 'react';

import {updateChamaMembers, updateCompany, updateGroup,  updateNonCvrdGroupLoans, updateSMAccount, updateSMLoansCovered, updateSMLoansNonCovered, } from '../../../../src/graphql/mutations';
import {getChamaMembers, getCompany, getGroup, getNonCvrdGroupLoans, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../src/graphql/queries';
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
            const compDtls2 :any= await API.graphql(
              graphqlOperation(getNonCvrdGroupLoans,{id:route.params.id})
              );
              const loaneePhns = compDtls2.data.getNonCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls2.data.getNonCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls2.data.getNonCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls2.data.getNonCvrdGroupLoans.amountRepaid
              const amountGivens = compDtls2.data.getNonCvrdGroupLoans.amountGiven
              const amountExpectedBackWthClrncs = compDtls2.data.getNonCvrdGroupLoans.amountExpectedBackWthClrnc
              
              const statusssss = compDtls2.data.getNonCvrdGroupLoans.status
              const memberIds = compDtls2.data.getNonCvrdGroupLoans.memberId
              const DefaultPenaltyChms = compDtls2.data.getNonCvrdGroupLoans.DefaultPenaltyChm
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs) + parseFloat(DefaultPenaltyChms)
              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids)
              const MmbrClrnceCost = parseFloat(userClearanceFees) * parseFloat(amountexpecteds)
              + parseFloat(DefaultPenaltyChms);

              const createdAt = compDtls.data.getNonCvrdGroupLoans.createdAt;
              const repaymentPeriod = compDtls.data.getNonCvrdGroupLoans.repaymentPeriod;
              
             
              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)+1
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              
              
              
              let char = createdAt;
              let char1 = char.charAt(0)
              let char2 = char.charAt(1)
              let char3 = char.charAt(2)
              let char4 = char.charAt(3)
              let char5 = char.charAt(4)
              let char6 = char.charAt(5)
              let char7 = char.charAt(6)
              let char8 = char.charAt(7)
              let char9 = char.charAt(8)
              let char10 = char.charAt(9)
              let char11 = char.charAt(10)
              let char12 = char.charAt(11)
              let char13 = char.charAt(12)

              
              let crtnYr = char1+char2+char3+char4;
              let crtnMnth = char6+char7;
              let crtnDy = char9+char10;
              let crtnHr = char12+char13;

        
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

              const crtnYears = parseFloat(crtnYr)*365;
              const crtnMnths = parseFloat(crtnMnth)*30.4375;
              const daysAtCrtn = crtnYears + crtnMnths + parseFloat(crtnDy)

              const tmDif = daysUpToDate - daysAtCrtn;
              
              const lglGrcePrd = 60 - tmDif;


              const gtLoanerDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const compDtls3 :any= await API.graphql(
                    graphqlOperation(getGroup,{grpContact:loanerPhns})
                    );
                    const owners = compDtls3.data.getGroup.owner
                    const acStatuss = compDtls3.data.getGroup.status
                    const TtlBLLonsTmsLnrChmNonCovs = compDtls3.data.getGroup.TtlBLLonsTmsLnrChmNonCov
                    const TtlBLLonsAmtLnrChmNonCovs = compDtls3.data.getGroup.TtlBLLonsAmtLnrChmNonCov
                    const grpNames = compDtls3.data.getGroup.grpName
                    const tymsChmHvBLs = compDtls3.data.getGroup.tymsChmHvBL
                    const TtlActvLonsAmtLnrChmNonCovs = compDtls3.data.getGroup.TtlActvLonsAmtLnrChmNonCov    
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls4 :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeChmNonCovs = compDtls4.data.getSMAccount.TtlBLLonsTmsLneeChmNonCov
                          const TtlBLLonsAmtLneeChmNonCovs = compDtls4.data.getSMAccount.TtlBLLonsAmtLneeChmNonCov
                          const acStatusss = compDtls4.data.getSMAccount.acStatus
                          const namess = compDtls4.data.getSMAccount.name
                          const MaxTymsBLs =compDtls4.data.getSMAccount.MaxTymsBL;
                          const TtlActvLonsAmtLneeChmNonCovs = compDtls4.data.getSMAccount.TtlActvLonsAmtLneeChmNonCov

                          const MmbDtls = async () =>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                              const compDtls5 :any= await API.graphql(
                                graphqlOperation(getChamaMembers,{ChamaNMember:memberIds})
                                );
                                const LnBalsss = compDtls5.data.getChamaMembers.LnBal


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
                                      TtlActvLonsAmtLnrChmNonCov: (parseFloat(TtlActvLonsAmtLnrChmNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
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

                          else if(tmDif > repaymentPeriod && repaymentPeriod < 61){
                            Alert.alert("Loanee still has legal grace period of " + lglGrcePrd + " days")
                          } 

                          else if(tmDif < repaymentPeriod){
                            Alert.alert("Repayment Date not yet Due")
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
                                          ttlChmLnsInBlAmtNonCov: (parseFloat(ttlChmLnsInBlAmtNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
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
                                          awsemail:loaneePhns,
                                          MaxTymsBL: parseFloat(MaxTymsBLs) + 1,
                                          TtlBLLonsTmsLneeChmNonCov: parseFloat(TtlBLLonsTmsLneeChmNonCovs) + 1,
                                          TtlBLLonsAmtLneeChmNonCov: (parseFloat(TtlBLLonsAmtLneeChmNonCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                          TtlActvLonsAmtLneeChmNonCov: (parseFloat(TtlActvLonsAmtLneeChmNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
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
                                          LnBal:(parseFloat(LnBalsss)+ MmbrClrnceCost).toFixed(2),
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
                          await MmbDtls(); 
                        
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
        
        export default BLChmNonCovLoanee;