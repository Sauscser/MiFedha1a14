import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import ImageViewer from 'react-native-image-zoom-viewer';
import { LinearGradient } from 'expo-linear-gradient';

import {
  listReqLoanChamas,
  listChamaMembers,
  listChamaLnApprovals,
} from '../../../../src/graphql/queries';

import {
  createChamaLnApproval,
  updateReqLoanChama,
} from '../../../../src/graphql/mutations';

const FloatedLoansList = () => {
  /* ---------------- ROUTE PARAMS ---------------- */
  const route = useRoute<any>();
  const { memberDetails } = route.params;

  const groupContact = memberDetails.groupContact;
  const memberEmail = memberDetails.memberContact;
  const memberName = memberDetails.memberName;
  const groupName = memberDetails.groupName;

  /* ---------------- STATE ---------------- */
  const [loans, setLoans] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [groupSize, setGroupSize] = useState(0);
  const [approvalsMap, setApprovalsMap] = useState<Record<string, any[]>>({});

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  /* ---------------- FETCH GROUP SIZE ---------------- */
  const fetchGroupSize = async () => {
    const res: any = await API.graphql(
      graphqlOperation(listChamaMembers, {
        filter: { groupContact: { eq: groupContact } },
      })
    );
    setGroupSize(res.data.listChamaMembers.items.length);
  };

  /* ---------------- FETCH LOANS ---------------- */
  const fetchLoans = async () => {
    setLoading(true);
    try {
      const res: any = await API.graphql(
        graphqlOperation(listReqLoanChamas, {
          filter: {
            chamaPhone: { eq: groupContact },
            status: { eq: 'AwaitingResponse' },
          },
        })
      );

      setLoans(res.data.listReqLoanChamas.items);
    } catch {
      Alert.alert('Error', 'Failed to fetch loans');
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- FETCH APPROVALS ---------------- */
  const fetchApprovals = async (items: any[]) => {
    const map: any = {};

    for (const loan of items) {
      const res: any = await API.graphql(
        graphqlOperation(listChamaLnApprovals, {
          filter: { loanID: { eq: loan.id } },
        })
      );
      map[loan.id] = res.data.listChamaLnApprovals.items;
    }
    setApprovalsMap(map);
  };

  /* ---------------- APPROVE ---------------- */
  const approveLoan = async (loan: any) => {
    try {
      await API.graphql(
        graphqlOperation(createChamaLnApproval, {
          input: {
            loanID: loan.id,
            memberGrpNumber: groupContact,
            GrpAccount: groupContact,
            MemberEmail: memberEmail,
            memberName: memberDetails.memberName,
            grpName: groupName,
            grpMinutes: "Group Minutes",
            status: 'Approved',
            description: `Loan approved by ${memberName} (${memberEmail})`,
          },
        })
      );

      await API.graphql(
        graphqlOperation(updateReqLoanChama, {
          input: {
            id: loan.id,
            membersApprove: loan.membersApprove + 1,
          },
        })
      );

      fetchLoans();
    } catch {
      Alert.alert('Error', 'Approval failed');
    }
  };

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    fetchGroupSize();
    fetchLoans();
  }, []);

  useEffect(() => {
    if (loans.length) fetchApprovals(loans);
  }, [loans]);

  /* ---------------- UI ---------------- */
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Chama Loan Applications</Text>

      {loading && <ActivityIndicator size="large" color="#e58d29" />}

      {loans.map((loan) => {
        const approvals = approvalsMap[loan.id] || [];
        const approved = approvals.length;
        const percent =
          groupSize > 0 ? Math.round((approved / groupSize) * 100) : 0;

        const alreadyApproved = approvals.some(
          (a) => a.MemberEmail === memberEmail
        );

        return (
          <View key={loan.id} style={styles.card}>
            <Text style={styles.amount}>
              KES {Number(loan.amount).toLocaleString()}
            </Text>

            <Text style={styles.purpose}>
              {loan.description || 'No description'}
            </Text>

            <View style={styles.row}>
              <Text style={styles.detail}>Interest:</Text>
              <Text style={styles.value}>{loan.repaymentAmt}%</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.detail}>Repayment Period:</Text>
              <Text style={styles.value}>{loan.repaymentPeriod} days</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.detail}>Installment:</Text>
              <Text style={styles.value}>
                KES {Number(loan.installmentAmount).toLocaleString()}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.detail}>Installment Frequency:</Text>
              <Text style={styles.value}>{loan.paymentFrequency} days</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.detail}>Default Penalty:</Text>
              <Text style={styles.value}>{loan.defaultPenalty}</Text>
            </View>

            {loan.AdvEmail !== 'None' && (
              <Text style={styles.advocate}>
                Advocate: {loan.advLicNo}
              </Text>
            )}

            {/* Approval */}
            <Text style={styles.approvalText}>
              {approved}/{groupSize} approvals ({percent}%)
            </Text>

            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${percent}%` }]} />
            </View>

            {!alreadyApproved && (
              <TouchableOpacity
                style={styles.approveBtn}
                onPress={() => approveLoan(loan)}
              >
                <Text style={styles.approveText}>Approve Loan</Text>
              </TouchableOpacity>
            )}

            {loan.loanMinutesImage &&
              loan.loanMinutesImage !== 'NoMinutesUploaded' && (
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={async () =>
                    setSelectedImage(await Storage.get(loan.loanMinutesImage))
                  }
                >
                  <Text>View Uploaded Minutes</Text>
                </TouchableOpacity>
              )}

            {loan.loanMinutes &&
              loan.loanMinutes !== 'NoMinutesProvided' && (
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={() => setSelectedText(loan.loanMinutes)}
                >
                  <Text>Read Written Minutes</Text>
                </TouchableOpacity>
              )}
          </View>
        );
      })}

      {/* MODALS */}
      {/* Image Modal */}
<Modal
  visible={!!selectedImage}
  transparent
  animationType="fade"
  onRequestClose={() => setSelectedImage(null)}
>
  <View style={styles.imageModalContainer}>
    <ImageViewer
      imageUrls={[{ url: selectedImage || '' }]}
      enableSwipeDown
      onSwipeDown={() => setSelectedImage(null)}
      backgroundColor="transparent"
    />

    {/* Close Button */}
    <TouchableOpacity
      style={styles.imageCloseButton}
      onPress={() => setSelectedImage(null)}
      activeOpacity={0.85}
    >
      <Text style={styles.imageCloseText}>Close</Text>
    </TouchableOpacity>
  </View>
</Modal>


      <Modal visible={!!selectedText} transparent>
        <View style={styles.textModal}>
          <ScrollView style={styles.textBox}>
            <Text>{selectedText}</Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setSelectedText(null)}
          >
            <Text style={{ color: '#fff' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default FloatedLoansList;


const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 24, fontWeight: '800', marginBottom: 20 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
  },

  amount: { fontSize: 20, fontWeight: '800', color: '#1e40af' },
  purpose: { marginVertical: 6, color: '#374151' },

  row: { flexDirection: 'row', justifyContent: 'space-between' },
  detail: { color: '#6b7280' },
  value: { fontWeight: '600' },

  advocate: { marginTop: 6, fontStyle: 'italic' },

  approvalText: { marginTop: 10, fontSize: 13 },

  progressBg: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#22c55e',
  },

  imageModalContainer: {
  flex: 1,
  backgroundColor: '#000',
  justifyContent: 'center',
},

imageCloseButton: {
  position: 'absolute',
  bottom: 40,
  alignSelf: 'center',
  backgroundColor: '#e58d29',
  paddingVertical: 12,
  paddingHorizontal: 28,
  borderRadius: 30,

  elevation: 6,
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 4 },
},

imageCloseText: {
  color: '#fff',
  fontSize: 15,
  fontWeight: '700',
},


  approveBtn: {
    backgroundColor: '#e58d29',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
  },

  approveText: { color: '#fff', textAlign: 'center', fontWeight: '700' },

  secondaryBtn: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    alignItems: 'center',
  },

  textModal: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },

  textBox: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 16,
    borderRadius: 12,
  },

  closeBtn: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#e58d29',
    padding: 10,
    borderRadius: 8,
  },
});
