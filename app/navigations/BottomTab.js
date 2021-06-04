
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabButton from '../components/sub-components/navigationTabs/HomeTabButton';
import PaymentTabButton from '../components/sub-components/navigationTabs/PaymentTabButton';
import SupportTabButton from '../components/sub-components/navigationTabs/SupportTabButton';
import MoreTabButton from '../components/sub-components/navigationTabs/MoreTabButton';
import ProfileTabButton from '../components/sub-components/navigationTabs/ProfileTabButton';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import {HomeStack, TransactionsStack, ProfileStack, SupportStack} from './AppStack';
import More from '../screens/account/Messages/More';
import {useTranslation} from 'react-i18next';
import MyProfile from '../screens/account/Profile/MyProfile'

//------------------------------------------- bottom tab navigation ------------------------------------

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {

  const navigation = useNavigation();
  const {t} = useTranslation();

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
             height : 70
            },
          tabStyle :{
            padding : 13
          },
        }}
      >

        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: t(`home`),
            tabBarIcon : ({ tintColor, focused })=>(<HomeTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyTransactions"
          component={TransactionsStack}
          options={{
            tabBarLabel: t(`payments`),
            tabBarIcon : ({ tintColor, focused })=>(<PaymentTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyProfile"
          component={ProfileStack}
          options={{
            tabBarLabel: '',
            tabBarIcon : ({ tintColor, focused })=>(<ProfileTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="Support"
          component={SupportStack}
          options={{
            tabBarLabel: t(`support`),
            tabBarIcon : ({ tintColor, focused })=>(<SupportTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: t(`more`),
            tabBarIcon : ({ tintColor, focused })=>(<MoreTabButton active={focused ? true : false} />),
          }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault()
              navigation.dispatch(DrawerActions.toggleDrawer());
            }
          })}
        />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;