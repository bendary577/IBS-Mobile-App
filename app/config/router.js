
import {createStackNavigator} from 'react-navigation-stack';
<<<<<<< HEAD
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

=======
import AboutUs from '../screens/contacts/AboutUs';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
}
>>>>>>> 64394aa3d82c56e4ca07db21977018e6ddad8249
