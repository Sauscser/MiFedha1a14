import React, { useState } from 'react';
import {View, Text, ImageBackground, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = props => {
  const navigation = useNavigation();
const [id,setid] = useState("")
  

  const LnsScreen = () => {
    navigation.navigate('LnsScreen');
  };

  const ChamaScreen = () => {
    navigation.navigate('ChamaScreen');
  };

  const CredSlsScreen = () => {
    navigation.navigate('CredSlsScreen');
  };

  const CreateSMAcs = () => {
    navigation.navigate('CreateSMAc');
  };

  const ChmNonCovLonss = () => {
    navigation.navigate('ChmNonCovLons', {id});
  };

  const VwMakeLnReq = () => {
    navigation.navigate('PlaceLnReq');
  };

  const ViewMySMAcss = () => {
    navigation.navigate('ViewSmAcs');
  };

  const UpdateAccCodess = () => {
    navigation.navigate('UpdateAccCodess');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>
        
        <View style={styles.viewForPressables1}>
        

        <TouchableOpacity
            onPress={CreateSMAcs}
            style={styles.loanFriendButton}>
            <Text style={styles.loanAFriendText}>Create Main Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ViewMySMAcss}
            style={styles.loanFriendButton}>
            <Text style={styles.loanAFriendText}>View Main Account</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.viewForPressables2}> 
        <Text style={styles.title}>
          Life ni kuokoleana na kudumisha urafiki
        </Text>
        </View>
        

        <View style={styles.viewForPressables3}>
          <View style={styles.viewForPressables4}>
            <TouchableOpacity
            onPress={LnsScreen}
            style={styles.chamaLoanAndCreditSalesButton4}>
            <Text style={styles.ChamaLoanAndCreditSalesText4}>
              Pal-Pal Products
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ChamaScreen}
            style={styles.chamaLoanAndCreditSalesButton4}>
            <Text style={styles.ChamaLoanAndCreditSalesText4}>
              Chama Products
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={CredSlsScreen}
            style={styles.chamaLoanAndCreditSalesButton4}>
            <Text style={styles.ChamaLoanAndCreditSalesText4}>
              CredSales Products
            </Text>
          </TouchableOpacity>

          </View>
          
          <View style={styles.viewForPressables4}>
          <TouchableOpacity
            onPress={VwMakeLnReq}
            style={styles.chamaLoanAndCreditSalesButton4}>
            <Text style={styles.ChamaLoanAndCreditSalesText}>
              Request PalLoan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={UpdateAccCodess}
            style={styles.chamaLoanAndCreditSalesButton4}>
            <Text style={styles.ChamaLoanAndCreditSalesText}>
              Request Chama or Sale Loan
            </Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;