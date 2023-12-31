import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
// import {MapPinIcon,ChevronLeftIcon,PhoneIcon,CakeIcon, UserCircleIcon, ChevronRightIcon,ArrowRightOnRectangleIcon} from 'react-native-heroicons/solid'
import {PaperAirplaneIcon,EyeIcon,LockClosedIcon,ChevronRightIcon,ArrowRightOnRectangleIcon,UserIcon,QuestionMarkCircleIcon,ChatBubbleBottomCenterIcon,PhoneIcon} from 'react-native-heroicons/outline'


export default function Help() {
  return (
    <View className=''>
         <View className='bg-[#ffb70e] h-52 ' style={{elevation:10}}>
              <Text className='text-white text-4xl mt-10 mx-4 font-bold'>Help</Text>
              <Text className='text-white text-lg mx-4'>Get All the Help You Need</Text>
         </View>
         <View>

         </View>
         <View className='bg-white h-fit mx-3 rounded-2xl my-[-50px] p-4 justify-around mb-5' style={{elevation:10}}>
                <TouchableOpacity><View className='flex-row items-center p-2 justify-between my-2'><View className='flex-row items-center'><View className='bg-[#f6f6f6] p-1 rounded-full'><QuestionMarkCircleIcon color="orange" size={35}/></View><Text className='font-bold text-xl ml-4 text-gray-600'>FAQ's</Text></View><ChevronRightIcon color='gray' size={30}/></View></TouchableOpacity>
                <TouchableOpacity><View className='flex-row items-center p-2 justify-between my-2'><View className='flex-row items-center'><View className='bg-[#f6f6f6] p-1 rounded-full'><ChatBubbleBottomCenterIcon color="orange" size={30}/></View><Text className='font-bold text-xl ml-4 text-gray-600'>Chat</Text></View><ChevronRightIcon color='gray' size={30}/></View></TouchableOpacity>
                <TouchableOpacity><View className='flex-row items-center p-2 justify-between my-2'><View className='flex-row items-center'><View className='bg-[#f6f6f6] p-1 rounded-full'><PhoneIcon color="orange" size={30}/></View><Text className='font-bold text-xl ml-4 text-gray-600'>Call us</Text></View><ChevronRightIcon color='gray' size={30}/></View></TouchableOpacity>
                <TouchableOpacity><View className='flex-row items-center p-2 justify-between my-2'><View className='flex-row items-center'><View className='bg-[#f6f6f6] p-1 rounded-full'><PaperAirplaneIcon color="orange" size={30}/></View><Text className='font-bold text-xl ml-4 text-gray-600'>Send Feedback</Text></View><ChevronRightIcon color='gray' size={30}/></View></TouchableOpacity>
         </View>

         {/* <View className='mt-3 bg-white h-fit m-3 rounded-2xl py-3 px-8 flex-row items-center' style={{elevation:10}}><ArrowRightOnRectangleIcon size={40} color='red'/><Text className='text-red ml-3 text-lg font-semibold text-red-500'>Logout</Text></View> */}
    </View>
  )
}