import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import styles from './styles';

const MyLoanAccount = props => {
  const navigation = useNavigation();

  const goToGiveCovLns = () => {
    navigation.navigate('SMGivLon');
  };

  const goToCreateSMAc = () => {
    navigation.navigate('CreateSMAc');
  };

  const goToSMADpstFm = () => {
    navigation.navigate('DpstMney');
  };

  const goWithdrwMny = () => {
    navigation.navigate('SMAWthdrwFrm');
  };

  const payNonCovLn = () => {
    navigation.navigate('RepayNonCovLnss');
  };

  const payCovLn = () => {
    navigation.navigate('RepayCovLnss');
  };

  const goToSMASndnonln = () => {
    navigation.navigate('SMASndNonLns');
  };

  const goToAdvrtsChamaLn = () => {
    navigation.navigate('GnrlShpChamaLnAdvtsScrn');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>
        
          <Text style={styles.accountText}>Loan Transactions</Text>

          <View style={styles.viewForSalesPressables}>
            <Pressable onPress={goToGiveCovLns} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Give Loan</Text>
            </Pressable>

            <Pressable onPress={payCovLn} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Pay Covered Loan</Text>
            </Pressable>

            <Pressable onPress={payNonCovLn} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Pay Non-Covered Loan</Text>
            </Pressable>

            <Pressable onPress={goWithdrwMny} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Black List Debtor</Text>
            </Pressable>

            <Pressable
              onPress={goToSMASndnonln}
              style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Loan Status</Text>
            </Pressable>
          </View>
        </View>

        
      
    </SafeAreaView>
  );
};

export default MyLoanAccount;