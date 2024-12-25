import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

// URL API dengan Proxy CORS
const apiURL = 'https://cors-anywhere.herokuapp.com/https://mmc-clinic.com/dipa/api/mhs.php';

interface Mahasiswa {
  nim: string;
  nama: string;
}

export default function App() {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('Fetching data from API...');
      const response = await fetch(apiURL);

      // Memeriksa status respons API
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
      }

      // Parsing data dari respons API
      const result = await response.json();
      console.log('Data yang diterima:', result);

      // Memeriksa apakah data yang diterima valid
      const mahasiswaList = result?.data;
      if (Array.isArray(mahasiswaList)) {
        setData(mahasiswaList.slice(0, 10)); // Ambil 10 data pertama
      } else {
        setError('Format data tidak valid.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Terjadi kesalahan jaringan atau server tidak merespons.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ini data sebagian teman-teman saya di kelas
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.nim} // Gunakan NIM sebagai key unik
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>NIM: {item.nim}</Text>
              <Text style={styles.text}>Nama: {item.nama}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    width: '100%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
