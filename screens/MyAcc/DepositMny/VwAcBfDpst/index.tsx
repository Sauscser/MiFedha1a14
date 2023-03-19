import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/MyAc/ViewPayPalTNC";
import styles from './styles';
import { getExRates, getSMAccount, listCompanies, listSMAccounts } from '../../../../src/graphql/queries';
import { useNavigation } from '@react-navigation/native';

const FetchSMNonCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [Recom, setRecvrs] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const PyPlDpst = () => {
      navigation.navigate("PayPalDposit");
    }

    const PyPlDpst2 = () => {
      navigation.navigate("Homeie");
    }
    

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees = await API.graphql(graphqlOperation(listSMAccounts, 
                { filter: {
                    and: {
                      awsemail: { eq: userInfo.attributes.email},
                     
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listSMAccounts.items);

              const gtExchangeRt = async () =>{
                if(isLoading){
                    return;
                }
                setIsLoading(true)
                try{
                  const compDtlsz = await API.graphql(
                  graphqlOperation(getSMAccount,{awsemail:userInfo.attributes.email})
                    );
                    const nationality = compDtlsz.data.getSMAccount.nationality; 


                      const gtExchangeRt2 = async () =>{
                        if(isLoading){
                            return;
                        }
                        setIsLoading(true)
                        try{
                          const compDtls = await API.graphql(
                          graphqlOperation(getExRates,{cur:nationality})
                            );
                              const sellingPrice = compDtls.data.getExRates.sellingPrice

                              const fetchLoaneesscx = async () => {
                                setLoading(true);
                                try {
                                  const Lonees= await API.graphql(graphqlOperation(listCompanies, 
                                    
                                      ));
                                      setRecvrs(Lonees.data.listCompanies.items);
                                } catch (e) {
                                  console.log(e);
                                } finally {
                                  setLoading(false);
                                }
                              };
                      
                                  await fetchLoaneesscx(); 
        
                            } catch (error) {
                                console.log(error)
                            if (error){Alert.alert("Error")
                                    return;}
                              }
                              setIsLoading(false);
                              };    
                  
                              await gtExchangeRt2(); 
        



                    } catch (error) {
                        console.log(error)
                    if (error){Alert.alert("Error")
                            return;}
                      }
                      setIsLoading(false);
                      };    
          
                      await gtExchangeRt(); 

              if (Lonees.data.listSMAccounts.items.length < 1) {
                PyPlDpst2();
                
                Alert.alert("Please first create a main account")
                
              }  


            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
              
          };
        }
          


useEffect(() => {
  fetchLoanees();
}, [])   

  return (
   

<View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Recom}
        renderItem={({item}) => <LnerStts SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            
          </>
        )}
      />

</View>
  );
};

export default FetchSMNonCovLns;