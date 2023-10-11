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
import LawyerDetails from './screens/Lawyer/LawyerDetails';
import MyLawyer from './screens/Lawyer/MyLawyer';
import Documents from './screens/Lawyer/Documents';
import FindLawyercopy from './screens/Lawyer/FindLawyercopy';
export default function App() {
  return (
    <>
      <SafeAreaWrapper >
        {/* <HomePage/>
        {/* {/* <LawyerHomePage/>  */}
        {/* <Home/> */}
        {/* {/* <FindLawyercopy/> */}
        <RehabilitationMain /> 
        {/* <ChatbotUI/> */}
        {/* <LawyerDetails/> */}
        {/* <MyLawyer/> */}
        {/* <Documents/> */}
      </SafeAreaWrapper>
    </>
  );
}
