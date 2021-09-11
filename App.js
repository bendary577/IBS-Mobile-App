import 'react-native-gesture-handler';
import React, {useState, useRef, useEffect} from 'react';
import {StatusBar} from 'react-native';
import Router from './app/config/router';
import {AuthProvider} from './app/contexts/authContext';
import {useAuth} from './app/contexts/authContext';
import * as SecureStore from 'expo-secure-store';
import registerForPushNotificationsAsync from './app/notifications/registeration';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {

  const {setAuthenticated} = useAuth();
  const notificationListener = useRef();
  const [notification, setNotification] = useState(false);
  const responseListener = useRef();
  
  useEffect (() => {
        registerForPushNotificationsAsync();
                // This listener is fired whenever a notification is received while the app is foregrounded
                notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
                  console.log(notification)
                  setNotification(notification);
                });
            
                // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
                responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
                  console.log(response);
                });
            
                authenticateUser();
                
                return () => {
                  Notifications.removeNotificationSubscription(notificationListener.current);
                  Notifications.removeNotificationSubscription(responseListener.current);
                };
        //check if there is a token registered
  }, [])

  const authenticateUser = async () => {
    let token = await SecureStore.getItemAsync('access_token');
    if(token !== null){
      setAuthenticated(true);
    }
  }

    return (
        <AuthProvider>
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#f2f2f2" translucent = {true}/>
          <Router />
        </AuthProvider>
    );    
}


export default App;