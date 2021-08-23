import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Router from './app/config/router';
import {AuthProvider} from './app/contexts/authContext';
import {useAuth} from './app/contexts/authContext';
import * as SecureStore from 'expo-secure-store';
import registerForPushNotificationsAsync from './app/notifications/registeration';
import { Platform } from 'react-native';

const App = () => {

  const {setAuthenticated} = useAuth();

  useEffect (() => {
        registerForPushNotificationsAsync();
        /*
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
          navigation.navigate(remoteMessage.data.type);
        });
    
        // Check whether an initial notification is available
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
              setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
            setLoading(false);
          });
        */

        //check if there is a token registered
        let token = SecureStore.getItemAsync('token');
        if(token !== null){
          setAuthenticated(true);
        }
  }, [])

    return (
        <AuthProvider>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#EC253C" translucent = {true}/>
          <Router />
        </AuthProvider>
    );    
}


export default App;