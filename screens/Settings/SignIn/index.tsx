import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getCompany} from '../../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 
} from 'react-native';
import styles from './styles';



const AdminSignIn = (props) => {  
  const navigation = useNavigation();

  const [PWOnes, setPWOne] = useState("");
  const [PWTwos, setPWTwo] = useState("");  



  const moveToRegAdmin = () => {
    navigation.navigate("SttinsHm");
  };

  

  const CompCreation = async () => {
    try {
      await API.graphql(
        graphqlOperation(createCompany, {
          input: {
            AdminId: "BaruchHabaB'ShemAdonai2",
            phoneContact: "0724071582, 0711852707",
            companyEmail: "myfedha@gmail.com",
            termsNconditions: "TERMS AND CONDITIONS",
            alert: "Keeping track of your money is prudent",
            about: "My monies tracker",
            policy: "We are here to serve you",
            privacy: "Our transactions with you are secure",
            recom: "Be alert for any",
            pw1: "chrubaatainadoanuiheloechlemehalamo7nuviabasheyimmasha",
            pw2: "masheelraisinadoanuiheloeinadoachadechrubabahashembeinadoa7",
          
            agentwithdrawalFee: 0.025,
            agentCom: 0.001,
            sagentCom: 0.001,
            companyCom: 0.0005,
            AdvCom: 0.6,
            bankAdminCom: 0.025,
            compComg: 0.4,
            sawithdrawalFee: 0.025,
            advuserwithdrawalFee: 0.025,
            bankAdmuserwithdrawalFee: 0.025,
            advocateCoverageFee: 0.03,
            userTransferFee: 0.02,
            userClearanceFee: 0.05,
            searchAdFee: 0,
            createBuzFee: 0,
            crtCompAdsFee: 0,
            crtParaAdsFee: 0,
           
            companyEarningBal: 0,
            companyEarning: 0,
            agentEarningBal: 0,
            agentEarning: 0,
            saEarningBal: 0,
            saarning: 0,
            AdvEarningBal: 0,
            AdvEarning: 0,
            admEarningBal: 0,
            admEarning: 0,
          
            ttlUsrDep: 0,
            ttlUserWthdrwl: 0,
            agentFloatIn: 0,
            agentFloatOut: 0,
            ttlActiveUsers: 0,
            ttlnactvUsrs: 0,
            ttlBLUsrs: 0,
            ttlKFNdgActv: 0,
            ttlKFNdgInActv: 0,
            ttlKNdgBLStts: 0,
            ttlKFKbwActv:0,
            ttlKFKbwInActv: 0,
            ttlKKbwBLStts: 0,
            ttlKFAdvActv: 0,
            ttlKFAdvInActv: 0,
            ttlKAdvBLStts: 0,
            ttlKFAdmActv: 0,
            ttlKFAdmInActv: 0,
            ttlKAdmBLStts: 0,
            ttlSMLnsIn: 0,
            ttlChmLnsIn: 0,
            ttlSellerLnsIn: 0,
            ttlSMLnsInActv: 0,
            ttlChmLnsInActv: 0,
            ttlSellerLnsInActv: 0,
          
            ttlSMLnsInClrd: 0,
            ttlChmLnsInClrd: 0,
            ttlSellerLnsInClrd: 0,
          
            ttlSMLnsInBl: 0,
            ttlChmLnsInBl: 0,
            ttlSellerLnsInBl: 0,
          
            ttlSMLnsInBlThnClr: 0,
            ttlChmLnsInBlThnClr: 0,
            ttlSellerLnsInBlThnClr: 0,
          
            ttlSMLnsInNvrBlThnClr: 0,
            ttlChmLnsInNvrBlThnClr: 0,
            ttlSellerLnsInNvrBlThnClr: 0,
          
            ttlCompTrnsfrEarnings: 0,
            ttlCompBLClrncfrEarnings: 0,
            ttlCompCovEarnings: 0,
            ttlCompEarnings: 0,
            ttlKFNdogoTrnsactionEarnings: 0,
            ttlKFKubwaTrnsactionEarnings: 0,
            ttlKFAdvTrnsactionEarnings: 0,
            ttlKFAdmTrnsactionEarnings: 0,
            maxInterest: 0,
          
            totalLnsRecovered: 0,
          },
        }),
      );

      
      
    } catch (error) {
      if(error) {await fetchExDtls ()}

      else {await fetchExDtls ()}
    }

       
      };

    
      const fetchExDtls = async () => {
        try {
                const ExDtls: any = await API.graphql(
                    graphqlOperation(getCompany, {AdminId: "BaruchHabaB'ShemAdonai2"}
                ),);

                const pw1s = ExDtls.data.getCompany.pw1;
                const pw2s = ExDtls.data.getCompany.pw2;

                


                if(PWOnes === pw1s && PWTwos ===pw2s)
                {
              
                moveToRegAdmin();
              }
              else{
                Alert.alert("Access Denied");

              }
            }

            catch (e)
            {
                console.log(e)
            }    
            setPWOne("");
            setPWTwo("");
      
    
             }

            useEffect(() =>{
                 fetchExDtls();
                }, []
                 );


         return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={PWOnes}
                      onChangeText={setPWOne}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word1</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={PWTwos}
                      onChangeText={setPWTwo}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word2</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={CompCreation}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Sign In
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default AdminSignIn;