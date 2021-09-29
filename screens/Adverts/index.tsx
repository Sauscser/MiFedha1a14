import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';


const HomeScreen = props => {
  const navig = useNavigation();

  const goToLoanForm = () => {
    navig.navigate('KFNdogoo');
  };

  const goToChamaMemberLoanForm = () => {
    navig.navigate('KFNdogoo');
  };

  const goToSellOnCreditForm = () => {
    navig.navigate('KFNdogoo');
  };

  return (
    <View>
      <View
        
        style={styles.image}>
        <Pressable onPress={goToLoanForm} style={styles.loanFriendButton}>
          <Text style={styles.loanAFriendText}>Loan a Friend</Text>
        </Pressable>

        <Text style={styles.title}>
          Bizna ni kuokoleana na kudumisha urafiki
        </Text>

        <View style={styles.viewForPressables}>
          <Pressable
            onPress={goToChamaMemberLoanForm}
            style={styles.chamaLoanAndCreditSalesButton}>
            <Text style={styles.ChamaLoanAndCreditSalesText}>
              Loan Chama Member
            </Text>
          </Pressable>
          <Pressable
            onPress={goToSellOnCreditForm}
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