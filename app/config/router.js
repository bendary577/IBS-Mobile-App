import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigation from '../navigations/AppStack';
import AuthStackNavigation from '../navigations/AuthStack';
import DrawerMenu from '../navigations/DrawerMenu'
import {useAuth} from '../contexts/authContext';
import {AppStack} from '../navigations/AppStack';


const Router = () => {

  const {authenticated} = useAuth();

  console.log("is user authenticated ? " + authenticated);
  
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};


export default Router;

