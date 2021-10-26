import React, {useEffect, useState} from 'react';

import {updateCompany, updateSMAccount, updateSMLoansCovered, updateSMLoansNonCovered, } from '../../../../../../src/graphql/mutations';
import {getCompany, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../../../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

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
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { getGroup, getNonCvrdGroupLoans } from '../../../../src/graphql/queries';
import { updateGroup } from '../../../../src/graphql/mutations';


  


const BLChmNonCovLoanee = (props) => {
  const navigation = useNavigation();

  const [LonId, setLonId] = useState("");
  const [ownr, setownr] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  

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

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getNonCvrdGroupLoans,{id:LonId})
              );
              const loaneePhns = compDtls.data.getNonCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls.data.getNonCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls.data.getNonCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls.data.getNonCvrdGroupLoans.amountRepaid
              const statusssss = compDtls.data.getNonCvrdGroupLoans.status
              const LonBal = parseFloat(amountexpecteds) - parseFloat(amountrepaids)

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
                    const names = compDtls.data.getGroup.grpName
                         
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
                                      TtlBLLonsTmsLnrChmNonCov: parseFloat(TtlBLLonsTmsLnrChmNonCovs) + 1,
                                      TtlBLLonsAmtLnrChmNonCov: parseFloat(TtlBLLonsAmtLnrChmNonCovs) + parseFloat(amountexpecteds)
                                    }
                                  })
                                )
                        
                                
                            }
                            catch(error){if(!error){
                              Alert.alert("Account deactivated successfully")
                              
                          } 
                          else{Alert.alert("Please check your internet connection")
                          return;} 
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
                                          ttlChmLnsInBlAmtNonCov: parseFloat(ttlChmLnsInBlAmtNonCovs) + parseFloat(amountexpecteds),
                                          ttlChmLnsInBlTymsNonCov: parseFloat(ttlChmLnsInBlTymsNonCovs) + 1

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
                                          TtlBLLonsTmsLneeChmNonCov: parseFloat(TtlBLLonsTmsLneeChmNonCovs) + 1,
                                          TtlBLLonsAmtLneeChmNonCov: parseFloat(TtlBLLonsAmtLneeChmNonCovs) + parseFloat(amountexpecteds),
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
                                          id:LonId,
                                          
                                          status:"LoanBL",
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
                    <Text style={styles.sendLoanText}>Loan ID</Text>
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