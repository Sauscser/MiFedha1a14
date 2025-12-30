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
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import ImageViewer from 'react-native-image-zoom-viewer';

import {
  listGroups,
  listReqLoanChamas,
  listChamaMembers,
  listChamaLnApprovals,
} from '../../../src/graphql/queries';
import { updateReqLoanChama } from '../../../src/graphql/mutations';

const AdminClearLoans = () => {
  const navigation = useNavigation();

  const [adminGroups, setAdminGroups] = useState<any[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  const [loans, setLoans] = useState<any[]>([]);
  const [groupSize, setGroupSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  // Approvals
  const [showApprovalsFor, setShowApprovalsFor] = useState<string | null>(null);
  const [approvingMembers, setApprovingMembers] = useState<any[]>([]);
  const [loadingApprovals, setLoadingApprovals] = useState(false);

  // Fetch admin groups
  useEffect(() => {
    const fetchAdminGroups = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const res: any = await API.graphql(
          graphqlOperation(listGroups, { filter: { BankAdminEmail: { eq: user.attributes.email } } })
        );
        setAdminGroups(res.data.listGroups.items);
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to fetch groups');
      }
    };
    fetchAdminGroups();
  }, []);

  // Fetch loans + group size
  const fetchLoans = async (groupContact: string) => {
    setLoading(true);
    try {
      const loanRes: any = await API.graphql(
        graphqlOperation(listReqLoanChamas, {
          filter: { chamaPhone: { eq: groupContact }, status: { eq: 'AwaitingResponse' } },
        })
      );
      setLoans(loanRes.data.listReqLoanChamas.items);

      const membersRes: any = await API.graphql(
        graphqlOperation(listChamaMembers, { filter: { groupContact: { eq: groupContact } } })
      );
      setGroupSize(membersRes.data.listChamaMembers.items.length);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch loans');
    } finally {
      setLoading(false);
    }
  };

  // Clear loan
  const clearLoan = async (loan: any) => {
    if (!selectedGroup) return;
    if (!groupSize || groupSize === 0) {
      Alert.alert('Error', 'Group size not loaded yet');
      return;
    }
    const thresholdPercent = selectedGroup.loanApprovalThreshHold;
    const approvalPercent = Math.round((loan.membersApprove / groupSize) * 100);

    if (approvalPercent >= thresholdPercent) {
      try {
        await API.graphql(graphqlOperation(updateReqLoanChama, { input: { id: loan.id, status: 'Cleared' } }));
        Alert.alert('Success', 'Loan cleared successfully');
        fetchLoans(selectedGroup.grpContact);
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to clear loan');
      }
    } else {
      Alert.alert('Threshold not reached', `This loan requires ${thresholdPercent}% approval`);
    }
  };

  // Fetch approving members
const fetchApprovingMembers = async (loanId: string) => {
  if (!selectedGroup) return;
  setLoadingApprovals(true);
  try {
    // loanId here is the same as the ReqLoanChama id
    const approvalsRes: any = await API.graphql(
      graphqlOperation(listChamaLnApprovals, { filter: { loanID: { eq: loanId } } })
    );
    const approvals = approvalsRes.data.listChamaLnApprovals.items;

    // directly set approvals as approving members
    setApprovingMembers(approvals);
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to load approving members');
  } finally {
    setLoadingApprovals(false);
  }
};


  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>Select a Group</Text>

      {adminGroups.map(group => (
        <TouchableOpacity
          key={group.grpContact}
          style={[styles.groupBtn, selectedGroup?.grpContact === group.grpContact && styles.groupBtnSelected]}
          onPress={() => {
            setSelectedGroup(group);
            fetchLoans(group.grpContact);
          }}
        >
          <Text style={{ color: selectedGroup?.grpContact === group.grpContact ? '#fff' : '#000' }}>
            {group.grpName}
          </Text>
        </TouchableOpacity>
      ))}

      {loading && <ActivityIndicator size="large" color="#e58d29" />}

      {loans.map(loan => {
        const percent = groupSize > 0 ? Math.round((loan.membersApprove / groupSize) * 100) : 0;
        const canClear = percent >= selectedGroup?.loanApprovalThreshHold;

        return (
          <View key={loan.id} style={styles.card}>
            {/* Loan details */}
            <Text style={styles.amount}>KES {Number(loan.amount).toLocaleString()}</Text>
            <Text style={styles.purpose}>{loan.description || 'No description'}</Text>

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
              <Text style={styles.value}>KES {Number(loan.installmentAmount).toLocaleString()}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.detail}>Installment Frequency:</Text>
              <Text style={styles.value}>{loan.paymentFrequency} days</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.detail}>Default Penalty:</Text>
              <Text style={styles.value}>{loan.defaultPenalty}</Text>
            </View>
            {loan.AdvEmail !== 'None' && <Text style={styles.advocate}>Advocate: {loan.advLicNo}</Text>}

            <Text style={styles.approvalText}>
              {loan.membersApprove}/{groupSize} approvals ({percent}%) • Required: {selectedGroup?.loanApprovalThreshHold}%
            </Text>

            <View style={styles.progressBg}>
              <View style={[styles.progressFill, { width: `${percent}%` }]} />
            </View>

            {loan.status !== 'Cleared' && (
              <TouchableOpacity
                style={[styles.clearBtn, !canClear && { backgroundColor: '#aaa' }]}
                disabled={!canClear}
                onPress={() => clearLoan(loan)}
              >
                <Text style={{ color: '#fff', textAlign: 'center' }}>Clear Loan</Text>
              </TouchableOpacity>
            )}

            {/* Inline approvals */}
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => {
                if (showApprovalsFor === loan.id) {
                  setShowApprovalsFor(null);
                } else {
                  setShowApprovalsFor(loan.id);
                  fetchApprovingMembers(loan.id);
                }
              }}
            >
              <Text>{showApprovalsFor === loan.id ? 'Hide Approving Members' : 'View Members Who Approved'}</Text>
            </TouchableOpacity>

            {showApprovalsFor === loan.id && (
              <View style={styles.inlineBox}>
                {loadingApprovals ? (
                  <ActivityIndicator size="small" color="#e58d29" />
                ) : approvingMembers.length === 0 ? (
                  <Text style={styles.emptyText}>No approvals recorded yet</Text>
                ) : (
                  <ScrollView style={{ maxHeight: 200 }} nestedScrollEnabled contentContainerStyle={{ flexGrow: 0 }}>
                    {approvingMembers.map((member, idx) => (
                      <View key={idx} style={styles.memberRow}>
                        <Text>
                          <Text style={{ fontWeight: '700' }}>Name:</Text> {member.memberName}
                        </Text>
                        <Text>
                          <Text style={{ fontWeight: '700' }}>Email:</Text> {member.MemberEmail}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            )}

            {/* Minutes buttons */}
            {loan.loanMinutesImage && loan.loanMinutesImage !== 'NoMinutesUploaded' && (
              <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={async () => setSelectedImage(await Storage.get(loan.loanMinutesImage))}
              >
                <Text>View Uploaded Minutes</Text>
              </TouchableOpacity>
            )}

            {loan.loanMinutes && loan.loanMinutes !== 'NoMinutesProvided' && (
              <TouchableOpacity style={styles.secondaryBtn} onPress={() => setSelectedText(loan.loanMinutes)}>
                <Text>Read Written Minutes</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}

      {/* IMAGE MODAL */}
      <Modal visible={!!selectedImage} transparent onRequestClose={() => setSelectedImage(null)}>
        <View style={styles.imageModalContainer}>
          <ImageViewer
            imageUrls={[{ url: selectedImage || '' }]}
            enableSwipeDown
            onSwipeDown={() => setSelectedImage(null)}
            backgroundColor="transparent"
          />
          <TouchableOpacity style={styles.imageCloseButton} onPress={() => setSelectedImage(null)}>
            <Text style={styles.imageCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* TEXT MODAL */}
      <Modal visible={!!selectedText} transparent>
        <View style={styles.textModal}>
          <ScrollView style={styles.textBox}>
            <Text>{selectedText}</Text>
          </ScrollView>
          <TouchableOpacity style={styles.closeBtn} onPress={() => setSelectedText(null)}>
            <Text style={{ color: '#fff' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default AdminClearLoans;

const styles = StyleSheet.create({
  header: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  groupBtn: { padding: 12, marginVertical: 6, borderRadius: 10, backgroundColor: '#e58d29', alignItems: 'center' },
  groupBtnSelected: { backgroundColor: '#e58d29' },

  card: { backgroundColor: '#fff', borderRadius: 14, padding: 16, marginVertical: 10, elevation: 3 },
  amount: { fontSize: 18, fontWeight: '700', marginBottom: 4, color: '#1e40af' },
  purpose: { marginVertical: 6, color: '#374151' },

  row: { flexDirection: 'row', justifyContent: 'space-between' },
  detail: { color: '#6b7280' },
  value: { fontWeight: '600' },

  advocate: { marginTop: 6, fontStyle: 'italic' },
  approvalText: { marginTop: 10, fontSize: 13 },

  progressBg: { height: 8, backgroundColor: '#e5e7eb', borderRadius: 6, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#22c55e' },

  clearBtn: { marginTop: 10, backgroundColor: '#22c55e', padding: 10, borderRadius: 8 },
  secondaryBtn: { marginTop: 8, padding: 8, backgroundColor: '#e5e7eb', borderRadius: 6, alignItems: 'center' },

  // INLINE APPROVING MEMBERS
  inlineBox: { marginTop: 10, padding: 10, backgroundColor: '#f9fafb', borderRadius: 10, borderWidth: 1, borderColor: '#e5e7eb' },
  memberRow: { padding: 10, marginBottom: 8, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  emptyText: { textAlign: 'center', color: '#6b7280', fontStyle: 'italic' },

  imageModalContainer: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  imageCloseButton: { position: 'absolute', bottom: 40, alignSelf: 'center', backgroundColor: '#e58d29', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 30 },
  imageCloseText: { color: '#fff', fontSize: 15, fontWeight: '700' },

  textModal: { flex: 1, backgroundColor: '#000000aa', justifyContent: 'center' },
  textBox: { backgroundColor: '#fff', margin: 20, padding: 16, borderRadius: 12 },
  closeBtn: { alignSelf: 'center', marginTop: 20, backgroundColor: '#e58d29', padding: 10, borderRadius: 8 },
});
