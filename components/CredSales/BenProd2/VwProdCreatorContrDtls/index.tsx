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
beneficiaryAc:string,
prodName: string,
creatorName: string,
prodCost: number,
prodDesc: string,
createdAt: string,
amount:number

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
        beneficiaryAc,
        amount
    
   }} = props ;

   const navigation = useNavigation();
   
   const VwBenefactorContriDtls = () => {
    navigation.navigate("VwBenefactorContriDtls", 
      {benefactorAc, benefactorPhone, creatorName, prodName})
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
                      Benefits Contributed: {amount}                  
                    </Text> 

                    


        </View >
        <View style = {styles.viewForPressables2}>

 


</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts