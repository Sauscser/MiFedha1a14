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

const MyLoanAccount = props => {
  const navigation = useNavigation();

  const CreateChmss = () => {
    navigation.navigate('CreateChms');
  };

  const ChmCovLonss = () => {
    navigation.navigate('ChmCovLons');
  };

  const ChmNonCovLonss = () => {
    navigation.navigate('ChmNonCovLons');
  };

  const ChmContrss = () => {
    navigation.navigate('ChmContrs');
  };

  const AddChmMembrssss = () => {
    navigation.navigate('AddChmMembrsss');
  };
  
  const SndMbrsMnyss = () => {
    navigation.navigate('SndMbrsMnys');
  };

  const goToSMADpstFm = () => {
    navigation.navigate('DpstMney');
  };

  const RepyChmCovLnss = () => {
    navigation.navigate('RepyChmCovLns');
  };

  const RepyChmNonCovLnss = () => {
    navigation.navigate('RepyChmNonCovLns');
  };

  const BLChmMmberCovss = () => {
    navigation.navigate('BLChmMmberCovs');
  };
  const BLChmMmberNonCovss = () => {
    navigation.navigate('BLChmMmberNonCovs');
  };

  const givCovLnSM = () => {
    navigation.navigate('SMGivCovLon');
  };

  const payNonCovLn = () => {
    navigation.navigate('RepayNonCovLnss');
  };

  const payCovLn = () => {
    navigation.navigate('RepayCovLnss');
  };

  const SMASndnonCovLn = () => {
    navigation.navigate('SMNonGivLon');
  };

  const goBL = () => {
    navigation.navigate('BListLneess');
  };

  return (
    <SafeAreaView>
     
        
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Chama Loan</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Give Loan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChmCovLonss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChmNonCovLonss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Black-List</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={BLChmMmberCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={BLChmMmberNonCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Repay</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={RepyChmCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={RepyChmNonCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Members</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Registration</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={AddChmMembrssss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Reg</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        De-Reg
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Money</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChmContrss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Contribute</Text>
                    </Pressable>

                    <Pressable
                      onPress={SndMbrsMnyss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                       Send to Member
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Status</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Specific Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={payNonCovLn}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      All Vyamas
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

      <View style={styles.acEarningsView}>
          <Text style={styles.salesText}>Chama Account</Text>

          <View style={styles.viewForAcEarningsPressables}>
            <Pressable onPress={CreateChmss} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Create</Text>
            </Pressable>

            <Pressable onPress={givCovLnSM} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Disolve</Text>
            </Pressable>

            <Pressable onPress={givCovLnSM} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Update</Text>
            </Pressable>

            <Pressable
              onPress={givCovLnSM}
              style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
          </View>
        </View>
          

          
    </View> 
    </SafeAreaView>
  );
};

export default MyLoanAccount;