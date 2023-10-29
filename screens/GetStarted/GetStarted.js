import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function GetStarted({navigation}) {
  return (
    <View>
      <Text>GetStarted</Text>
      <TouchableOpacity className='bg-black text-white p-2'><Text className='text-white' onPress={()=>navigation.navigate("Login")}>NEXT</Text></TouchableOpacity>
    </View>
  )
}