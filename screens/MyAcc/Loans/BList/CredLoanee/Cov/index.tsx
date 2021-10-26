import React, {useEffect, useState} from 'react';

import {updateCompany, updateCovCreditSeller, updateSMAccount, updateSMLoansCovered, } from '../../../../../../src/graphql/mutations';
import {getCompany, getCovCreditSeller, getSMAccount, getSMLoansCovered } from '../../../../../../src/graphql/queries';
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


  


const BLCovCredByr = (props) => {
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
        const ttlSellerLnsInBlAmtCovs = compDtls.data.getCompany.ttlSellerLnsInBlAmtCov
        const ttlSellerLnsInBlTymsCovs = compDtls.data.getCompany.ttlSellerLnsInBlTymsCov

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getCovCreditSeller,{id:LonId})
              );
              const buyerContacts = compDtls.data.getCovCreditSeller.buyerContact
              const sellerContacts = compDtls.data.getCovCreditSeller.sellerContact
              const amountexpecteds = compDtls.data.getCovCreditSeller.amountexpectedBack
              const amountrepaids = compDtls.data.getCovCreditSeller.amountRepaid
              const statusssss = compDtls.data.getCovCreditSeller.status
              const LonBal = parseFloat(amountexpecteds) - parseFloat(amountrepaids)

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
                    const TtlBLLonsTmsSllrCovs = compDtls.data.getSMAccount.TtlBLLonsTmsSllrCov
                    const TtlBLLonsAmtSllrCovs = compDtls.data.getSMAccount.TtlBLLonsAmtSllrCov
                    const names = compDtls.data.getSMAccount.name
                         
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{phonecontact:buyerContacts})
                          );
                          const TtlBLLonsTmsByrCovs = compDtls.data.getSMAccount.TtlBLLonsTmsByrCov
                          const TtlBLLonsAmtByrCovs = compDtls.data.getSMAccount.TtlBLLonsAmtByrCov
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
                                      TtlBLLonsTmsSllrCov: parseFloat(TtlBLLonsTmsSllrCovs) + 1,
                                      TtlBLLonsAmtSllrCov: parseFloat(TtlBLLonsAmtSllrCovs) + parseFloat(amountexpecteds)
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
                                          ttlSellerLnsInBlTymsCov: parseFloat(ttlSellerLnsInBlTymsCovs) + parseFloat(amountexpecteds),
                                          ttlSellerLnsInBlAmtCov: parseFloat(ttlSellerLnsInBlAmtCovs) + 1

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
                                          TtlBLLonsTmsByrCov: parseFloat(TtlBLLonsTmsByrCovs) + 1,
                                          TtlBLLonsAmtByrCov: parseFloat(TtlBLLonsAmtByrCovs) + parseFloat(amountexpecteds),
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
                                      graphqlOperation(updateCovCreditSeller, {
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
        
        export default BLCovCredByr;