import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList
    , StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/CredSales/BenProd2/ViewBenToShare";

import { listBenProd2s, listLinkBeneficiary2s, listSMAccounts } from '../../../../src/graphql/queries';
import * as Clipboard from 'expo-clipboard';  

const FetchSMNonCovLns = props => {
    const [Loanees, setLoanees] = useState([]);  // Stores fetched accounts
    const [filteredLoanees, setFilteredLoanees] = useState([]); // Stores filtered results
    const [loading, setLoading] = useState(false);
    const [awsEmail, setAWSEmail] = useState("");

    useEffect(() => {
        fetchLoanees();
    }, []);

    const fetchLoanees = async () => {
        setLoading(true);
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const Lonees = await API.graphql(
                graphqlOperation(listLinkBeneficiary2s, {
                    filter: { benefitStatus: { eq: "Active" } }
                })
            );
            setLoanees(Lonees.data.listLinkBeneficiary2s.items);
        } catch (e) {
            console.error("Error fetching accounts:", e);
        } finally {
            setLoading(false);
        }
    };

    // Dynamic Filtering based on input
    const handleSearch = (text) => {
        setAWSEmail(text);
        const filtered = Loanees.filter(loanee =>
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
                    placeholder="Benefactor Name"
                    value={awsEmail}
                    onChangeText={handleSearch} 
                    style={styles.searchInput}
                    
                />
            </View>

            {/* Conditional Rendering: FlatList only shows when typing */}
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
                <Text style={styles.placeholderText}>Start typing Benefactor name.</Text>
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
