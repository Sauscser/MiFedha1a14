import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';

export interface SMAccount {
  SMAc: {
    sokokntct: string;
    sokoname: string;
    sokoprice: number;
    sokolnprcntg: number;
    sokodesc: string;
    sokolpymntperiod: number;
    bizContact: string;
    bizName: string;
    businessType: string;
    itemUnit: string;
    unitQuantity: number;
    itemBrand: string;
    itemPhoto: string;
  };
}

const ViewSMDeposts = ({ SMAc }: SMAccount) => {
  const {
    sokokntct,
    itemPhoto,
    sokoname,
    sokoprice,
    itemBrand,
    sokodesc,
    bizContact,
    bizName,
    businessType,
    itemUnit,
    unitQuantity,
  } = SMAc;

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://mifedhasalesadsphotos7c102-dev.s3.us-east-1.amazonaws.com/public/${itemPhoto}`,
          }}
          style={styles.carouselImage}
          resizeMode="cover"
        />

        <View style={styles.infoSection}>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Bizna Account Number:</Text> {sokokntct}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Item Name:</Text> {sokoname}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Item Price:</Text> KES {sokoprice.toLocaleString()}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Brand:</Text> {itemBrand}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Bizna Contact:</Text> {bizContact}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Bizna Name:</Text> {bizName}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Business Type:</Text> {businessType}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Unit of Measure:</Text> {itemUnit}
          </Text>
          <Text style={styles.prodInfo}>
            <Text style={styles.label}>Number of Units:</Text> {unitQuantity}
          </Text>
          <Text style={styles.prodDesc}>{sokodesc}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewSMDeposts;
