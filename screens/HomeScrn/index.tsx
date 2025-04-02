import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Pressable, Dimensions, Linking, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { graphqlOperation, API } from 'aws-amplify';
import { getCompany, getCompanyUrls } from '../../src/graphql/queries';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
  const [alert, setAlert] = useState("");
  const [Url, setUrl] = useState("");
  const [Url4, setUrl4] = useState("");
  const navigation = useNavigation();
  const letterAnim = useRef(new Animated.Value(0)).current;
  

  const navigateTo = (screen, params = {}) => {
    navigation.navigate(screen, params);
  };

  const getCompanyDetails = async () => {
    try {
      const compDetails = await API.graphql(
        graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
      );
      const alertz = compDetails.data.getCompany.alert;
      setAlert(alertz);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  const getCompUrls = async () => {
    try {
      const compDetailsz = await API.graphql(
        graphqlOperation(getCompanyUrls, { AdminId: "BaruchHabaB'ShemAdonai2Ulr" })
      );
      const Url1 = compDetailsz.data.getCompanyUrls.Url1;
      const Url4 = compDetailsz.data.getCompanyUrls.Url4;
      setUrl(Url1);
      setUrl4(Url4);
      console.log(Url1);
    } catch (error) {
      console.error("Error fetching company URLs:", error);
    }
  };

  useEffect(() => {
    getCompanyDetails();
    getCompUrls();
  }, []);

  useEffect(() => {
    const animate = () => {
      letterAnim.setValue(0);
      Animated.timing(letterAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => animate());
    };
    animate();
  }, [letterAnim]);

  const renderAnimatedBoom = () => {
    const letters = "BOOOOM!".split("");
    return letters.map((letter, index) => {
      const inputRange = [0, (index + 1) / letters.length, 1];
      const translateX = letterAnim.interpolate({
        inputRange,
        outputRange: [0, index * 20, index * 20],
      });
      const scale = letterAnim.interpolate({
        inputRange,
        outputRange: [0, 1 + index * 0.1, 1 + index * 0.1],
      });
      const opacity = letterAnim.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
      });

      return (
        <Animated.Text
          key={index}
          style={{
            transform: [{ translateX }, { scale }],
            opacity,
            color: 'red',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {letter}
        </Animated.Text>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#e58d29', '#f3c642']} style={styles.backgroundGradient}>
        <View style={styles.buttonContainer}>
          <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.mainButton}>
            <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('WelcomePgss')}>
              <Text style={styles.mainButtonText}>Create Main Account</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.mainButton}>
            <TouchableOpacity style={styles.mainButton} onPress={() => navigateTo('ViewSmAcs')}>
              <Text style={styles.mainButtonText}>View Main Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <LinearGradient colors={['#e58d29', '#f3c642']} style={styles.quoteContainer}>
          <Pressable style={styles.quotePressable} onPress={() => Linking.openURL(Url)}>
            <Text style={styles.quoteText}>We are Humans and Being Humane is our Business!</Text>
            <FontAwesome name="globe" size={24} color="white" style={styles.globeIcon} />
          </Pressable>
        </LinearGradient>

        <View style={styles.productContainer}>
          <TouchableOpacity style={styles.productButton} onPress={() => navigateTo('LnsScreen')}>
            <Text style={styles.productButtonText}>Pal-Pal Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productButton} onPress={() => navigateTo('ChamaScreen')}>
            <Text style={styles.productButtonText}>Chama Products</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productButton} onPress={() => navigateTo('CredSlsScreen')}>
            <Text style={styles.productButtonText}>Business Products</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient colors={['#72ebd8', '#34a4a1']} style={styles.loanButton}>
          <TouchableOpacity style={styles.loanContainer} onPress={() => navigateTo('RequestLoansPage')}>
            <Text style={styles.loanButtonText}>Make Request</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.alertContainer}>
          <TouchableOpacity style={styles.pressable} onPress={() => Linking.openURL(Url4)}>
            <FontAwesome name="bullhorn" size={24} color="red"  />
            <View style={{ flexDirection: 'row' }}>{renderAnimatedBoom()}</View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
  },
  mainButton: {
    width: '45%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  quoteContainer: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quotePressable: {
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  globeIcon: {
    marginTop: 5,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
  },
  productButton: {
    width: '30%',
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  productButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  loanContainer: {
    width: '90%',
    height: '100%',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanButton: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loanButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  alertContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff5f5',
    flexDirection: 'row',
  },
  alertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 80
  },
});
