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

const RegKFKubwa = props => {
  const navigation = useNavigation();

  const goToSalesAdsScreen = () => {
    navigation.navigate('GeneralShopSchPg');
  };

  const goToAdvertiseSales = () => {
    navigation.navigate('GnrlShpAdvtsScrn');
  };

  const goToKFKbwaRegFm = () => {
    navigation.navigate('RegKFKbw');
  };

  const goToAdvrtsPrsnLn = () => {
    navigation.navigate('GnrlShpPrsnlLnAdvtsScrn');
  };

  const goToAdvrtsChamaLn = () => {
    navigation.navigate('GnrlShpChamaLnAdvtsScrn');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.adminImage}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Clients</Text>

              <View style={styles.viewForClientsAndTitle}>
                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>KFNdogo</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={goToAdvertiseSales}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Register</Text>
                    </Pressable>

                    <Pressable
                      onPress={goToSalesAdsScreen}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeRegister
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>KFKubwa</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={goToKFKbwaRegFm}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Register</Text>
                    </Pressable>

                    <Pressable
                      onPress={goToSalesAdsScreen}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeRegister
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Advocate</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={goToAdvertiseSales}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Register</Text>
                    </Pressable>

                    <Pressable
                      onPress={goToSalesAdsScreen}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeRegister
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Earnings</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={goToSalesAdsScreen}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={goToSalesAdsScreen}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>My Ac</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={goToSalesAdsScreen}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={goToSalesAdsScreen}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegKFKubwa;