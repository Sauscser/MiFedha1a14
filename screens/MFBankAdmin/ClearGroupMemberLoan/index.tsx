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
import { LinearGradient } from 'expo-linear-gradient';
import RNPrint from 'react-native-print';

import {
  listGroups,
  listReqLoanChamas,
  listChamaMembers,
  listChamaLnApprovals,
  listGroupNonLoans,
  listCvrdGroupLoans,
  listGrpMembersContributions,
  listSMAccounts,
} from '../../../src/graphql/queries';
import { createMessages, sendNotification, updateReqLoanChama } from '../../../src/graphql/mutations';

// Helper functions
const tanh = (x: number) => Math.tanh(x);
const clip = (x: number, min = 0, max = 100) => Math.max(min, Math.min(max, x));

const AdminClearLoans = () => {
  const navigation = useNavigation();

  const [adminGroups, setAdminGroups] = useState<any[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  const [loans, setLoans] = useState<any[]>([]);
  const [groupSize, setGroupSize] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string | null>(null);

  const [showApprovalsFor, setShowApprovalsFor] = useState<string | null>(null);
  const [approvingMembers, setApprovingMembers] = useState<any[]>([]);
  const [loadingApprovals, setLoadingApprovals] = useState(false);

  const [showCreditModal, setShowCreditModal] = useState(false);
  const [memberCreditInfo, setMemberCreditInfo] = useState<any>(null);
  const [loadingCredit, setLoadingCredit] = useState(false);
  const [creditTab, setCreditTab] = useState<'group' | 'global' | 'blended'>('group');

  // Fetch admin groups
  useEffect(() => {
    const fetchAdminGroups = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const res: any = await API.graphql(
          graphqlOperation(listGroups, { filter: { BankAdminEmail: { eq: user.attributes.email } } })
        );
        setAdminGroups(res?.data?.listGroups?.items || []);
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'Failed to fetch groups');
      }
    };
    fetchAdminGroups();
  }, []);

  // Fetch loans + member names + group size
  const fetchLoans = async (groupContact: string) => {
    setLoading(true);
    try {
      const loanRes: any = await API.graphql(
        graphqlOperation(listReqLoanChamas, {
          filter: { chamaPhone: { eq: groupContact }, status: { eq: 'AwaitingResponse' } },
        })
      );
      const loansRaw = loanRes?.data?.listReqLoanChamas?.items || [];

      const membersRes: any = await API.graphql(
        graphqlOperation(listChamaMembers, { filter: { groupContact: { eq: groupContact } } })
      );
      const members = membersRes?.data?.listChamaMembers?.items || [];
      setGroupSize(members.length);

      const loansWithNames = loansRaw.map(loan => {
        const member = members.find(m => m.memberContact === loan.loaneeEmail);
        return {
          ...loan,
          loaneeName: member?.memberName || 'Unknown',
        };
      });

      setLoans(loansWithNames);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch loans');
    } finally {
      setLoading(false);
    }
  };

  // Clear loan
