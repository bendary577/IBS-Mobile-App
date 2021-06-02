
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabButton from '../components/sub-components/navigationTabs/HomeTabButton';
import PaymentTabButton from '../components/sub-components/navigationTabs/PaymentTabButton';
import SupportTabButton from '../components/sub-components/navigationTabs/SupportTabButton';
import MoreTabButton from '../components/sub-components/navigationTabs/MoreTabButton';
import ProfileTabButton from '../components/sub-components/navigationTabs/ProfileTabButton';
import { useNavigation } from '@react-navigation/native';
import i18n,{t} from '../languages/i18Manager';
import DrawerNavigation from './DrawerMenu';
import { DrawerActions } from '@react-navigation/native';
import {HomeStack, TransactionsStack, ProfileStack, SupportStack} from './AppStack';
import More from '../screens/account/Messages/More';
//------------------------------------------- bottom tab navigation ------------------------------------

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {

  const navigation = useNavigation();

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
             height : 60
            },
          tabStyle :{
            padding : 5
          },
        }}
      >

        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon : ({ tintColor, focused })=>(<HomeTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyTransactions"
          component={TransactionsStack}
          options={{
            tabBarLabel: 'Payments',
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
            tabBarLabel: 'Support',
            tabBarIcon : ({ tintColor, focused })=>(<SupportTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'More',
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