import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      beneficiaryID: string,
benefactorAc: string,
benefactorPhone: string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
benefitsAmount: number
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        beneficiaryID ,
        benefactorAc,
        benefactorPhone,
        prodName,
        creatorName,
        prodCost,
        prodDesc,
        benefitsAmount
    
   }} = props ;

   const navigation = useNavigation();
   

   const BenefitPal = () => {
    navigation.navigate("SharePalBenefits", {beneficiaryID});
  }

  const BenefitBiz = () => {
    navigation.navigate("ShareBizBenefits", {beneficiaryID});
  }

  const BenDtls = () => {
    navigation.navigate("VwBenProdsDtls", {beneficiaryID});
  }



    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
            
            <TouchableOpacity style = {styles.container} onPress={BenDtls}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Product Creator: {creatorName}                 
                    </Text>

                                  <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Phone: {benefactorAc}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Product Cost: {prodCost}                  
                    </Text> 
                   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Product Cost: {benefitsAmount}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod} numberOfLines={3}>                       
                       {/* repaymentPeriod*/}
                      More Description: {prodDesc}                  
                    </Text> 


        </TouchableOpacity >
        <View style = {styles.viewForPressables2}>
<View>
<Pressable
onPress={BenefitPal}
style = {styles.loanFriendButton}
>            
  <Text>Share Benefits to (Pal)</Text>            
</Pressable>
</View>   
<View>
<Pressable
onPress={BenefitBiz}
style = {styles.loanFriendButton}>            
  <Text>Share Benefits to (Bizna)</Text>            
</Pressable>  
</View>

</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts