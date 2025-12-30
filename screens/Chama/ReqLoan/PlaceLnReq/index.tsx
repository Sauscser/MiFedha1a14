import React, {useEffect, useState} from 'react';

import {createMessages, createReqLoanChama, sendNotification, updateCompany} from '../../../../src/graphql/mutations';
import { getAdvocate, getBizna, getChamaAdminLnApply, getChamaMembers, 
  getCompany, getGroup, getSMAccount, listChamaMembers  } from '../../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';
import Communications from 'react-native-communications';

import {
  View,
  Text,
  
  
  TextInput,
  ScrollView,
  StyleSheet,
  
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { createReqLoan } from '../../../../src/graphql/mutations';
import { LinearGradient } from 'expo-linear-gradient';



const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  
  const [Sign2Phn, setSign2Phn] = useState("");
  
  const [itemPrys, setitemPrys] = useState('');
  const [itemTwn, setitemTwn] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [rpymntPrd, setrpymntPrd] = useState('');
  const [pword, setPW] = useState('');
  const [InstAmt, setInstAmt] = useState("");
  const [InstFreq, setInstFreq] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);

  
  
 

  
  const route = useRoute();
  const grpContacts = route.params?.groupContact;
  const MembaId = route.params?.MembaId;
    const id = route.params?.id;

  const ChamaNMember = MembaId+grpContacts;



 
 const gtBizna = async () => {
  if (isLoading) return;
  setIsLoading(true);

  try {

    // Required fields check
if (
  !itemPrys.trim() ||
  !lnPrsntg.trim() ||
  !rpymntPrd.trim() ||
  !InstAmt.trim() ||
  !InstFreq.trim() ||
  !pword.trim()
) {
  Alert.alert("Please fill in all required fields.");
  return;
}

    const userInfo = await Auth.currentAuthenticatedUser();

    /** ---------------- USER ACCOUNT ---------------- */
    const smRes: any = await API.graphql(
      graphqlOperation(getSMAccount, { awsemail: userInfo.attributes.email })
    );

    const pws = smRes.data.getSMAccount.pw;
    const phonecontacts = smRes.data.getSMAccount.phonecontact;
    const names = smRes.data.getSMAccount.name;


    /** ---------------- VALIDATIONS ---------------- */
    if (pword !== pws) {
      Alert.alert("Wrong User password");
      return;
    }

    if (parseFloat(rpymntPrd) < 1) {
      Alert.alert("Enter repayment Period greater than 1 day");
      return;
    }

    if (parseFloat(lnPrsntg) > 100) {
      Alert.alert("Interest exploits you; enter lesser repayment amount");
      return;
    }

    /** ---------------- CHAMA MEMBER ---------------- */
    const memberRes: any = await API.graphql(
  graphqlOperation(getChamaMembers, { ChamaNMember: ChamaNMember })
);

const memberData = memberRes.data.getChamaMembers;


if (!memberData) {
  Alert.alert("Chama member not found");
  setIsLoading(false);
  return;
}

    /** ---------------- APPLICATION DETAILS ---------------- */
    const appRes: any = await API.graphql(
      graphqlOperation(getChamaAdminLnApply, { id })
    );
    const AppDtls = appRes.data.getChamaAdminLnApply;


    /** ---------------- GROUP DETAILS ---------------- */
    const groupRes: any = await API.graphql(
      graphqlOperation(getGroup, { grpContact: grpContacts })
    );

    const grpDtls = groupRes.data.getGroup;

    const grpName = grpDtls.grpName;
    const signitoryContact = grpDtls.signitoryContact;
    const signitory2Sub = grpDtls.signitory2Sub;
    const Signatory3Email = grpDtls.Signatory3Email;
    const SignatoryEmail = grpDtls.SignatoryEmail;

            console.log(grpDtls.grpName)


    /** ---------------- INSTALLMENT CHECK ---------------- */
    const ExpInstmnt =
      parseFloat(itemPrys) / parseFloat(rpymntPrd);

    if (ExpInstmnt > parseFloat(InstAmt)) {
      Alert.alert(
        "Enter Installment greater than " + (ExpInstmnt + 1).toFixed(0)
      );
      return;
    }

    /** ---------------- ADVOCATE (OPTIONAL) ---------------- */
    let advocateEmail = "None";
    let advocateLicense = "None";

    if (Sign2Phn && Sign2Phn.trim() !== "") {
      const advRes: any = await API.graphql(
        graphqlOperation(getAdvocate, { advregnu: Sign2Phn.trim() })
      );

      if (advRes?.data?.getAdvocate) {
        advocateEmail = advRes.data.getAdvocate.email;
        advocateLicense = Sign2Phn.trim();
      } else {
        Alert.alert("Advocate not found. Proceeding without advocate.");
      }
    }

    /** ---------------- CREATE LOAN ---------------- */
    await API.graphql(
      graphqlOperation(createReqLoanChama, {
        input: {
          loaneeEmail: userInfo.attributes.email,
          chamaPhone: grpContacts,
          loaneeName: names,

          confirm1: "NO",
          confirm2: "NO",

          loaneePhone: phonecontacts,
          amount: parseFloat(itemPrys).toFixed(2),
          repaymentAmt: parseFloat(lnPrsntg).toFixed(2),
          repaymentPeriod: rpymntPrd,
          loaneeMemberId: MembaId,

          status: "AwaitingResponse",
          statusNumber: 0,
          dfltDeadLn: 0,

          AdvEmail: advocateEmail,
          advLicNo: advocateLicense,

          lnType: "GrpLn",
          loanerName: grpName,
          loanerPhone: signitoryContact,

          description: ChmNm? ChmNm : "No description",
          defaultPenalty: ChmDesc,
          installmentAmount: InstAmt,
          paymentFrequency: InstFreq,

          signatory2: signitory2Sub,
          signatory3: Signatory3Email,

          membersApprove: 0,
          loanMinutes: AppDtls.grpMinutes,
          loanMinutesImage: AppDtls.MemberEmail,
          loanFloatID: id,

          owner: SignatoryEmail,
          createdAt: new Date().toISOString(),

        },
      })
    );

    /** ---------------- NOTIFY ADVOCATE ---------------- */
    if (advocateEmail !== "None") {
      await API.graphql(
        graphqlOperation(createMessages, {
          input: {
            senderEmail: advocateEmail,
            messageBody: `A loan request has been made by ${names} under group ${grpName}. Please review and witness or decline.`,
          },
        })
      );

      await API.graphql(
        graphqlOperation(sendNotification, {
          riderEmail: advocateEmail,
          title: "MiFedha: New Loan Request",
          body: `A loan request has been made by ${names} under group ${grpName}.`,
        })
      );
    }

    /** ---------------- NOTIFY ADMIN ---------------- */
    await API.graphql(
      graphqlOperation(createMessages, {
        input: {
          senderEmail: AppDtls.ChamaAdminEmail,
          messageBody: `A loan request has been made by ${names} under group ${grpName}. Please review.`,
        },
      })
    );

    await API.graphql(
      graphqlOperation(sendNotification, {
        riderEmail: AppDtls.ChamaAdminEmail,
        title: "MiFedha: New Loan Request",
        body: `A loan request has been made by ${names} under group ${grpName}.`,
      })
    );

    Alert.alert("Loan request submitted successfully");
    navigation.goBack();

  } catch (e) {
    console.error(e);
    Alert.alert("Error! Please check details or contact support.");
  } finally {
    setIsLoading(false);
  }
};

