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
import DrawerMenu from './DrawerMenu';
import ChatCard from '../components/sub-components/cards/ChatCard';
import {getCommon} from './CommonStackScreens';
import Home from '../screens/home/Home'
import MyTransactions from '../screens/account/Payments/MyTransactions';
import MyProfile from '../screens/account/Profile/MyProfile';
import MessagesForYou from '../screens/account/Messages/MessagesForYou';

const Stack = createStackNavigator();

const HomeStack = () => {

  const common = getCommon(Stack);

  return (
    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen
        name="Home" 
        component={Home}
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



       {common}

    </Stack.Navigator>
  );
}

//----------------------------------- Transactions Stack -----------------------------------------------------
const TransactionsStack = () => {
  return (
    <Stack.Navigator>

            <Stack.Screen
              name="MyTransactions"
              component={MyTransactions}
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
    </Stack.Navigator>
  );
}


//----------------------------------- Profile Stack -----------------------------------------------------
const ProfileStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen
              name="MyProfile" 
              component={MyProfile}
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
                headerLeft : ()=>(  <View style={{marginLeft : 25}}><TitleText value="My Profile" /></View>)
            }}
            />
    </Stack.Navigator>
  );
}

//----------------------------------- Support Stack -----------------------------------------------------
const SupportStack = () => {
  return (
    <Stack.Navigator >
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

    </Stack.Navigator>
  );
}

//----------------------------------- ContactUs Auth Stack -----------------------------------------------------
const ContactUsAuthStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen
              name="ContactUs" 
              component={ContactUsAuth}
              options={{
                title : "Contact Us",
                headerStyle: {
                  backgroundColor: "#D8D8D8",
                  borderBottomRightRadius : 20,
                  borderBottomLeftRadius : 20
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <NotificationsButton />),
                headerLeft : () =>( <BackButton /> )
            }}
            />
    </Stack.Navigator>
  );
}

//----------------------------------- Messages For You Stack -----------------------------------------------------
const MessagesForYouStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen
              name="MessagesForYou" 
              component={MessagesForYou}
              options={{
                title : "Messages For You",
                headerStyle: {
                  backgroundColor: "#D8D8D8",
                  borderBottomRightRadius : 20,
                  borderBottomLeftRadius : 20
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight : ()=>(  <NotificationsButton />),
                headerLeft : () =>( <BackButton /> )
            }}/>

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
    </Stack.Navigator>
  );
}




//----------------------------------- App Stack -----------------------------------------------------
const AppStack = () => {
  return (
    <Stack.Navigator>

          <Stack.Screen
                  name="App" 
                  component={DrawerMenu}
                  options={{
                    headerShown : false
                  }}
                />  

            <Stack.Screen
                  name="Notifications" 
                  component={Notifications}
                  options={{
                    title : "Notifications",
                    headerStyle: {
                      backgroundColor: "#D8D8D8",
                      
                    },
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerRight : ()=>(  <NotificationsButton />),
                    headerBackImage : () =>( <BackButton /> )
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
                    headerRight : () => (route.params.closed === true ? <ChatCard /> : <></>),
                    headerBackImage : () =>( <BackButton /> )
                })}
                />  
    </Stack.Navigator>
  );
}
export { HomeStack, TransactionsStack, ProfileStack, SupportStack, ContactUsAuthStack, MessagesForYouStack, AppStack};