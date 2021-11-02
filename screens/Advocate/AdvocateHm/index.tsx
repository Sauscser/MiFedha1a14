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

  const MFAdvocateRegs = () => {
    navigation.navigate('MFAdvocateReg');
  };

  const WithdwAdvss = () => {
    navigation.navigate('WithdwAdvs');
  };

  const goToAdvrtsChamaLn = () => {
    navigation.navigate('MFAdvocateHome');
  }
    const UpdtMFAdvPWss = () => {
      navigation.navigate('UpdtMFAdvPWs');
  
    
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.floatimage}>
        
        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>My Account</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={UpdtMFAdvPWss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>ViewAc</Text>
            </Pressable>
            <Pressable
              onPress={MFAdvocateRegs}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>CreateAc</Text>
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

            <Pressable onPress={WithdwAdvss} style={styles.floatView}>
              <Text style={styles.floatPressableText}>Withdraw</Text>
            </Pressable>

            <Pressable
              onPress={goToSalesAdsScreen}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>View Clients</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFAdvHome;