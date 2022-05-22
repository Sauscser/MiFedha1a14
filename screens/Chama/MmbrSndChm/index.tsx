import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../components/Chama/ChmActivities/Membership/MbrSndTChm";
import styles from './styles';
import { listChamaMembers,    } from '../../../src/graphql/queries';

const FetchSMCovLns = props => {

    const[LneeEmail, setLneeEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setLneeEmail(userInfo.attributes.email);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listChamaMembers, 
                { filter: {
                    and: {
                      memberContact: { eq: LneeEmail}
                      
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listChamaMembers.items);
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
        renderItem={({item}) => <LnerStts ChamaMmbrshpDtls={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My Chamas</Text>
            <Text style={styles.label}>Please swipe down to load</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;