import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export interface ChamaMmbrshpInfo {
  ChamaMmbrshpDtls: {
    MembaId: string;
    ChamaNMember: string;
    memberContact: string;
    memberName: string;
    memberNatId: string;
    GrossLnsGvn: number;
    LonAmtGven: number;
    AmtRepaid: number;
    LnBal: number;
    NonLoanAcBal: number;
    ttlNonLonAcBal: number;
    AcStatus: string;
    loanStatus: string;
    blStatus: string;
    createdAt: string;
    subscriptionFrequency: number;
    subscriptionAmt: number;
    lateSubscriptionPenalty: number;
    ttlLateSubs: number;
    timeCrtd: number;
    subscribedAmt: number;
    totalSubAmt: number;
  };
}

const ChmMbrShpInfo = (props: ChamaMmbrshpInfo) => {
  const {
    ChamaMmbrshpDtls: {
      MembaId,
      ChamaNMember,
      memberNatId,
      memberContact,
      memberName,
      loanStatus,
      blStatus,
      GrossLnsGvn,
      LonAmtGven,
      AmtRepaid,
      LnBal,
      NonLoanAcBal,
      ttlNonLonAcBal,
      createdAt,
      AcStatus,
      subscribedAmt,
      totalSubAmt,
      subscriptionFrequency,
      subscriptionAmt,
      lateSubscriptionPenalty,
      ttlLateSubs,
      timeCrtd,
    },
  } = props;

  const today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  let years = today.getFullYear();
  let months = today.getMonth() + 1;
  let days = today.getDate();

  const curYrs = years * 365;
  const curMnths = months * 30.4375;
  const daysUpToDate = curYrs + curMnths + parseFloat(days.toString());
  const tmDif = daysUpToDate - timeCrtd;
  const subFreq = tmDif / subscriptionFrequency;
  const Amt2HvBnSub = subFreq * subscriptionAmt;
  const ttlArrears = (ttlLateSubs + Amt2HvBnSub).toFixed(0);

  const navigation = useNavigation();
  const Penalise = () => navigation.navigate('PenaliseMember', { ChamaNMember });
  const ViewMmberDtls = () => navigation.navigate('ChamaDtls', { ChamaNMember });
  const ViewSubs = () => navigation.navigate('VwMbrSubsDirectly', { ChamaNMember });
  const SendNonLoans = () => navigation.navigate('SndMbrsMnys', { ChamaNMember });

  return (
    <View style={styles.pageContainer}>
      <Pressable onPress={ViewMmberDtls} style={styles.card}>
        <Text style={styles.prodName}>{memberName}</Text>
        <Text style={styles.prodInfo}>
          <Text style={styles.label}>Member Chama Number:</Text> {MembaId}
        </Text>
        <Text style={styles.prodInfo}>
          <Text style={styles.label}>Subscription up to date:</Text> KES {subscribedAmt.toFixed(2)}
        </Text>
        <Text style={styles.prodInfo}>
          <Text style={styles.label}>Subscription with Penalties:</Text> KES {parseFloat(ttlArrears).toLocaleString()}
        </Text>
      </Pressable>

    <View style={styles.buttonRow}>
  <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.gradientButton}>
    <Pressable onPress={ViewSubs} style={styles.pressableContent}>
      <Text style={styles.buttonText}>View Subscriptions</Text>
    </Pressable>
  </LinearGradient>

  <LinearGradient colors={['#00BFFF', '#1E90FF']} style={styles.gradientButton}>
    <Pressable onPress={Penalise} style={styles.pressableContent}>
      <Text style={styles.buttonText}>Penalise</Text>
    </Pressable>
  </LinearGradient>

  <LinearGradient colors={['#FFA500', '#FF8C00']} style={styles.gradientButton}>
    <Pressable onPress={SendNonLoans} style={styles.pressableContent}>
      <Text style={styles.buttonText}>SendNonLoans/Dividends</Text>
    </Pressable>
  </LinearGradient>
</View>

    </View>
  );
};

export default ChmMbrShpInfo;
