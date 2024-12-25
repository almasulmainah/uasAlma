import React, { useState, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

// Import Screens
import Index from '../app/(tabs)/index';
import BiodataScreen from '@/app/(tabs)/explore';
import TentangScreen from '@/app/(tabs)/personal';
import HobiScreen from '@/app/(tabs)/hobbies';
import Todolist from '@/app/(tabs)/listKegiatan';
import Kawan from '@/app/(tabs)/pren';

// Prevent splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

// Komponen HoverableIcon untuk animasi hover pada ikon
function HoverableIcon({ children }: { children: React.ReactNode }) {
  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

function DrawerNavigator() {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Biodata"
      screenOptions={({ navigation }: { navigation: DrawerNavigationProp<ParamListBase> }) => ({
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Beranda"
        component={Index}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="home" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="Biodata"
        component={BiodataScreen}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="person" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="About Me"
        component={TentangScreen}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="information-circle" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="My Hobi"
        component={HobiScreen}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="star" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="list kegiatan harian"
        component={Todolist}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="list" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="Teman-teman"
        component={Kawan}
        options={{
          drawerIcon: ({ size }) => (
            <HoverableIcon>
              <Ionicons name="people" size={size} color={theme.colors.text} />
            </HoverableIcon>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  // Tambahkan jika Anda perlu mengatur styling tambahan
});
