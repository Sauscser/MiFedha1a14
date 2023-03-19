import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  
  Pressable,
  
  SafeAreaView,
  ScrollView,
  
} from 'react-native';
import styles from './styles';

const MyLoanAccount = props => {
  const navigation = useNavigation();
  const[id, setID] =useState("")
  const[ChamaNMember, setChamaNMember] =useState("")


  
  
    const CovCredSlss = () => {
      navigation.navigate('Vw2CredSellCovs');
    };

    const ItemAds = () => {
      navigation.navigate('ItemAds');
    };
  
    const NonCovCredSlsss = () => {
      navigation.navigate('Vw2CredSellNonCovs');
    };
  
    
  
    const CredSlsLneesss = () => {
      navigation.navigate('SgnIn2VwCovCrdSlsLneesss');
    };
  
    const CredSlsLnersss = () => {
      navigation.navigate('ElimCredCvLnrs');
    };
  
    const CredByrLneesss = () => {
      navigation.navigate('SgnIn2VwNCCrdSlsLneess');
    };
    const CredByrLnersss = () => {
      navigation.navigate('ElimCredNonCvLnrs');
    };
  
    const SgnIn2BLCredSlCovss = () => {
      navigation.navigate('SgnIn2BLCredSlCovs');
    };
  
    const SgnIn2BLCredSlNonCovss = () => {
      navigation.navigate('SgnIn2BLCredSlNonCovs');
    };

    const CrtBusinessss = () => {
      navigation.navigate('CrtBusinesss');
    };

    const DissolveBizsss = () => {
      navigation.navigate('DissolveBizss');
    };

    const SgnIn2VwBiznasss = () => {
      navigation.navigate('SgnIn2VwBiznass');
    };

    const ShareCredSlsRevsss = () => {
      navigation.navigate('ShareCredSlsRevss');
    };

    const AddPersonelss = () => {
      navigation.navigate('AddPersonels');
    };

    const RmvPersonnelsss = () => {
      navigation.navigate('RmvPersonnelss');
    };

    const SgnIn2RemoveSlAd = () => {
      navigation.navigate('SgnIn2RemoveSlAd');
    };

    const ViewBiznaShareRec = () => {
      navigation.navigate('ViewBiznaShareRec');
    };

    const SgnIn2VwRevenueShare = () => {
      navigation.navigate('SgnIn2VwRevenueShare');
    };

    const PayCash = () => {
      navigation.navigate('PayCash');
    };

    const VwCashPayRec = () => {
      navigation.navigate('VwCashPayRec');
    };

    const VwCashPaySent = () => {
      navigation.navigate('VwCashPaySent');
    };

    const SgnIn2VwCashSales = () => {
      navigation.navigate('SgnIn2VwCashSales');
    };
  

  return (
    <SafeAreaView>
      <ScrollView>
          

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Manage Business</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>BizAc</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CrtBusinessss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Create</Text>
                    </Pressable>

                    <Pressable
                      onPress={DissolveBizsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Dissolve
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Revenue</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SgnIn2VwBiznasss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>View</Text>
                    </Pressable>

                    <Pressable
                      onPress={ShareCredSlsRevsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                       Share
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Sales Officer</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={AddPersonelss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Register</Text>
                    </Pressable>

                    <Pressable
                      onPress={RmvPersonnelsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      DeReg
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>BlackList Credit Buyers</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={PayCash}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Pal</Text>
                  </Pressable>
                </View>

            

                <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={VwCashPaySent}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Biz</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Pal</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Biz</Text>

                  </Pressable>
                </View>


              </View>
            </View>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Grant Credit Sales Requests</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={PayCash}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Pal</Text>
                  </Pressable>
                </View>

            

                <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={VwCashPaySent}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Biz</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Pal</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Biz</Text>

                  </Pressable>
                </View>


              </View>
            </View>

            
            <View style={styles.clientsView}>
              <Text style={styles.salesText}>View Credit Sales Loan Status</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={PayCash}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Pal</Text>
                  </Pressable>
                </View>

            

                <View style={styles.viewForClientsCategories7}>
                  
                  <Pressable 
                  onPress={VwCashPaySent}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pal2Biz</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Pal</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories7}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Biz2Biz</Text>

                  </Pressable>
                </View>


              </View>
            </View>


            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Cash Sales and purchases</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  
                  <Pressable 
                  onPress={PayCash}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>Pay Cash</Text>
                  </Pressable>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  
                  <Pressable 
                  onPress={VwCashPaySent}
                  
                  style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>View Purchases</Text>

                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories}>
                <Pressable 
                onPress={SgnIn2VwCashSales}
                
                style={styles.viewForClientsPressables}>
                  <Text style={styles.salesPressableText}>View Sales</Text>

                  </Pressable>
                </View>


              </View>
            </View>

            <View style={styles.clientsView5}>
              <Text style={styles.salesText}>BizAdverts and Revenue Sharings</Text>

              <View style={styles.viewForClientsAndTitle}>
             
            

               

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>ViewSharings</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SgnIn2VwRevenueShare}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Bizna </Text>
                    </Pressable>

                    <Pressable
                      onPress={ViewBiznaShareRec}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Partner
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Adverts</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ItemAds}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Make</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2RemoveSlAd}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Delete
                      </Text>
                    </Pressable>
                  </View>
                </View>

              </View>
            </View>

            

    </ScrollView>
    </SafeAreaView> 
    
  );
};

export default MyLoanAccount;