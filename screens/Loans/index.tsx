import React, { useState } from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';

const MyLoanAccount = props => {
  const navigation = useNavigation();
  const [id, setId] = useState("")
  

 

  const Vw2RpyCovss = () => {
    navigation.navigate('ElimRpyChmCvs');
  };

  const Vw2RpyNonCovss = () => {
    navigation.navigate('ElimRpyChmNonCvs');
  };

  const RpayCredSlrCovss = () => {
    navigation.navigate('RpayCredSlrCovs', {id});
  };

  const RpayCredSlrNonCovss = () => {
    navigation.navigate('RpayCredSlrNonCovs', {id});
  };

  
  const SMGivCovLons = () => {
    navigation.navigate('SMGivCovLon');
  };

  const SMGivNonCovLons = () => {
    navigation.navigate('SMGivNonCovLon');
  };
  const ViewMyCovLoaneesss = () => {
    navigation.navigate('ElimLnsCvLnees');
  };

  const ViewMyCovLoanersss = () => {
    navigation.navigate('ElimLnsCvLnrs');
  };

  const ViewMyNonCovLoaneess = () => {
    navigation.navigate('ElimLnsNonCvLnees');
  };

  const ViewMyNonCovLoanersss = () => {
    navigation.navigate('ElimLnsNonCvLnrs');
  };

  const Vw2RepySMCovLnss = () => {
    navigation.navigate('ElimRpySMCovs');
  };

  const Vw2RepySMNonCovLnss = () => {
    navigation.navigate('ElimRpySMNonCovs');
  };

  const Vw2BLCovSMLnss = () => {
    navigation.navigate('SgnIn2BLSMCovs');
  };

  const Vw2BLSMNonCovss = () => {
    navigation.navigate('SgnIn2BLSMNonCovs');
  };

  const ViewNonLnsSntSMss = () => {
    navigation.navigate('ElimLPSMSents');
  };

  const ViewNonLnsRecSMss = () => {
    navigation.navigate('ElimLPSMRecs');
  };

  const ViewNonLnsRecCredSlrss = () => {
    navigation.navigate('ElimLPCredRecs');
  };


  const ViewNonLnsSntCredSlrss = () => {
    navigation.navigate('ElimLPCredSents');
  };

  const ViewNonLnsSntChmss = () => {
    navigation.navigate('ElimLPChmSents');
  };

  const ChamaSignIn2VwLnRpymntss = () => {
    navigation.navigate('ChamaSignIn2VwLnRpymnts');
  };

  const Vw2RepyCredSlsCovLnss = () => {
    navigation.navigate('ElimRpyCredCovs');
  };

  const Vw2RepyCredSlsNonCovLnss = () => {
    navigation.navigate('ElimRpyCredNonCovs');
  };


  

  

  return (
   
      
      <SafeAreaView>
     
        <ScrollView>
          
        <View style={styles.adminImage}>
            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Repay Loan</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Single Member</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={Vw2RepySMCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={Vw2RepySMNonCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Credit Seller</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={Vw2RepyCredSlsCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered</Text>
                    </Pressable>

                    <Pressable
                      onPress={Vw2RepyCredSlsNonCovLnss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Non-Covered Loans
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Chama</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={Vw2RpyCovss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={Vw2RpyNonCovss}
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
              <Text style={styles.salesText}>Give and View Loans</Text>
              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>View CovLoan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewMyCovLoaneesss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewMyCovLoanersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      My Loaners
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>View Non-Cov</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewMyNonCovLoaneess}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewMyNonCovLoanersss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      My Loaners
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Give Loan</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SMGivCovLons}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Covered Loans</Text>
                    </Pressable>

                    <Pressable
                      onPress={SMGivNonCovLons}
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
              <Text style={styles.salesText}>View Loan Repayments (LP)</Text>
              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Single Member</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewNonLnsSntSMss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>Sent</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewNonLnsRecSMss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>
                     Received
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Chama</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewNonLnsSntChmss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>Sent</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamaSignIn2VwLnRpymntss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>
                      Received
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>CredSeller</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ViewNonLnsSntCredSlrss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>Sent</Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewNonLnsRecCredSlrss}
                      style={styles.ClientsPressables2}>
                      <Text style={styles.clientsPressableText}>
                      Received
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

          <View style={styles.acEarningsView2}>
            <Text style={styles.salesText}>Single Member Black-List</Text>

            <View style={styles.viewForAcEarningsPressables}>
              <Pressable
                onPress={Vw2BLCovSMLnss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Covered Loans</Text>
              </Pressable>

              <Pressable
                onPress={Vw2BLSMNonCovss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Non Covered</Text>
              </Pressable>
            </View>
          </View>        
     </View>
    </ScrollView>
    </SafeAreaView>

   
  );
};

export default MyLoanAccount;