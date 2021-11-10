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

  const WithdwAdmnss = () => {
    navigation.navigate('WithdwAdmns');
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

  const UpdateMFAdminPWss = () => {
    navigation.navigate('UpdateMFAdminPWs');
  };
  const BLUsrsss = () => {
    navigation.navigate('BLUsrss');
  };

  const CrtAdmins = () => {
    navigation.navigate('CrtAdmin');
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
                      <Text style={styles.clientsPressableText}>
                      DeRegMFAdv
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          
            <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>My Ac</Text>

            <View style={styles.viewForAcEarningsPressables}>
              
              <Pressable
                onPress={CrtAdmins}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>CreateAc</Text>
              </Pressable>

              <Pressable
                onPress={UpdateMFAdminPWss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Update</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>SM Users</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={DActivateMFUsr}
                      style={styles.earningsAcPressablesSMNErn}>
                      <Text style={styles.earningsAcPressableText}>DActivtUsr</Text>
                    </Pressable>

                    <Pressable
                      onPress={BLUsrsss}
                      style={styles.earningsAcPressablesSMNErn}>
                      <Text style={styles.earningsAcPressableText}>
                        BLUsr
                      </Text>
                    </Pressable>
                  </View>
                </View>

         

         
       
    </View> 
    </SafeAreaView>
  );
};

export default RegKFKubwa;