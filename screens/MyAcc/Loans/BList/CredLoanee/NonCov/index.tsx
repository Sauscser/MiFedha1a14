import React, {useEffect, useState} from 'react';

import {updateCompany, updateNonCovCreditSeller, updateSMAccount, updateSMLoansCovered, } from '../../../../../../src/graphql/mutations';
import {getCompany, getNonCovCreditSeller, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../../../src/graphql/queries';
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


  


const BLNonCovCredByr = (props) => {
  const route = useRoute();

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
        const ttlSellerLnsInBlAmtNonCovs = compDtls.data.getCompany.ttlSellerLnsInBlAmtNonCov
        const ttlSellerLnsInBlTymsNonCovs = compDtls.data.getCompany.ttlSellerLnsInBlTymsNonCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getNonCovCreditSeller,{id:route.params.id})
              );
              const buyerContacts = compDtls.data.getNonCovCreditSeller.buyerContact
              const sellerContacts = compDtls.data.getNonCovCreditSeller.sellerContact
              const amountexpecteds = compDtls.data.getNonCovCreditSeller.amountexpectedBack
              const amountrepaids = compDtls.data.getNonCovCreditSeller.amountRepaid
              const amountSolds = compDtls.data.getNonCovCreditSeller.amountSold
              const amountExpectedBackWthClrncs = compDtls.data.getNonCovCreditSeller.amountExpectedBackWthClrnc
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountSolds) + parseFloat(amountExpectedBackWthClrncs)
              const statusssss = compDtls.data.getNonCovCreditSeller.status
              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids)

              const gtLoanerDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const compDtls :any= await API.graphql(
                    graphqlOperation(getSMAccount,{phonecontact:sellerContacts})
                    );
                    const owners = compDtls.data.getSMAccount.owner
                    const acStatuss = compDtls.data.getSMAccount.acStatus
                    const TtlBLLonsTmsSllrNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsSllrNonCov
                    const TtlBLLonsAmtSllrNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtSllrNonCov
                    const names = compDtls.data.getSMAccount.name
                    const pws = compDtls.data.getSMAccount.pw
                         
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{phonecontact:buyerContacts})
                          );
                          const TtlBLLonsTmsByrNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsByrNonCov
                          const TtlBLLonsAmtByrNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtByrNonCov
                          const acStatusss = compDtls.data.getSMAccount.acStatus
                          const namess = compDtls.data.getSMAccount.name
                          
                          const updateLoanerDtls = async () => {
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateSMAccount,{
                                    input:{
                                      phonecontact:sellerContacts,
                                      TtlBLLonsTmsSllrNonCov: parseFloat(TtlBLLonsTmsSllrNonCovs) + 1,
                                      TtlBLLonsAmtSllrNonCov: parseFloat(TtlBLLonsAmtSllrNonCovs) + amountExpectedBackWthClrncss
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

                          else if(pws !== LonId){
                            Alert.alert("Wrong User PassWord")
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
                                          ttlSellerLnsInBlTymsNonCov: parseFloat(ttlSellerLnsInBlTymsNonCovs) + 1,
                                          ttlSellerLnsInBlAmtNonCov: parseFloat(ttlSellerLnsInBlAmtNonCovs) + amountExpectedBackWthClrncss

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
                                          phonecontact:buyerContacts,
                                          TtlBLLonsTmsByrNonCov: parseFloat(TtlBLLonsTmsByrNonCovs) + 1,
                                          TtlBLLonsAmtByrNonCov: parseFloat(TtlBLLonsAmtByrNonCovs) + amountExpectedBackWthClrncss,
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
                                      graphqlOperation(updateNonCovCreditSeller, {
                                        input:{
                                          id:route.params.id,
                                          amountExpectedBackWthClrnc:amountExpectedBackWthClrncss,
                                          lonBala:LonBal.toFixed(2),
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
                    <Text style={styles.sendLoanText}>User PassWord</Text>
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
        
        export default BLNonCovCredByr;