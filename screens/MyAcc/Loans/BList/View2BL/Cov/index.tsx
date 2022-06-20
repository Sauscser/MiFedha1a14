import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';
import { listSMLoansCovereds, listSMLoansNonCovereds } from '../../../../../../src/graphql/queries';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../../components/MyAc/BL/Vw2BLCov";
import styles from './styles';
import { useRoute } from '@react-navigation/core';

const FetchSMCovLns = props => {

    const[LnerPhn, setLnerPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [Loaneess, setLoaneess] = useState([]);
    const combined = (Loanees[0] + Loaneess[0]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLnerPhn(userInfo.attributes.email);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMLoansCovereds, 
                { filter: {
                    and: {
                      loanerPhn: { eq: LnerPhn},
                        lonBala:{gt:0},
                        
                        status:{ne:"LoanBL"}
                      
                    }
                  },
                  limit: 100
                }
                  ));

                  const fetchLoanees = async () => {
                    setLoading(true);
                    try {
                      const Loneesz:any = await API.graphql(graphqlOperation(listSMLoansNonCovereds, 
                        { 
                          
                          sortDirection: 'DESC',
                          limit: 100,                
                          filter: {
                            
                            loanerPhn: LnerPhn,
                              lonBala:{gt:0},
                              
                              status:{ne:"LoanBL"}                      
                            
                          },
                        
                          
                        }
                          ));
                          const combine3 = Loneesz.data.listSMLoansNonCovereds.items
                          const combine4 = Lonees.data.listSMLoansCovereds.items

                      setLoaneess(combine3 + combine4);
                    } catch (e) {
                      console.log(e);
                    } finally {
                      setLoading(false);
                    }
                  };

                  await fetchLoanees();

              setLoanees(Lonees.data.listSMLoansCovereds.items);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          

  return (
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Loanees}
        renderItem={({item}) => <LnerStts Loanee={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My Loanees</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;