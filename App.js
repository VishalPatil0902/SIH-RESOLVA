import {
  SafeAreaView,
  SafeAreaViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeAreaWrapper from "./components/SafeAreaWrapper";
import LawyerHomePage from "./screens/Lawyer/LawyerHomePage";
import { LinearGradient } from "expo-linear-gradient";
import FindLawyer from "./screens/Lawyer/FindLawyer";
import HomePage from "./screens/Homepage/Homepage";
import RehabilitationMain from "./screens/Rehabilitation/RehabilitationMain";
import ChatbotUI from "./screens/Chatbot";

// Routing imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaWrapper>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="LawyerHomePage" component={LawyerHomePage} />
            <Stack.Screen name="FindLawyer" component={FindLawyer} />
            <Stack.Screen
              name="RehabilitationMain"
              component={RehabilitationMain}
            />
            <Stack.Screen name="ChatbotUI" component={ChatbotUI} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaWrapper>
    </>
  );
}
