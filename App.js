import { SafeAreaView, SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';
import SafeAreaWrapper from './components/SafeAreaWrapper';
import LawyerHomePage from './screens/Lawyer/LawyerHomePage';
import {LinearGradient} from 'expo-linear-gradient';
import FindLawyer from './screens/Lawyer/FindLawyer';

export default function App() {
  return (
    <>
      <SafeAreaWrapper>
        {/* <LawyerHomePage/> */}
        {/* <Home/> */}
        <FindLawyer/>
      </SafeAreaWrapper>
    </>


  );
}


