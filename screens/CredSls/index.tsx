import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  
  Pressable,
  
  SafeAreaView,
  ScrollView,
  
} from 'react-native';
import styles from './styles';

const MyLoanAccount = props => {
  const navigation = useNavigation();
  const[id, setID] =useState("")
  const[ChamaNMember, setChamaNMember] =useState("")


  
  
    const CovCredSlss = () => {
      navigation.navigate('Vw2CredSellCovs');
    };
  
    const NonCovCredSlsss = () => {
      navigation.navigate('Vw2CredSellNonCovs');
    };
  
    
  
    const CredSlsLneesss = () => {
      navigation.navigate('SgnIn2VwCovCrdSlsLneesss');
    };
  
    const CredSlsLnersss = () => {
      navigation.navigate('ElimCredCvLnrs');
    };
  
    const CredByrLneesss = () => {
      navigation.navigate('SgnIn2VwNCCrdSlsLneess');
    };
    const CredByrLnersss = () => {
      navigation.navigate('ElimCredNonCvLnrs');
    };
  
    const SgnIn2BLCredSlCovss = () => {
      navigation.navigate('SgnIn2BLCredSlCovs');
    };
  
    const SgnIn2BLCredSlNonCovss = () => {
      navigation.navigate('SgnIn2BLCredSlNonCovs');
    };

    const CrtBusinessss = () => {
      navigation.navigate('CrtBusinesss');
    };

    const DissolveBizsss = () => {
      navigation.navigate('DissolveBizss');
    };

    const SgnIn2VwBiznasss = () => {
      navigation.navigate('SgnIn2VwBiznass');
    };

    const ShareCredSlsRevsss = () => {
      navigation.navigate('ShareCredSlsRevss');
    };

    const AddPersonelss = () => {
      navigation.navigate('AddPersonels');
    };

    const RmvPersonnelsss = () => {
      navigation.navigate('RmvPersonnelss');
    };
  

  return (
    <SafeAreaView>
      <ScrollView>
          

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Manage Business</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>BizAc</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CrtBusinessss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Create</Text>
                    </Pressable>

                    <Pressable
                      onPress={DissolveBizsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Dissolve
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Earnings</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SgnIn2VwBiznasss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>View</Text>
                    </Pressable>

                    <Pressable
                      onPress={ShareCredSlsRevsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                       Share
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Personnel</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={AddPersonelss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Register</Text>
                    </Pressable>

                    <Pressable
                      onPress={RmvPersonnelsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      DeReg
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Sales</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Make</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CovCredSlss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={NonCovCredSlsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        NonCov
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>BlackList</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SgnIn2BLCredSlCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Cov</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2BLCredSlNonCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        NonCov
                      </Text>
                    </Pressable>
                  </View>
                </View>


              </View>
            </View>

            <View style={styles.clientsView5}>
              <Text style={styles.salesText}>LoanStatus</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Covered</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CredSlsLnersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>MyLoaners </Text>
                    </Pressable>

                    <Pressable
                      onPress={CredSlsLneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      MyLoanees
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>NonCov</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CredByrLnersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>MyLoaners </Text>
                    </Pressable>

                    <Pressable
                      onPress={CredByrLneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      MyLoanees
                      </Text>
                    </Pressable>
                  </View>
                </View>


              </View>
            </View>

    </ScrollView>
    </SafeAreaView> 
    
  );
};

export default MyLoanAccount;