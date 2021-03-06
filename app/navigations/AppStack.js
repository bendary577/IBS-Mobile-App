import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContactUsAuth from '../screens/home/ContactUsAuth';
import BackButton from '../components/sub-components/buttons/BackButton';
import FAQBackButton from '../components/sub-components/buttons/FAQBackButton';
import NotificationsButton from '../components/sub-components/buttons/NotificationsButton';
import LogoButton from '../components/sub-components/buttons/LogoButton';
import Support from '../screens/account/Support/Support';
import PaymentDetails from '../screens/account/Payments/PaymentDetails';
import TitleText from '../components/primitive-components/TitleText';
import  {Platform, View} from 'react-native'
import MessageDetails from '../screens/account/Messages/MessageDetails';
import {getCommon} from './CommonStackScreens';
import Home from '../screens/home/Home'
import MyTransactions from '../screens/account/Payments/MyTransactions';
import MyProfile from '../screens/account/Profile/MyProfile';
import MessagesForYou from '../screens/account/Messages/MessagesForYou';
import {useTranslation} from 'react-i18next';
import UpdatePassword from '../screens/account/Profile/UpdatePassword';
import Information from '../screens/home/Information';
import SingleInformation from '../screens/home/SingleInformation';
import FAQ from '../screens/home/FAQ';
import SingleFAQ from '../screens/home/SingleFAQ';
import MoreTabButton from '../components/sub-components/navigationTabs/MoreTabButton';
import Notifications from '../screens/account/Notifications/Notifications';

const Stack = createStackNavigator();

//-------------------------------- home stack ----------------------------------------
const HomeStack = () => {

  const common = getCommon(Stack);
  const {t} = useTranslation();
  
  return (
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen
        name="Home" 
        component={Home}
        options={{
          title : false,
          headerStyle: {
            /*
              backgroundColor: "#D8D8D8",
              borderBottomRightRadius : 20,
              borderBottomLeftRadius : 20
            */
            backgroundColor: "white",
            borderBottomWidth : 1,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight : ()=>(  <MoreTabButton />),
          headerLeft : ()=>(  <LogoButton />)
      }}
      /> 

          <Stack.Screen
              name="Information" 
              component={Information}
              options={{
                title : t(`information`),
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : () =>( <BackButton /> )
            }}
            />

          <Stack.Screen
              name="SingleInformation" 
              component={SingleInformation}
              options={({route})=>({
                title : `#${route.params.title}`,
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : () =>( <BackButton /> )
              })}
            />  
            
       {common}

    </Stack.Navigator>
  );
}

//----------------------------------- Profile Stack -----------------------------------------------------
const EmploymentPaymentsStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
          <Stack.Screen
              name="MyTransactions"
              component={MyTransactions}
              options={{
                title : t(`payments`),
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerBackImage : () =>( <BackButton /> )
            }}
            /> 

            <Stack.Screen
              name="PaymentDetails"
              component={PaymentDetails}
              options={{
                title : t(`payments`),
                headerStyle: {
                 backgroundColor: "white",
                 borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerBackImage : () =>( <BackButton /> )
            }}
            /> 


    </Stack.Navigator>
  );
}



//----------------------------------- Profile Stack -----------------------------------------------------
const ProfileStack = () => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
            <Stack.Screen
              name="MyProfile" 
              component={MyProfile}
              options={{
                title : false,
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : ()=>(  <View style={{marginLeft : 25}}><TitleText value={t(`myProfile`)} /></View>)
            }}
            />

          <Stack.Screen
              name="Update Password" 
              component={UpdatePassword}
              options={{
                title : false,
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : ()=>( <BackButton /> )
            }}
            />
    </Stack.Navigator>
  );
}

//----------------------------------- Support Stack -----------------------------------------------------
const SupportStack = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator >
            <Stack.Screen
              name="Support" 
              component={Support}
              options={{
                title : false,
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : ()=>(  <View style={{marginLeft : 25}}><TitleText value={t(`support`)} /></View>)
            }}
            />

    </Stack.Navigator>
  );
}

//----------------------------------- ContactUs Auth Stack -----------------------------------------------------
const ContactUsAuthStack = () => {

  const {t} = useTranslation();

  return (
    <Stack.Navigator>
            <Stack.Screen
              name="ContactUs" 
              component={ContactUsAuth}
              options={{
                title : t(`contactUs`),
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : () =>( <BackButton /> )
            }}
            />
    </Stack.Navigator>
  );
}

//----------------------------------- Messages For You Stack -----------------------------------------------------
const MessagesForYouStack = () => {

  const {t} = useTranslation();

  return (
    <Stack.Navigator>
            <Stack.Screen
              name="MessagesForYou" 
              component={MessagesForYou}
              options={{
                title : t(`MessagesForYou`),
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : () =>( <BackButton /> )
            }}/>

          <Stack.Screen
            name="MessageDetails" 
            component={MessageDetails}
            options={{
              title: t(`cib`),
              headerStyle: {
                backgroundColor: "white",
                borderBottomWidth : 1,
              },
                headerTitleStyle: {
                fontWeight: 'bold',
                padding : Platform.OS == 'ios' ? 5 : 0
              },
              headerBackImage : () =>( <BackButton /> )
          }} />
    </Stack.Navigator>
  );
}


const NotificationsStack = () => {

  const {t} = useTranslation();

  return (
    <Stack.Navigator>
            <Stack.Screen
              name="ContactUs" 
              component={Notifications}
              options={{
                title : t(`notifications`),
                headerStyle: {
                  backgroundColor: "white",
                  borderBottomWidth : 1,
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <MoreTabButton />),
                headerLeft : () =>( <BackButton /> )
            }}
            />
    </Stack.Navigator>
  );
}


export { HomeStack,NotificationsStack, ProfileStack,EmploymentPaymentsStack, SupportStack, ContactUsAuthStack, MessagesForYouStack};