import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
     
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
       
        benefactorAc,
        benefactorPhone,
        prodName,
        creatorName,
        prodCost,
        prodDesc,
        benefitsAmount
    
   }} = props ;

   const navigation = useNavigation();
   


    return (
        
           
                  
            
            <View style = {styles.container} >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Benefactor Business/Company: {creatorName}                 
                    </Text>

                                  <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Phone Phone: {benefactorAc}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Product Cost: {prodCost}                  
                    </Text> 
                   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Benefits Shared: {benefitsAmount}                  
                    </Text> 

                    <Text style = {styles.repaymentPeriod} 
                   >                       
                       {/* repaymentPeriod*/}
                      More Description: {prodDesc}                  
                    </Text> 


        </View >
        
     
       
    );
}; 

export default SMCvLnStts