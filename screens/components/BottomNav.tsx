import React from 'react';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';
import ProfileScreen from '../ProfileScreen';  
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome' 
import {  faHome } from '@fortawesome/free-solid-svg-icons/faHome'  
import {  faUser } from '@fortawesome/free-solid-svg-icons/faUser'  
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator(); 

const BottomNav = () => {
  return (
      <Tab.Navigator   
        screenOptions={{ 
          tabBarActiveTintColor: '#a0eb14',
          tabBarInactiveTintColor: 'gray',
          tabBarPressOpacity: 0,
          tabBarStyle: {
            height: 60,
            borderWidth: 0.5,
            borderColor:'#a0eb14',
          },
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 13,
          },
          tabBarIconStyle: {
            alignSelf: 'center',
          }, 
          headerShown: false,
         
          
        }}   
      >
        <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) =>
              <FontAwesomeIcon icon={faHome}
              color={focused ? '#a0eb14' : '#999'}
              size={23} />
            }}
          />
        <Tab.Screen
          name="offers"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Offers',
            tabBarIcon: ({focused}) => 
            <FontAwesomeIcon icon={faFire} 
            color={focused ? '#a0eb14' : '#999'}
            size={23} /> 
          }}
        />
         <Tab.Screen
            name="categories"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({focused}) =>
              <FontAwesomeIcon icon={faBorderNone}
              color={focused ? '#a0eb14' : '#999'}
              size={23} />
            }}
        />
        <Tab.Screen
            name="user"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({focused}) =>
              <FontAwesomeIcon icon={faUser}
              color={focused ? '#a0eb14' : '#999'}
              size={23} />
            }}
        />
      </Tab.Navigator> 
  );
};
 ;

export default BottomNav;
