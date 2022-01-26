import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../../components/Chama/VwDepositsChm";
import styles from './styles';

import {  vwMyUsrDposits, vwMyUsrWthdrwls } from '../../../../src/graphql/queries';
import { useRoute } from '@react-navigation/native';

const FetchSMNonLnsSnt = props => {

    const[SenderPhn, setSenderPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const route = useRoute();

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setSenderPhn(userInfo.attributes.phone_number);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(vwMyUsrDposits, 
                { 
                      depositerid: route.params.grpContact,
                      sortDirection: "DESC",
                      limit:100
                      
                    }
               
                  ))
                  setRecvrs(Lonees.data.VwMyUsrDposits.items);
                  console.log(Lonees)
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
        data={Recvrs}
        renderItem={({item}) => <NonLnSent SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Chama Deposits</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonLnsSnt;