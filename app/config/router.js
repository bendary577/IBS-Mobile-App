
import {createStackNavigator} from 'react-navigation-stack';
import AboutUs from '../screens/contacts/AboutUs';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
}
