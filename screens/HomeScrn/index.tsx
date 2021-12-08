import React, { useState } from 'react';
import {View, Text, ImageBackground, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const HomeScreen = props => {
  const navigation = useNavigation();
const [id,setid] = useState("")
  

  const SMGivNonCovLons = () => {
    navigation.navigate('SMGivNonCovLon');
  };

  const ChmNonCovLonss = () => {
    navigation.navigate('ChmNonCovLons', {id});
  };

  const NonCovCredSlsss = () => {
    navigation.navigate('NonCovCredSlss');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>
        
        <View style={styles.viewForPressables1}>
        <Pressable onPress={SMGivNonCovLons} style={styles.loanFriendButton}>
          <Text style={styles.loanAFriendText}>Loan a Friend</Text>
        </Pressable>
        </View>
        
        <View style={styles.viewForPressables2}> 
        <Text style={styles.title}>
          Life ni kuokoleana na kudumisha urafiki
        </Text>
        </View>
        

        <View style={styles.viewForPressables3}>
          <Pressable
            onPress={ChmNonCovLonss}
            style={styles.chamaLoanAndCreditSalesButton}>
            <Text style={styles.ChamaLoanAndCreditSalesText}>
              Loan Chama Member
            </Text>
          </Pressable>
          <Pressable
            onPress={NonCovCredSlsss}
            style={styles.chamaLoanAndCreditSalesButton}>
            <Text style={styles.ChamaLoanAndCreditSalesText}>
              Sell on Credit
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;