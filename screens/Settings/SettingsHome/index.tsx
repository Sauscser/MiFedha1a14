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

const SettinsHm = props => {
  const navigation = useNavigation();

  const crtAdmin = () => {
    navigation.navigate('CrtAdmin');
  };

  const goRegKFNdogoFm = () => {
    navigation.navigate('RegMFNdgScrn');
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
          <Text style={styles.kfkubwaText}>Main Settings</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={crtAdmin}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Reg Admin</Text>
            </Pressable>

            <Pressable onPress={goRegKFNdogoFm} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>DeReg Admin</Text>
            </Pressable>

            <Pressable
              onPress={crtAdmin}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Other Settings</Text>
            </Pressable>
          </View>
        </View>

        

        
      </View>
    </SafeAreaView>
  );
};

export default SettinsHm;