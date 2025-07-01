import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {
  updateReqLoanChama,
} from '../../../../src/graphql/mutations';
import { graphqlOperation, API, Auth } from 'aws-amplify';

import styles from './styles';
import { getReqLoanChama } from '../../../../src/graphql/queries';

export interface SMAccount {
  SMAc: {
    id: string;
    loaneePhone: string;
    amount: number;
    repaymentAmt: number;
    repaymentPeriod: number;
    loaneeName: string;
    installmentAmount: number;
    paymentFrequency: number;
    confirm1:string,
    confirm2:string,
    owner:string
  };
}

const SMCvLnStts = (props: SMAccount) => {
  const {
    SMAc: {
      loaneePhone,
      amount,
      owner,
      repaymentAmt,
      repaymentPeriod,
      loaneeName,
      id,
      installmentAmount,
      paymentFrequency,
      confirm1,
      confirm2
    },
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const SndChmMmbrMny = () => {
    navigation.navigate('ChmCovLons', { id });
  };

  const SndChmMmbrMny2 = () => {
    navigation.navigate('DeclChamaReq', { id });
  };

  const FetchSign4 = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setIsLoading(true);
    try {
      const result: any = await API.graphql(
        graphqlOperation(getReqLoanChama, { id })
      );

      const { signatory2, confirm1, confirm2, owner, signatory3 } = result.data.getReqLoanChama;
      

      if (confirm1 !== 'YES') {
        Alert.alert('Info', 'Signatory 2 has not yet confirmed');
      }
      
      else if (confirm2 !== 'YES') {
        Alert.alert('Info', 'Signatory 2 has not yet confirmed');
      }

      else if (owner !== userInfo.attributes.email) {
        Alert.alert('Info', 'You are not the group main admin');
      }
      
      else {
        SndChmMmbrMny();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
    setIsLoading(false);
  };
  const FetchSign2 = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setIsLoading(true);
    try {
      const result: any = await API.graphql(
        graphqlOperation(getReqLoanChama, { id })
      );

      const { signatory2, confirm1 } = result.data.getReqLoanChama;

      if (userInfo.attributes.email !== signatory2) {
        Alert.alert('Error', 'You are not signatory 2');
      } else if (confirm1 === 'YES') {
        Alert.alert('Info', 'You have already confirmed');
      } else {
        await API.graphql(
          graphqlOperation(updateReqLoanChama, {
            input: { id, confirm1: 'YES' },
          })
        );
        Alert.alert('Success', 'Signatory 2 has confirmed successfully.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
    setIsLoading(false);
  };

  const FetchSign3 = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    setIsLoading(true);
    try {
      const result: any = await API.graphql(
        graphqlOperation(getReqLoanChama, { id })
      );

      const { signatory3, confirm1, confirm2 } =
        result.data.getReqLoanChama;

      if (userInfo.attributes.email !== signatory3) {
        Alert.alert('Error', 'You are not signatory 3');
      } else if (confirm1 !== 'YES') {
        Alert.alert('Info', 'The second signatory has not confirmed');
      } else if (confirm2 === 'YES') {
        Alert.alert('Info', 'You have already confirmed this one');
      } else {
        await API.graphql(
          graphqlOperation(updateReqLoanChama, {
            input: { id, confirm2: 'YES' },
          })
        );
        Alert.alert('Success', 'Signatory 3 has confirmed successfully.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
    setIsLoading(false);
  };

  const updtRecAc2 = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await API.graphql(
        graphqlOperation(updateReqLoanChama, {
          input: { id, WithdrawCnfrmtn2: 'YES' },
        })
      );
      Alert.alert('Success', 'Withdraw confirmation 2 submitted.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
    setIsLoading(false);
  };

  const updtRecAc3 = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await API.graphql(
        graphqlOperation(updateReqLoanChama, {
          input: { id, WithdrawCnfrmtn3: 'YES' },
        })
      );
      Alert.alert('Success', 'Withdraw confirmation 3 submitted.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <Text style={styles.prodInfo}>
          Hi! it's {loaneeName}. Kindly Loan me Ksh. {amount}. I commit to repay
          at a compound interest of {repaymentAmt}% per year within{' '}
          {repaymentPeriod} days. Each Installment is {installmentAmount} after
          every {paymentFrequency} days. You can reach me through {loaneePhone}.
        </Text>
        <Text style={styles.prodInfo}>
          Confirmation 1: {confirm1}
        </Text>
        <Text style={styles.prodInfo}>
          Confirmation 2: {confirm2}
        </Text>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={{ marginTop: 10 }}
          />
        )}
      </View>

      <View style={styles.buttonRow}>
        <Pressable onPress={FetchSign4} style={styles.loanFriendButton}>
          <Text>Accept</Text>
        </Pressable>

        <Pressable onPress={SndChmMmbrMny2} style={styles.redeemButton}>
          <Text>Decline</Text>
        </Pressable>

        <Pressable onPress={FetchSign2} style={styles.loanFriendButton}>
          <Text>Signatory 2 Confirm</Text>
        </Pressable>

        <Pressable onPress={FetchSign3} style={styles.redeemButton}>
          <Text>Signatory 3 Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SMCvLnStts;
