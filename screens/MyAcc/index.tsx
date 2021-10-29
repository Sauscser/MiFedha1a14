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

const MyAccount = props => {
  const navigation = useNavigation();

  const goToMySMAc = () => {
    navigation.navigate('ViewMySMAcBal');
  };

  const goToCreateSMAc = () => {
    navigation.navigate('CreateSMAc');
  };

  const goToSMADpstFm = () => {
    navigation.navigate('DpstMney');
  };

  const goWithdrwMny = () => {
    navigation.navigate('SMWthdFm');
  };

  const goToSMASndnonln = () => {
    navigation.navigate('SendNonLnss');
  };

  const BListSMLneeCovss = () => {
    navigation.navigate('BListSMLneeCovs');
  };
  const BListSMLneeNonCovss = () => {
    navigation.navigate('BListSMLneeNonCovs');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>MyMoney</Text>

          <View style={styles.viewForSalesPressables}>
            

            <Pressable onPress={goToMySMAc} style={styles.acPressables}>
              <Text style={styles.acPressableText}>CheckBal</Text>
            </Pressable>

            <Pressable onPress={goWithdrwMny} style={styles.acPressables}>
              <Text style={styles.acPressableText}>Withdraw</Text>
            </Pressable>

            <Pressable
              onPress={goToSMASndnonln}
              style={styles.acPressables}>
              <Text style={styles.acPressableText}>Send Non-Loan</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.accountView}>
          <Text style={styles.accountText}>Account</Text>

          <View style={styles.viewForSalesPressables}>
            <Pressable onPress={goToCreateSMAc} style={styles.acPressables}>
              <Text style={styles.acPressableText}>Create</Text>
            </Pressable>

            <Pressable onPress={goToMySMAc} style={styles.acPressables}>
              <Text style={styles.acPressableText}>Update</Text>
            </Pressable>

            <Pressable onPress={goToMySMAc} style={styles.acPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;