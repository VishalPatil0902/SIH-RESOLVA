// import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer ,useNavigationContainerRef} from '@react-navigation/native'
import SafeAreaWrapper from "./components/SafeAreaWrapper";
import GetStarted from './screens/GetStarted/GetStarted'
import Login from './screens/Login/Login';
import HomepageNavigation from './Navigation/HomePageNavigation'
import ChatbotUI from './screens/ChatBot/Chatbot';
import BottomTab from './Navigation/BottomTab';
import Profile from './screens/Profile/Profile';
import Settings from './screens/Settings/Settings';
import Help from './screens/Help/Help';
import Notification from './screens/Notification/Notification';
import Home from './screens/Homepage/Home';
import Carousel from './components/Carousel';


// Routing imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <SafeAreaWrapper>
        {/* <HomePage/>
        {/* <LawyerHomePage/> */}
        {/* <Home/> */}
        {/* {/* <FindLawyer/> */}
        <RehabilitationMain /> */}
        {/* <ChatbotUI/> */}
      </SafeAreaWrapper>
    </>
  );
}
