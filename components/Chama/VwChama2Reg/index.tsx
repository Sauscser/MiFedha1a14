import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
      bankAdminEmail: string,
      ChamaAcNu: string,

      createdAt:string

    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        id ,
        bankAdminEmail,
        ChamaAcNu,
        createdAt
        
   }} = props ;

   const navigation = useNavigation();
   
   const VwChamaApplications = () => {
    navigation.navigate("CreateChms", 
      {id, 
        bankAdminEmail, 
        ChamaAcNu,
        }
    )
}


    return (
        
             <View style = {{marginTop:"10%", justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'}}>
                  
            
            <View style = {styles.container}>              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Chama Account: {ChamaAcNu}                 
                    </Text>
                                        
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Applied On: {createdAt}                  
                    </Text> 
                   
                    


        </View >
        <View style = {styles.viewForPressables2}>
<View>
<Pressable
onPress={VwChamaApplications}
style = {styles.loanFriendButton}
>            
  <Text>Click to Proceed to Create</Text>            
</Pressable>
</View>   


</View>
       </View> 

        
                
       
    );
}; 

export default SMCvLnStts