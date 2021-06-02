import * as React from 'react';
import ContactUsAuth from '../screens/home/ContactUsAuth';
import  {Image} from 'react-native'
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import i18n,{t} from '../languages/i18Manager';
import BottomTabsNavigation from './BottomTab';
import AppStack from './AppStack';
import {ContactUsAuthStack, MessagesForYouStack} from './AppStack';
//------------------------------------------- drawer navigation ------------------------------------
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


  return (
      <Drawer.Navigator drawerPosition= {i18n.isRTL ? 'left' : 'right'}>

        <Drawer.Screen 
          name="More" 
          component={BottomTabsNavigation}
          options={{ 
            drawerLabel: 'More',
            title:"More",
          }}
        />

        <Drawer.Screen 
          name="MessagesForYou" 
          component={MessagesForYouStack}
          options={{ 
            drawerLabel: 'Messages For You',
            title:"Contacts",
            drawerIcon: ({focused, size}) => (
              <Image source={require('../assets/icons/Support/messages.png')} style={{width:30, height:30}}/> 
            ),
          }}
        />

        <Drawer.Screen 
          name="Contacts" 
          component={ContactUsAuthStack}
          options={{ 
            drawerLabel: 'Contact Us',
            title:"Contacts",
            drawerIcon: ({focused, size}) => (
              <Image source={require('../assets/icons/Support/contacts.png')} style={{width:30, height:30}}/> 
            ),
          }}
        />

      </Drawer.Navigator>
  );
}



export default DrawerNavigation;