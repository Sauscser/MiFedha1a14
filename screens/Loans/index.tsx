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
  

  const RepayCovLnsss = () => {
    navigation.navigate('RepayCovLnss');
  };

  const RepayNonCovLnsss = () => {
    navigation.navigate('RepayNonCovLnss');
  };

  const RepyChmCovLnss = () => {
    navigation.navigate('RepyChmCovLns');
  };

  const RepyChmNonCovLnss = () => {
    navigation.navigate('RepyChmNonCovLns');
  };

  const RpayCredSlrCovss = () => {
    navigation.navigate('RpayCredSlrCovs');
  };

  const RpayCredSlrNonCovss = () => {
    navigation.navigate('RpayCredSlrNonCovs');
  };

  

  const payNonCovLn = () => {
    navigation.navigate('RepayNonCovLnss');
  };

  const BListSMLneeCovss = () => {
    navigation.navigate('BListSMLneeCovs');
  };

  const BListSMLneeNonCovss = () => {
    navigation.navigate('BListSMLneeNonCovs');
  };

  const SMGivCovLons = () => {
    navigation.navigate('SMGivCovLon');
  };

  const SMGivNonCovLons = () => {
    navigation.navigate('SMGivNonCovLon');
  };
  const ViewMyCovLoaneesss = () => {
    navigation.navigate('ViewMyCovLoaneess');
  };

  const ViewMyCovLoanersss = () => {
    navigation.navigate('ViewMyCovLoanerss');
  };

  const ViewMyNonCovLoaneess = () => {
    navigation.navigate('ViewMyNonCovLoaneess');
  };

  const ViewMyNonCovLoanersss = () => {
    navigation.navigate('ViewMyNonCovLoanerss');
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
                      onPress={RepayCovLnsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={RepayNonCovLnsss}
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
                      onPress={RpayCredSlrCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={RpayCredSlrNonCovss}
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
                      onPress={RepyChmCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={RepyChmNonCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          
            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Loan Status</Text>

              <View style={styles.viewForClientsAndTitleLnSt}>
              <View style={styles.viewForClientsCategoriesLnSt}>
                  <Text style={styles.salesPressableText}>CoveredLoan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewMyCovLoaneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewMyCovLoanersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        My Loaners
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategoriesLnSt}>
                  <Text style={styles.salesPressableText}>Non-Covered</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewMyNonCovLoaneess}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewMyNonCovLoanersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        My Loaners
                      </Text>
                    </Pressable>
                  </View>
                </View>


              </View>
            </View>

          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>Single Member Give Loan</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={SMGivCovLons}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={SMGivNonCovLons}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>
                        Non-Covered
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Single Member Black-List</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={BListSMLneeCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered Loans</Text>
              </Pressable>

              <Pressable
                onPress={BListSMLneeNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered</Text>
              </Pressable>
            </View>
          </View>        
     
    </View> 
    </SafeAreaView>
  );
};

export default MyLoanAccount;