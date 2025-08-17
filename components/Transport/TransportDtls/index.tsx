import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';

export interface SMAccount {
  SMAc: {
    id: string;
    transportkntct: string;
    transportRate: number;
    transportdesc: number;
    
    transportPhoto: number;
    transportName: string;
    transportType: string;
   
    
  };
}

const ViewSMDeposts = ({ SMAc }: SMAccount) => {
  const {
    id,
    
    transportkntct,
    transportRate,
   
    transportdesc,
    transportPhoto,
    transportName,
    transportType,
  
  } = SMAc;

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://mifedhasalesadsphotos7c102-dev.s3.us-east-1.amazonaws.com/public/${transportPhoto}`,
          }}
          style={styles.carouselImage}
          resizeMode="cover"
        />

        <View style={styles.infoSection}>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Transport Name:</Text> {transportName}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Transport Type:</Text> {transportType}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Cost per Kilometer:</Text> KES {transportRate.toLocaleString()}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Contact Number:</Text> {transportkntct}
          </Text>       
         
          <Text style={styles.prodDesc}>{transportdesc}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewSMDeposts;
