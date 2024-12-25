import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Info</Text>
      <Text style={styles.info}>Saya adalah seorang developer React Native yang antusias belajar teknologi baru.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default PersonalInfo;
