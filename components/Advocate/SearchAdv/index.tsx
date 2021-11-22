import React from 'react';
import {View, Text,ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      name:string,
      phonecontact: string,
      
      officeLoc: number,  
      
      
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         name,
         phonecontact,
         officeLoc,  
         
         
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Advocate Name: {name}             
                    </Text>
            </View>
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Phone : {phonecontact}                 
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Location: {officeLoc}
                    </Text>
                   
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts