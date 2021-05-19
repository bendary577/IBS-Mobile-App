import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutUs from '../screens/home/AboutUs';
import VisitUs from '../screens/home/VisitUs';
import WelcomeAnimation from '../screens/welcome/WelcomeAnimation';
import Welcome from '../screens/welcome/Welcome';
import ContactUsUnAuth from '../screens/home/ContactUsUnAuth';
import ContactUsAuth from '../screens/home/ContactUsAuth';
import BackButton from '../components/sub-components/buttons/BackButton';
import Login from '../screens/auth/Login';
import ResetPassword from '../screens/auth/ResetPassword';
import CreateNewPassword from '../screens/auth/CreateNewPassword';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/home/Home';
import NotificationsButton from '../components/sub-components/buttons/NotificationsButton';
import LogoButton from '../components/sub-components/buttons/LogoButton';
import MyTransactions from '../screens/account/Payments/MyTransactions';
import MyProfile from '../screens/account/Profile/MyProfile';
import Support from '../screens/account/Support/Support';
import More from '../screens/account/More/More';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabButton from '../components/sub-components/navigationTabs/HomeTabButton';
import PaymentTabButton from '../components/sub-components/navigationTabs/PaymentTabButton';
import SupportTabButton from '../components/sub-components/navigationTabs/SupportTabButton';
import MoreTabButton from '../components/sub-components/navigationTabs/MoreTabButton';
import ProfileTabButton from '../components/sub-components/navigationTabs/ProfileTabButton';
import ConfirmNewPassword from '../screens/auth/ConfirmNewPassword';
import PaymentDetails from '../screens/account/Payments/PaymentDetails';
import TitleText from '../components/primitive-components/TitleText';
import Chat from '../screens/account/Support/Chat';
import  {View} from 'react-native'

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">

      <Stack.Screen  
        name="Welcome" 
        component={Welcome}
        options={{
          headerShown: false
      }} />

      <Stack.Screen  
        name="WelcomeAnimation" 
        component={WelcomeAnimation}
        options={{
          headerShown: false
      }} />
      
      <Stack.Screen  
        name="Login" 
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen  
        name="ResetPassword" 
        component={ResetPassword}
        options={{
          headerShown: false
        }}
      />  

      <Stack.Screen  
        name="ConfirmNewPassword" 
        component={ConfirmNewPassword}
        options={{
          headerShown: false
        }}
      />  

      <Stack.Screen  
        name="CreateNewPassword" 
        component={CreateNewPassword}
        options={{
          headerShown: false
        }}
      /> 

      <Stack.Screen  
        name="SignUp" 
        component={SignUp}
        options={{
          headerShown: false
        }}
      />    

      <Stack.Screen
        name="Home" 
        component={BottomTabsNavigation}
        options={{
          title : false,
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(  <NotificationsButton />),
          headerLeft : ()=>(  <LogoButton />)
      }}
      /> 

     <Stack.Screen
        name="PaymentDetails" 
        component={PaymentDetails}
        options={{
          title : "Payment Details",
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(  <NotificationsButton />),
          headerBackImage : () =>( <BackButton /> )
      }}
      /> 

      <Stack.Screen
        name="Support" 
        component={Support}
        options={{
          title : false,
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(  <NotificationsButton />),
          headerLeft : ()=>(  <View style={{marginLeft : 25}}><TitleText value="Support" /></View>)
      }}
      />

     <Stack.Screen
        name="Chat" 
        component={Chat}
        options={{
          title : false,
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(  <NotificationsButton />),
          headerLeft : ()=>(  <View style={{marginLeft : 25}}><TitleText value="Support" /></View>)
      }}
      />

      <Stack.Screen
        name="AboutUs" 
        component={AboutUs}
        options={{
          title: 'About Us',
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackImage : () =>( <BackButton /> )
      }} />

      <Stack.Screen
        name="VisitUs" 
        component={VisitUs}
        options={{
          title: 'Visit Us',
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
            headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackImage : () =>( <BackButton /> )
       }} />

    <Stack.Screen
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
    })} />

    <Stack.Screen
        name="ContactUsAuth" 
        component={ContactUsAuth}
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
       })} />

      <Stack.Screen name="Visit Us" component={VisitUs} />

    </Stack.Navigator>
  );
}



//------------------------------------------- bottom tab navigation ------------------------------------

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (

      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor : "black",
          style : {
             backgroundColor: '#E8E8E8' ,
             borderTopLeftRadius : 20,
             borderTopRightRadius : 20,
             height : 60
            },
          tabStyle :{
            padding : 5
          },
        }}
      >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon : ({ tintColor, focused })=>(<HomeTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyTransactions"
          component={MyTransactions}
          options={{
            tabBarLabel: 'Payments',
            tabBarIcon : ({ tintColor, focused })=>(<PaymentTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            tabBarLabel: '',
            tabBarIcon : ({ tintColor, focused })=>(<ProfileTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            tabBarLabel: 'Support',
            tabBarIcon : ({ tintColor, focused })=>(<SupportTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'More',
            tabBarIcon : ({ tintColor, focused })=>(<MoreTabButton active={focused ? true : false}/>),
          }}
        />

    </Tab.Navigator>
  );
}