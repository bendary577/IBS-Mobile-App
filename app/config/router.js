
import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/contacts/aboutUs';
import VisitUs from '../screens/contacts/VisitUs';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="VisitUs" component={VisitUs} />
    </Stack.Navigator>
  );
}

