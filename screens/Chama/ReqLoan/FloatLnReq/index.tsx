import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { Auth, graphqlOperation, API, Storage } from 'aws-amplify';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

import { createChamaAdminLnApply } from '../../../../src/graphql/mutations';
import { getGroup, getSMAccount } from '../../../../src/graphql/queries';

const MAX_IMAGE_SIZE_MB = 5;

const CreateBiz = () => {
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Image states
  const [minutesPhotoKey, setMinutesPhotoKey] = useState<string | null>(null);
  const [minutesPhotoUri, setMinutesPhotoUri] = useState<string | null>(null);

  const route = useRoute();

  /** Image Handling **/
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets?.[0]?.uri) {
      handleImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets?.[0]?.uri) {
      handleImage(result.assets[0].uri);
    }
  };

  const handleImage = async (uri: string) => {
    try {
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 800 } }],
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );

      const response = await fetch(manipResult.uri);
      const blob = await response.blob();
      const imageSizeMB = blob.size / (1024 * 1024);

      if (imageSizeMB > MAX_IMAGE_SIZE_MB) {
        Alert.alert(
          'Image too large',
          `Image is ${imageSizeMB.toFixed(2)}MB. Max allowed is ${MAX_IMAGE_SIZE_MB}MB.`
        );
        return;
      }

      const filename = `${Date.now()}_minutes.jpg`;
      await Storage.put(filename, blob, { contentType: 'image/jpeg' });

      setMinutesPhotoKey(filename);
      setMinutesPhotoUri(manipResult.uri);
      Alert.alert('Success', 'Minutes image uploaded successfully.');
    } catch (err) {
      console.error('Image upload failed:', err);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    }
  };

  const clearMinutesImage = () => {
    setMinutesPhotoKey(null);
    setMinutesPhotoUri(null);
    
  };

  /** Submit Logic **/
  const gtUser = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const compDtls: any = await API.graphql(
        graphqlOperation(getSMAccount, { awsemail: userInfo.attributes.email })
      );
      const pws = compDtls.data.getSMAccount.pw;

      if (pws !== pword) {
        Alert.alert('Wrong password');
        setIsLoading(false);
        return;
      }

      const accountDtl: any = await API.graphql(
        graphqlOperation(getGroup, { grpContact: route.params.grpContact })
      );
      const GrpDtls = accountDtl.data.getGroup;

      if (!ChmNm && !minutesPhotoKey) {
        Alert.alert('Please either upload minutes or provide loan minutes');
        setIsLoading(false);
        return;
      }

      await API.graphql(
        graphqlOperation(createChamaAdminLnApply, {
          input: {
            grpName: GrpDtls.grpName,
            ChamaAdminEmail: userInfo.attributes.email,
            GrpAccount: GrpDtls.grpContact,
            MemberEmail: minutesPhotoKey ? minutesPhotoKey : 'NoMinutesUploaded',
            grpMinutes: ChmNm? ChmNm : 'NoMinutesProvided',
            status: "AccountActive",
          },
        })
      );

      Alert.alert('Success', 'Loan floated successfully.');
      setPW('');
      setChmNm('');
      clearMinutesImage();
    } catch (e) {
      console.error(e);
      Alert.alert('Error5! Retry or update app or call customer care');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['skyblue', '#e58d29']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Float Loans</Text>
          <Text style={styles.headerSubtitle}>
            Please fill in all required details carefully
          </Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Loan Minutes"
              placeholderTextColor="#333"
              value={ChmNm}
              onChangeText={setChmNm}
              multiline
              style={[styles.input, { height: 80 }]}
            />
            <Text style={styles.helperText}>Loan Minutes</Text>
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              placeholder="User Password"
              placeholderTextColor="#333"
              secureTextEntry
              value={pword}
              onChangeText={setPW}
              style={styles.input}
            />
            <Text style={styles.helperText}>Enter Main Account Password</Text>
          </View>

          {/* Upload Buttons */}
          <View style={styles.inputGroup}>
            <TouchableOpacity onPress={pickImage} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                {minutesPhotoUri ? 'Change Minutes Image' : 'Upload Group Minutes'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={takePhoto}
              style={[styles.submitButton, { marginTop: 10 }]}
            >
              <Text style={styles.submitButtonText}>Take Photo of Minutes</Text>
            </TouchableOpacity>
          </View>

          {/* Preview */}
          {minutesPhotoUri && (
            <View style={{ marginTop: 16, alignItems: 'center' }}>
              <Image
                source={{ uri: minutesPhotoUri }}
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#e5e7eb',
                }}
                resizeMode="cover"
              />
              <Text style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>
                Preview of uploaded minutes
              </Text>

              <TouchableOpacity
                onPress={clearMinutesImage}
                style={{
                  marginTop: 10,
                  backgroundColor: '#e58d29',
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 4,
                  shadowColor: '#e58d29',
                  shadowOpacity: 0.4,
                  shadowRadius: 6,
                  shadowOffset: { width: 0, height: 3 },
                }}
              >
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700' }}>
                  Remove Image
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={gtUser}
          activeOpacity={0.85}
        >
          <Text style={styles.submitButtonText}>Click to Float Loans</Text>
          {isLoading && <ActivityIndicator color="#fff" style={{ marginLeft: 10 }} />}
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateBiz;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },

  header: {
    marginTop: 40,
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#eef6ff',
    marginTop: 6,
  },

  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },

  inputGroup: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#f9fafb',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    color: '#111827',
  },

  helperText: {
    fontSize: 12,
    marginTop: 6,
    color: '#6b7280',
  },

  // Orange brand button used for both upload/take photo and submit
  submitButton: {
    backgroundColor: '#e58d29',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#e58d29',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.6,
  },

  // Preview block styles
  previewContainer: {
    marginTop: 16,
    alignItems: 'center',
  },

  previewImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  previewCaption: {
    marginTop: 8,
    fontSize: 12,
    color: '#6b7280',
  },

  // Orange remove button (brand-consistent)
  removeButton: {
    marginTop: 10,
    backgroundColor: '#e58d29',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#e58d29',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
