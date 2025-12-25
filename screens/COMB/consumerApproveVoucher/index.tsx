import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Pressable,
} from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listCombContractVouchers } from '../../../src/graphql/queries';
import {
  createMessages,
  updateCombContractVoucher,
  sendNotification,
} from '../../../src/graphql/mutations';

/* -------------------- Voucher Card -------------------- */
const VoucherCard = ({ voucher, onApprove, onDecline }: any) => (
  <View style={styles.voucherCard}>
    <Text style={{ fontWeight: 'bold' }}>
      {voucher.itemName} ({voucher.itemBrand})
    </Text>
    <Text>Specifications: {voucher.itemSpecifications || '-'}</Text>
    <Text>Price: KES {Number(voucher.itemPrice).toFixed(2)}</Text>
    <Text>Number of Items: {voucher.numberOfItems}</Text>

    <Text>Funder Account: {voucher.funderAccount}</Text>
    <Text>Funder Name: {voucher.funderName}</Text>
    <Text>Funder Contact: {voucher.funderContact}</Text>

    <Text>Seller Account: {voucher.sellerAccount}</Text>
    <Text>Seller Name: {voucher.sellerName}</Text>
    <Text>Seller Contact: {voucher.sellerContact}</Text>

    <Text>Status: {voucher.accStatus}</Text>

    {voucher.accStatus === 'Pending' && (
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Pressable
          style={[styles.button, { backgroundColor: '#4caf50', marginRight: 8 }]}
          onPress={() => onApprove(voucher)}
        >
          <Text style={{ color: 'white' }}>Approve</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: '#f44336' }]}
          onPress={() => onDecline(voucher)}
        >
          <Text style={{ color: 'white' }}>Decline</Text>
        </Pressable>
      </View>
    )}
  </View>
);

/* -------------------- Main Screen -------------------- */
const ConsumerApproveVoucherScreen = () => {
  const [vouchers, setVouchers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const [filters, setFilters] = useState({
    sellerAccount: '',
    funderAccount: '',
    consumerAccount: '',
  });

  /* ---------------- Fetch vouchers ---------------- */
  const fetchVouchers = async () => {
    setLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const email = user.attributes.email;

      const res: any = await API.graphql(
        graphqlOperation(listCombContractVouchers, {
          filter: {
            consumerEmail: { eq: email },
            accStatus: { eq: 'Pending' },
          },
        })
      );

      setVouchers(res?.data?.listCombContractVouchers?.items || []);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not load vouchers.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVouchers();
  }, []);

  /* ---------------- Filters ---------------- */
  const filteredVouchers = useMemo(() => {
    return vouchers.filter(v =>
      (!filters.sellerAccount || v.sellerAccount === filters.sellerAccount) &&
      (!filters.funderAccount || v.funderAccount === filters.funderAccount) &&
      (!filters.consumerAccount || v.consumerAccount === filters.consumerAccount)
    );
  }, [vouchers, filters]);

  /* ---------------- Approve / Decline ---------------- */
  const updateVoucherStatus = async (
    voucher: any,
    status: 'Approved' | 'Declined'
  ) => {
    if (updating) return;
    setUpdating(true);

    try {
      // 1️⃣ Update voucher status
      await API.graphql(
        graphqlOperation(updateCombContractVoucher, {
          input: {
            id: voucher.id,
            accStatus: status,
          },
        })
      );

      // 2️⃣ Message funder
      const messageRes: any = await API.graphql(
        graphqlOperation(createMessages, {
          input: {
            senderEmail: voucher.consumerEmail,
            receiverEmail: voucher.funderEmail,
            messageBody: `The consumer has ${status.toLowerCase()} a COMB voucher from ${voucher.sellerName}.`,
          },
        })
      );

      // 3️⃣ Notification to funder
      if (messageRes?.data?.createMessages) {
        await API.graphql(
          graphqlOperation(sendNotification, {
            riderEmail: voucher.funderEmail,
            title: 'MiFedha: COMB Voucher Update',
            body: `A COMB voucher from ${voucher.sellerName} was ${status.toLowerCase()} by the consumer.`,
          })
        );
      }

      // 4️⃣ Update UI
      setVouchers(prev =>
        prev.map(v =>
          v.id === voucher.id ? { ...v, accStatus: status } : v
        )
      );
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not update voucher.');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Filters */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          placeholder="Seller Account"
          value={filters.sellerAccount}
          onChangeText={t =>
            setFilters(f => ({ ...f, sellerAccount: t }))
          }
          style={styles.input}
        />
        <TextInput
          placeholder="Funder Account"
          value={filters.funderAccount}
          onChangeText={t =>
            setFilters(f => ({ ...f, funderAccount: t }))
          }
          style={styles.input}
        />
        <TextInput
          placeholder="Consumer Account"
          value={filters.consumerAccount}
          onChangeText={t =>
            setFilters(f => ({ ...f, consumerAccount: t }))
          }
          style={styles.input}
        />
      </View>

      {/* List */}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredVouchers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <VoucherCard
              voucher={item}
              onApprove={(v: any) => updateVoucherStatus(v, 'Approved')}
              onDecline={(v: any) => updateVoucherStatus(v, 'Declined')}
            />
          )}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      )}
    </View>
  );
};

/* -------------------- Styles -------------------- */
const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
    marginRight: 4,
    borderRadius: 4,
  },
  voucherCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConsumerApproveVoucherScreen;
