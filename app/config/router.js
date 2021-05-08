
import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/contacts/AboutUs';

export let AppNavigator = createStackNavigator({
    AboutUs : {
      screen: AboutUs
    }
  },{
    initialRouteName: "AboutUs"
});

