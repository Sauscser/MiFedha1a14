import React from 'react';
import { Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      termsNconditions: string,
      
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      termsNconditions,
      
   }} = props ;
   
    return (
                
            <ScrollView >
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {termsNconditions}               
                    </Text>
            </ScrollView>
            
                     
        
                
        
    );
}; 

export default CredSlrCvLnStts