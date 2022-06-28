import React, {useEffect, useState} from 'react';

import {updateCompany, updateNonCovCreditSeller, updateSMAccount, updateSMLoansCovered, } from '../../../../../../src/graphql/mutations';
import {getBizna, getCompany, getNonCovCreditSeller, getSMAccount, getSMLoansCovered, getSMLoansNonCovered } from '../../../../../../src/graphql/queries';
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
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs

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
              
              const statusssss = compDtls.data.getNonCovCreditSeller.status
              const DefaultPenaltyCredSls = compDtls.data.getNonCovCreditSeller.DefaultPenaltyCredSl
              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs) + parseFloat(DefaultPenaltyCredSls)
              const LonBal = amountExpectedBackWthClrncss - parseFloat(amountrepaids);

              const createdAt = compDtls.data.getNonCovCreditSeller.createdAt;
              const repaymentPeriod = compDtls.data.getNonCovCreditSeller.repaymentPeriod;
              
             
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
                    graphqlOperation(getBizna,{BusKntct:sellerContacts})
                    );
                    
                    const names = compDtls.data.getBizna.busName
                    
                         
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:buyerContacts})
                          );
                          const TtlBLLonsTmsByrNonCovs = compDtls.data.getSMAccount.TtlBLLonsTmsByrNonCov
                          const TtlBLLonsAmtByrNonCovs = compDtls.data.getSMAccount.TtlBLLonsAmtByrNonCov
                          const TtlActvLonsAmtByrNonCovs = compDtls.data.getSMAccount.TtlActvLonsAmtByrNonCov
                          const acStatusss = compDtls.data.getSMAccount.acStatus
                          const namess = compDtls.data.getSMAccount.name
                          

                          
                  
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
                                          ttlSellerLnsInBlAmtNonCov: (parseFloat(ttlSellerLnsInBlAmtNonCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(2),
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

                              if(LonBal === 0){
                                Alert.alert("Loanee has cleared this loan")
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
    
    
                              else if(acStatusss === "AccountInactive"){
                                Alert.alert("Loanee account has been deactivated")
                              } 

                              else {updtActAdm();}
                              
                              const updateLoaneeDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount,{
                                        input:{
                                          awsemail:buyerContacts,
                                         
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
                                          amountExpectedBackWthClrnc:(amountExpectedBackWthClrncss).toFixed(0),
                                          lonBala:LonBal.toFixed(0),
                                          DefaultPenaltyCredSl2:DefaultPenaltyCredSls.toFixed(0),
                                          status:"LoanBL",
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                  Alert.alert("Ensure User Exists");
                                  return;
                                  
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
        
        export default BLNonCovCredByr;