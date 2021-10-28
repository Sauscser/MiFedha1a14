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

const CredSalesAccount = props => {
  const navigation = useNavigation();

  const CovCredSlss = () => {
    navigation.navigate('CovCredSls');
  };

  const NonCovCredSlsss = () => {
    navigation.navigate('NonCovCredSlss');
  };

  const RpayCredSlrCovss = () => {
    navigation.navigate('RpayCredSlrCovs');
  };

  const BListCredByrNonCovss = () => {
    navigation.navigate('BListCredByrNonCovs');
  };

  const RpayCredSlrNonCovss = () => {
    navigation.navigate('RpayCredSlrNonCovs');
  };

  const BListCredByrCovss = () => {
    navigation.navigate('BListCredByrCovs');
  };

  const payNonCovLn = () => {
    navigation.navigate('RepayNonCovLnss');
  };

  const payCovLn = () => {
    navigation.navigate('RepayCovLnss');
  };

  const SMASndnonCovLn = () => {
    navigation.navigate('SMNonGivLon');
  };

  

  return (
    <SafeAreaView>
     
        
          <View style={styles.adminImage}>


          

          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>Make Credit Sales</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={CovCredSlss}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
                    </Pressable>

                    <Pressable
                      onPress={NonCovCredSlsss}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>
                        Non-Covered CredSls
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Black-List CredSls</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={BListCredByrCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
              </Pressable>

              <Pressable
                onPress={BListCredByrNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered CredSls</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Repay Credit Sales</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={RpayCredSlrCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
              </Pressable>

              <Pressable
                onPress={RpayCredSlrNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered CredSls</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Get Credit Sales Loan Status</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Specific CredSl Status</Text>
              </Pressable>

              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>General CredSl Status</Text>
              </Pressable>
            </View>
          </View>
       
    </View> 
    </SafeAreaView>
  );
};

export default CredSalesAccount;