import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import RecNonLns from "../../../components/MyAc/ViewRecNonLns copy";
import styles from './styles';
import { listNonLoanss, listSMAccounts } from '../../../src/graphql/queries';

const FetchSMNonLnsRec = props => {

    const[RecPhn, setRecPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);

    const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
              
        setRecPhn(userInfo.attributes.phone_number);
             
      };
      
  
      useEffect(() => {
          fetchUser();
        }, []);

        const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listNonLoanss, 
                { filter: {
                    and: {
                      recPhn: { eq: RecPhn}
                      
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listNonLoanss.items);
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
        renderItem={({item}) => <RecNonLns SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}>Received Non Loans</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonLnsRec;