import React, {useEffect, useState} from 'react';

import {deleteSMAccount, updateCompany,  } from '../../../../src/graphql/mutations';
import {getCompany, getSMAccount, listCovCreditSellers, listCvrdGroupLoans,  listNonCovCreditSellers, listNonCvrdGroupLoans,  listSMLoansCovereds, listSMLoansNonCovereds } from '../../../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

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


  


const DeregUsrForm = (props) => {
  const navigation = useNavigation();

  const [UsrId, setUsrId] = useState("");
  const [DeactvtnRsn, setDeactvtnRsn] = useState("");
  const[isLoading, setIsLoading] = useState(false);
  

  const gtCompDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ActvMFUsrs = compDtls.data.getCompany.ttlActiveUsers
        const inactMFUsrs = compDtls.data.getCompany.ttlInactvUsrs

        const gtUsr = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls :any= await API.graphql(
              graphqlOperation(getSMAccount,{phonecontact:UsrId})
              );
              
              console.log(compDtls);
           
        const ftchCvdChmLn = async () => {
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try {
              const RecAccountDtl:any = await API.graphql(
                  graphqlOperation(listCvrdGroupLoans, { filter: {
                  
                    loaneePhn: { eq: UsrId},
                    lonBala:{gt:0}
                              
                }}
            )
          )
          

                  const ftchNonCvdChmLn = async () => {
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                    try {
                        const RecAccountDtl:any = await API.graphql(
                            graphqlOperation(listNonCvrdGroupLoans, { filter: {
                  
                              loaneePhn: { eq: UsrId},
                              lonBala:{gt:0}
                                        
                          }}),
                            );

                            const ftchCvdCredSlrLn = async () => {
                              if(isLoading){
                                return;
                              }
                              setIsLoading(true);
                              try {
                                  const RecAccountDtl:any = await API.graphql(
                                      graphqlOperation(listCovCreditSellers, { filter: {
                  
                                        buyerContact: { eq: UsrId},
                                        lonBala:{gt:0}
                                                  
                                    }}),
                                      );
                                      
                                      const ftchNonCovCredSlrLn = async () => {
                                        if(isLoading){
                                          return;
                                        }
                                        setIsLoading(true);
                                        try {
                                            const RecAccountDtl:any = await API.graphql(
                                                graphqlOperation(listNonCovCreditSellers, { filter: {
                  
                                                  buyerContact: { eq: UsrId},
                                                  lonBala:{gt:0}
                                                            
                                              }}),
                                                ); 

                                                const ftchCvdSMLn = async () => {
                                                  if(isLoading){
                                                    return;
                                                  }
                                                  setIsLoading(true);
                                                  try {
                                                      const RecAccountDtl:any = await API.graphql(
                                                          graphqlOperation(listSMLoansCovereds, { filter: {
                  
                                                            loaneePhn: { eq: UsrId},
                                                            lonBala:{gt:0}
                                                                      
                                                        }}),
                                                          );  

                                                          const ftchNonCvdSMLn = async () => {
                                                            if(isLoading){
                                                              return;
                                                            }
                                                            setIsLoading(true);
                                                            try {
                                                                const RecAccountDtl:any = await API.graphql(
                                                                    graphqlOperation(listSMLoansNonCovereds, { filter: {
                  
                                                                      loaneePhn: { eq: UsrId},
                                                                      lonBala:{gt:0}
                                                                                
                                                                  }}),
                                                                    );
        

        
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
                        ttlActiveUsers:parseFloat(ActvMFUsrs) - 1,
                        ttlInactvUsrs:parseFloat(inactMFUsrs) + 1,
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

            
            
            setIsLoading(false);
            }

            const KFUsrDtls = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try{
                  await API.graphql(
                    graphqlOperation(deleteSMAccount,{
                      input:{
                        phonecontact:UsrId,
                        
                      }
                    })
                  )
          
                  
              }
              catch(error){
                console.log(error)
                if(error){Alert.alert("User does not exist");
              return;}
                }
            Alert.alert("User deactivated successfully")
              setIsLoading(false);          
              await updtActAdm ();
            } 
    
            if (RecAccountDtl.data.listSMLoansNonCovereds.items.length >=1 ) {
              Alert.alert("This User has a Noncovered Single Member Loan");
              
              
            }
            else{
               KFUsrDtls();
            }
            
          
          } catch (error) {
            console.log(error)
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          }

          if (RecAccountDtl.data.listSMLoansCovereds.items.length >=1) {
            Alert.alert("This User has a covered Single Member Loan");
            return;
            
          }
          
          
        };   
        await ftchNonCvdSMLn();

      } catch (error) {
        console.log(error)
        if(error){
          
          Alert.alert("Check your internet")
          return;
      };
      }
      if (RecAccountDtl.data.listNonCovCreditSellers.items.length >=1) {
        Alert.alert("This User has a Noncovered Credit Sale Loan");
        return;
        
      }
      
      
    };  
    await ftchCvdSMLn(); 

  } catch (error) {
    console.log(error)
    if(error){
      Alert.alert("Check your internet")
      return;
  };
  }
  if (RecAccountDtl.data.listCovCreditSellers.items.length >=1) {
    Alert.alert("This User has a covered Credit Sale Loan");
    return;
    
  }
  
  
};   
await ftchNonCovCredSlrLn();

} catch (error) {
  console.log(error)
  if(error){
    
    Alert.alert("Check your internet")
    return;
};
}

if (RecAccountDtl.data.listNonCvrdGroupLoans.items.length >=1) {
  Alert.alert("This User has a Noncovered Chama Loan");
  return;
  
}


};   
await ftchCvdCredSlrLn();

} catch (error) {
  console.log(error)
  if(error){
    
    Alert.alert("Check your internet")
    return;
};
}
if (RecAccountDtl.data.listCvrdGroupLoans.items.length >=1) {
  Alert.alert("This User has a covered Chama Loan");
  return;
  
}



};   

await ftchNonCvdChmLn();

          } catch (error) {
            console.log(error)
            if(error){
              Alert.alert("Check your internet")
              return;
          };
          
          }}

          if(compDtls.data.getSMAccount===null){
            Alert.alert("User does not exist")
            return;
        }
        
          else{await ftchCvdChmLn();}
          
        } catch (error) {
          console.log(compDtls)
          
        
        }}

        
      
        await gtUsr();
        
        
          } catch (error) {
            console.log(error)
            if(error){
              Alert.alert("Check internet")
              return;
          };
          }
          setIsLoading(false);
          setUsrId("") 
          setDeactvtnRsn("")
        };    

        useEffect(() =>{
          const usId=UsrId
            if(!usId && usId!=="")
            {
              setUsrId("");
              return;
            }
            setUsrId(usId);
            }, [UsrId]
             );

             useEffect(() =>{
              const DeactvtnRsns=DeactvtnRsn
                if(!DeactvtnRsns && DeactvtnRsns!=="")
                {
                  setDeactvtnRsn("");
                  return;
                }
                setDeactvtnRsn(DeactvtnRsns);
                }, [DeactvtnRsn]
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
                    placeholder="+2547xxxxxxxx"
                      value={UsrId}
                      onChangeText={setUsrId}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>User Phone Number</Text>
                  </View>
        
                      
        
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to DeRegister 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default DeregUsrForm;