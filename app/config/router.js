
import {createStackNavigator} from '@react-navigation/stack';
import ContactUsUnAuth from '../screens/contacts/ContactUsUnAuth';
import Splash from '../screens/welcome/Splash';

export const AppNavigator = createStackNavigator({
    Splash: {
      screen: Splash
    },
    ContactUsUnAuth : {
      screen: ContactUsUnAuth
    }
  },{
    initialRouteName: "Splash"
});

