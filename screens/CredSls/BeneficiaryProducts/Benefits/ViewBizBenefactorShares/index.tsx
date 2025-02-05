import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/CredSales/BenProd2/ViewBizBenefactorShares";

import { listBenefitContributions2s, listBenefitShare2s, listBenProd2s, listLinkBeneficiary2s, listPersonels, listSMAccounts } from '../../../../../src/graphql/queries';
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
              graphqlOperation(listBenefitShare2s,
                { filter: {
                    
                    beneficiaryType: { eq: awsEmail},
                    creatorName:{contains: awsEmail2},
                    prodName: {contains: awsEmail3}
                                
                  }}
              )
            )

            const benefitContributors = UsrDtls.data.listBenefitShare2s.items;
            setUsrDtls(benefitContributors)

    const fetchLoanees = async () => {
        
        try {
            
            const Lonees = await API.graphql(
                graphqlOperation(listLinkBeneficiary2s, {
                    filter: 
                    { benefitStatus: { eq: "Active" },
                    creatorName:{contains: awsEmail2},
                    prodName:{contains: awsEmail3}
                    
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

    if (personelDtls.length < 1)
    {
        Alert.alert("You do not work here");
        return;
    }

    else if (benefitContributors.length < 1)
    {
        Alert.alert("You have not yet contributed to this Beneficiary");
        return;
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
                        placeholder="My Business full number..."
                        value={awsEmail}
                        onChangeText={setAWSEmail}
                        style={styles.searchInput}
                    />

<TextInput
                        placeholder="Beneficiary Creator name..even partial"
                        value={awsEmail2}
                        onChangeText={setAWSEmail2}
                        style={styles.searchInput}
                    />
                    <TextInput
                        placeholder="Product Name...even partial"
                        value={awsEmail3}
                        onChangeText={setAWSEmail3}
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