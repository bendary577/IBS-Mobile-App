
import * as Notifications from "expo-notifications";
import Constants from 'expo-constants';
import {setUserNotificationToken} from '../services/api_requests';
import {Alert, Platform, Linking } from 'react-native';

const registerForPushNotificationsAsync = async () => {
    //must be real device not an emulator
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert(
          'Warning',
          'You will not receive reminders if you do not enable push notifications. If you would like to receive reminders, please enable push notifications for Fin in your settings.',
          [
            { text: 'Cancel' },
            // If they said no initially and want to change their mind,
            // we can automatically open our app in their settings
            // so there's less friction in turning notifications on
            { text: 'Enable Notifications', onPress: () => Platform.OS === 'ios' ? Linking.openURL('app-settings:') : Linking.openSettings() }
          ]
        )
        return false;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;

      //save token to backend
      let data = await setUserNotificationToken(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    
};


export default registerForPushNotificationsAsync;