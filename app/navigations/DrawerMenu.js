import * as React from 'react';
import ContactUsAuth from '../screens/home/ContactUsAuth';
import  {Image} from 'react-native'
import MessagesForYou from '../screens/account/Messages/MessagesForYou';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import i18n,{t} from '../languages/i18Manager';



//------------------------------------------- drawer navigation ------------------------------------
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


  return (
      <Drawer.Navigator 
          //initialRouteName="MessagesForYou"
          drawerPosition= {i18n.isRTL ? 'right' : 'left'}
          drawerContent={props => <CustomDrawerContent {...props} />}
          >
        <Drawer.Screen 
          name="MessagesForYou" 
          component={MessagesForYou}
          options={{ 
            drawerLabel: 'Messages for you',
            title:"Messages for you",
            drawerIcon: ({focused, size}) => (
              <Image source={require('../assets/icons/Support/messages.png')} style={{width:30, height:30}}/> 
            ),
          }}
          />
        
        <Drawer.Screen 
          name="Contacts" 
          component={ContactUsAuth}
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


const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerNavigation;