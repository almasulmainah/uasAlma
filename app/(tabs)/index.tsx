import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D1A7A1', dark: '#99CCFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/me.png')}
          style={styles.reactLogo}
          resizeMode="contain" // Menambahkan resizeMode
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Aku Alma Sulmainah <ThemedText>
           (Call me Alma)
          </ThemedText>
          </ThemedText>
      
          <ThemedText type="subtitle">222505022
          </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 400, 
    width: 300, 
    position: 'absolute', 
    top: '-10%', 
    left: '1%',
  },
});
