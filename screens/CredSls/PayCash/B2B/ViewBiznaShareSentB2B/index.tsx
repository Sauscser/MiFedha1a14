import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../../../components/MyAc/ViewSentNonLns";
import styles from './styles';
import {  listNonLoans,   listPersonels,   } from '../../../../../src/graphql/queries';
import { updateCompany, updateSMAccount } from '../../../../../src/graphql/mutations';
import { TextInput } from 'react-native-gesture-handler';

const FetchSMNonLnsSnt = props => {

    
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const [itemPrys, setitemPrys] = useState('');
    const[isLoading, setIsLoading] = useState(false);
   
    

        const fetchLoanees = async () => {
            
        if(isLoading){
          return;
        }
        setIsLoading(true);
      
        const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listPersonels, 
              {
                filter: {
                  
                  phoneKontact: { eq: userInfo.attributes.email},
                  BusinessRegNo:{eq: itemPrys}
                                
                  }
                    }
               
                  ));
                  const Persnl = Lonees.data.listPersonels.items
                  
                  const fetchLoanees2 = async () => {
            
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                  
                    const userInfo = await Auth.currentAuthenticatedUser();
                        try {
                          const Lonees1:any = await API.graphql(graphqlOperation(listNonLoans, 
                          {
                            filter:{status:{eq:"BiznaShare"},
                            senderPhn:{eq:itemPrys}}
                              
                                }
                           
                              ));
                              setRecvrs(Lonees1.data.listNonLoans.items);
                   
                        } catch (e) {
                          console.log(e);
                        } finally {
                          
                          setIsLoading(false);
                          
                        }
                      };   
                            
                              
              
                      if(parseFloat(Persnl.length) < 1 )
                      {
                          Alert.alert("Sorry You do not work here");
                          return;
                        }
                        else{
                            
                          await fetchLoanees2();
                            }
                            
                              
                         
            } catch (e) {
              console.log(e);
            } finally {
              setIsLoading(false);
              setitemPrys("")
            }
          };
        
          

  return (

    <View style={styles.image}>
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
            
            
            <Text style={styles.label2}> (Please swipe down to load)</Text>
            <Text style={styles.label}> Money sent from this business</Text>
          </>
        )}
      />
    </View>
    <View style={styles.sendLoanView}>
                    <TextInput
                      placeholder='Enter Business Phone'
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
             
    </View>
    </View>
  );
};

export default FetchSMNonLnsSnt;