import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList,ScrollView} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';

import styles from './styles';
import { getSMAccount } from '../../../src/graphql/queries';


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