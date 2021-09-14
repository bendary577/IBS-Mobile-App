import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from '../navigations/AuthStack';
import {useAuth} from '../contexts/authContext';
import MainStack from '../navigations/MainStack';


const Router = () => {

  const {authenticated} = useAuth();
  
  return (
    <NavigationContainer>
      {authenticated ? <MainStack /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};


export default Router;

