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

  const goBL = () => {
    navigation.navigate('BListLneess');
  };

  return (
    <SafeAreaView>
     
        
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Repay Loan</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Single Member</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={payCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Credit Seller</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Chama</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          

          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>SM Users</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>DActivtUsr</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>
                        BLUsr
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Earnings</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>My Ac</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={payNonCovLn}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>
       
    </View> 
    </SafeAreaView>
  );
};

export default MyLoanAccount;