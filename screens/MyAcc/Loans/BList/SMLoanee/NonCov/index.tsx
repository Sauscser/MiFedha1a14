import React, {useEffect, useState} from 'react';

import {updateCompany, updateSMAccount, updateSMLoansCovered, updateSMLoansNonCovered, } from '../../../../../../src/graphql/mutations';
import {getCompany, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../../../src/graphql/queries';
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


  


const BLSMNonCovLoanee = (props) => {
  const navigation = useNavigation();

  const [LonId, setLonId] = useState("");
 
  const [time, setTime] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const route = useRoute()
 
    
    const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
   
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ttlSMLnsInBlAmtNonCovs = compDtls.data.getCompany.ttlSMLnsInBlAmtNonCov
        const ttlSMLnsInBlTymsNonCovs = compDtls.data.getCompany.ttlSMLnsInBlTymsNonCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs


        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getSMLoansNonCovered,{id:route.params.id})
              );
              const loaneePhns = compDtls.data.getSMLoansNonCovered.loaneePhn
              const loanerPhns = compDtls.data.getSMLoansNonCovered.loanerPhn
              const amountexpecteds = compDtls.data.getSMLoansNonCovered.amountexpected
              const amountgivens = compDtls.data.getSMLoansNonCovered.amountgiven
              const amountExpectedBackWthClrncs = compDtls.data.getSMLoansNonCovered.amountExpectedBackWthClrnc
              
              const amountrepaids = compDtls.data.getSMLoansNonCovered.amountrepaid
              const statusssss = compDtls.data.getSMLoansNonCovered.status
              const DefaultPenaltySMs = compDtls.data.getSMLoansNonCovered.DefaultPenaltySM
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs) + parseFloat(DefaultPenaltySMs)
              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids)

              const createdAt = compDtls.data.getSMLoansNonCovered.createdAt;
              const repaymentPeriod = compDtls.data.getSMLoansNonCovered.repaymentPeriod;
              
             
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
                  const compDtls :any= await API.graphql(
                    graphqlOperation(getSMAccount,{awsemail:loanerPhns})
                    );
                    const owners = compDtls.data.getSMAccount.owner
                    const acStatuss = compDtls.data.getSMAccount.acStatus
                    const TtlBLLonsTmsLnrNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsLnrNonCov
                    const TtlBLLonsAmtLnrNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtLnrNonCov
                    const TtlActvLonsAmtLnrNonCovs = compDtls.data.getSMAccount.TtlActvLonsAmtLnrNonCov
                    const names = compDtls.data.getSMAccount.name
                    const MaxTymsIHvBLs = compDtls.data.getSMAccount.MaxTymsIHvBL
                    const pws = compDtls.data.getSMAccount.pw

                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsLneeNonCov
                          const TtlBLLonsAmtLneeNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtLneeNonCov
                          const TtlActvLonsAmtLneeNonCovs = compDtls.data.getSMAccount.TtlActvLonsAmtLneeNonCov
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
                                  graphqlOperation(updateSMAccount,{
                                    input:{
                                      awsemail:loanerPhns,
                                      MaxTymsIHvBL: parseFloat(MaxTymsIHvBLs) + 1,
                                      TtlBLLonsTmsLnrNonCov: parseFloat(TtlBLLonsTmsLnrNonCovs) + 1,
                                      TtlBLLonsAmtLnrNonCov: (parseFloat(TtlBLLonsAmtLnrNonCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                      TtlActvLonsAmtLnrNonCov: (parseFloat(TtlActvLonsAmtLnrNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
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

                          else if(owners !== userInfo.attributes.sub){
                            Alert.alert("You are not the one owed this loan")
                          } 

                          else if(tmDif > repaymentPeriod && repaymentPeriod < 61){
                            Alert.alert("Loanee still has legal grace period of " + lglGrcePrd + " days")
                          } 

                          else if(tmDif < repaymentPeriod){
                            Alert.alert("Repayment Date not yet Due")
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
                                          ttlSMLnsInBlAmtNonCov: (parseFloat(ttlSMLnsInBlAmtNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          ttlSMLnsInBlTymsNonCov: parseFloat(ttlSMLnsInBlTymsNonCovs) + 1,
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
                                          TtlBLLonsTmsLneeNonCov: parseFloat(TtlBLLonsTmsLneeNonCovs) + 1,
                                          TtlBLLonsAmtLneeNonCov: (parseFloat(TtlBLLonsAmtLneeNonCovs) +amountExpectedBackWthClrncss).toFixed(0),
                                          TtlActvLonsAmtLneeNonCov: (parseFloat(TtlActvLonsAmtLneeNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                          loanStatus: "LoanActive"
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(!error){
                                  Alert.alert("Account deactivated successfully")
                                  
                              } 
                              else{Alert.alert("Please check your internet connection")
                              return;} }
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
                                      graphqlOperation(updateSMLoansNonCovered, {
                                        input:{
                                          id:route.params.id,
                                          amountExpectedBackWthClrnc:(amountExpectedBackWthClrncss).toFixed(0),
                                          lonBala:LonBal.toFixed(0),
                                          DefaultPenaltySM2:DefaultPenaltySMs.toFixed(0),
                                          status:"LoanBL",
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Ensure User Exists")
                                  
                              } 
                              }
                              Alert.alert(names +", you have blacklisted "+ namess)
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
           gtLoanDtls();      
            
          } catch (error) {
            console.log(error)
            
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          }
          
          setIsLoading(false);
          setLonId("") 
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
                      value={LonId}
                      onChangeText={setLonId}
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
        
        export default BLSMNonCovLoanee;