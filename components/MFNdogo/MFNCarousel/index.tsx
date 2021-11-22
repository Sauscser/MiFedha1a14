import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
      
      name: string,  
      phonecontact:string,
      town:string,
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         name,  
         town,
         phonecontact,
        
         
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
         
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       MFNdogo Name: {name}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Contact: {phonecontact}                 
                    </Text>
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts