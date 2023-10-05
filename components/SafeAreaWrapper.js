import React from 'react';
import { View, StyleSheet,StatusBar} from 'react-native';

const SafeAreaWrapper = ({ children }) => {
  return (
      <View style={styles.container}>
         {children}
      </View>
  );
};

const styles=StyleSheet.create({
    container:{
       flex:1,
       marginTop:StatusBar.currentHeight,
    }
})


export default SafeAreaWrapper;