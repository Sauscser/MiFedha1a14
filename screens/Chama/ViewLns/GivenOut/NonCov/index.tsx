import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import ChmNonCvLns from "../../../../../components/Chama/Loans/Givenout/NonCov";
import styles from './styles';
import { listGroupNonLoanss, listNonCvrdGroupLoanss } from '../../../../../src/graphql/queries';
import { useRoute } from '@react-navigation/native';

const FetchSMNonCovLns = props => {

    const[LnerPhn, setLneePhn] = useState(null);
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
              const Lonees:any = await API.graphql(graphqlOperation(listNonCvrdGroupLoanss, 
                { filter: {
                    and: {
                      grpContact: { eq: route.params.grpContact},
                      lonBala:{gt:0}
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listNonCvrdGroupLoanss.items);
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
        renderItem={({item}) => <ChmNonCvLns Loaner={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Chama Loanees</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonCovLns;