import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/CredSales/BenProd2/ViewAsProdCreator";

import { 
     listLinkBeneficiary2s, listPersonels } from '../../../../src/graphql/queries';
import * as Clipboard from 'expo-clipboard';  


const FetchSMNonCovLns = props => {
    const [Loanees, setLoanees] = useState([]);
    const [UsrDtls, setUsrDtls] = useState([]);  // Stores fetched accounts
    const [filteredLoanees, setFilteredLoanees] = useState([]); // Stores filtered results
    const [loading, setLoading] = useState(false);
    const [awsEmail, setAWSEmail] = useState("");
    const [awsEmail2, setAWSEmail2] = useState("");
    const [awsEmail3, setAWSEmail3] = useState("");
    const [isLoading, setIsLoading] = useState(false);
     

    const ChckPersonnelDtls = async () => {
          
        setIsLoading(true)
        const userInfo = await Auth.currentAuthenticatedUser();
          try {
            const UsrDtlsz:any = await API.graphql(
              graphqlOperation(listPersonels,
                { filter: {
                    
                    BusinessRegNo: { eq: awsEmail},
                    email:{contains: userInfo.attributes.email}
                    
                                
                  }}
              )
            )
            const personelDtls = UsrDtlsz.data.listPersonels.items 

            const ChckPersonelExistence = async () => {
          
        setIsLoading(true)
          try {
            const UsrDtls:any = await API.graphql(
              graphqlOperation(listLinkBeneficiary2s,
                { filter: {
                    
                    benefactorPhone: { eq: awsEmail},
                    beneficiaryPhone:{contains: awsEmail2},
                    
                                
                  }}
              )
            )

            const benefitContributors = UsrDtls.data.listLinkBeneficiary2s.items;
            setUsrDtls(benefitContributors)

    
    if (personelDtls.length < 1)
    {
        Alert.alert("You do not work here");
        return;
    }

    else if (benefitContributors.length < 1)
    {
        Alert.alert("No Benefits");
        return;
    }

   
}
    
catch(e){
console.log(e)
if(e){
Alert.alert("Error! Access denied")
return;
}
}
  setIsLoading(false)
      
              
  };
  await ChckPersonelExistence();

}
    
              catch(e){
              console.log(e)
              if(e){
              Alert.alert("Error! Access denied")
              return;
              }
              }
                setIsLoading(false)
                setAWSEmail("")
                setAWSEmail2("")  
                setAWSEmail3("")    
                            
                };
    
    // Dynamic Filtering based on input
    
    
    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="My Business account number..."
                        value={awsEmail}
                        onChangeText={setAWSEmail}
                        style={styles.searchInput}
                    />

<TextInput
                        placeholder="Beneficiary Name"
                        value={awsEmail2}
                        onChangeText={setAWSEmail2}
                        style={styles.searchInput}
                    />
                    
                </View>

                {/* Results */}
                
                    <FlatList
                        style={{ flex: 1 }}
                        data={Loanees}
                        renderItem={({ item }) => (
                           
                                <LnerStts SMAc={item} />
                           
                        )}
                        keyExtractor={(item, index) => 
                            index.toString()}
                            onRefresh={ChckPersonnelDtls}
                            refreshing={loading}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponentStyle
                            ={{alignItems: 'center'}}
                            ListHeaderComponent={() => (
                              <>
               
                    <Text style={styles.placeholderText}>
                        Swipe down to load or refresh.
                    </Text>
                    </>
                )}
                />
            </View>
            
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    searchBar: {
        marginBottom: 10,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    placeholderText: {
        textAlign: 'center',
        color: '#aaa',
        marginTop: 20,
    },
});

export default FetchSMNonCovLns;