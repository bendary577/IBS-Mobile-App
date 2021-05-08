
import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/contacts/aboutUs';
import VisitUs from '../screens/contacts/VisitUs';

export let AppNavigator = createStackNavigator({
    AboutUs : {
      screen: AboutUs,
      visitUs: VisitUs
    }
  },{
    initialRouteName: "AboutUs"
});

