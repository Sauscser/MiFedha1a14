import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
benefactorAc: string,
benefactorPhone: string,
beneficiaryPhone:string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
createdAt: string,
benefitsAmount:number,
beneficiaryAc:string

    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        id ,
        benefactorAc,
        benefactorPhone,
        beneficiaryPhone,
        prodName,
        creatorName,
        prodCost,
        prodDesc,
        benefitsAmount,
        beneficiaryAc
    
   }} = props ;

   const navigation = useNavigation();
   
   const VwBenefactorContriDtls = () => {
    navigation.navigate("VwBenCreatorContriDtls", 
      {benefactorAc, benefactorPhone, beneficiaryAc, prodName})
}

    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                    
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Product Cost: {prodCost}                  
                    </Text> 
                   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Benefits Pooled: {benefitsAmount}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Beneficiary Name: {beneficiaryPhone}                  
                    </Text>

                    

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      More Description: {prodDesc}                  
                    </Text> 


        </View >
        <View style = {styles.viewForPressables2}>

          
<View>
<Pressable
onPress={VwBenefactorContriDtls}
style = {styles.loanFriendButton}
>            
  <Text>View Client's Contributions</Text>            
</Pressable>
</View>   


</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts