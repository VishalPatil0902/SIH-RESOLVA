import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Carousel from '../../components/Carousel'
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import {LinearGradient} from 'expo-linear-gradient';

//IMAGES 

import app from '../../Images/booking.png';
import doc from '../../Images/compliant.png';
import law from '../../Images/lawyer4.png';
import search from '../../Images/search1.png'

const LawyerHomePage = ({navigation}) => {
  return (
    <View className='bg-[#EAECF9] w-full h-full'>

    <View className='m-2 bg-[#EAECF9]'>
            <View className="flex-row justify-between mt-2 items-center ">
                  <View className='rounded-lg'>
                        <AdjustmentsHorizontalIcon color="#ff7754" size={40}/>
                  </View>
                  <View className='rounded-lg'>
                        <Text className='font-bold text-lg'></Text>
                  </View>
                  <View className='rounded-lg p-1'>
                        <BellAlertIcon color="#ff7754" size={33}/>
                  </View>
            </View>

            
      <LinearGradient colors={['#ff7754', 'orange']} className='mt-5 bg-black h-[18%] rounded-lg'>
          <Text className='text-xl font-bold text-white text-center p-2'>Welcom TO Your Legal Universe</Text>
           
            {/* <Carousel/> */}
      </LinearGradient>

         {/* CARDS */}

      <View className="flex-row justify-around flex-wrap w-[100%] h-[100%] rounded-t-3xl ">

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("FindLawyer")}>
                              <View className='w-[80%] h-[80%] mx-1 p-3'>
                              <Image source={search} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Find Lawyer</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("MyLawyer")}>
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={law} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>My Lawyer</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("Documents")}>
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={doc} className="w-[110%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Documents</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} >
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={app} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Appointments</Text>
                        </TouchableOpacity>
                  </View>

      </View> 

    </View>
</View>

  )
}

export default LawyerHomePage;