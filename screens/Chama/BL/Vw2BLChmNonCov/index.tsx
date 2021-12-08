import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/Chama/BL/BLChmNonCovLn";
import styles from './styles';
import { getCompany, getGroup, vwChamaMembersss, vwLnrNLnees } from '../../../../src/graphql/queries';
import { useRoute } from '@react-navigation/core';
import { updateCompany, updateGroup } from '../../../../src/graphql/mutations';

const FetchSMNonCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLneePhn(userInfo.attributes.phone_number);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(vwLnrNLnees, 
               {
                      loanerLoanee: route.params.ChmNMmbrPhns,
                      sortDirection: 'DESC',
                      limit: 100,
                      filter: {
                        and: {
                          
                          lonBala:{gt:0},
                          status:{ne:"LoanBL"}
                          
                        }
                      },
                    }
                  
                  ));
              setLoanees(Lonees.data.VwLnrNLnees.items);
              
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
        renderItem={({item}) => <LnerStts ChamaMmbrshpDtls={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My NonCov Loans</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonCovLns;