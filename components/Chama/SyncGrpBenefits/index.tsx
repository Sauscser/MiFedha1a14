import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text,   ScrollView, Pressable, Alert, ActivityIndicator} from 'react-native';
import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';



import styles from './styles';
import { createChamaDepositSync, createChamaDividendsSync, createChamaLoanSync, updateGroup } from '../../../src/graphql/mutations';
import { getGroup } from '../../../src/graphql/queries';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      grpContact: string,
      grpName: string,
      signitoryContact: string,

      signitoryName:string,
      chamaBenSync:number

    }}

    const SMCvLnStts = (props: SMAccount & { onSyncComplete: () => void }) => {
      const {
        SMAc: { grpContact, 
          grpName, 
          signitoryContact, 
          signitoryName, 
          chamaBenSync },
        onSyncComplete, // Callback function from parent
      } = props;
    
      const navigation = useNavigation();
      const [isLoading, setIsLoading] = useState(false);
      const [isSynced, setIsSynced] = useState(false); // Track if sync has happened
    
      const MFBankAdmin = () => {
        navigation.navigate('SyncGrpBenefits');
      };
    
      const gtUsrDtls4AdminDtls = async () => {
        if (isLoading || isSynced) return; // Prevent multiple clicks
        setIsLoading(true);
    
        try {
          const resp: any = await API.graphql(graphqlOperation(getGroup, { grpContact }));
          if (!resp?.data?.getGroup) throw new Error("Group not found");
    
          const { BranchNu, SignatoryEmail, BankAdminEmail } = resp.data.getGroup;
    
          await API.graphql(
            graphqlOperation(updateGroup, {
              input: { grpContact, chamaBenSync: 0 },
            })
          );
    
          await API.graphql(
            graphqlOperation(createChamaDepositSync, {
              input: {
                amount: Number(chamaBenSync) || 0,
                GrpAc: grpContact,
                GrpAdmEmail: SignatoryEmail,
                BankAdminEmail,
                ChamaName: grpName,
                BankName: "Equity",
                BranchNu:BranchNu,
                transactionType: "chamaBenSync",
                status: "AccountActive",
              },
            })
          );
    
          setIsSynced(true); // Mark as synced to disable button
          if (onSyncComplete) {
            onSyncComplete(); // ✅ Call parent function to refresh screen
          } // Call parent function to refresh screen
          MFBankAdmin();
        } catch (error) {
          console.error("Sync error:", error);
          Alert.alert("Sync Failed", error.message || "An error occurred");
        } finally {
          setIsLoading(false);
        }
      };
    
      return (
        <View style={styles.pageContainer}>
          <View style={styles.card}>
          <Text style={styles.prodInfo}><Text style={styles.label}>Group Name:</Text> {grpName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Group Account:</Text> {grpContact}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Group Admin Contact:</Text> {signitoryContact}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Group Admin Name:</Text> {signitoryName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Sync Amount:</Text> KES {chamaBenSync.toFixed(2)}</Text>
      
          </View>
    
          <View style={styles.buttonRow}>
          <Pressable
          onPress={gtUsrDtls4AdminDtls}
          style={[styles.loanFriendButton, isSynced && { backgroundColor: "gray" }]} // Disable style
          disabled={isSynced || isLoading} // Prevent clicking again
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="blue" /> // 🔄 Show loader when syncing
          ) : (
            <Text>{isSynced ? "Synced" : "Click to sync"}</Text>
          )}
        </Pressable>
          </View>
        </View>
      );
    };

export default SMCvLnStts