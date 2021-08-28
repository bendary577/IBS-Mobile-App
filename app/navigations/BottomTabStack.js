import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNavigation from './BottomTab';

const Stack = createStackNavigator();

const BottomTabStack = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home" 
        component={BottomTabsNavigation}
        options={{
          title : false,
          headerShown : false,
      }}
      /> 
    </Stack.Navigator>
  );
}


  export default BottomTabStack;