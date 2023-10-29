import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


export default function Login({navigation}) {
  return (
    <View>
      <TouchableOpacity className='bg-black text-white p-2'><Text className='text-white' onPress={()=>navigation.navigate("HomePage")}>NEXT</Text></TouchableOpacity>
    </View>
  )
}