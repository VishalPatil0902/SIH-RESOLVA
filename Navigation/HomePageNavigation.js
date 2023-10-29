import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer ,useNavigationContainerRef} from '@react-navigation/native'


//Pages 

import HomePage from '../screens/Homepage/Homepage';
import LawyerNavigation from '../Navigation/LawyerNavigation'
import RehabilitationMain from '../screens/Rehabilitation/RehabilitationMain';
import CaseStatus from '../screens/CaseStatus/CaseStatus'
import ChatbotUI from '../screens/ChatBot/Chatbot';
import BottomTab from './BottomTab'

const Stack = createStackNavigator();


export default function HomePageNavigation() {
  return (

        <Stack.Navigator initialRouteName='HomePage' options={{headerShown:false}}>       
            <Stack.Screen name="HomePage" component={HomePage}  options={{ headerShown: false }} />
            <Stack.Screen name="LawyerPageNavigation" component={LawyerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Rehabilitation" component={RehabilitationMain} options={{ headerShown: false }} />
            <Stack.Screen name="CaseStatus" component={CaseStatus} options={{ headerShown: false }} />
            <Stack.Screen
        name="ChatBot"
        component={ChatbotUI}
        options={({ route }) => ({
          tabBarVisible: false, 
          headerShown:false,
        })}
      />
        </Stack.Navigator> 

  );
}