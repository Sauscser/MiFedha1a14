import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const HomeScreen = props => {
  const navigation = useNavigation();

  

  const SMGivNonCovLons = () => {
    navigation.navigate('SMGivNonCovLon');
  };

  const ChmNonCovLonss = () => {
    navigation.navigate('ChmNonCovLons');
  };

  const NonCovCredSlsss = () => {
    navigation.navigate('NonCovCredSlss');
  };

  return (
    <View>
      <View
        
        style={styles.image}>
        
        
        <Pressable onPress={SMGivNonCovLons} style={styles.loanFriendButton}>
          <Text style={styles.loanAFriendText}>Okolea Beshte</Text>
        </Pressable>

        <Text style={styles.title}>
          Life ni kuokoleana na kudumisha urafiki
        </Text>

        <View style={styles.viewForPressables}>
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
    </View>
  );
};

export default HomeScreen;