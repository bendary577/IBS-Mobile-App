
import {Notifications} from 'expo';
import Constants from 'expo-constants';
import {authorizeRequestWithData} from '../services/authentication';
import {setUserNotificationToken} from '../services/api_requests';
/*
const registerForPushNotificationsAsync = async () => { 
    try {
       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
       if (!permission.granted) return;
       const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    } catch (error) {
      console.log('Error getting a token', error);
    }
  }
*/
 
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
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      //save token to backend
      let data = await authorizeRequestWithData(setUserNotificationToken, {token});
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    /*
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    */
};


export default registerForPushNotificationsAsync;