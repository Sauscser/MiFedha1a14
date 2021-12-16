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
  ScrollView,
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

  

  const CredSlsLneesss = () => {
    navigation.navigate('ElimCredCvLnees');
  };

  const CredSlsLnersss = () => {
    navigation.navigate('ElimCredCvLnrs');
  };

  const CredByrLneesss = () => {
    navigation.navigate('ElimCredNonCvLnees');
  };
  const CredByrLnersss = () => {
    navigation.navigate('ElimCredNonCvLnrs');
  };

  const SgnIn2BLCredSlCovss = () => {
    navigation.navigate('SgnIn2BLCredSlCovs');
  };

  const SgnIn2BLCredSlNonCovss = () => {
    navigation.navigate('SgnIn2BLCredSlNonCovs');
  };

  

  return (
    <SafeAreaView>
     
        <ScrollView>
          <View style={styles.adminImage}>


          
          <View style={styles.clientsView}>
              <Text style={styles.salesText}>CredSales Loan Status</Text>

              <View style={styles.viewForClientsAndTitleLnSt}>
              <View style={styles.viewForClientsCategoriesLnSt}>
                  <Text style={styles.salesPressableText}>CoveredLoan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CredSlsLneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={CredSlsLnersss}
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
                      onPress={CredByrLneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={CredByrLnersss}
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
                        Non-Cov CredSl
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Black-List CredSls</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={SgnIn2BLCredSlCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
              </Pressable>

              <Pressable
                onPress={SgnIn2BLCredSlNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered CredSls</Text>
              </Pressable>
            </View>
          </View>

          

    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default CredSalesAccount;