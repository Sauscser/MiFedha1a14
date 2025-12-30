import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, 
  KeyboardAvoidingView, Platform,
  ActivityIndicator, Dimensions, StyleSheet} from 'react-native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { createChamaMembers, createGroup, updateChamaApply2, updateCompany } from '../../../src/graphql/mutations';
import { getMiFedhaBankAdmin, getSMAccount, getCompany } from '../../../src/graphql/queries';

export type UserReg = {
  usr: string;
};

const CreateChama = (props: UserReg) => {
  const { usr } = props;
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { id, bankAdminEmail, ChamaAcNu } = route.params;

  const [ChmPhn, setChmPhn] = useState('');
  const [awsEmail, setAWSEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');
  const [Sign3Phn, setSign3Phn] = useState('');
  const [oprtnAreas, setoprtnAreas] = useState('');
  const [ventures, setventures] = useState('');
  const [SubFreq, setSubFreq] = useState('');
  const [SubAmt, setSubAmt] = useState('');
  const [lateSub, setlateSub] = useState('');
  const [loanApprovalThreshHold, setloanApprovalThreshHold] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  

  const ChmPhnNphoneContact = MmbaID + ChamaAcNu;

  const handleCreateChama = async () => {
    setIsLoading(true);
    try {

      if (!MmbaID || !ChmNm || !Sign2Phn 
        || !Sign3Phn || !loanApprovalThreshHold 
        || !pword || !SubFreq || !SubAmt || !lateSub
      || !ventures || !ChmDesc) {
        Alert.alert('Missing required parameters. Cannot proceed.');
        setIsLoading(false);
        return;
      }

    const safeAWSEmail = awsEmail || 'None';
    const safeChmRegNo = ChmRegNo || 'None';
    const safeoprtnAreas = oprtnAreas || 'None';
    const safeventures = ventures || 'None';


      const userInfo = await Auth.currentAuthenticatedUser();

      // Get Bank Admin Details
      const bankAdminRes: any = await API.graphql(
        graphqlOperation(getMiFedhaBankAdmin, { nationalid: bankAdminEmail })
      );

      const BankBranch = bankAdminRes.data.getMiFedhaBankAdmin.bank;
      const BankAdminEml = bankAdminRes.data.getMiFedhaBankAdmin.email;

      // Check if user exists
      const userRes: any = await API.graphql(
        graphqlOperation(getSMAccount, { awsemail: userInfo.attributes.email })
      );

      const nationalidsss = userRes.data.getSMAccount.nationalid;
      const namess = userRes.data.getSMAccount.name;
      const owner = userRes.data.getSMAccount.owner;

      if (userInfo.attributes.sub !== owner) {
        Alert.alert('Please first create main account');
        setIsLoading(false);
        return;
      }

      // Fetch Signatory 2 Details
      const sign2Res: any = await API.graphql(
        graphqlOperation(getSMAccount, { awsemail: Sign2Phn })
      );
      const ownrsss = sign2Res.data.getSMAccount.owner;

      // Get Company Details
      const compRes: any = await API.graphql(
        graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
      );
      const ttlActiveChms = compRes.data.getCompany.ttlActiveChm;
      const phoneContacts = compRes.data.getCompany.phoneContact;
      const ttlActiveChmUserss = compRes.data.getCompany.ttlActiveChmUsers;

      const today = new Date();
      const now =
        today.getFullYear() +
        '-' +
        String(today.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(today.getDate()).padStart(2, '0') +
        'T' +
        String(today.getHours()).padStart(2, '0') +
        ':' +
        String(today.getMinutes()).padStart(2, '0') +
        ':' +
        String(today.getSeconds()).padStart(2, '0');

      const curYrs = today.getFullYear() * 365;
      const curMnths = (today.getMonth() + 1) * 30.4375;
      const daysUpToDate = curYrs + curMnths + today.getDate();

      // Validate password and subscription
      if (pword.length < 8) {
        Alert.alert('Password is too short; at least eight characters');
        setIsLoading(false);
        return;
      }

      if (parseFloat(lateSub) > parseFloat(SubAmt)) {
        Alert.alert('Too high late subscription penalty');
        setIsLoading(false);
        return;
      }

      // Create Group
      await API.graphql(
        graphqlOperation(createGroup, {
          input: {
            grpContact: ChamaAcNu,
            regNo: safeChmRegNo,
            signitoryContact: userInfo.attributes.phone_number,
            SignatoryEmail: userInfo.attributes.email,
            SignitoryNatid: nationalidsss,
            signitoryName: namess,
            grpName: ChmNm,
            signitoryPW: pword,
            signitory2Sub: Sign2Phn,
            signatory2Email: Sign2Phn,
            Signatory3Email: Sign3Phn,
            signitory3Sub2: Sign3Phn,
            WithdrawCnfrmtn2: 'NO',
            WithdrawCnfrmtnAmt2: 0,
            WithdrawCnfrmtn: 'NO',
            WithdrawCnfrmtnAmt: 0,
            BankAdminEmail: BankAdminEml,
            BankAdminAcNu: bankAdminEmail,
            GrpLoanOutSync: 0,
            GrpLoanRpymntSync: 0,
            MemberSubscrptnSync: 0,
            MemberDividendSync: 0,
            DepositSync: 0,
            WithdrawalSync: 0,
            BankName: 'Equity',
            BranchNu: BankBranch,
            grpEmail: safeAWSEmail,
            oprtnArea: safeoprtnAreas,
            venture: safeventures,
            grpBal: 0,
            ttlGrpMembers: 1,
            description: ChmDesc,
            ChmBenefits: 0,
            subscriptionFrequency: SubFreq,
            subscriptionAmt: SubAmt,
            lateSubscriptionPenalty: lateSub,
            objectionStatus: 'NotObjected',
            objOfficer: 'None',
            objReason: 'None',
            AdminNo: 0,
            Admin1: userInfo.attributes.email,
            Admin2: Sign2Phn,
            Admin3: Sign3Phn,
            Admin4: 'None',
            Admin5: 'None',
            Admin6: 'None',
            Admin7: 'None',
            Admin8: 'None',
            Admin9: 'None',
            Admin10: 'None',
            Admin11: 'None',
            Admin12: 'None',
            Admin13: 'None',
            Admin14: 'None',
            Admin15: 'None',
            Admin16: 'None',
            Admin17: 'None',
            Admin18: 'None',
            Admin19: 'None',
            Admin20: 'None',
            ttlNonLonsRecChm: 0,
            ttlNonLonsSentChm: 0,
            ttlDpst: 0,
            ttlWthdrwn: 0,
            tymsChmHvBL: 0,
            TtlActvLonsTmsLnrChmCov: 0,
            TtlActvLonsAmtLnrChmCov: 0,
            TtlBLLonsTmsLnrChmCov: 0,
            TtlBLLonsAmtLnrChmCov: 0,
            TtlClrdLonsTmsLnrChmCov: 0,
            TtlClrdLonsAmtLnrChmCov: 0,
            TtlActvLonsTmsLnrChmNonCov: 0,
            TtlActvLonsAmtLnrChmNonCov: 0,
            TtlBLLonsTmsLnrChmNonCov: 0,
            TtlBLLonsAmtLnrChmNonCov: 0,
            TtlClrdLonsTmsLnrChmNonCov: 0,
            TtlClrdLonsAmtLnrChmNonCov: 0,
            status: 'AccountActive',
            owner: userInfo.attributes.sub,
            chamaBenSync: 0,
            loanApprovalThreshHold: loanApprovalThreshHold,
          },
        })
      );

      // Create Chama Member
      await API.graphql(
        graphqlOperation(createChamaMembers, {
          input: {
            MembaId: MmbaID,
            groupContact: ChamaAcNu,
            regNo: safeChmRegNo,
            ChamaNMember: ChmPhnNphoneContact,
            memberContact: userInfo.attributes.email,
            memberNatId: nationalidsss,
            memberChmBenefit: 0,
            timeCrtd: daysUpToDate,
            subscribedAmt: 0,
            totalSubAmt: 0,
            GrossLnsGvn: 0,
            LonAmtGven: 0,
            AmtRepaid: 0,
            LnBal: 0,
            NonLoanAcBal: 0,
            ttlNonLonAcBal: 0,
            groupName: ChmNm,
            memberName: namess,
            AcStatus: 'AccountActive',
            loanStatus: 'NoLoan',
            blStatus: 'AccountNotBL',
            owner: userInfo.attributes.sub,
            ttlLateSubs: 0,
            subscriptionFrequency: SubFreq,
            subscriptionAmt: SubAmt,
            lateSubscriptionPenalty: lateSub,
            transportApproved: 'ChamaTransportApprovedNo',
          },
        })
      );

      // Update Chama Application
      await API.graphql(
        graphqlOperation(updateChamaApply2, {
          input: {
            id: id,
            status: 'AccountInactive',
          },
        })
      );

      // Update Company Active Counts
      await API.graphql(
        graphqlOperation(updateCompany, {
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            ttlActiveChm: parseFloat(ttlActiveChms) + 1,
            ttlActiveChmUsers: parseFloat(ttlActiveChmUserss) + 1,
          },
        })
      );

      Alert.alert(`Congrats ${userInfo.username}, You have created ${ChmNm} Chama`);
      // Reset form
      setChmPhn('');
      setPW('');
      setAWSEmail('');
      setChmDesc('');
      setChmNm('');
      setChmRegNo('');
      setMmbaID('');
      setSign2Phn('');
      setSign3Phn('');
      setventures('');
      setoprtnAreas('');
      setSubAmt('');
      setSubFreq('');
      setlateSub('');
      setloanApprovalThreshHold('');
    } catch (error) {
      console.log(error);
      Alert.alert('An error occurred. Retry or contact customer care.');
    } finally {
      setIsLoading(false);
    }
  };

return (
  <LinearGradient colors={['#e58d29', 'skyblue']} style={{ flex: 1, padding: 16 }}>
   <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
  >
    <ScrollView contentContainerStyle={styles.scroll}>   <Text style={[styles.title, { textAlign: 'center', marginBottom: 16 }]}>
        Fill Chama Details Below
      </Text>

      {[
        { placeholder: 'Signitory Chama Number', value: MmbaID, setter: setMmbaID },
        { placeholder: 'Chama Registration Number (Optional)', value: ChmRegNo, setter: setChmRegNo },
        { placeholder: 'Enter Chama Name', value: ChmNm, setter: setChmNm },
        { placeholder: 'Enter Chama Email (Optional)', value: awsEmail, setter: setAWSEmail },
        { placeholder: 'Enter Signatory 2 Email', value: Sign2Phn, setter: setSign2Phn },
        { placeholder: 'Enter Signatory 3 Email', value: Sign3Phn, setter: setSign3Phn },
        { placeholder: 'Chama Region (Optional)', value: oprtnAreas, setter: setoprtnAreas },
        { placeholder: 'Enter Chama Venture', value: ventures, setter: setventures },
        { placeholder: 'Enter Chama Description', value: ChmDesc, setter: setChmDesc, multiline: true },
        { placeholder: 'Enter Loan Approval Threshold %', value: loanApprovalThreshHold, setter: setloanApprovalThreshHold, keyboardType: 'numeric' },
        { placeholder: 'Signatory Subscription Amount', value: SubAmt, setter: setSubAmt, keyboardType: 'numeric' },
        { placeholder: 'Signatory Subscription Frequency (Days)', value: SubFreq, setter: setSubFreq, keyboardType: 'numeric' },
        { placeholder: 'Signatory Late Subscription Penalty', value: lateSub, setter: setlateSub, keyboardType: 'numeric' },
        { placeholder: 'Enter Chama PassWord', value: pword, setter: setPW, secureTextEntry: true },
      ].map((item, index) => {
        // Handle password field separately for toggle
        if (item.secureTextEntry) {
          return (
            <View key={index} style={[styles.sendLoanView, { position: 'relative' }]}>
              <TextInput
                placeholder={item.placeholder}
                value={item.value}
                onChangeText={item.setter}
                style={styles.sendLoanInput}
                secureTextEntry={!showPassword}
                editable
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 12, top: 12 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={{ color: '#e58d29', fontWeight: 'bold' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }

        return (
          <View key={index} style={styles.sendLoanView}>
            <TextInput
              placeholder={item.placeholder}
              value={item.value}
              onChangeText={item.setter}
              style={item.multiline ? styles.sendAmtInputDesc : styles.sendLoanInput}
              multiline={item.multiline || false}
              editable
              keyboardType={item.keyboardType || 'default'}
            />
          </View>
        );
      })}

      <TouchableOpacity onPress={handleCreateChama} style={styles.sendLoanButton}>
        <Text style={styles.sendLoanButtonText}>Click to Create Chama</Text>
        {isLoading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 8 }} />}
      </TouchableOpacity>
    </ScrollView>
      </KeyboardAvoidingView>

  </LinearGradient>
);

};

export default CreateChama;


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  sendLoanView: {
    marginVertical: 8,
  },
  scroll: {
  padding: 20,
  paddingBottom: 120, // just enough for button + keyboard
},

  sendLoanInput: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  sendAmtInputDesc: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  sendLoanButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sendLoanButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e58d29',
  },
  image: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  loanTitleView: {
    marginBottom: 16,
  },
  passwordToggle: {
    position: 'absolute',
    right: 12,
    top: 12,
    color: '#e58d29',
    fontWeight: 'bold',
  },
});

