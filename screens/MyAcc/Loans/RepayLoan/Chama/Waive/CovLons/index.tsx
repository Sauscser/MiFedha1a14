
 import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {
  getCvrdGroupLoans,
  getSMAccount,
  getCompany,
  getGroup,
  getChamaMembers,
} from '../../../../../../../src/graphql/queries';
import {
  updateCompany,
  updateSMAccount,
  updateCvrdGroupLoans,
  updateGroup,
  updateChamaMembers,
  createLoanRepayments,
  
} from '../../../../../../../src/graphql/mutations';

const RepayCovChmLnsss = () => {
  const [SenderNatId, setSenderNatId] = useState('');
  const [SnderPW, setSnderPW] = useState('');
  const [LnId, setLnId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
   const [amounts, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const route = useRoute();

  /** Fetch and process loan repayment */
const ftchCvdSMLn = async () => {
  if (isLoading) return;
  setIsLoading(true);

  try {
    const userInfo = await Auth.currentAuthenticatedUser();

    // 1️⃣ Fetch loan details
    const loanResp: any = await API.graphql(
      graphqlOperation(getCvrdGroupLoans, { loanID: route.params.loanID })
    );
    const loan = loanResp.data.getCvrdGroupLoans;

    const {
      amountExpectedBackWthClrnc,
      memberId,
      DefaultPenaltyChm2,
      grpContact,
      loaneePhn,
      amountExpectedBack,
      amountRepaid,
      clearanceAmt,
      interest,
      crtnDate,
    } = loan;

    const ClranceAmt = parseFloat(clearanceAmt) + parseFloat(DefaultPenaltyChm2);

    // Calculate current loan balance
    const netLnBal = amountExpectedBack - amountRepaid;
    const now = new Date();
    const daysElapsed = (now.getTime() - new Date(crtnDate).getTime()) / (1000 * 60 * 60 * 24);
    const netLnBalWithInterest = netLnBal * Math.pow(1 + parseFloat(interest) / 36500, daysElapsed);
    const LonBal1 = (netLnBalWithInterest + ClranceAmt).toFixed(0);
    const LonBalAfter = parseFloat(LonBal1) - parseFloat(amounts);

    // 2️⃣ Fetch sender account
    const senderResp: any = await API.graphql(
      graphqlOperation(getSMAccount, { awsemail: loaneePhn })
    );
    const sender = senderResp.data.getSMAccount;
    const {
      acStatus: senderStatus,
      MaxTymsBL,
      balance: senderBal,
      name: senderName,
      nonLonLimit,
    } = sender;

    // 3️⃣ Fetch company details
    const companyResp: any = await API.graphql(
      graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
    );
    const company = companyResp.data.getCompany;
    const { chmLnRpymntFee, maxBLs } = company;

    const totalTransacted = parseFloat(amounts) + parseFloat(chmLnRpymntFee) * parseFloat(amounts);

    // 4️⃣ Fetch receiver group details
    const groupResp: any = await API.graphql(
      graphqlOperation(getGroup, { grpContact })
    );
    const group = groupResp.data.getGroup;
    const { status: groupStatus, grpBal, tymsChmHvBL, GrpLoanRpymntSync, grpName } = group;

    // 5️⃣ Fetch member details
    const memberResp: any = await API.graphql(
      graphqlOperation(getChamaMembers, { ChamaNMember: memberId })
    );
    const member = memberResp.data.getChamaMembers;
    const { AmtRepaid } = member;

    // 6️⃣ Validation checks
    if (senderStatus === "AccountInactive") {
      Alert.alert("Sender account is inactive"); return;
    }
    if (groupStatus === "AccountInactive") {
      Alert.alert("Receiver account is inactive"); return;
    }
    if (parseFloat(senderBal) < totalTransacted) {
      Alert.alert("Requested amount is more than your account balance"); return;
    }
    if (parseFloat(nonLonLimit) < parseFloat(amounts)) {
      Alert.alert(`Call company to adjust your send amount limit`); return;
    }
    if (ClranceAmt > parseFloat(amounts)) {
      Alert.alert(`At least pay clearance fee + default penalty: ${ClranceAmt}`); return;
    }
    if (parseFloat(amounts) > parseFloat(LonBal1)) {
      Alert.alert(`Your loan balance is lesser: Ksh. ${LonBal1}`); return;
    }

    // 7️⃣ Repayment logic
    const isFullRepayment = parseFloat(amounts) === parseFloat(LonBal1);

    if (isFullRepayment && parseFloat(MaxTymsBL) === parseFloat(maxBLs)) {
      // Full repayment + MaxTymsBL = maxBL
      await updateSenderAccount(0);
    } else if (isFullRepayment && parseFloat(MaxTymsBL) > parseFloat(maxBLs)) {
      // Full repayment + MaxTymsBL > maxBL
      await updateSenderAccount(parseFloat(MaxTymsBL) - 1);
    } else {
      // Partial repayment
      await updateMemberAndLoan();
    }

    // 8️⃣ Chained updates (group, company, repayment record)
    await updateGroupAfterRepayment();
    await updateCompanyAfterRepayment();
    await createRepaymentRecord("ChmLonRepayment");

    Alert.alert(
      isFullRepayment
        ? `Loan fully repaid! Clearance Fee: ${ClranceAmt.toFixed(2)}. Transaction Fee: ${(parseFloat(chmLnRpymntFee) * parseFloat(amounts)).toFixed(2)}`
        : `Partially repaid. Clearance Fee: ${ClranceAmt.toFixed(2)}. Transaction Fee: ${(parseFloat(chmLnRpymntFee) * parseFloat(amounts)).toFixed(2)}`
    );

    // Reset form
    setAmount("");
    setDesc("");
    setSenderNatId("");
    setSnderPW("");
    setLnId("");

  } catch (error) {
    console.log(error);
    Alert.alert("Retry or update app or call customer care");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Waive Covered Chama Loan</Text>

        {/* Amount Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Amount"
            keyboardType="decimal-pad"
            value={amounts}
            onChangeText={setAmount}
            style={styles.input}
          />
          <Text style={styles.inputLabel}>Amount Waived</Text>
        </View>

        {/* Description Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Description"
            multiline
            value={desc}
            onChangeText={setDesc}
            style={[styles.input, { height: 80 }]}
          />
          <Text style={styles.inputLabel}>Description</Text>
        </View>

        {/* Waive Button */}
        <TouchableOpacity disabled={isLoading} style={styles.buttonWrapper}
           onPress={ftchCvdSMLn}>
          <LinearGradient
            colors={['#f97316', '#3b82f6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Waive Loan</Text>
            {isLoading && <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 10 }} />}
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RepayCovChmLnsss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 25,
    position: 'relative',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    color: '#1e293b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  inputLabel: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  buttonWrapper: {
    marginTop: 10,
  },
  buttonGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
