import React, { useState, useEffect } from 'react';

import {View, Text, Alert, useWindowDimensions, ScrollView, Pressable } from 'react-native';



import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';


import {  graphqlOperation, API,Auth} from 'aws-amplify';
import { getAgent, getCompany, getSAgent } from '../../../src/graphql/queries';
import { RotateInUpLeft } from 'react-native-reanimated';

import styles from './styles';

interface Agent {
  id: string;
  latitude: string;
  longitude: string;
  MFNWithdrwlFee: number;
  name: string;
  phonecontact: string;
  town: string;
  totalDiscount: number;
  MFN:number;
  MFK:number;
  companyDisc:number

}

interface Props {
  Agent: Agent;
  isSelected?: boolean;
}

const ViewSMDeposts = ({ Agent, isSelected = false }: Props) => {

  const[MFKWithdrwlFee, setMFKWithdrwlFee] = useState("");
   const[CompWithdrwlFee, setCompWithdrwlFee] = useState("");
   const[MFKWDFeeFrmCmp, setMFKWDFeeFrmCmp] = useState("");
   const[MFNWDFFrmCmp, setMFNWDFFrmCmp] = useState("");
   const[UsrWthdrwlFees, setUsrWthdrwlFees] = useState("");
  const width = useWindowDimensions().width;
  const[isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate('WithdrawFundsFromMap', {
      phonecontact: Agent.phonecontact,
    });
  };

  const fetchMFNDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const MFNDtls :any= await API.graphql(
        graphqlOperation(getAgent,{phonecontact:Agent.phonecontact})
        );
      
        const sagentregno = MFNDtls.data.getAgent.sagentregno;
     
        
    
        const fetchMFKDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const MFNDtlsz :any= await API.graphql(
              graphqlOperation(getSAgent,{saPhoneContact:sagentregno})
              );
              setMFKWithdrwlFee(MFNDtlsz.data.getSAgent.MFKWithdrwlFee);

            
              const fetchCompDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const MFNDtlszz :any= await API.graphql(
                    graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                    );
                    setCompWithdrwlFee(MFNDtlszz.data.getCompany.companyComDisc); 
                    setUsrWthdrwlFees(MFNDtlszz.data.getCompany.UsrWthdrwlFees); 
                    setMFNWDFFrmCmp(MFNDtlszz.data.getCompany.agentCom);
                    setMFKWDFeeFrmCmp(MFNDtlszz.data.getCompany.sagentCom);
                    
                     
                  
                   
                } catch (error) {
                    
                  }
             
                setIsLoading(false);
                            }
                            await fetchCompDtls();
             
          } catch (error) {
              
            }
       
          setIsLoading(false);
                      }

                      await fetchMFKDtls();
       
    } catch (error) {
        
      }
 
   

    setIsLoading(false);
      
    }
  
    
    useEffect(() => {
      fetchMFNDtls();
    }, []);

  return (
    <View style={[styles.pageContainer, isSelected && { zIndex: 5 }]}>
      <Pressable
        onPress={handlePress}
        style={[
          styles.card,
          isSelected && {
            borderColor: '#007AFF',
            borderWidth: 2,
            transform: [{ scale: 1.03 }],
            backgroundColor: '#f0f8ff',
          },
        ]}
      >
        <Text style={styles.prodInfo}> {Agent.name} | {Agent.phonecontact} || {'\n'}
          <Text style={styles.label}>Fee: {parseFloat(UsrWthdrwlFees)*100}% [-{Agent.MFNWithdrwlFee}% | -{MFKWithdrwlFee}% 
          | -{parseFloat(CompWithdrwlFee)}%]
          {Agent.MFN} {Agent.MFK} {Agent.companyDisc} </Text > || Withdraw</Text>

      </Pressable>
    </View>
  );
};

export default React.memo(ViewSMDeposts);
