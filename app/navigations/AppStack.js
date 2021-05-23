import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AboutUs from '../screens/home/AboutUs';
import VisitUs from '../screens/home/VisitUs';
import ContactUsAuth from '../screens/home/ContactUsAuth';
import BackButton from '../components/sub-components/buttons/BackButton';
import NotificationsButton from '../components/sub-components/buttons/NotificationsButton';
import LogoButton from '../components/sub-components/buttons/LogoButton';
import Support from '../screens/account/Support/Support';
import PaymentDetails from '../screens/account/Payments/PaymentDetails';
import TitleText from '../components/primitive-components/TitleText';
import Chat from '../screens/account/Support/Chat';
import  {View} from 'react-native'
import MessageDetails from '../screens/account/Messages/MessageDetails';
import Notifications from '../screens/account/Notifications/Notifications';
import {t} from '../languages/i18Manager';
import BottomTabsNavigation from './BottomTab';

const AppStack = createStackNavigator();

export default AppStackNavigation = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">

      <AppStack.Screen
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

     <AppStack.Screen
        name="paymentDetails"
        component={PaymentDetails}
        options={{
          title : t(`payment:payments`),
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


      <AppStack.Screen
        name="Notifications" 
        component={Notifications}
        options={{
          title : "Notifications",
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

    <AppStack.Screen
        name="MessageDetails" 
        component={MessageDetails}
        options={{
          title: 'CIB',
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

      <AppStack.Screen
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

     <AppStack.Screen
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

      <AppStack.Screen
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

      <AppStack.Screen
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

    <AppStack.Screen
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

      <AppStack.Screen name="Visit Us" component={VisitUs} />

    </AppStack.Navigator>
  );
}


