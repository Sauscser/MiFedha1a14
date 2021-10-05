import React, {useEffect, useState} from 'react';

import {updateAgent} from '../../../../src/graphql/mutations';

import {Auth, DataStore, graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { getAgent } from '../../../../src/graphql/queries';

export type buyAgntFlts = {
    amt:number;
    fltBal1:number;
    ttlFltBal1:number,
}

const BuyFlt = (props:buyAgntFlts) => {
  
  
  const [amt, setAmt] = useState(0);
  const [phoneContact, setPhoneContact] = useState("");
  const[fltBal1, setFltBal1] =useState();

const[ttlFltBal1, setttlFltBal1] =useState();


 


const ftchAgInfo = async () => {
    try{
        const agntBal:any = await API.graphql(
            graphqlOperation(getAgent, {phonecontact:phoneContact}),
        );

            const fltBal: any = (agntBal.data.getAgent.floatBal)
        const ttlfltIn: any = (agntBal.data.getAgent.TtlFltIn)
        console.log(fltBal1)
        console.log(ttlFltBal1)
        console.log(amt)

        const buyAgntFlt = async () => {

    
            try {
              await API.graphql(
                graphqlOperation(updateAgent, {
                  input: {
                    phonecontact: phoneContact,    
                    TtlFltIn: parseFloat(amt) + parseFloat(fltBal),
                    floatBal: parseFloat(amt) + parseFloat(ttlfltIn),      
                 },
                }),
              );
            } catch (error) {
              console.log('Error creating account', error);
            }   
           
          };

        await buyAgntFlt();
    }

    catch (e) {console.log(e)}

    setAmt (0);
  
    setPhoneContact('');

}

useEffect(() => {
  ftchAgInfo();
}, []);

  

  

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill MFNdogo Account Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Phone Contact</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
              value={amt}
              onChangeText={setAmt}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Amount</Text>
          </View>

          

          
          <TouchableOpacity
            onPress={ftchAgInfo}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Buy
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default BuyFlt;