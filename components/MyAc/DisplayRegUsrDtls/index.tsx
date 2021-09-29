import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getSMAccount } from "../../../src/graphql/queries";
import { graphqlOperation, API } from "aws-amplify";

const DisplyRegUsrScrn = (props) => {
  const [usrBal, setUsrBal] = useState("");
  const [myname, setName] = useState("");
  const navigation = useNavigation();

  const goBckHm = () => {
    navigation.navigate("MyHomeie");
  };

  const route:any = useRoute();

  const userDtls = async () => {
    try {
      const userDtail:any = await API.graphql(
        graphqlOperation(getSMAccount, { nationalid: route.params.usr })
      );
      setUsrBal(userDtail.data.getSMAccount.balance);
      setName(userDtail.data.getSMAccount.name);
      console.log(userDtail);
    } catch (e) {
      console.log(e);

      
    }
  };

  useEffect(() => {
    userDtls();
  }, []);

  return (
    <View>
      <View style={styles.image}>
        
        <ScrollView>
        <View >
          <Text style={styles.loanAFriendText}>Congratulations {myname}</Text>
          <Text style={styles.loanAFriendText}>
            You have successfully created an account. Your account balance is:
            Ksh. {usrBal}. Please deposit money at the nearest Mifedha Outlet
            (MFNdogo) to enjoy these services
          </Text>
        </View>

        </ScrollView>

       
        
        
      </View>
    </View>
  );
};

export default DisplyRegUsrScrn;