const clearLoan = async (loan: any) => {
  if (!selectedGroup || !groupSize) return;

  const thresholdPercent = selectedGroup.loanApprovalThreshHold;
  const approvalPercent = Math.round((loan.membersApprove / groupSize) * 100);

  if (approvalPercent >= thresholdPercent) {
    try {
      // Mark loan as cleared
      await API.graphql(
        graphqlOperation(updateReqLoanChama, { input: { id: loan.id, status: 'Cleared' } })
      );

      // Collect recipients from the loan record
      const recipients = [
        { email: loan.loaneeEmail, name: loan.loaneeName },
        { email: loan.owner, name: 'Owner' },
        { email: loan.signatory2Email, name: 'Signatory 2' },
        { email: loan.signatory3Email, name: 'Signatory 3' },
      ].filter(r => r.email && r.email !== 'None'); // skip empty ones

      // Notification body
      const messageBody = `MiFedha: Your loan in self-help group ${selectedGroup.grpName} has been cleared by the bank`;

      // Send to each recipient
      for (const r of recipients) {
        await API.graphql(graphqlOperation(createMessages, {
          input: {
            senderEmail: r.email,
            messageBody,
          }
        }));

        await API.graphql(graphqlOperation(sendNotification, {
          riderEmail: r.email,
          title: 'MiFedha: Loan Bank Clearance',
          body: messageBody,
        }));
      }

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
      const approvalsRes: any = await API.graphql(
        graphqlOperation(listChamaLnApprovals, { filter: { loanID: { eq: loanId } } })
      );
      setApprovingMembers(approvalsRes?.data?.listChamaLnApprovals?.items || []);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to load approving members');
    } finally {
      setLoadingApprovals(false);
    }
  };

  // Fetch member credit worth info (MiFedha algorithm, integrated)
 const fetchMemberCredit = async (loaneeEmail: string, loaneeName: string) => {
    if (!selectedGroup) return;
    setLoadingCredit(true);
    try {
      // Group balance for selected group
      const groupRes: any = await API.graphql(
        graphqlOperation(listGroups, { filter: { grpContact: { eq: selectedGroup.grpContact } } })
      );
      const grp = groupRes?.data?.listGroups?.items?.[0] || {};
      const grpBal = Number(grp.grpBal || 0);

      // Member existence (optional guard)
      const memberRes: any = await API.graphql(
        graphqlOperation(listChamaMembers, {
          filter: { groupContact: { eq: selectedGroup.grpContact }, memberContact: { eq: loaneeEmail } },
        })
      );
      const memberItems = memberRes?.data?.listChamaMembers?.items || [];
      if (memberItems.length === 0) {
        Alert.alert('No member record found', loaneeEmail);
        setLoadingCredit(false);
        return;
      }

      // SMAccount by awsemail = loaneeEmail (align field names with your schema)
      // Replace listSMAccounts with the correct query from your schema.
      // If SMAccount uses a different query or field names, update accordingly.
      let balance = 0,
        benefitsAmount = 0,
        p2pchmBenefits = 0,
        ttlDpstSM = 0,
        MaxTymsBL = 0;

      // Uncomment and align if available:
      const smRes: any = await API.graphql(
      graphqlOperation(listSMAccounts, { filter: { awsemail: { eq: loaneeEmail } } })
       );
      const sm = smRes?.data?.listSMAccounts?.items?.[0] || {};
      balance = Number(sm.balance || 0);
      benefitsAmount = Number(sm.benefitsAmount || 0);
      p2pchmBenefits = Number(sm.p2pchmBenefits || 0);
      ttlDpstSM = Number(sm.ttlDpstSM || 0);
      MaxTymsBL = Number(sm.MaxTymsBL || 0);

      // If you don't have SMAccount yet, you can leave them as zero or derive from other tables once available.

      // CvrdGroupLoans: per-group
      const glGroupRes: any = await API.graphql(
        graphqlOperation(listCvrdGroupLoans, {
          filter: { loaneePhn: { eq: loaneeEmail }, grpContact: { eq: selectedGroup.grpContact } },
        })
      );
      const glGroup = glGroupRes?.data?.listCvrdGroupLoans?.items || [];
      const amountGiven_group = glGroup.reduce((a: number, l: any) => a + Number(l.amountGiven ?? l.amount ?? 0), 0);
      const lonBala_group = glGroup.reduce((a: number, l: any) => a + Number(l.lonBala ?? l.balance ?? 0), 0);
      const amountRepaid_group = glGroup.reduce((a: number, l: any) => a + Number(l.amountRepaid ?? 0), 0);

      // CvrdGroupLoans: global
      const glGlobalRes: any = await API.graphql(
        graphqlOperation(listCvrdGroupLoans, { filter: { loaneePhn: { eq: loaneeEmail } } })
      );
      const glGlobal = glGlobalRes?.data?.listCvrdGroupLoans?.items || [];
      const amountGiven_global = glGlobal.reduce((a: number, l: any) => a + Number(l.amountGiven ?? l.amount ?? 0), 0);
      const lonBala_global = glGlobal.reduce((a: number, l: any) => a + Number(l.lonBala ?? l.balance ?? 0), 0);
      const amountRepaid_global = glGlobal.reduce((a: number, l: any) => a + Number(l.amountRepaid ?? 0), 0);

      // GroupNonLoans: per-group (recipientPhn === loaneeEmail)
      const nlGroupRes: any = await API.graphql(
        graphqlOperation(listGroupNonLoans, {
          filter: { recipientPhn: { eq: loaneeEmail }, grpContact: { eq: selectedGroup.grpContact } },
        })
      );
      const nlGroup = nlGroupRes?.data?.listGroupNonLoans?.items || [];
      const amountSent_group = nlGroup.reduce((a: number, r: any) => a + Number(r.amountSent ?? r.amount ?? 0), 0);

      // GroupNonLoans: global
      const nlGlobalRes: any = await API.graphql(
        graphqlOperation(listGroupNonLoans, { filter: { recipientPhn: { eq: loaneeEmail } } })
      );
      const nlGlobal = nlGlobalRes?.data?.listGroupNonLoans?.items || [];
      const amountSent_global = nlGlobal.reduce((a: number, r: any) => a + Number(r.amountSent ?? r.amount ?? 0), 0);

      // Contributions: per-group (memberPhn === loaneeEmail)
      const contribGroupRes: any = await API.graphql(
        graphqlOperation(listGrpMembersContributions, {
          filter: { memberPhn: { eq: loaneeEmail }, grpContact: { eq: selectedGroup.grpContact } },
        })
      );
      const contribGroup = contribGroupRes?.data?.listGrpMembersContributions?.items || [];
      const contriAmount_group = contribGroup.reduce((a: number, c: any) => a + Number(c.contriAmount ?? c.amount ?? 0), 0);

      // Contributions: global
      const contribGlobalRes: any = await API.graphql(
        graphqlOperation(listGrpMembersContributions, { filter: { memberPhn: { eq: loaneeEmail } } })
      );
      const contribGlobal = contribGlobalRes?.data?.listGrpMembersContributions?.items || [];
      const contriAmount_global = contribGlobal.reduce((a: number, c: any) => a + Number(c.contriAmount ?? c.amount ?? 0), 0);

      // Liquidity (use SMAccount values if available)
      const L_group = balance + p2pchmBenefits + 0.5 * benefitsAmount;
      const L_global = balance + p2pchmBenefits + 0.5 * benefitsAmount + 0.3 * ttlDpstSM;

      // Exposure ratios (safe denom)
      const E_group = L_group / (1 + lonBala_group);
      const E_global = L_global / (1 + lonBala_global);

      // Repayment strength (bounded)
      const R_group = Math.min(1, amountRepaid_group / (1 + amountGiven_group));
      const R_global = Math.min(1, amountRepaid_global / (1 + amountGiven_global));

      // Community support (compressed)
      const S_group = Math.log(1 + amountSent_group + contriAmount_group);
      const S_global = Math.log(1 + amountSent_global + contriAmount_global);

      // Penalties (bounded)
      const P_group = 0.15 * MaxTymsBL + 0.0005 * lonBala_group;
      const P_global = 0.15 * MaxTymsBL + 0.0003 * lonBala_global;

      // Components (0–100-ish then clipped)
      const C_group =
        40 * tanh(E_group / 1000) +
        35 * R_group +
        15 * tanh(S_group / 5) -
        10 * Math.min(1, P_group);

      const C_global =
        35 * tanh(E_global / 1500) +
        35 * R_global +
        20 * tanh(S_global / 6) -
        10 * Math.min(1, P_global);

      const blendedScore = clip(0.6 * C_group + 0.4 * C_global);

      setMemberCreditInfo({
        name: loaneeName,
        grpBal,

        // SMAccount (may be zeros if not available)
        balance,
        benefitsAmount,
        p2pchmBenefits,
        ttlDpstSM,
        MaxTymsBL,

        // Loans (group/global)
        amountGiven_group,
        lonBala_group,
        amountRepaid_group,
        amountGiven_global,
        lonBala_global,
        amountRepaid_global,

        // Support (group/global)
        amountSent_group,
        contriAmount_group,
        amountSent_global,
        contriAmount_global,

        // Components for transparency
        L_group,
        L_global,
        E_group,
        E_global,
        R_group,
        R_global,
        S_group,
        S_global,
        P_group,
        P_global,
        C_group,
        C_global,

        // Final scores
        creditScore: blendedScore,
      });

      setCreditTab('group'); // default to group tab on open
      setShowCreditModal(true);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch member credit info');
    } finally {
      setLoadingCredit(false);
    }
  };

  // Export to PDF
 const exportToPDF = async () => {
  try {
    // Resolve uploaded minutes images first
    const loanImages = await Promise.all(
      (loans || []).map(async l => {
        if (l.loanMinutesImage && l.loanMinutesImage !== 'NoMinutesUploaded') {
          const url = await Storage.get(l.loanMinutesImage);
          return { ...l, minutesImageUrl: url };
        }
        return { ...l, minutesImageUrl: null };
      })
    );

    const html = `
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { color: #e29d58; }
            h2 { margin-top: 20px; }
            h3 { margin-top: 10px; }
            li { margin-bottom: 12px; }
            .bar { height: 12px; background: #e5e7eb; border-radius: 6px; overflow: hidden; }
            .fill { height: 100%; }
          </style>
        </head>
        <body>
          <h1>Group Report: ${selectedGroup?.grpName || ''}</h1>

          <h2>Credit Score</h2>
          <p>${Number(memberCreditInfo?.creditScore || 0)}%</p>
          <div class="bar">
            <div class="fill" style="width:${Number(memberCreditInfo?.creditScore || 0)}%;
              background-color:${Number(memberCreditInfo?.creditScore || 0) >= 70 ? 'green' :
                                Number(memberCreditInfo?.creditScore || 0) >= 40 ? 'yellow' : 'red'}"></div>
          </div>

          <h2>SMAccount Overview</h2>
          <p>Balance: KES ${memberCreditInfo?.balance || 0}</p>
          <p>Benefits Amount: KES ${memberCreditInfo?.benefitsAmount || 0}</p>
          <p>P2P Chama Benefits: KES ${memberCreditInfo?.p2pchmBenefits || 0}</p>
          <p>Total Deposits (SM): KES ${memberCreditInfo?.ttlDpstSM || 0}</p>
          <p>Max Times Borrowed Late: ${memberCreditInfo?.MaxTymsBL || 0}</p>

          <h2>Group Overview</h2>
          <p>Group balance: KES ${memberCreditInfo?.grpBal || 0}</p>
          <p>Loans issued: KES ${memberCreditInfo?.amountGiven_group || 0}</p>
          <p>Outstanding loans: KES ${memberCreditInfo?.lonBala_group || 0}</p>
          <p>Repaid: KES ${memberCreditInfo?.amountRepaid_group || 0}</p>
          <p>Non-loan receipts: KES ${memberCreditInfo?.amountSent_group || 0}</p>
          <p>Contributions: KES ${memberCreditInfo?.contriAmount_group || 0}</p>
          <h3>Score Components</h3>
          <p>Liquidity: KES ${memberCreditInfo?.L_group || 0}</p>
          <p>Exposure ratio: ${memberCreditInfo?.E_group?.toFixed?.(2)}</p>
          <p>Repayment strength: ${Math.round((memberCreditInfo?.R_group || 0) * 100)}%</p>
          <p>Community support: ${memberCreditInfo?.S_group?.toFixed?.(2)}</p>
          <p>Penalty: ${memberCreditInfo?.P_group?.toFixed?.(2)}</p>

          <h2>Global Overview</h2>
          <p>Total loans issued: KES ${memberCreditInfo?.amountGiven_global || 0}</p>
          <p>Total outstanding: KES ${memberCreditInfo?.lonBala_global || 0}</p>
          <p>Total repaid: KES ${memberCreditInfo?.amountRepaid_global || 0}</p>
          <p>Non-loan receipts: KES ${memberCreditInfo?.amountSent_global || 0}</p>
          <p>Contributions: KES ${memberCreditInfo?.contriAmount_global || 0}</p>
          <h3>Score Components</h3>
          <p>Liquidity: KES ${memberCreditInfo?.L_global || 0}</p>
          <p>Exposure ratio: ${memberCreditInfo?.E_global?.toFixed?.(2)}</p>
          <p>Repayment strength: ${Math.round((memberCreditInfo?.R_global || 0) * 100)}%</p>
          <p>Community support: ${memberCreditInfo?.S_global?.toFixed?.(2)}</p>
          <p>Penalty: ${memberCreditInfo?.P_global?.toFixed?.(2)}</p>

          <h2>Blended Summary</h2>
          <p>Blended score (0.6 group / 0.4 global): ${memberCreditInfo?.creditScore || 0}%</p>
          <p>Group component score: ${memberCreditInfo?.C_group?.toFixed?.(2)}</p>
          <p>Global component score: ${memberCreditInfo?.C_global?.toFixed?.(2)}</p>

          <h2>Loans</h2>
          <ul>
            ${loanImages.map(l => `
              <li>
                <strong>Loanee:</strong> ${l.loaneeName} <br/>
                <strong>Amount:</strong> KES ${Number(l.amount).toLocaleString()} <br/>
                <strong>Status:</strong> ${l.status} <br/>
                <strong>Description:</strong> ${l.description || 'No description'} <br/>
                <strong>Approvals:</strong> ${l.membersApprove}/${groupSize} <br/>
                <strong>Written Minutes:</strong><br/>
                ${l.loanMinutes && l.loanMinutes !== 'NoMinutesProvided'
                  ? l.loanMinutes
                  : 'No written minutes provided'} <br/>
                ${l.minutesImageUrl
                  ? `<img src="${l.minutesImageUrl}" style="max-width:100%; margin-top:8px;" />`
                  : ''}
              </li>
            `).join('')}
          </ul>

          <h2>Approving Members</h2>
          <ul>
            ${(approvingMembers || [])
              .map(m => `<li>${m.memberName} (${m.MemberEmail})</li>`)
              .join('')}
          </ul>
        </body>
      </html>
    `;

    await RNPrint.print({ html });
  } catch (err) {
    console.error(err);
    Alert.alert('Error', 'Failed to export PDF');
  }
};



  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {/* Header with Export button */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <Text style={styles.header}>Select a Group</Text>
        <TouchableOpacity
          style={{ backgroundColor: '#22c55e', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 }}
          onPress={exportToPDF}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>Export to PDF</Text>
        </TouchableOpacity>
      </View>

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

      {loading && <ActivityIndicator size="large" color="#e29d58" />}

      {/* Loan cards */}
      {loans.map(loan => {
        const percent = groupSize > 0 ? Math.round((loan.membersApprove / groupSize) * 100) : 0;
        const canClear = percent >= selectedGroup?.loanApprovalThreshHold;

        return (
          <View key={loan.id} style={styles.card}>
            <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 4 }}>Loanee: {loan.loaneeName}</Text>
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
            {loan.AdvEmail && loan.AdvEmail !== 'None' && <Text style={styles.advocate}>Advocate: {loan.advLicNo}</Text>}

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

            {/* View MiFedha Credit Worth */}
            <TouchableOpacity
              style={[styles.secondaryBtn, { backgroundColor: '#e29d58', marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}
              onPress={() => fetchMemberCredit(loan.loaneeEmail, loan.loaneeName)}
              disabled={loadingCredit}
            >
              {loadingCredit ? (
                <ActivityIndicator size="small" color="#fff" style={{ marginRight: 8 }} />
              ) : null}
              <Text style={{ color: '#fff', fontWeight: '700' }}>
                {loadingCredit ? 'Loading...' : 'View MiFedha Credit Worth'}
              </Text>
            </TouchableOpacity>

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
                  <ActivityIndicator size="small" color="#e29d58" />
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

      {/* Modals for images, text, and credit worthiness remain unchanged */}
      {/* ... keep your existing modal code here ... */}
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

      

      {/* Credit worth modal with tabs */}
   {/* Credit worthiness modal */}
<Modal visible={showCreditModal} transparent onRequestClose={() => setShowCreditModal(false)}>
  <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center' }}>
    {loadingCredit ? (
      <ActivityIndicator size="large" color="#e29d58" />
    ) : (
      <View style={{ margin: 20, borderRadius: 12, overflow: 'hidden' }}>
        {/* Header */}
        <LinearGradient
          colors={['#e29d58', 'skyblue']}
          start={[0, 0]}
          end={[1, 0]}
          style={{ padding: 16 }}
        >
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
            {memberCreditInfo?.name}'s Credit Worthiness
          </Text>
        </LinearGradient>

        {/* Tabs */}
        <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={[styles.tabBtn, creditTab === 'group' && styles.tabBtnActive]}
            onPress={() => setCreditTab('group')}
          >
            <Text style={[styles.tabText, creditTab === 'group' && styles.tabTextActive]}>Group</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, creditTab === 'global' && styles.tabBtnActive]}
            onPress={() => setCreditTab('global')}
          >
            <Text style={[styles.tabText, creditTab === 'global' && styles.tabTextActive]}>Global</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, creditTab === 'blended' && styles.tabBtnActive]}
            onPress={() => setCreditTab('blended')}
          >
            <Text style={[styles.tabText, creditTab === 'blended' && styles.tabTextActive]}>Blended</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={{ backgroundColor: '#fff', maxHeight: 600 }}>
          <View style={{ padding: 16 }}>
            {/* Credit Score */}
            <Text style={{ fontWeight: '700', marginBottom: 6 }}>Credit Score</Text>
            <Text style={{ marginBottom: 6 }}>{Number(memberCreditInfo?.creditScore || 0)}%</Text>
            <View style={{ height: 12, backgroundColor: '#e5e7eb', borderRadius: 6, overflow: 'hidden' }}>
              <View
                style={{
                  width: `${Number(memberCreditInfo?.creditScore || 0)}%`,
                  height: '100%',
                  backgroundColor:
                    Number(memberCreditInfo?.creditScore || 0) >= 70
                      ? 'green'
                      : Number(memberCreditInfo?.creditScore || 0) >= 40
                      ? 'yellow'
                      : 'red',
                }}
              />
            </View>

            {/* SMAccount Overview */}
            <Text style={{ fontWeight: '700', marginTop: 16, marginBottom: 6 }}>SMAccount Overview</Text>
            <Text>Balance: KES {Number(memberCreditInfo?.balance || 0).toLocaleString()}</Text>
            <Text>Benefits Amount: KES {Number(memberCreditInfo?.benefitsAmount || 0).toLocaleString()}</Text>
            <Text>P2P Chama Benefits: KES {Number(memberCreditInfo?.p2pchmBenefits || 0).toLocaleString()}</Text>
            <Text>Total Deposits (SM): KES {Number(memberCreditInfo?.ttlDpstSM || 0).toLocaleString()}</Text>
            <Text>Max Times Borrowed Late: {memberCreditInfo?.MaxTymsBL || 0}</Text>

            {/* Tabs content */}
            {creditTab === 'group' && (
              <>
                <Text style={{ fontWeight: '700', marginTop: 16 }}>Group Overview</Text>
                <Text>Group balance: KES {Number(memberCreditInfo?.grpBal || 0).toLocaleString()}</Text>
                <Text>Loans issued: KES {Number(memberCreditInfo?.amountGiven_group || 0).toLocaleString()}</Text>
                <Text>Outstanding loans: KES {Number(memberCreditInfo?.lonBala_group || 0).toLocaleString()}</Text>
                <Text>Repaid: KES {Number(memberCreditInfo?.amountRepaid_group || 0).toLocaleString()}</Text>
                <Text>Non-loan receipts: KES {Number(memberCreditInfo?.amountSent_group || 0).toLocaleString()}</Text>
                <Text>Contributions: KES {Number(memberCreditInfo?.contriAmount_group || 0).toLocaleString()}</Text>

                <Text style={{ fontWeight: '700', marginTop: 16 }}>Score Components</Text>
                <Text>Liquidity: KES {Number(memberCreditInfo?.L_group || 0).toLocaleString()}</Text>
                <Text>Exposure ratio: {memberCreditInfo?.E_group?.toFixed?.(2)}</Text>
                <Text>Repayment strength: {Math.round((memberCreditInfo?.R_group || 0) * 100)}%</Text>
                <Text>Community support: {memberCreditInfo?.S_group?.toFixed?.(2)}</Text>
                <Text>Penalty: {memberCreditInfo?.P_group?.toFixed?.(2)}</Text>
              </>
            )}

            {creditTab === 'global' && (
              <>
                <Text style={{ fontWeight: '700', marginTop: 16 }}>Global Overview</Text>
                <Text>Total loans issued: KES {Number(memberCreditInfo?.amountGiven_global || 0).toLocaleString()}</Text>
                <Text>Total outstanding: KES {Number(memberCreditInfo?.lonBala_global || 0).toLocaleString()}</Text>
                <Text>Total repaid: KES {Number(memberCreditInfo?.amountRepaid_global || 0).toLocaleString()}</Text>
                <Text>Non-loan receipts: KES {Number(memberCreditInfo?.amountSent_global || 0).toLocaleString()}</Text>
                <Text>Contributions: KES {Number(memberCreditInfo?.contriAmount_global || 0).toLocaleString()}</Text>

                <Text style={{ fontWeight: '700', marginTop: 16 }}>Score Components</Text>
                <Text>Liquidity: KES {Number(memberCreditInfo?.L_global || 0).toLocaleString()}</Text>
                <Text>Exposure ratio: {memberCreditInfo?.E_global?.toFixed?.(2)}</Text>
                <Text>Repayment strength: {Math.round((memberCreditInfo?.R_global || 0) * 100)}%</Text>
                <Text>Community support: {memberCreditInfo?.S_global?.toFixed?.(2)}</Text>
                <Text>Penalty: {memberCreditInfo?.P_global?.toFixed?.(2)}</Text>
              </>
            )}

            {creditTab === 'blended' && (
              <>
                <Text style={{ fontWeight: '700', marginTop: 16 }}>Blended Summary</Text>
                <Text>Blended score (0.6 group / 0.4 global): {Number(memberCreditInfo?.creditScore || 0)}%</Text>
                <Text>Group component score: {memberCreditInfo?.C_group?.toFixed?.(2)}</Text>
                <Text>Global component score: {memberCreditInfo?.C_global?.toFixed?.(2)}</Text>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    )}
  </View>
</Modal>


    </ScrollView>
  );
};

export default AdminClearLoans;

const styles = StyleSheet.create({
  // Header
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1f2937', // dark gray for readability
  },

  // Group selection buttons
  groupBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#fbbf24', // amber
    alignItems: 'center',
  },
  groupBtnSelected: {
    backgroundColor: '#f59e0b', // darker amber when selected
  },

  // Loan card
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: '#2563eb', // blue
  },
  purpose: {
    marginVertical: 6,
    color: '#374151', // gray
    fontStyle: 'italic',
  },

  // Loan details rows
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  detail: {
    color: '#6b7280', // muted gray
    fontSize: 14,
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111827',
  },

  advocate: {
    marginTop: 6,
    fontStyle: 'italic',
    color: '#4b5563',
  },
  approvalText: {
    marginTop: 10,
    fontSize: 13,
    color: '#374151',
  },

  // Progress bar
  progressBg: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#e29d58', // green
  },

  // Buttons
  clearBtn: {
    marginTop: 10,
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    borderRadius: 8,
  },
  secondaryBtn: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
    alignItems: 'center',
  },

  // Inline approvals
  inlineBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  memberRow: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    fontStyle: 'italic',
  },

  // Image modal
  imageModalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  imageCloseButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  imageCloseText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  // Text modal
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
    backgroundColor: '#f59e0b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  // Tabs
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: {
    backgroundColor: '#fef3c7', // light amber
    borderBottomColor: '#f59e0b',
  },
  tabText: {
    fontWeight: '700',
    color: '#111827',
  },
  tabTextActive: {
    color: '#f59e0b',
  },
});


