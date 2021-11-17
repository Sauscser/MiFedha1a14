import React, {useEffect, useState} from 'react';

import {  updateCompany, updateGroup, updateGrpMembers, updateSMAccount} from '../../../src/graphql/mutations';
import {  getCompany, getGroup, getGrpMembers, getSMAccount } from '../../../src/graphql/queries';
import {  graphqlOperation, API,Auth} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import { updateBankAdmin } from '../../../src/graphql/mutations';


  


const UpdtSMPW = (props) => {
  const navigation = useNavigation();
  
  const[isLoading, setIsLoading] = useState(false);
  const[ownr, setownr] = useState(null);
  const[names, setName] = useState(null);
  const[email, setAWSEmail] = useState(null);
  const route = useRoute();
  

  useEffect(() => {
  const fetchUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    
    setName(userInfo.username);
    
    setAWSEmail(userInfo.attributes.email);   
  };
  
    fetchUser();
  }, []);

  const moveToAbt = () => {
    navigation.navigate("CompAbts");
  };

  const moveToPolicy = () => {
    navigation.navigate("CompPolicys");
  };

  const moveToPrivacy = () => {
    navigation.navigate("CompPrivacys");
  };

  const moveToTC = () => {
    navigation.navigate("CompTCs");
  };

  
      
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Congratulations {names}, 
                    You have successfully created your Mifedha Single Member Account. 

                    Please click on the map icon on the bottom tab 
                    to search the nearest or most convenient MFNdogo
                    outlet and Load money to your account so that you
                     can enjoy our products. 

                    To request a Loan from a Friend or Chama or Seller, 
                    Please go to "MyAc", "Account", "Update", 
                    "RequestLn" and enter the prospective Loaner's Phone Number.

                    The Loaner is then allowed to Loan you.

                    Have a Healthy and Rich Friendship.
                    </Text>

                    <Pressable onPress={moveToAbt}
                    style={styles.sendLoanButton}>
                        <Text style={styles.sendLoanButtonText}>
                            About
                        </Text>
                    </Pressable>



                    <Pressable onPress={moveToPolicy}
                    style={styles.sendLoanButton}>
                        <Text style={styles.sendLoanButtonText}>
                            Policy
                        </Text>
                    </Pressable>



                    <Pressable onPress={moveToPrivacy}
                    style={styles.sendLoanButton}>
                        <Text style={styles.sendLoanButtonText}>
                            Privacy
                        </Text>
                    </Pressable>


                    <Pressable onPress={moveToTC}
                    style={styles.sendLoanButton}>
                        <Text style={styles.sendLoanButtonText}>
                            Terms and Conditions
                        </Text>
                    </Pressable>
                  </View>
        
                  
                                   
        
                  
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default UpdtSMPW;