return (
  <LinearGradient
    colors={['skyblue', '#e58d29']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Loan Request</Text>
        <Text style={styles.headerSubtitle}>
          Please fill in all required details carefully
        </Text>
      </View>

      {/* Form Card */}
      <View style={styles.formCard}>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Advocate License Number (Optional)"
            placeholderTextColor="#333"
            value={Sign2Phn}
            onChangeText={setSign2Phn}
            style={styles.input}
          />
          <Text style={styles.helperText}>Advocate License</Text>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Loan Description (Optional)"
            placeholderTextColor="#333"
            value={ChmNm}
            onChangeText={setChmNm}
            multiline
            style={[styles.input, { height: 80 }]}
          />
          <Text style={styles.helperText}>Loan Purpose / Description</Text>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Default Penalty"
            placeholderTextColor="#333"
            keyboardType="decimal-pad"
            value={ChmDesc}
            onChangeText={setChmDesc}
            style={styles.input}
          />
          <Text style={styles.helperText}>Penalty on default</Text>
        </View>

       
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Installment Days"
              placeholderTextColor="#333"
              keyboardType="decimal-pad"
              value={InstFreq}
              onChangeText={setInstFreq}
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Installment Amount"
              placeholderTextColor="#333"
              keyboardType="decimal-pad"
              value={InstAmt}
              onChangeText={setInstAmt}
              style={styles.input}
            />
          </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Loan Amount"
            placeholderTextColor="#333"
            keyboardType="decimal-pad"
            value={itemPrys}
            onChangeText={setitemPrys}
            style={styles.input}
          />
          <Text style={styles.helperText}>Principal Amount</Text>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Annual Interest Rate (e.g. 8)"
            placeholderTextColor="#333"
            keyboardType="decimal-pad"
            value={lnPrsntg}
            onChangeText={setlnPrsntg}
            style={styles.input}
          />
          <Text style={styles.helperText}>Interest % per year</Text>
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Repayment Period (Days)"
            placeholderTextColor="#333"
            keyboardType="decimal-pad"
            value={rpymntPrd}
            onChangeText={setrpymntPrd}
            style={styles.input}
          />
          <Text style={styles.helperText}>Total repayment duration</Text>
        </View>

     <View style={{ position: 'relative' }}>
  <TextInput
    placeholder="User Password"
    placeholderTextColor="#333"
    secureTextEntry={!showPassword} // toggle hide/show
    value={pword}
    onChangeText={setPW}
    style={styles.input}
  />
  <TouchableOpacity
    style={{ position: 'absolute', right: 10, top: 14 }}
    onPress={() => setShowPassword(!showPassword)}
  >
    <Text style={{ color: '#6b7280', fontSize: 14 }}>
      {showPassword ? 'Hide' : 'Show'}
    </Text>
  </TouchableOpacity>
</View>

      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={gtBizna}
        activeOpacity={0.85}
      >
        <Text style={styles.submitButtonText}>Request Loan</Text>
        {isLoading && (
          <ActivityIndicator
            color="#fff"
            style={{ marginLeft: 10 }}
          />
        )}
      </TouchableOpacity>
    </ScrollView>
  </LinearGradient>
);

         
          
        };
        
        export default CreateBiz;

        const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },

  header: {
    marginTop: 40,
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#eef6ff',
    marginTop: 6,
  },

  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,

    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  inputGroup: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    color: '#111827',
  },

  input2: {
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    color: '#111827',
    height: '100%',
  },

  helperText: {
    fontSize: 12,
    marginTop: 6,
    color: '#6b7280',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    height: 60,
  },

  halfInput: {
    width: '48%',
    height: '100%',
  },

  submitButton: {
    backgroundColor: '#e58d29',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    elevation: 4,
    shadowColor: '#e58d29',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
});
