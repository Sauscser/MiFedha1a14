import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';

const MyLoanAccount = (props) => {
  const navigation = useNavigation();
  const [id, setID] = useState("");
  const [ChamaNMember, setChamaNMember] = useState("");

  // Navigation functions for each button
  const CreateChmss = () => navigation.navigate('ViewGrpApplications');
  const AddChmMembrssss = () => navigation.navigate('AddChmMembrsss');
  const SgnIn2RemoveMmbrss = () => navigation.navigate('RemoveChmMbrs', { id });
  const DissolveChmss = () => navigation.navigate('DissolveChms');
  const ChmSignInsss = () => navigation.navigate('ChmSignInss');
  const ChmLnsRec = () => navigation.navigate('ChmLnsRec');
  const ChamSignIn3ss = () => navigation.navigate('ChamSignIn3s');
  const ChamSignIn4ss = () => navigation.navigate('ChamSignIn4s');
  const ChmSignIn6ss = () => navigation.navigate('ChmSignIn6s');
  const ChmMmbrMmbrsss = () => navigation.navigate('ElimChmVwMbrshpMembrs');
  const ChamaMmbrRemtss = () => navigation.navigate('ElimChmVwRmtncMembrs');
  const SignitoryWthdrwFndssss = () => navigation.navigate('SignitoryWthdrwFndsss');
  const SgnIn2VwChmDpstsss = () => navigation.navigate('SgnIn2VwChmDpstss');
  const SgnIn2VwChmWthdrwlsss = () => navigation.navigate('SgnIn2VwChmWthdrwlss');
  const Sgn2CnfrmWthdrwlssss = () => navigation.navigate('Sgn2CnfrmWthdrwlsss');
  const VwGrp2LnCov = () => navigation.navigate('VwGrp2LnCov');
  const UpdateChmAc = () => navigation.navigate('UpdateChmAc');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.adminImage}>
          <View style={styles.clientsView}>
            {/* Loan Section */}
            <Text style={styles.salesText}>Group Advance</Text>
            <View style={styles.viewForClientsAndTitle}>
             
              <LinearGradient
                colors={['#FF8C00', '#00BFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientPressable}
              >
                <Pressable onPress={VwGrp2LnCov} style={styles.clientsPressable}>
                  <Text style={styles.clientsPressableText}>Give Member Advance</Text>
                </Pressable>
              </LinearGradient>
            </View>

            {/* Group Status Section */}
            <Text style={styles.salesPressableText}>Group Status</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={ChmSignInsss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View Group Status</Text>
              </Pressable>
            </LinearGradient>

            {/* Member Status Section */}
            <Text style={styles.salesPressableText}>View Member Status</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={ChmLnsRec} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Member Status</Text>
              </Pressable>
            </LinearGradient>
          </View>

          <View style={styles.clientsView}>
            <Text style={styles.salesText}>Registration</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={AddChmMembrssss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Register Member</Text>
              </Pressable>
              <Pressable onPress={SgnIn2RemoveMmbrss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Deregister Member</Text>
              </Pressable>
            </LinearGradient>
          </View>

          <View style={styles.clientsView}>
            <Text style={styles.salesText}>Group Remittance</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={ChamSignIn4ss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View Members' remittances</Text>
              </Pressable>
              <Pressable onPress={ChamaMmbrRemtss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View My remittances</Text>
              </Pressable>
            </LinearGradient>
          </View>

          <View style={styles.clientsView}>
            <Text style={styles.salesText}>Membership</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={ChmSignIn6ss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View Members</Text>
              </Pressable>
              <Pressable onPress={ChmMmbrMmbrsss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View my Groups</Text>
              </Pressable>
            </LinearGradient>
          </View>

          <View style={styles.clientsView2}>
            <Text style={styles.salesText}>Group Account</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={CreateChmss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Create</Text>
              </Pressable>
              <Pressable onPress={DissolveChmss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Dissolve</Text>
              </Pressable>
            </LinearGradient>

            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={UpdateChmAc} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Update</Text>
              </Pressable>
              <Pressable onPress={ChamSignIn3ss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View</Text>
              </Pressable>
            </LinearGradient>


          </View>

          <View style={styles.clientsView2}>
            <Text style={styles.salesText}>Signatory Works</Text>
            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={Sgn2CnfrmWthdrwlssss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Confirm Group Withdrawals</Text>
              </Pressable>
              <Pressable onPress={SignitoryWthdrwFndssss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>Execute Group Withdrawls</Text>
              </Pressable>
            </LinearGradient>

            <LinearGradient
              colors={['#FF8C00', '#00BFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientPressable}
            >
              <Pressable onPress={SgnIn2VwChmDpstsss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View Group Deposits</Text>
              </Pressable>
              <Pressable onPress={SgnIn2VwChmWthdrwlsss} style={styles.clientsPressable}>
                <Text style={styles.clientsPressableText}>View Group Withdrawals</Text>
              </Pressable>
            </LinearGradient>

            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyLoanAccount;
