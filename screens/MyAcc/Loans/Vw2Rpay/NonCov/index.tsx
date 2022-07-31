import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';
import { listSMLoansCovereds, listSMLoansNonCovereds } from '../../../../../src/graphql/queries';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/MyAc/RepyLn/Vw2RPyNonCov";
import styles from './styles';

const FetchSMNonCovLns = props => {

    
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);

  

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
              
     
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMLoansNonCovereds, 
                { filter: {
                    and: {
                      loaneePhn: { eq: userInfo.attributes.email},
                      lonBala:{gt:0}
                      
                    }
                  }}
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
            
            <Text style={styles.label}> My Loaners</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonCovLns;