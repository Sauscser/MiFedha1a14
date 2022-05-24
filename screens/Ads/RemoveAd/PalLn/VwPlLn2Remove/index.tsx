import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/Ads/VwLn2Dlt";
import styles from './styles';

import { useRoute } from '@react-navigation/native';
import { listRafikiLnAds, listSokoAds } from '../../../../../src/graphql/queries';

const FetchSMCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
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
            try {

              let  filter = {
                rafikiEmail: { eq: LneePhn},               
                
              };
              const Lonees:any = await API.graphql(graphqlOperation(listRafikiLnAds, 
                
                {
                  filter,
                  sortDirection: 'DESC',
                  limit: 100
                    }
                 
                  ));
              setLoanees(Lonees.data.listRafikiLnAds.items);
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
        renderItem={({item}) => <LnerStts SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> My Sales Ads</Text>
            <Text style={styles.label}> (Swipe down to refresh)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;