import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Section = ({ title, options }) => (
  <View style={styles.clientsView}>
    <Text style={styles.salesText}>{title}</Text>
    <View style={styles.viewForClientsAndTitle}>
      {options.map(({ label, onPress, style }, index) => (
        <Pressable key={index} onPress={onPress} style={style || styles.viewForClientsPressables}>
          <LinearGradient
            colors={['#FF8C00', '#00BFFF']} // Orange to Sky Blue gradient
            start={{ x: 0, y: 0 }} // Gradient starts from the top left (vertical direction)
            end={{ x: 1, y: 1 }}   // Gradient ends at the bottom right (vertical and horizontal)
            style={styles.clientsPressableGradient}
          >
            <Text style={styles.salesPressableText}>{label}</Text>
          </LinearGradient>
        </Pressable>
      ))}
    </View>
  </View>
);



const MyLoanAccount = () => {

  const navigation = useNavigation()

  const VwPal2BizLners = () => {
    navigation.navigate('VwPal2BizLners');
  };

  const SI2VwBiz2PalLoanees = () => {
    navigation.navigate('SI2VwBiz2PalLoanees');
  };
  const SI2VwBiz2BizLoaners = () => {
    navigation.navigate('SI2VwBiz2BizLoaners');
  };

  const SI2VwBiz2BizLoanees = () => {
    navigation.navigate('SI2VwBiz2BizLoanees');
  };

  const SI2VwBiz2PalLoaners = () => {
    navigation.navigate('VwBiz2PalLners');
  };

  const CrtBusinessss = () => {
    navigation.navigate('CrtBusinesss');
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

  const SgnIn2VwRevenueShare = () => {
    navigation.navigate('SgnIn2VwRevenueShare');
  };

  const PayCash = () => {
    navigation.navigate('PayCash');
  };

  const VwPalLners = () => {
    navigation.navigate('VwPalLners');
  };

  const VwCashPaySent = () => {
    navigation.navigate('VwCashPaySent');
  };

  const MakeNVwPayPalDpsits = () => {
    navigation.navigate('MakeNVwPayPalDpsits');
  };

  const VwPal2BizLnees = () => {
    navigation.navigate('VwPal2BizLnees');
  };

  const VwPalLnees = () => {
    navigation.navigate('VwPalLnees');
  };

  const Vw2GrntPal2Biz = () => {
    navigation.navigate("Vw2GrntPal2Biz");
  };

  const ItemAds = () => {
    navigation.navigate('ItemAds');
  };

  const Vw2GrntPal2Pal = () => {
    navigation.navigate('Vw2GrntPal2Pal');
  };

  const PersonelVw2GrntB2P = () => {
    navigation.navigate('PersonelVw2GrntB2P');
  };

  const PersonelVw2GrntB2B = () => {
    navigation.navigate('PersonelVw2GrntB2B');
  };

  const giveBizna = () => {
    navigation.navigate('giveBizna');
  };

  const TakeOverBizna = () => {
    navigation.navigate('TakeOverBizna');
  };

  

  const AddBeneficiaryProduct = () => {
    navigation.navigate('AddBeneficiaryProduct');
  };

  

  const UpdateBizAc = () => {
    navigation.navigate('UpdateBizAc');
  };

  const ViewBenProds = () => {
    navigation.navigate('ViewBenProds');
  };

  const BoostPooledBen = () => {
    navigation.navigate('BoostPooledBen');
  };

  const Benefits = () => {
    navigation.navigate('Benefits');
  };

  const ShareCredSlsRevss = () => {
    navigation.navigate('ShareCredSlsRevss');
  };

  const ViewBiznaShareRec = () => {
    navigation.navigate('ViewBiznaShareRec');
  };

  const ViewBiznaShareSent = () => {
    navigation.navigate('ViewBiznaShareSent');
  };

  const ShareCredSlsRev2Biz = () => {
    navigation.navigate('ShareCredSlsRev2Biz');
  };

  const ViewBiznaShareRecBiz = () => {
    navigation.navigate('ViewBiznaShareRecBiz');
  };
  
  const ViewAsProdCreator = () => {
    navigation.navigate('ViewAsProdCreator');
  };
  
  


  return (
    <SafeAreaView>
      <ScrollView>
      <LinearGradient
            colors={['#FF8C00', 'skyblue', 'white']} // Linear gradient for orange hues
            start={{ x: 0, y: 0 }} // Gradient starts from the top left (vertical direction)
            end={{ x: 1, y: 1 }}
            style={styles.clientsPressableGradient}
          >
            
            <Section 
          title="Biz Products"
          options={[
            
            { label: 'Benefit Product (Create)', onPress: AddBeneficiaryProduct, style: styles.ClientsPressables },
            
            { label: 'Benefits (Share or View)', onPress: Benefits, style: styles.ClientsPressables },
            { label: 'Link Beneficiary', onPress: ViewBenProds, style: styles.ClientsPressables },
            { label: 'Boost Pooled Benefits', onPress: BoostPooledBen, style: styles.ClientsPressables },
           
            { label: 'View Product Contributions', onPress: ViewAsProdCreator, style: styles.ClientsPressables },
           
            

          ]}
        />
        
        <Section 
          title="Manage Business"
          options={[
            
            { label: 'Create Biz', onPress: CrtBusinessss, style: styles.ClientsPressables },
            { label: 'Update Biz', onPress: UpdateBizAc, style: styles.ClientsPressables },
            { label: 'Register Sales Officer', onPress: AddPersonelss, style: styles.ClientsPressables },
            { label: 'DeReg Sales Officer', onPress: RmvPersonnelsss, style: styles.ClientsPressables },
            { label: 'View Account', onPress: SgnIn2VwBiznasss, style: styles.ClientsPressables }
          ]}
        />



        <Section 
          title="Grant Credit Sales Requests"
          options={[
            { label: 'Pal2Pal', onPress: Vw2GrntPal2Pal },
            { label: 'Pal2Biz', onPress: Vw2GrntPal2Biz },
            { label: 'Biz2Pal', onPress: PersonelVw2GrntB2P },
            { label: 'Biz2Biz', onPress: PersonelVw2GrntB2B }
          ]}
        />

        <Section 
          title="CreditSales LoanStatus (Biz)"
          options={[
            { label: 'BizPal Loaners', onPress: SI2VwBiz2PalLoaners },
            { label: 'BizPal Loanees', onPress: SI2VwBiz2PalLoanees },
            { label: 'BizBiz Loaners', onPress: SI2VwBiz2BizLoaners },
            { label: 'BizBiz Loanees', onPress: SI2VwBiz2BizLoanees }
          ]}
        />

        <Section 
          title="CreditSales LoanStatus (Pal)"
          options={[
            { label: 'PalPal Loaners', onPress: VwPalLners },
            { label: 'PalPal Loanees', onPress: VwPalLnees },
            { label: 'PalBiz Loaners', onPress: VwPal2BizLners },
            { label: 'PalBiz Loanees', onPress: VwPal2BizLnees }
          ]}
        />

        <Section 
          title="Cash Sales/purchases & Deposits"
          options={[
            { label: 'Cash Sales', onPress: PayCash, style: styles.ClientsPressables },
            { label: 'Make Deposits', onPress: MakeNVwPayPalDpsits, style: styles.ClientsPressables },
            
          ]}
        />

<Section 
          title="Business Cash Transfers "
          options={[
           { label: 'Send Cash to Pal', onPress: ShareCredSlsRevss, style: styles.ClientsPressables },
            { label: 'Send Cash to Biz', onPress: ShareCredSlsRev2Biz, style: styles.ClientsPressables },
            { label: 'View Received Cash (Pal)', onPress: ViewBiznaShareRec, style: styles.ClientsPressables },
            { label: 'View Received Cash (Biz)', onPress: ViewBiznaShareRecBiz, style: styles.ClientsPressables },
            { label: 'View Sent Cash (Biz)', onPress: ViewBiznaShareSent, style: styles.ClientsPressables },
            
          ]}
        />
        
        <Section 
          title="Biz Adverts"
          options={[
            { label: 'Make Adverts', onPress: ItemAds, style: styles.ClientsPressables },
            { label: 'Delete Adverts', onPress: SgnIn2RemoveSlAd, style: styles.ClientsPressables },
            { label: 'Transfer Ownership', onPress: giveBizna, style: styles.ClientsPressables },
            { label: 'Receive Ownership', onPress: TakeOverBizna, style: styles.ClientsPressables },
            
          ]}
        />


</LinearGradient>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default MyLoanAccount;
