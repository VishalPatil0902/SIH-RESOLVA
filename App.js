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

export default function App() {
  return (
    <>
      <SafeAreaWrapper>
        {/* <HomePage/>
        {/* <LawyerHomePage/> */}
        {/* <Home/> */}
        {/* <FindLawyer/> */}
        <RehabilitationMain />
      </SafeAreaWrapper>
    </>
  );
}
