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

const KFNdogoScreen = props => {
  const navigation = useNavigation();

  const goToSalesAdsScreen = () => {
    navigation.navigate('GeneralShopSchPg');
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
        
        style={styles.floatimage}>
        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>Float</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={goToAdvertiseSales}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Buy</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>CheckBal</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Withdraw</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>My Account</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>ViewAc</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.floatMainView}>
          <Text style={styles.floatText}> Earnings</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={goToAdvrtsChamaLn}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Check Bal</Text>
            </Pressable>

            <Pressable onPress={goToPubLnScreen} style={styles.floatView}>
              <Text style={styles.floatPressableText}>Withdraw</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFNdogoScreen;