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

const KFKubwaScreen = props => {
  const navigation = useNavigation();

  const goToSalesAdsScreen = () => {
    navigation.navigate('GeneralShopSchPg');
  };

  const goRegKFNdogoFm = () => {
    navigation.navigate('RegKFNdogo');
  };

  const goToAdvertiseSales = () => {
    navigation.navigate('GnrlShpAdvtsScrn');
  };

  const goToPubLnScreen = () => {
    navigation.navigate('Loan Ads Search Results');
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
        
        style={styles.kfkubwaimage}>
        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My KFNdogos</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={goToAdvertiseSales}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>View</Text>
            </Pressable>

            <Pressable onPress={goRegKFNdogoFm} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Register</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>DeRegister</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My Account</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>ViewAc</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}> Earnings</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={goToAdvrtsChamaLn}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Check Bal</Text>
            </Pressable>

            <Pressable onPress={goToPubLnScreen} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Withdraw</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFKubwaScreen;