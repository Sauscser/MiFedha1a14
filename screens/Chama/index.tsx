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


  const CreateChmss = () => {
    navigation.navigate('CreateChms');
  };

  
  const SgnIn2LnMmbrNonCovss = () => {
    navigation.navigate('ChmNonCovLons', {ChamaNMember});
  };

  const SgnIn2LnMmbrs = () => {
    navigation.navigate('ChmCovLons', {id});
  };

  const AddChmMembrssss = () => {
    navigation.navigate('AddChmMembrsss');
  };
  
  const MmbrSndChmsss = () => {
    navigation.navigate('MmbrSndChmss');
  };

  const SgnIn2RemoveMmbrss = () => {
  navigation.navigate('RemoveChmMbrs', {id});
  };

  const SgnIn2BLCovss = () => {
    navigation.navigate('SgnIn2BLCovs');
  };

  const SgnIn2BLNonCovss = () => {
    navigation.navigate('SgnIn2BLNonCovs');
  };

  const DissolveChmss = () => {
    navigation.navigate('DissolveChms');
  };

  const UpdateChmss = () => {
    navigation.navigate('UpdateChms');
  };

  const ChmSignInsss = () => {
    navigation.navigate('ChmSignInss');
  };
  const ChamSignIn2ss = () => {
    navigation.navigate('ChamSignIn2s');
  };
  const ChmLnsRecCovss = () => {
    navigation.navigate('ElimChmVwCovLnss');
  };
  const ChmLnsRecNonCovss = () => {
    navigation.navigate('ElimChmVwNonCvLns');
  };

  const ChamSignIn3ss = () => {
    navigation.navigate('ChamSignIn3s');
  };

  const ChamSignIn4ss = () => {
    navigation.navigate('ChamSignIn4s');
  };

  const ChmSignIn5ss = () => {
    navigation.navigate('ChmSignIn5s');
  };

  const ChmSignIn6ss = () => {
    navigation.navigate('ChmSignIn6s');
  };

  const ChamaSndMbrMneyss = () => {
    navigation.navigate('SndMbrsMnys', {id});
  };

  const ChmMmbrContriss = () => {
    navigation.navigate('ElimChmVwCntrMembrs');
  };

  const ChmMmbrMmbrsss = () => {
    navigation.navigate('ElimChmVwMbrshpMembrs');
  };
  const Vw2RpyCovss = () => {
    navigation.navigate('ElimRpyChmCvs');
  };

  const Vw2RpyNonCovs = () => {
    navigation.navigate('ElimRpyChmNonCvs');
  };

  const ChamaMmbrRemtss = () => {
    navigation.navigate('ElimChmVwRmtncMembrs');
  };


  return (
    <SafeAreaView>
      <ScrollView>
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Chama Loan</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Give Loan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SgnIn2LnMmbrs}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2LnMmbrNonCovss}
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
                      onPress={SgnIn2BLCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2BLNonCovss}
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
                      onPress={Vw2RpyCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={Vw2RpyNonCovs}
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
              <Text style={styles.salesText}>View Chama Activities</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Contributions</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChmSignIn5ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChmMmbrContriss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Member
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Chama Remittance</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChamSignIn4ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamaMmbrRemtss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Member
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Membership</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChmSignIn6ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChmMmbrMmbrsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Member
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
                      onPress={SgnIn2RemoveMmbrss}
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
                      onPress={MmbrSndChmsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Contribute</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamaSndMbrMneyss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                       Send to Member
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Loan Status</Text>

                  <View style={styles.viewForClientsPressables}>

                    <View style={styles.ClientsPressablesLnStts}>

                      <View style={styles.viewForClientsCategoriesChama2}>
                      <Text style={styles.salesPressableText}>Chm</Text>
                      </View>

                    <View style={styles.viewForClientsCategoriesChama4}>
                    <Pressable
                      onPress={ChmSignInsss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamSignIn2ss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>
                      NonCov
                      </Text>
                    </Pressable>
                    </View>
                    </View>

                    <View style={styles.ClientsPressablesLnStts}>

                      <View style={styles.viewForClientsCategoriesChama2}>
                      <Text style={styles.salesPressableText}>Mine</Text>
                      </View>

                    <View style={styles.viewForClientsCategoriesChama4}>
                    <Pressable
                      onPress={ChmLnsRecCovss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChmLnsRecNonCovss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>
                      NonCov
                      </Text>
                    </Pressable>
                    </View>
                    </View>
                    
                  </View>
                </View>


              </View>
            </View>

      <View style={styles.acEarningsView2}>
          <Text style={styles.salesText}>Chama Account</Text>

          <View style={styles.viewForAcEarningsPressables}>
            <Pressable onPress={CreateChmss} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Create</Text>
            </Pressable>

            <Pressable onPress={DissolveChmss} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Dissolve</Text>
            </Pressable>

            <Pressable onPress={UpdateChmss} style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>Update</Text>
            </Pressable>

            <Pressable
              onPress={ChamSignIn3ss}
              style={styles.myMoneyPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
          </View>
        </View>
          

          
    </View> 
    </ScrollView>
    </SafeAreaView> 
    
  );
};

export default MyLoanAccount;