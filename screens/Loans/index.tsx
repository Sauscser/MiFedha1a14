import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';

const MyLoanAccount = props => {
  const navigation = useNavigation();

  // Navigation functions for each button
  const SignIn2GrntLnReq = () => navigation.navigate('SignIn2GrntLnReq');
  const PalVw2GrantLnReq2 = () => navigation.navigate('PalVw2GrantLnReq2');
  const VwP2PMyLoaners = () => navigation.navigate('VwP2PMyLoaners');
  const VwP2PMyLoanees = () => navigation.navigate('VwP2PMyLoanees');
  const VwB2PMyLoaners = () => navigation.navigate('VwB2PMyLoaners');
  const SI2VwB2PLoanees = () => navigation.navigate('SI2VwB2PLoanees');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.adminImage}>
        {/* Main Container */}
        <View style={styles.clientsView}>
          <Text style={styles.salesText}>Loans</Text>
          
          {/* Grant Loan Requests Section */}
          <Text style={styles.salesPressableText}>Grant Loan Requests</Text>
          <View style={styles.viewForClientsPressables}>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={SignIn2GrntLnReq}>
                <Text style={styles.clientsPressableText}>Biz2Pal</Text>
              </Pressable>
            </LinearGradient>

            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={PalVw2GrantLnReq2}>
                <Text style={styles.clientsPressableText}>Pal2Pal</Text>
              </Pressable>
            </LinearGradient>
          </View>

          {/* BizLoanStatus Section */}
          <Text style={styles.salesPressableText}>BizLoanStatus</Text>
          <View style={styles.viewForClientsPressables}>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={SI2VwB2PLoanees}>
                <Text style={styles.clientsPressableText}>Company Loanees</Text>
              </Pressable>
            </LinearGradient>

            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={VwB2PMyLoaners}>
                <Text style={styles.clientsPressableText}>Loaning Companies</Text>
              </Pressable>
            </LinearGradient>
          </View>

          {/* PalLoanStatus Section */}
          <Text style={styles.salesPressableText}>PalLoanStatus</Text>
          <View style={styles.viewForClientsPressables}>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={VwP2PMyLoanees}>
                <Text style={styles.clientsPressableText}>My Loanees</Text>
              </Pressable>
            </LinearGradient>

            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={VwP2PMyLoaners}>
                <Text style={styles.clientsPressableText}>My Loaners</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyLoanAccount;
