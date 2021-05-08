import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from "react-navigation";
import {AppNavigator} from './app/config/router';


const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
      <Text>About Us!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
