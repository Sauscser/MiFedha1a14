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

  const SMDpsitsss = () => {
    navigation.navigate('SMDpsitss');
  };

  const goToCreateSMAc = () => {
    navigation.navigate('CreateSMAc');
  };

  const SMWthdrwlsss = () => {
    navigation.navigate('SMWthdrwlss');
  };

  const goWithdrwMny = () => {
    navigation.navigate('SMWthdFm');
  };

  const goToSMASndnonln = () => {
    navigation.navigate('SendNonLnss');
  };

  const UpdateSMPWss = () => {
    navigation.navigate('UpdateSMPWs');
  };

  const ViewSmAcss = () => {
    navigation.navigate('ViewSmAcs');
  };

  const VwNonLnsRecss = () => {
    navigation.navigate('VwNonLnsRecs');
  };

  const VwNonLnsSntss = () => {
    navigation.navigate('VwNonLnsSnts');
  };

  const UpdateAccCodesss = () => {
    navigation.navigate('UpdateAccCodess');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>MyMoney</Text>

          <View style={styles.viewForSalesPressables}>
            
            <View style={styles.acPressables}>
            <View>
            <Text style={styles.acPressableText}>View NonLons</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={VwNonLnsSntss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Sent</Text>
            </Pressable>
            <Pressable onPress={VwNonLnsRecss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Rec</Text>
            </Pressable>
            </View>
            </View>
            

            <View style={styles.acPressables}>
            <View>
            <Text style={styles.acPressableText}>Withdrawals</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={goWithdrwMny} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={SMDpsitsss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
            </View>
            </View>

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

            <View style={styles.acPressables}>
            <View>
            <Text style={styles.acPressableText}>Update</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={UpdateSMPWss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>PWord</Text>
            </Pressable>
            <Pressable onPress={UpdateAccCodesss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>AccCd</Text>
            </Pressable>
            </View>
            </View>

            <View style={styles.acPressables}>
            <View>
            <Text style={styles.acPressableText}>View</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={ViewSmAcss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>A/c</Text>
            </Pressable>
            <Pressable onPress={SMWthdrwlsss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Dposit</Text>
            </Pressable>
            </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyAccount;