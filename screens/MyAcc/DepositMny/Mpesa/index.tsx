import React, {useEffect, useState} from 'react';

import { useNavigation } from '@react-navigation/native';


import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import {createSMAccount, updateCompany} from '../../../../src/graphql/mutations';
import { getCompany, listSMAccounts, } from '../../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';


import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const DepositOptionsScreen = () => {

    
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const PaystackPayment = () => {
    
    navigation.navigate('PaystackPayment', {amount});
    setAmount('');
    setEmail('');
  };

 

  return (
    <LinearGradient
      colors={['#e58d29', 'skyblue']}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <ScrollView>

<View style={styles.formContainer}>
<TextInput
 placeholder="Amount"
  value={amount}
  onChangeText={setAmount}
  style={styles.input}
  keyboardType='decimal-pad'
  editable={true}></TextInput>

  




<View style={styles.passwordContainer}>
                                             <TextInput
                                               placeholder="Main Account Password"
                                           style={styles.passwordInput}
                                                                                
                                           value={email}
                                           onChangeText={setEmail}
                                           secureTextEntry={!isPasswordVisible}
                                           placeholderTextColor="#ccc"
                                                   />
                                           <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                          <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
                                           </TouchableOpacity>
                                           </View>
 
                                          
<TouchableOpacity
onPress={PaystackPayment}
style={styles.button}>
{isLoading ? (
                          <ActivityIndicator color="#fff" />
                        ) : (
                          <Text style={styles.locationText}>Submit</Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </LinearGradient>
            );
          };
          
          const styles = StyleSheet.create({
              gradient: {
                flex: 1,
              },
              container: {
                flex: 1,
                padding: 20,
              },
              loanTitleView: {
                marginBottom: 20,
                alignItems: 'center',
              },
              title: {
                fontSize: 24,
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
              },
              formContainer: {
                backgroundColor: '#ffffff',
                borderRadius: 10,
                padding: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              },
              input: {
                height: 45,
                borderColor: '#ccc',
                borderWidth: 1,
                marginBottom: 15,
                borderRadius: 5,
                paddingLeft: 10,
              },
              button: {
                backgroundColor: '#e58d29',
                paddingVertical: 12,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 20,
              },
              locationContainer: {
                marginVertical: 10,
              },
              locationText: {
                fontSize: 16,
                color: '#333',
              },
              passwordContainer: { flexDirection: 'row', alignItems: 'center', 
                  backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, height:50 },
          passwordInput: { flex: 1, padding: 12 },
            });

export default DepositOptionsScreen;
