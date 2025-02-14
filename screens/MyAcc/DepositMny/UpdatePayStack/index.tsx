// UpdatePayStack.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ActivityIndicator, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getCompany, getSMAccount, getExRates } from '../../../../src/graphql/queries';
import { createFloatReduction, updateCompany, updateSMAccount } from '../../../../src/graphql/mutations';

const UpdatePayStack = () => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const amount = parseFloat(route.params.amounts);

  useEffect(() => {
    updateUserBalance();
  }, []);

  const updateUserBalance = async () => {
    setIsLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userEmail = user.attributes.email;
      const accountData = await API.graphql(graphqlOperation(getSMAccount, { awsemail: userEmail }));
      const account = accountData.data.getSMAccount;
      
      const exchangeData = await API.graphql(graphqlOperation(getExRates, { cur: 'Nig' }));
      const exchangeRate = parseFloat(exchangeData.data.getExRates.buyingPrice);
      const convertedAmount = amount * exchangeRate;
      
      await API.graphql(graphqlOperation(createFloatReduction, {
        input: {
          depositerid: account.nationalid,
          agContact: 'Paystack',
          agentName: 'Paystack',
          userName: account.name,
          amount: convertedAmount,
          status: 'AccountActive',
        },
      }));

      await API.graphql(graphqlOperation(updateSMAccount, {
        input: {
          awsemail: userEmail,
          balance: (parseFloat(account.balance) + convertedAmount).toFixed(2),
          ttlDpstSM: (parseFloat(account.ttlDpstSM) + convertedAmount).toFixed(2),
        },
      }));

      const companyData = await API.graphql(graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" }));
      const company = companyData.data.getCompany;

      await API.graphql(graphqlOperation(updateCompany, {
        input: {
          AdminId: "BaruchHabaB'ShemAdonai2",
          ttlUsrDep: parseFloat(company.ttlUsrDep) + convertedAmount,
          agentFloatOut: parseFloat(company.agentFloatOut) + convertedAmount,
        },
      }));

      Alert.alert(`${exchangeData.data.getExRates.symbol} ${convertedAmount} deposited in ${account.name}'s account`);
    } catch (error) {
      Alert.alert('Error', 'Transaction update failed. Try again.');
    }
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{isLoading && <ActivityIndicator size="large" color="#e58d29" />}</View>
    </SafeAreaView>
  );
};

export default UpdatePayStack;
