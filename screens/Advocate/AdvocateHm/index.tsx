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

const KFAdvHome = props => {
  const navigation = useNavigation();

  const goToSalesAdsScreen = () => {
    navigation.navigate('MFAdvocateHome');
  };

  const goToAdvertiseSales = () => {
    navigation.navigate('MFAdvocateHome');
  };

  const goToPubLnScreen = () => {
    navigation.navigate('MFAdvocateHome');
  };

  const goToAdvrtsPrsnLn = () => {
    navigation.navigate('MFAdvocateHome');
  };

  const goToAdvrtsChamaLn = () => {
    navigation.navigate('MFAdvocateHome');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.floatimage}>
        
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
            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>View Clients</Text>
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

export default KFAdvHome;