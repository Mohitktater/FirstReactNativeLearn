import React from 'react';   
import ProfileScreen from './ProfileScreen'; 
import Men from './home/Men'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const HomeCatTab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return ( 
      <HomeCatTab.Navigator  
        screenOptions={{
          tabBarActiveTintColor: '#a0eb14',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { 
            margin :0,
            borderRadius:0,
            borderWidth: 0.5,
            borderColor:'#a0eb14',
            shadowColor: "#a0eb14",
            shadowOffset: {
            	width: 0,
            	height: 4,
            },
            shadowOpacity: 0.40,
            shadowRadius: 0,
            elevation: 4,
          },
           
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 13,
            padding:0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#a0eb14',  
            height: 2, 
            borderRadius:10,
          },
          tabBarPressColor: 'transparent',
          swipeEnabled:false
        }}   
      >
         
        <HomeCatTab.Screen
          name="Men"
          component={Men}
          options={{
            tabBarLabel: 'Men'
          }}
        />
         <HomeCatTab.Screen
            name="Women"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Women'
            }}
        />
        <HomeCatTab.Screen
            name="Kids"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Kids'
            }}
        />
      </HomeCatTab.Navigator> 
  );
};
 ;

export default HomeScreen;
