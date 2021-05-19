import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigation from './app/config/router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
        <NavigationContainer>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#EC253C" translucent = {true}/>
          <StackNavigation />
        </NavigationContainer>
  );
}

