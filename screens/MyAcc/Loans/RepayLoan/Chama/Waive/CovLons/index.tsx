
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

      /** Fetch loan details */
      const RecAccountDtl: any = await API.graphql(
        graphqlOperation(getCvrdGroupLoans, { loanID: route.params.loanID })
      );

      const loanData = RecAccountDtl.data.getCvrdGroupLoans;
      const {
        amountExpectedBackWthClrnc,
        memberId,
        DefaultPenaltyChm2,
        grpContact,
        loaneePhn,
        lonBala,
        interest,
        amountExpectedBack,
        amountRepaid,
        amountGiven,
        crtnDate,
        dfltUpdate,
        repaymentPeriod,
        clearanceAmt,
      } = loanData;

      const ClranceAmt = parseFloat(clearanceAmt) + parseFloat(DefaultPenaltyChm2);
      const netLnBalz = amountExpectedBack - amountRepaid;
      const curDate = new Date();
      const years = curDate.getFullYear();
      const months2 = curDate.getMonth();
      const days = curDate.getDate();
      const curYrs = years * 365;
      const curMnths = months2 * 30.4375;
      const daysUpToDate = curYrs + curMnths + days;
      const now = Date.now(); // current timestamp in ms
      const tmDif2 = (now - crtnDate) / (1000 * 60 * 60 * 24); // days elapsed

      const netLnBal2 = netLnBalz * Math.pow(1 + parseFloat(interest) / 36500, tmDif2);
      const LonBal1 = (netLnBal2 + parseFloat(clearanceAmt) + parseFloat(DefaultPenaltyChm2)).toFixed(0);
      const LonBalsss = parseFloat(LonBal1) - parseFloat(amounts);

      /** Fetch sender account */
      const accountDtl: any = await API.graphql(
        graphqlOperation(getSMAccount, { awsemail: loaneePhn })
      );

      const senderAcc = accountDtl.data.getSMAccount;
      const { acStatus: usrAcActvStts, MaxTymsBL: MaxTymsBLss, name: names } = senderAcc;

      /** Fetch company details */
      const CompDtls: any = await API.graphql(
        graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
      );
      const company = CompDtls.data.getCompany;
      const { chmLnRpymntFee: UsrTransferFee, maxBLs } = company;

      /** Fetch receiver group details */
      const RecAccountDtlGrp: any = await API.graphql(
        graphqlOperation(getGroup, { grpContact })
      );

      const group = RecAccountDtlGrp.data.getGroup;
      const { grpName: namess, status: usrAcActvSttss, tymsChmHvBL: tymsChmHvBLs } = group;

      /** Fetch member details */
      const RecAccountDtlMbr: any = await API.graphql(
        graphqlOperation(getChamaMembers, { ChamaNMember: memberId })
      );
      const member = RecAccountDtlMbr.data.getChamaMembers;
      const { AmtRepaid } = member;

      /** Helper functions to sequentially update accounts and loans */
      const updateSenderAccount = async (MaxBL: number) => {
        await API.graphql(
          graphqlOperation(updateSMAccount, {
            input: { awsemail: userInfo.attributes.email, MaxTymsBL: MaxBL },
          })
        );
      };

      const updateMember = async () => {
        await API.graphql(
          graphqlOperation(updateChamaMembers, {
            input: {
              ChamaNMember: memberId,
              AmtRepaid: (parseFloat(AmtRepaid) + parseFloat(amounts)).toFixed(0),
              LnBal: LonBalsss.toFixed(0),
            },
          })
        );
      };

      const updateLoan = async () => {
        await API.graphql(
          graphqlOperation(updateCvrdGroupLoans, {
            input: {
              loanID: route.params.loanID,
              amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaid)).toFixed(0),
              lonBala: LonBalsss.toFixed(0),
              amountExpectedBackWthClrnc: LonBalsss.toFixed(0),
              DefaultPenaltyChm2: 0,
              clearanceAmt: 0,
              status: "LoanCleared",
            },
          })
        );
      };

      const updateGroupOver = async () => {
        await API.graphql(
          graphqlOperation(updateGroup, {
            input: { grpContact, tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1 },
          })
        );
      };

      const updateCompanyOver = async () => {
        await API.graphql(
          graphqlOperation(updateCompany, { input: { AdminId: "BaruchHabaB'ShemAdonai2" } })
        );
      };

      const createRepaymentRecord = async (status: string) => {
        await API.graphql(
          graphqlOperation(createLoanRepayments, {
            input: {
              senderPhn: loaneePhn,
              recPhn: grpContact,
              RecName: namess,
              SenderName: names,
              loanId1: route.params.loanID,
              loanId2: route.params.loanID,
              loanId3: route.params.loanID,
              amount: parseFloat(amounts).toFixed(0),
              description: desc,
              status,
              owner: userInfo.attributes.sub,
            },
          })
        );
      };

      /** Validation checks */
      if (usrAcActvStts === "AccountInactive") return Alert.alert('Sender account is inactive');
      if (usrAcActvSttss === "AccountInactive") return Alert.alert('Receiver account is inactive');
      if (ClranceAmt > parseFloat(amounts)) return Alert.alert(`Too little amount waived: at least ${ClranceAmt}`);
      if (parseFloat(amounts) > parseFloat(LonBal1)) return Alert.alert(`The Loan Balance is lesser: Ksh. ${LonBal1}`);

      /** Process repayment */
      if (parseFloat(amounts) === parseFloat(LonBal1)) {
        if (parseFloat(MaxTymsBLss) === parseFloat(maxBLs)) await updateSenderAccount(0);
        else await updateSenderAccount(parseFloat(MaxTymsBLss) - 1);
      } else {
        await updateMember();
        await updateLoan();
      }

      await updateGroupOver();
      await updateCompanyOver();
      await createRepaymentRecord("Waived");

      Alert.alert("Waived successfully!");
      setAmount('');
      setDesc('');
      setSenderNatId('');
      setSnderPW('');
    } catch (e) {
      console.log(e);
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
