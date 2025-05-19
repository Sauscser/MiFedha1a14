import React from 'react';
import {View, Text, ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      sokokntct: string,
      
      
      sokoname:string,
      sokoprice: number,
      
    
      sokolnprcntg:number
      sokodesc:string,
      sokolpymntperiod:number,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         sokokntct,  
         
         sokoname,
         sokoprice,
        
        
         sokodesc,  
         sokolnprcntg,
         sokolpymntperiod,

                 
   }} = props ;

 
    return (
        <View style = {styles.pageContainer}>              
          <View style={styles.card}>

          <Text style={styles.prodInfo}><Text style={styles.label}>Bizna Contact:</Text> {sokokntct}</Text>
          <Text style={styles.prodInfo}><Text style={styles.label}>Item Name:</Text> {sokoname}</Text>
         <Text style={styles.prodInfo}><Text style={styles.label}>Item Price:</Text> KES {sokoprice.toLocaleString()}</Text>
        <Text style={styles.prodInfo}><Text style={styles.label}>Percentage Discount:</Text> {sokolnprcntg.toLocaleString()}</Text>
        <Text style={styles.prodDesc}>{sokodesc}</Text>
     
                   
        </View>
                
        </View>
    );
}; 

export default ViewSMDeposts