
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabButton from '../components/sub-components/navigationTabs/HomeTabButton';
import PaymentTabButton from '../components/sub-components/navigationTabs/PaymentTabButton';
import SupportTabButton from '../components/sub-components/navigationTabs/SupportTabButton';
import MoreTabButton from '../components/sub-components/navigationTabs/MoreTabButton';
import ProfileTabButton from '../components/sub-components/navigationTabs/ProfileTabButton';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import {HomeStack, ProfileStack, SupportStack, EmploymentPaymentsStack} from './AppStack';
import More from '../screens/account/Messages/More';
import {useTranslation} from 'react-i18next';

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
            tabBarIcon : ({ focused })=>(<HomeTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyTransactions"
          component={EmploymentPaymentsStack}
          options={{
            tabBarLabel: t(`payments`),
            tabBarIcon : ({ focused })=>(<PaymentTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="MyProfile"
          component={ProfileStack}
          options={{
            tabBarLabel: t(`profile`),
            tabBarIcon : ({ focused })=>(<ProfileTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="Support"
          component={SupportStack}
          options={{
            tabBarLabel: t(`support`),
            tabBarIcon : ({ focused })=>(<SupportTabButton active={focused ? true : false}/>),
          }}
        />

        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: t(`more`),
            tabBarIcon : ({ focused })=>(<MoreTabButton active={focused ? true : false} />),
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