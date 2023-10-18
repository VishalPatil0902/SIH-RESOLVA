// import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


import SafeAreaWrapper from "./components/SafeAreaWrapper";
import LawyerHomePage from "./screens/Lawyer/LawyerHomePage";
import { LinearGradient } from "expo-linear-gradient";
import FindLawyer from "./screens/Lawyer/FindLawyer";
import HomePage from "./screens/Homepage/Homepage";
import RehabilitationMain from "./screens/Rehabilitation/RehabilitationMain";
import ChatbotUI from "./screens/Chatbot";
import LawyerDetails from './screens/Lawyer/LawyerDetails';
import MyLawyer from './screens/Lawyer/MyLawyer';
import Documents from './screens/Lawyer/Documents';
import FindLawyercopy from './screens/Lawyer/FindLawyercopy';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaWrapper >
    <NavigationContainer className='bg-[#EAECF9]'>
        <Stack.Navigator initialRouteName='LawyerHomePage'>      
            {/* <HomePage/>
            {/* {/* <LawyerHomePage/>  */}
            {/* <Home/> */}
            {/* <FindLawyercopy/> */}
            {/* <RehabilitationMain />   */}
            {/* <ChatbotUI/> */}
            {/* <LawyerDetails/> */}
            {/* <MyLawyer/> */}
            {/* <Documents/> */}
            
            {/* Lawyer Pages */}
            <Stack.Screen name="LawyerHomePage" component={LawyerHomePage}  options={{ headerShown: false }} />
            <Stack.Screen name="FindLawyer" component={FindLawyercopy} options={{ headerShown: false }} />
            <Stack.Screen name="LawyerDetails" component={LawyerDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Documents" component={Documents} options={{ headerShown: false }} />
            <Stack.Screen name="MyLawyer" component={MyLawyer} options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaWrapper>
  );
}
