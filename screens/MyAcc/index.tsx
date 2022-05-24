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
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyAccount = props => {
  const navigation = useNavigation();

  const SMDpsitsss = () => {
    navigation.navigate('ElimDpstss');
  };

  const goToCreateSMAc = () => {
    navigation.navigate('CreateSMAc');
  };

  const SMWthdrwlsss = () => {
    navigation.navigate('ElimWthdrwlss');
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
    navigation.navigate('ElimAcs');
  };

  const LoanAds = () => {
    navigation.navigate('LoanAds');
  };

  const VwNonLnsSntss = () => {
    navigation.navigate('ElimNonLnsSents');
  };

  const UpdateAccCodesss = () => {
    navigation.navigate('UpdateAccCodess');
  };

  const VwPlLn2Remove = () => {
    navigation.navigate('VwPlLn2Remove');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>

<View style={styles.accountView}>
          <Text style={styles.accountText}>Account</Text>

          <View style={styles.viewForSalesPressables}>
            <Pressable onPress={SMDpsitsss} style={styles.acPressables}>
              <Text style={styles.acPressableText}>View Deposits</Text>
            </Pressable>

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>Update</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={UpdateSMPWss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>PWord</Text>
            </Pressable>
            <Pressable onPress={UpdateAccCodesss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>AskLn</Text>
            </Pressable>
            </View>
            </View>

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>AC</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={goToCreateSMAc} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Create</Text>
            </Pressable>
            <Pressable onPress={ViewSmAcss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
            </View>
            </View>
          </View>
        </View>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>MyMoney</Text>

          <View style={styles.viewForSalesPressables}>
            
            

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>Withdrawals</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={goWithdrwMny} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={SMWthdrwlsss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
            </View>
            </View>


            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>Loan Adverts</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={LoanAds} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={VwPlLn2Remove} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Delete</Text>
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