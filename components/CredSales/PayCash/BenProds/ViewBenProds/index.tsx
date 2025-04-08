import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
benefactorAc: string,
benefactorPhone: string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
createdAt: string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        id ,
        benefactorAc,
        benefactorPhone,
        prodName,
        creatorName,
        prodCost,
        prodDesc,
        createdAt
    
   }} = props ;

   const navigation = useNavigation();
   

   const LinkPalBeneficiary = () => {
    navigation.navigate("LinkPalBeneficiary", {id});
  }

  const LinkBizBeneficiary = () => {
    navigation.navigate("LinkBizBeneficiary", {id});
  }


    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Product Creator: {creatorName}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Product Cost: {prodCost}                  
                    </Text> 
                   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Phone: {benefactorAc}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      More Description: {prodDesc}                  
                    </Text> 


        </View >
        <View style = {styles.viewForPressables2}>
<View>
<Pressable
onPress={LinkPalBeneficiary}
style = {styles.loanFriendButton}
>            
  <Text>Link Pal Beneficiary </Text>            
</Pressable>
</View>   
<View>
<Pressable
onPress={LinkBizBeneficiary}
style = {styles.loanFriendButton}>            
  <Text>Link Biz Beneficiary </Text>            
</Pressable>  
</View>

</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts