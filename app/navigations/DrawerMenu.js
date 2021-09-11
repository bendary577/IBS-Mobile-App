import * as React from 'react';
import  {Image, I18nManager} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {ContactUsAuthStack, MessagesForYouStack} from './AppStack';
import BottomTabStack from './BottomTabStack';
import {useTranslation} from 'react-i18next';
import {textAlign} from '../utils/utilFunctions';
import ChangeLanguageButton from '../components/sub-components/buttons/ChangeLanguageButton';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  const {t} = useTranslation();

  return (
      <Drawer.Navigator 
      drawerPosition= {I18nManager.isRTL ? 'left' : 'right'}
      drawerContentOptions= {{
        labelStyle: Platform.OS === 'ios' ? textAlign() : {}
        }}>

        <Drawer.Screen 
          name="More" 
          component={BottomTabStack}
          options={{ 
            drawerLabel: t(`more`),
            title:"More",
          }}
        />

        <Drawer.Screen 
          name="MessagesForYou" 
          component={MessagesForYouStack}
          options={{ 
            drawerLabel: t(`MessagesForYou`),
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
            drawerLabel: t(`contactUs`),
            title:"Contacts",
            drawerIcon: ({focused, size}) => (
              <Image source={require('../assets/icons/Support/contacts.png')} style={{width:30, height:30}}/> 
            ),
          }}
        />

        <Drawer.Screen 
          name="Home" 
          component={ContactUsAuthStack}
          options={{ 
            drawerLabel: t(`language`),
            title:"Contacts",
            drawerIcon: ({focused, size}) => (
              <ChangeLanguageButton />
            ),
          }}
        />

      </Drawer.Navigator>
  );
}



export default DrawerNavigation;