import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import {
  getCvrdGroupLoans,
  getSMAccount,
  getGroup,
  getChamaMembers,
  getCompany,
} from '../../../../../../src/graphql/queries';
import {
  updateCvrdGroupLoans,
  updateSMAccount,
  updateGroup,
  updateChamaMembers,
  createLoanRepayments,
  updateCompany,
} from '../../../../../../src/graphql/mutations';

const { width } = Dimensions.get('window');

const RepayCovChmLnsss = ({ route }) => {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const repayLoan = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      // 1️⃣ Fetch Covered Loan
      const loanRes: any = await API.graphql(
        graphqlOperation(getCvrdGroupLoans, { loanID: route.params.loanID })
      );
      const loan = loanRes.data.getCvrdGroupLoans;

      const {
        memberId,
        grpContact,
        loaneePhn,
        lonBala,
        interest,
        amountExpectedBack,
        amountRepaid,
        clearanceAmt,
        DefaultPenaltyChm2,
        crtnDate,
        dfltUpdate,
      } = loan;

      // ===== Preserve Original Loan Calculations =====
      const netLnBalz = amountExpectedBack - amountRepaid;
      const netLnBal =
        parseFloat(loan.amountExpectedBackWthClrnc) -
        parseFloat(clearanceAmt) -
        parseFloat(DefaultPenaltyChm2);

        const now = Date.now(); // current timestamp in ms
const daysElapsed = (now - crtnDate) / (1000 * 60 * 60 * 24); // ms → days
      const netLnBal2 = netLnBalz * Math.pow(1 + parseFloat(interest) / 36500, daysElapsed);
      const LonBal1 = (netLnBal2 + parseFloat(clearanceAmt) + parseFloat(DefaultPenaltyChm2)).toFixed(0);
      const ClranceAmt = parseFloat(clearanceAmt) + parseFloat(DefaultPenaltyChm2);
      const repayAmount = parseFloat(amount);
      const LonBalsss = parseFloat(LonBal1) - repayAmount;

      // 2️⃣ Fetch Sender Account
      const senderRes: any = await API.graphql(
        graphqlOperation(getSMAccount, { awsemail: userInfo.attributes.email })
      );
      const sender = senderRes.data.getSMAccount;

      if (sender.pw !== password) {
        Alert.alert('Wrong password');
        setIsLoading(false);
        return;
      }
      if (sender.acStatus === 'AccountInactive') {
        Alert.alert('Your account is inactive');
        setIsLoading(false);
        return;
      }

      if (repayAmount < ClranceAmt) {
        Alert.alert(`At least pay clearance fee and default penalty: ${ClranceAmt}`);
        setIsLoading(false);
        return;
      }

      // 3️⃣ Fetch Receiver (Group) Account
      const groupRes: any = await API.graphql(graphqlOperation(getGroup, { grpContact }));
      const group = groupRes.data.getGroup;

      if (group.status === 'AccountInactive') {
        Alert.alert('Receiver account is inactive');
        setIsLoading(false);
        return;
      }

      // 4️⃣ Fetch Chama Member
      const memberRes: any = await API.graphql(graphqlOperation(getChamaMembers, { ChamaNMember: memberId }));
      const member = memberRes.data.getChamaMembers;

      // 5️⃣ Fetch Company
      const companyRes: any = await API.graphql(
        graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
      );
      const company = companyRes.data.getCompany;
      const transactionFee = parseFloat(company.chmLnRpymntFee) * repayAmount;

      // ===== Updates =====
      await API.graphql(
        graphqlOperation(updateSMAccount, {
          input: {
            awsemail: userInfo.attributes.email,
            balance: (parseFloat(sender.balance) - repayAmount).toFixed(0),
            TtlClrdLonsAmtLneeChmCov: (parseFloat(sender.TtlClrdLonsAmtLneeChmCov) + repayAmount).toFixed(0),
            TtlClrdLonsTmsLneeChmCov: parseFloat(sender.TtlClrdLonsTmsLneeChmCov) + 1,
          },
        })
      );

      await API.graphql(
        graphqlOperation(updateChamaMembers, {
          input: {
            ChamaNMember: memberId,
            AmtRepaid: (parseFloat(member.AmtRepaid) + repayAmount).toFixed(0),
            LnBal: LonBalsss.toFixed(0),
          },
        })
      );

      await API.graphql(
        graphqlOperation(updateCvrdGroupLoans, {
          input: {
            loanID: route.params.loanID,
            amountRepaid: (parseFloat(amountRepaid) + repayAmount).toFixed(0),
            lonBala: LonBalsss.toFixed(0),
            amountExpectedBackWthClrnc: LonBalsss.toFixed(0),
            DefaultPenaltyChm2: 0,
            clearanceAmt: 0,
            status: 'LoanCleared',
          },
        })
      );

      await API.graphql(
        graphqlOperation(updateGroup, {
          input: {
            grpContact,
            grpBal: (parseFloat(group.grpBal) + repayAmount).toFixed(0),
            TtlClrdLonsAmtLnrChmCov: (parseFloat(group.TtlClrdLonsAmtLnrChmCov) + repayAmount).toFixed(0),
            TtlClrdLonsTmsLnrChmCov: parseFloat(group.TtlClrdLonsTmsLnrChmCov) + 1,
          },
        })
      );

      await API.graphql(
        graphqlOperation(updateCompany, {
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            companyEarningBal: parseFloat(company.companyEarningBal) + transactionFee + ClranceAmt,
            companyEarning: parseFloat(company.companyEarning) + transactionFee + ClranceAmt,
            ttlChmLnsInClrdAmtCov: parseFloat(company.ttlChmLnsInClrdAmtCov) + repayAmount,
            ttlChmLnsInClrdTymsCov: parseFloat(company.ttlChmLnsInClrdTymsCov) + 1,
            totalLnsRecovered: parseFloat(company.totalLnsRecovered) + repayAmount,
          },
        })
      );

      await API.graphql(
        graphqlOperation(createLoanRepayments, {
          input: {
            recPhn: grpContact,
            senderPhn: userInfo.attributes.email,
            RecName: group.grpName,
            loanId3: route.params.loanID,
            SenderName: sender.name,
            amount: repayAmount.toFixed(0),
            description: desc,
            status: 'ChmLonRepayment',
            owner: userInfo.attributes.sub,
          },
        })
      );

      Alert.alert(
        `Repayment successful!\nTransaction Fee: ${transactionFee.toFixed(2)}\nClearance: ${ClranceAmt.toFixed(2)}`
      );
    } catch (e) {
      console.log(e);
      Alert.alert('Repayment failed. Retry or contact support.');
    } finally {
      setIsLoading(false);
      setAmount('');
      setDesc('');
      setPassword('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f2f6fc' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

        <View style={styles.header}>
          <Text style={styles.headerText}>Repay Chama Loan</Text>
          <Text style={styles.subHeaderText}>Enter amount, description & password</Text>
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Amount</Text>
          <TextInput
            keyboardType="decimal-pad"
            placeholder="Enter amount"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            multiline
            placeholder="Enter description"
            value={desc}
            onChangeText={setDesc}
            style={[styles.input, { height: 80 }]}
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Admin Password</Text>
          <TextInput
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={repayLoan} disabled={isLoading} style={{ marginTop: 20 }}>
          <LinearGradient
            colors={['#e29d58', 'skyblue']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Send Repayment</Text>
            {isLoading && <ActivityIndicator size="small" color="#fff" style={{ marginLeft: 10 }} />}
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RepayCovChmLnsss;

// ==================== Styles ====================
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f2f6fc',
  },
  header: { marginBottom: 30 },
  headerText: { fontSize: 26, fontWeight: '700', color: '#0a2540', marginBottom: 5 },
  subHeaderText: { fontSize: 14, color: '#555' },
  inputCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    position: 'relative',
  },
  inputLabel: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
  },
  input: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: '#0a2540',
  },
  eyeIcon: { position: 'absolute', right: 15, top: 20 },
  buttonGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 15,
    width: width - 40,
    alignSelf: 'center',
    shadowColor: '#e29d58',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
});
