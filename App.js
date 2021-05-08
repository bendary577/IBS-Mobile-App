import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from './app/config/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

