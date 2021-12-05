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

  const Vw2RepyCredSlsCovLnss = () => {
    navigation.navigate('Vw2RepyCredSlsCovLns');
  };

  const Vw2RepyCredSlsNonCovLnss = () => {
    navigation.navigate('Vw2RepyCredSlsNonCovLns');
  };

  const Vw2BLCovCredSlsLnss = () => {
    navigation.navigate('Vw2BLCovCredSlsLns');
  };

  const Vw2BLCredSlsNonCovss = () => {
    navigation.navigate('Vw2BLCredSlsNonCovs');
  };

  const CredSlsLneesss = () => {
    navigation.navigate('CredSlsLneess');
  };

  const CredSlsLnersss = () => {
    navigation.navigate('CredSlsLnerss');
  };

  const CredByrLneesss = () => {
    navigation.navigate('CredByrLneess');
  };
  const CredByrLnersss = () => {
    navigation.navigate('CredByrLnerss');
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
                        Non-Covered CredSls
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Black-List CredSls</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={Vw2BLCovCredSlsLnss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
              </Pressable>

              <Pressable
                onPress={Vw2BLCredSlsNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered CredSls</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Repay Credit Sales</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={Vw2RepyCredSlsCovLnss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered CredSls</Text>
              </Pressable>

              <Pressable
                onPress={Vw2RepyCredSlsNonCovLnss}
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