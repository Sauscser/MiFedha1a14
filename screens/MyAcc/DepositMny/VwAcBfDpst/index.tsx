import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/MyAc/ViewPayPalTNC";
import styles from './styles';
import { getExRates, getSMAccount, listCompanies, listSMAccounts } from '../../../../src/graphql/queries';
import { useNavigation } from '@react-navigation/native';

const FetchSMNonCovLns = props => {

    const[LneePhn, setLneePhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [Recom, setRecvrs] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const PyPlDpst = () => {
      navigation.navigate("PayPalDposit");
    }

    const PyPlDpst2 = () => {
      navigation.navigate("Homeie");
    }
    

        const fetchLoanees = async () => {
            setLoading(true);
            const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listSMAccounts, 
                { filter: {
                    and: {
                      awsemail: { eq: userInfo.attributes.email},
                     
                    }
                  }}
                  ));
              setLoanees(Lonees.data.listSMAccounts.items);



              if (Lonees.data.listSMAccounts.items.length < 1) {
                PyPlDpst2();
                
                Alert.alert("Please first create a main account")
                
              }  


            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
              
          };
        }
          


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
            <Text>
              Please swipe to reload terms and conditions before proceeding
            </Text>
            
          </>
        )}
      />

</View>
  );
};

export default FetchSMNonCovLns;