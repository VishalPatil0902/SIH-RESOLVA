import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


import SafeAreaWrapper from "../components/SafeAreaWrapper";

import LawyerDetails from '../screens/Lawyer/LawyerDetails';
import MyLawyer from '../screens/Lawyer/MyLawyer';
import Documents from '../screens/Lawyer/Documents';
import FindLawyercopy from '../screens/Lawyer/FindLawyercopy';
import LawyerHomePage from '../screens/Lawyer/LawyerHomePage';



const Stack = createStackNavigator();


export default function LawyerNavigation() {
  return (
        <Stack.Navigator initialRouteName='LawyerHomePage'>       
            <Stack.Screen name="LawyerHomePage" component={LawyerHomePage}  options={{ headerShown: false }} />
            <Stack.Screen name="FindLawyer"     component={FindLawyercopy}      options={{ headerShown: false }} />
            <Stack.Screen name="LawyerDetails"  component={LawyerDetails}    options={{ headerShown: false }} />
            <Stack.Screen name="Documents"      component={Documents}            options={{ headerShown: false }} />
            <Stack.Screen name="MyLawyer"       component={MyLawyer}              options={{ headerShown: false }} /> 
        </Stack.Navigator> 
  );
}
