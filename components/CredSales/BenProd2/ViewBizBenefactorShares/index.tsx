import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import styles from './styles'; // adjust path as necessary
import { updateBizna, updateLinkBeneficiary2 } from '../../../../src/graphql/mutations';
import { getLinkBeneficiary2 } from '../../../../src/graphql/queries';

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
    benefitStatus:string,
    beneficiaryType:string
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
    beneficiaryType,
    prodCost,
    prodDesc,
    benefitsAmount,
    beneficiaryAc,
    benefitStatus
  } = SMAc;

  const navigation = useNavigation();

  const VwBenefactorContriDtls = () => {
    navigation.navigate("VwBenefactorContriDtls", {
      benefactorAc,
      benefactorPhone,
      beneficiaryAc,
    });
  };

  const [isLoading, setIsLoading] = useState(false)

  const updtSendrAc = async () =>{

    const userInfo = await Auth.currentAuthenticatedUser();
            

    if (isLoading){
      return
    }
    else {setIsLoading(true)}


                       
                        try{
                          const result2 =  await API.graphql(
                              graphqlOperation(getLinkBeneficiary2, {
                                
                                  beneficiaryID:beneficiaryID,
                              })
                            )

                            const benefitStatusz= result2.data.getLinkBeneficiary2.benefitStatus
                            const benefitsAmountz= result2.data.getLinkBeneficiary2.benefitsAmount
                            const owners= result2.data.getLinkBeneficiary2.owner
                           
                            const now = new Date();
                            const currentDate = now.toLocaleDateString();   // e.g., "6/29/2025"
                            const currentTime = now.toLocaleTimeString();   // e.g., "2:25:45 PM"

                            const dateTime = `${currentDate} ${currentTime}`;
                            console.log(dateTime); 
                            // Output: "6/29/2025 2:25:45 PM"

                            if(owners !== userInfo.username)
                            {
                              Alert.alert("You are not the owner of this Business")
                            }

                            else if (benefitsAmountz ===0)
                                                        {Alert.alert("Benefits at zero")}
                            

                            
                            else {
                              const result = await API.graphql(
                              graphqlOperation(updateLinkBeneficiary2, {
                                input:{
                                  beneficiaryID:beneficiaryID,
                                  benefitStatus: benefitStatusz + ", Redeemed at KES " + benefitsAmount + " on " + dateTime,
                                  benefitsAmount:0
                                  
                                }
                              })
                            )
                            const updateResult = result?.data?.updateLinkBeneficiary2;
                            
                            if (updateResult)
                            {
                            Alert.alert("Successful! Beneficiary may collect item")
                            }
                            else {
                              Alert.alert("Redemption was unsuccessful")
                              }
                            }

                            
  
                        }
                        catch(error){
                          console.log(error)
                          if (error){Alert.alert("Update app or call customer care")
                          return;}
                        }
setIsLoading(false)
                      }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <Text style={styles.prodName}>{prodName}</Text>

        <Text style={styles.prodInfo}><Text style={styles.label}>Benefactor Name:</Text> {creatorName}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Beneficiary Phone:</Text> {beneficiaryPhone}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Status:</Text> {benefitStatus}</Text>
        
        <Text style={styles.prodInfo}><Text style={styles.label}>Cost:</Text> KES {prodCost.toLocaleString()}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Benefits Pooled:</Text> KES {benefitsAmount.toLocaleString()}</Text>
       <Text style={styles.prodDesc}>{prodDesc}</Text>
      </View>

      <View style={styles.buttonRow}>
        <Pressable onPress={VwBenefactorContriDtls} style={styles.loanFriendButton}>
          <Text style={styles.buttonText}>View My Contributions</Text>
        </Pressable>

        
<Pressable
onPress={updtSendrAc}
style = {styles.loanFriendButton}
>  {isLoading? (<ActivityIndicator color = "#fff"/>)
: (<Text style = {styles.buttonText}>Redeem Benefits</Text> )}          
             
</Pressable>
      </View>
    </View>
  );
};

export default SMCvLnStts;
