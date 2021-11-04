import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import ChamInfo from "../../../../components/Chama/GeneralInfo";
import styles from './styles';

import { useRoute } from '@react-navigation/native';
import { listGroups } from '../../../../src/graphql/queries';

const FetchSMCovLns = props => {

    const[LnerPhn, setLnerPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Chm, setChm] = useState([]);

    const route = useRoute();
   

        const fetchChm = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listGroups, 
                { filter: {
                    and: {
                      grpContact: { eq: route.params.grpContact}
                      
                    }
                  }}
                  ));
              setChm(Lonees.data.listGroups.items);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          useEffect(() => {
            fetchChm();
          }, [])

  return (
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Chm}
        renderItem={({item}) => <ChamInfo ChmDtls={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchChm}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Chama Info</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;