import * as React from 'react';
import BackButton from '../components/sub-components/buttons/BackButton';
import NotificationsButton from '../components/sub-components/buttons/NotificationsButton';
import Chat from '../screens/account/Support/Chat';
import  {I18nManager} from 'react-native'
import Notifications from '../screens/account/Notifications/Notifications';
import DrawerMenu from './DrawerMenu';
import ChatCard from '../components/sub-components/cards/ChatCard';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainStack = () => {

    const {t} = useTranslation();
  
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
                      title : t(`notifications`),
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
                      headerRight : () => ( I18nManager.isRTL ? <></> : route.params.closed === true ? <ChatCard /> : <></>),
                      //headerLeft : () => ( I18nManager.isRTL ?  route.params.closed === true ? <ChatCard /> : <></> : <></>  ),
                      headerBackImage : () =>( <BackButton /> )
                  })}
            />  
      </Stack.Navigator>
    );
  }

  export default MainStack;