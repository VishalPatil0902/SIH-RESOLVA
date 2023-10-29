import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import img from '../../Images/Lawyer.jpeg'
import {MapPinIcon,ChevronLeftIcon,PhoneIcon,CakeIcon, CalendarIcon} from 'react-native-heroicons/solid'
import {LinearGradient} from 'expo-linear-gradient';

export default function Profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='w-[100%] h-full bg-[#EAECF9]' >
      <View>
      <LinearGradient colors={['#fc6076', '#ff9a44', '#ef9d43', '#e75516']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}  style={{elevation:10,shadowColor:"black",shadowRadius:0}} className=' h-44 rounded-b-3xl' >
         </LinearGradient>
         <Image source={img}  className="w-44 h-44 rounded-full mx-auto mt-[-100px]"></Image>
      </View>
      <Text className='my-2 text-center text-2xl font-semibold text-orange-500'>PRANAV PATIL</Text>

      <View className='bg-white h-fit m-3 rounded-lg p-2 flex-row justify-around ' style={{elevation:5}}>
          <View className='flex-col'>
             <View className='flex-row items-center'><PhoneIcon size={15} color="#ff7754" /><Text className='text-base font-semibold ml-2 text-gray-600'>9082049861</Text></View>
             <View className='flex-row items-center'><CalendarIcon size={15} color="#ff7754" /><Text className='text-base font-semibold ml-2 text-gray-600'>7th April 2003</Text></View>
          </View>

          <View className='flex-col'>
             <View className='flex-row items-center '><CalendarIcon size={15} color="#ff7754" /><Text className='text-base font-semibold ml-2 text-gray-600'>Male</Text></View>
             <View className='flex-row items-center'><MapPinIcon size={15} color="#ff7754" /><Text className='text-base font-semibold ml-2 text-gray-600'>Mulund,Mumbai</Text></View>
          </View>
      </View>

      {/* <View className='bg-white h-fit m-3 rounded-lg p-2 flex-row justify-around ' style={{elevation:5}}>
          <View className='flex-col w-[100%] bg-green-600'>
             <View className='flex-row items-center w-[100%]'>
                <Text className='text-base font-semibold ml-2 text-gray-600 bg-blue-500 w-fit'>Address :</Text>
                <Text className="w-[100%]">K.j.Somaiya College Of Engineering,VidyaVihar,Mumbai,400202,Maharahstra</Text>
             </View>
          </View>
      </View> */}

      {/* <Text>Profile</Text> */}
    </ScrollView>
  )
}