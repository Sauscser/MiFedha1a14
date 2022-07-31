import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';
import {  listSMLoansNonCovereds, vwLnrNLneessss } from '../../../../../../src/graphql/queries';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../../components/MyAc/BL/Vw2BLNonCov";
import styles from './styles';
import { useRoute } from '@react-navigation/core';

const FetchSMNonCovLns = props => {

    const[LnerPhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLneePhn(userInfo.attributes.email);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
              
            
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMLoansNonCovereds, 
                { 
                  
                  sortDirection: 'DESC',
                  limit: 100,                
                  filter: {
                    
                    loanerPhn: {eq:userInfo.attributes.email},
                      lonBala:{gt:0},
                      
                      status:{ne:"LoanBL"}                      
                    
                  },
                
                  
                }
                  ));
              setLoanees(Lonees.data.listSMLoansNonCovereds.items);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          useEffect(() => {
            fetchLoanees();
          }, [])

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

export default FetchSMNonCovLns;