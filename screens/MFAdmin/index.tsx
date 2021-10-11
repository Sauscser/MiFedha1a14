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

  const goToBuyFloat = () => {
    navigation.navigate('BuyFltFm');
  };

  const goToAdvHome = () => {
    navigation.navigate('MFAdvocateHome');
  };

  const goToKFKbwaRegFm = () => {
    navigation.navigate('RegMFKbw');
  };

  const goToMFNdogReg = () => {
    navigation.navigate('RegMFNdgScrn');
  };

  const goToAdvReg = () => {
    navigation.navigate('MFAdvocateReg');
  };

  const DActivateMFN = () => {
    navigation.navigate('DActvteMFN');
  };
  const DActivateMFK = () => {
    navigation.navigate('DActvteMFK');
  };

  const DActivateMFUsr = () => {
    navigation.navigate('DActvteMFUsr');
  };

  const DActivateMFAdvc = () => {
    navigation.navigate('DActvteMFAd');
  };


  
  
  return (
    <SafeAreaView>
     
        
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Clients</Text>

              <View style={styles.viewForClientsAndTitle}>
                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>MFNdogo</Text>

                  <View style={styles.viewForClientsAndTitleMFNdogo}>
                    <Pressable
                      onPress={goToMFNdogReg}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Reg</Text>
                    </Pressable>

                    

                    <Pressable
                      onPress={DActivateMFN}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeReg
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={goToBuyFloat}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Buy Flt
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>MFKubwa</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={goToKFKbwaRegFm}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Reg</Text>
                    </Pressable>

                    <Pressable
                      onPress={DActivateMFK}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeReg
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Advocate</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={goToAdvReg}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Reg</Text>
                    </Pressable>

                    <Pressable
                      onPress={goToAdvReg}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      DeRegMFAdv
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          

          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>SM Users</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={DActivateMFUsr}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>DActivtUsr</Text>
                    </Pressable>

                    <Pressable
                      onPress={goToAdvReg}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>
                        BLUsr
                      </Text>
                    </Pressable>
                  </View>
                </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Earnings</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={goToAdvReg}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={goToAdvReg}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>My Ac</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={goToAdvReg}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Check Bal</Text>
              </Pressable>

              <Pressable
                onPress={goToAdvReg}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Withdraw</Text>
              </Pressable>
            </View>
          </View>
       
    </View> 
    </SafeAreaView>
  );
};

export default RegKFKubwa;