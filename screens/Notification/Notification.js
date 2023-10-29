import { View, Text,ScrollView,TouchableOpacity } from 'react-native';
import {MapPinIcon,ChevronLeftIcon,PhoneIcon,AcademicCapIcon,CheckCircleIcon,EnvelopeIcon,ChatBubbleLeftIcon,VideoCameraIcon} from 'react-native-heroicons/solid';
import React from 'react';

const Notification = () => {
  return (
    <ScrollView className="p-2 bg-[#EAECF9] h-[100%]" showsVerticalScrollIndicator={false}>
        <View className="p-2  h-fit">
            {/* <View className="flex-row justify-between mt-3 ml-2">
               <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("LawyerHomePage")}><ChevronLeftIcon color="white" size={30}/></TouchableOpacity>
                </View> */}
                <View className="mt-8">
                  <Text className="text-2xl font-semibold text-[#FF7754] ml-1">Notification</Text>
                </View>
                <View className='bg-orange-400 h-0.5 mx-2  my-1'>

                </View>

                <View className='mt-2 '>
                     <View className='bg-white h-fit rounded-lg p-2 ' style={{elevation:5,shadowColor:'blue'}}>
                     <Text className='m-1 text-lg font-bold text-orange-400'>Message From Darshit Shah</Text>
                         <Text className='m-1 text-gray-600'>23 OCT,2023</Text>
                         <Text className='m-1 text-gray-500'>Please Submit your aadhaar card details.</Text>
                     </View>
                     <View className='bg-white h-fit rounded-lg p-2 mt-2' style={{elevation:5,shadowColor:'blue'}}>
                     <Text className='m-1 text-lg font-bold text-orange-400'>Message From Darshit Shah</Text>
                         <Text className='m-1 text-gray-600'>17 OCT,2023</Text>
                         <Text className='m-1 text-gray-500'>I have read you case and i am ready to represent you.Please provide me....</Text>
                     </View>
                </View>
            </View>
    </ScrollView>
  )
}

export default Notification