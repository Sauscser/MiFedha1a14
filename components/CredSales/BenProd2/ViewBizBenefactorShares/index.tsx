import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import { View, Text, Pressable, Alert } from 'react-native';
import styles from './styles'; // adjust path as necessary
import { updateBizna, updateLinkBeneficiary2 } from '../../../../src/graphql/mutations';

export interface SMAccount {
  SMAc: {
    beneficiaryID: string;
    benefactorAc: string;
    benefactorPhone: string;
    beneficiaryPhone: string;
    prodName: string;
    creatorName: string;
    prodCost: number;
    prodDesc: string;
    createdAt: string;
    benefitsAmount: number;
    benefitsID: string;
    beneficiaryAc: string;
  };
}

const SMCvLnStts = ({ SMAc }: SMAccount) => {
  const {
    beneficiaryID,
    benefactorAc,
    benefactorPhone,
    beneficiaryPhone,
    prodName,
    creatorName,
    prodCost,
    prodDesc,
    benefitsAmount,
    beneficiaryAc,
  } = SMAc;

  const navigation = useNavigation();

  const VwBenefactorContriDtls = () => {
    navigation.navigate("VwBenefactorContriDtls", {
      benefactorAc,
      benefactorPhone,
      beneficiaryAc,
    });
  };

  const updtSendrAc = async () =>{
                       
                        try{
                          const result =  await API.graphql(
                              graphqlOperation(updateLinkBeneficiary2, {
                                input:{
                                  beneficiaryID:beneficiaryID,
                                  
                                  benefitStatus:"Redeemed at " + benefitsAmount
                                 
                                  
                                }
                              })
                            )

                            const updateResult = result?.data?.updateLinkBeneficiary2;
                            
                            if (updateResult)
                            {
                            Alert.alert("Benefits successfully redeemed")
                            }
                            else {
                              Alert.alert("Redemption was unsuccessful")
                              }
  
                        }
                        catch(error){
                          console.log(error)
                          if (error){Alert.alert("Update app or call customer care")
                          return;}
                        }

                      }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <Text style={styles.prodName}>{prodName}</Text>

        <Text style={styles.prodInfo}><Text style={styles.label}>Creator:</Text> {creatorName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Beneficiary Phone:</Text> {beneficiaryPhone}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Cost:</Text> KES {prodCost.toLocaleString()}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Benefits Pooled:</Text> KES {benefitsAmount.toLocaleString()}</Text>
       <Text style={styles.prodDesc}>{prodDesc}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable onPress={VwBenefactorContriDtls} style={styles.loanFriendButton}>
          <Text style={styles.buttonText}>View My Contributions</Text>
        </Pressable>

        <Pressable onPress={updtSendrAc} style={styles.redeemButton}>
          <Text style={styles.buttonText}>Redeem Benefits</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SMCvLnStts;
