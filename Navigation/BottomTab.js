import { createBottomTabNavigator ,} from '@react-navigation/bottom-tabs';
import { HomeIcon, Cog6ToothIcon, UserCircleIcon, ChatBubbleLeftRightIcon } from 'react-native-heroicons/solid';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';


// Page Imports
import HomePageNavigation from './HomePageNavigation';
import Profile from '../screens/Profile/Profile';
import Help from '../screens/Help/Help';
import Settings from '../screens/Settings/Settings';
import ChatbotUI from '../screens/ChatBot/Chatbot';

export default function BottomTab() {
  const navigationRef = useNavigationContainerRef();
  const Tab = createBottomTabNavigator();
  const route = navigationRef.getCurrentRoute();



  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 15,
          height: 55,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? (
              <HomeIcon color="orange" />
            ) : (
              <HomeIcon color="black" />
            );
          } else if (route.name === 'Profile') {
            iconName = focused ? (
              <UserCircleIcon color="orange" />
            ) : (
              <UserCircleIcon color="black" />
            );
          } else if (route.name === 'Help') {
            iconName = focused ? (
              <ChatBubbleLeftRightIcon color="orange" />
            ) : (
              <ChatBubbleLeftRightIcon color="black" />
            );
          } else if (route.name === 'Settings') {
            iconName = focused ? (
              <Cog6ToothIcon color="orange" />
            ) : (
              <Cog6ToothIcon color="black" />
            );
          }
          return iconName;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePageNavigation}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Chatbot"
        component={ChatbotUI}
        options={{
        tabBarButton: () => null, // This line hides the bottom tab bar
      
    }}
      /> 
    
    </Tab.Navigator>
  );
}

