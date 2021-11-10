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

  
      
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Congratulations {names}, 
                    You have successfully created your Account. 
                    Your Loan Acceptance code is {email}. 
                    Please go to "MyAc", "Account", "Update", 
                    "AccCd" to 
                    update this loan Acceptancecode
                    as soon as possible 
                    to a more convinient pass code.
                    It serves as your authorisation to be 
                    loaned. Share it with your prospective Loaner
                    so as to avoid malicious loaners.
                    Please visit the nearest MFNdogo outlet to deposit 
                    money.

                    Thankyou.
                    </Text>
                  </View>
        
                  
                                   
        
                  
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default UpdtSMPW;