import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Hobbies = () => {
  const hobbies = ['Reading', 'Watching', 'Badminton', 'Programming', 'Traveling'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Hobi</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hobbyBox}>
            <Text style={styles.hobbyText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, // Hanya sedikit jarak dari tepi layar
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  hobbyBox: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignSelf: 'stretch', // Buat kotak menyesuaikan lebar kontainer
  },
  hobbyText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Hobbies;
