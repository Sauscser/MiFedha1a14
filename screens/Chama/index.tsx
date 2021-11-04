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

  const RemoveChmMbrss = () => {
    navigation.navigate('RemoveChmMbrs');
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
    navigation.navigate('ChmLnsRecCovs');
  };
  const ChmLnsRecNonCovss = () => {
    navigation.navigate('ChmLnsRecNonCovs');
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

  const ChamaMmbrRemtss = () => {
    navigation.navigate('ChamaMmbrRemts');
  };

  const ChmMmbrContriss = () => {
    navigation.navigate('ChmMmbrContris');
  };

  const ChmMmbrMmbrsss = () => {
    navigation.navigate('ChmMmbrMmbrss');
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
                      onPress={RemoveChmMbrss}
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
                  <Text style={styles.salesPressableText}>Loan Status</Text>

                  <View style={styles.viewForClientsPressables}>

                    <View style={styles.ClientsPressablesLnStts}>

                      <View style={styles.viewForClientsCategoriesChama2}>
                      <Text style={styles.salesPressableText}>Chama</Text>
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
                      <Text style={styles.salesPressableText}>Member</Text>
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

      <View style={styles.acEarningsView}>
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
    </SafeAreaView>
  );
};

export default MyLoanAccount;