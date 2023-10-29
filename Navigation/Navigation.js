import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//HOME PAGE STACK
import HomePage from '../screens/Homepage/Homepage';
import LawyerNavigation from '../Navigation/LawyerNavigation'
import RehabilitationMain from '../screens/Rehabilitation/RehabilitationMain';
import CaseStatus from '../screens/CaseStatus/CaseStatus'
import ChatbotUI from '../screens/ChatBot/Chatbot';

//LAWYER PAGE STACK

import LawyerDetails from '../screens/Lawyer/LawyerDetails';
import MyLawyer from '../screens/Lawyer/MyLawyer';
import Documents from '../screens/Lawyer/Documents';
import FindLawyercopy from '../screens/Lawyer/FindLawyercopy';
import LawyerHomePage from '../screens/Lawyer/LawyerHomePage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  
  const HomeStack = ()=>{
    return(
        <Stack.Navigator initialRouteName='HomePage' options={{headerShown:false}}>       
            <Stack.Screen name="HomePage" component={HomePage}  options={{ headerShown: false }} />
            <Stack.Screen name="LawyerHomePage" component={LawyerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Rehabilitation" component={RehabilitationMain} options={{ headerShown: false }} />
            <Stack.Screen name="CaseStatus" component={CaseStatus} options={{ headerShown: false }} />
            <Stack.Screen name="ChatBot" component={ChatbotUI} options={{ headerShown: false }} />
        </Stack.Navigator> 
    );
  }

  const BottomTab = ()=>{
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
            tabBarVisible: getTabBarVisibility(route),
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
        tabBarVisible: false, 
        tabBarButton: (props) => null, 
      }}
        />
      
      </Tab.Navigator>
       )
  }
  
  
  const LawyerStack = ()=>{
    return (
        <Stack.Navigator initialRouteName='LawyerHomePage'>       
                <Stack.Screen name="LawyerHomePage" component={LawyerHomePage}  options={{ headerShown: false }} />
                <Stack.Screen name="FindLawyer"     component={FindLawyercopy}      options={{ headerShown: false }} />
                <Stack.Screen name="LawyerDetails"  component={LawyerDetails}    options={{ headerShown: false }} />
                <Stack.Screen name="Documents"      component={Documents}            options={{ headerShown: false }} />
                <Stack.Screen name="MyLawyer"       component={MyLawyer}              options={{ headerShown: false }} /> 
        </Stack.Navigator> 
    )
  }
  
  
  
    return (
    <View>
      <Text>Navigation</Text>
    </View>
  )
}