import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import ChatCard from '../components/sub-components/cards/ChatCard';
import {getCommon} from './CommonStackScreens';



export default AppStackNavigation = () => {

  const Stack = createStackNavigator();
  const common = getCommon(Stack);

  return (
    <Stack.Navigator initialRouteName="Home">

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


      <Stack.Screen
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

    <Stack.Screen
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
        options={({route})=>({
          title : `#${route.params.roomNumber}`,
          headerStyle: {
            backgroundColor: "#D8D8D8",
            borderBottomRightRadius : 20,
            borderBottomLeftRadius : 20
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(route.params.closed === true ? <ChatCard /> : <></>),
          headerBackImage : () =>( <BackButton /> )
      })}
      />

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

       {common}

    </Stack.Navigator>
  );
}


