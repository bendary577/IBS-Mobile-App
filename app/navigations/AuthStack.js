import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import ResetPassword from '../screens/auth/ResetPassword';
import CreateNewPassword from '../screens/auth/CreateNewPassword';
import WelcomeAnimation from '../screens/welcome/WelcomeAnimation';
import Welcome from '../screens/welcome/Welcome';
import SignUp from '../screens/auth/SignUp';
import ConfirmNewPassword from '../screens/auth/ConfirmNewPassword';
import ContactUsUnAuth from '../screens/home/ContactUsUnAuth';
import BackButton from '../components/sub-components/buttons/BackButton';

const AuthStack = createStackNavigator();

export default AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">

      <AuthStack.Screen  
        name="Welcome" 
        component={Welcome}
        options={{
          headerShown: false
      }} />

      <AuthStack.Screen  
        name="WelcomeAnimation" 
        component={WelcomeAnimation}
        options={{
          headerShown: false
      }} />

      <AuthStack.Screen  
        name="Login" 
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <AuthStack.Screen  
        name="ResetPassword" 
        component={ResetPassword}
        options={{
          headerShown: false
        }}

      />  

      <AuthStack.Screen  
        name="ConfirmNewPassword" 
        component={ConfirmNewPassword}
        options={{
          headerShown: false
        }}
      />  

      <AuthStack.Screen  
        name="CreateNewPassword" 
        component={CreateNewPassword}
        options={{
          headerShown: false
        }}
      /> 

      <AuthStack.Screen  
        name="SignUp" 
        component={SignUp}
        options={{
          headerShown: false
        }}
      />    

    <AuthStack.Screen
        name="ContactUsUnAuth" 
        component={ContactUsUnAuth}
        options={({navigation})=>({
          title: 'Contact Us',
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackImage : () =>( <BackButton /> )
        })}
    />

    </AuthStack.Navigator>
  );
}


