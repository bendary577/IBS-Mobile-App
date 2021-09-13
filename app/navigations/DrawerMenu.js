import * as React from 'react';
import  {Image, TouchableOpacity, I18nManager} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {ContactUsAuthStack, MessagesForYouStack} from './AppStack';
import BottomTabStack from './BottomTabStack';
import {useTranslation} from 'react-i18next';
import {textAlign} from '../utils/utilFunctions';
import ChangeLanguageButton from '../components/sub-components/buttons/ChangeLanguageButton';
import * as Updates from "expo-updates";
import * as SecureStore from 'expo-secure-store';
let arabic = '../assets/icons/Home/arabic-menu.png';
let english = '../assets/icons/Home/english-menu.png';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

  const {t, i18n} = useTranslation();

  const setEnglishLanguage = (lang) =>{
    i18n
    .changeLanguage(lang, () => {
        I18nManager.forceRTL(false);
        SecureStore.setItemAsync('language', 'true');
        SecureStore.setItemAsync('lang', lang);
        Updates.reloadAsync();
    })
}

const setArabicLanguage = (lang) =>{
     i18n
     .changeLanguage(lang, () => {
         I18nManager.forceRTL(true);
         SecureStore.setItemAsync('language', 'true');
         SecureStore.setItemAsync('lang', lang);
         Updates.reloadAsync();
     })
}

  const CustomDrawerContent = (props)=>{
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label ={t(`changeLanguage`)}
          labelStyle={{textAlign:'left'}}
          icon={({focused, size}) => (
              <Image source={I18nManager.isRTL ? require(english) : require(arabic)} style={{width:30, height:30}}/> 
          )}
          onPress={I18nManager.isRTL ? () => {setEnglishLanguage()} : ()=> {setArabicLanguage()}}
        />
      </DrawerContentScrollView>
    );
  }
  
  return (
      <Drawer.Navigator 
      drawerPosition= {I18nManager.isRTL ? 'left' : 'right'}
      drawerContentOptions= {{
        labelStyle: Platform.OS === 'ios' ? textAlign() : {}
        }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>

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

      </Drawer.Navigator>
  );
}



export default DrawerNavigation;