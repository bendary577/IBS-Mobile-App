import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from '../navigations/AppStack';
import AuthStack from '../navigations/AuthStack';
import {useAuth} from '../contexts/authContext';

const Router = () => {

  const {authenticated} = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};


export default Router;

