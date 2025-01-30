import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/CredSales/BenProd2/ViewBizBenefactorShares";

import { listBenefitContributions2s, listBenefitShare2s, listBenProd2s, listLinkBeneficiary2s, listSMAccounts } from '../../../../../src/graphql/queries';
import * as Clipboard from 'expo-clipboard';  


const FetchSMNonCovLns = props => {
    const [Loanees, setLoanees] = useState([]);
    const [UsrDtls, setUsrDtls] = useState([]);  // Stores fetched accounts
    const [filteredLoanees, setFilteredLoanees] = useState([]); // Stores filtered results
    const [loading, setLoading] = useState(false);
    const [awsEmail, setAWSEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
     
useEffect(() => {
    ChckPersonelExistence();
    }, []);

    const ChckPersonelExistence = async () => {
          
        setIsLoading(true)
        const userInfo = await Auth.currentAuthenticatedUser();
          try {
            const UsrDtls:any = await API.graphql(
              graphqlOperation(listBenefitContributions2s,
                { filter: {
                    
                    creatorEmail: { eq: userInfo.attributes.email},
                   
                                
                  }}
              )
            )

            const benefitContributors = UsrDtls.data.listBenefitContributions2s.items;
            setUsrDtls(benefitContributors)

    const fetchLoanees = async () => {
        
        try {
            
            const Lonees = await API.graphql(
                graphqlOperation(listLinkBeneficiary2s, {
                    filter: 
                    { benefitStatus: { eq: "Active" },
                    
                     }
                })
            );

            const contribution = Lonees.data.listLinkBeneficiary2s.items
            setLoanees(contribution);

            if (contribution.length < 1)
                {
                    Alert.alert("This Benefactor has not yet shared any benefits")
                }
            

        } catch (e) {
            console.error("Error fetching accounts:");
        } 
    };

    if (benefitContributors.length < 1)
    {
        Alert.alert("You have not yet contributed to this Beneficiary")
    }

    else{
        await fetchLoanees();
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
    
    // Dynamic Filtering based on input
    const handleSearch = (text) => {
        setAWSEmail(text);
        const filtered = UsrDtls.filter(loanee =>
            loanee.creatorName.includes(text)
        );
        setFilteredLoanees(filtered);
    };
    
    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search by Beneficiary Creator name..."
                        value={awsEmail}
                        onChangeText={handleSearch}
                        style={styles.searchInput}
                    />
                </View>

                {/* Results */}
                {awsEmail.length > 0 ? (
                    <FlatList
                        style={{ flex: 1 }}
                        data={filteredLoanees}
                        renderItem={({ item }) => (
                            <View>
                                <LnerStts SMAc={item} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={loading}
                        keyboardShouldPersistTaps="handled"
                    />
                ) : (
                    <Text style={styles.placeholderText}>
                        Start typing Beneficiary Creator name.
                    </Text>
                )}
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