import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Carousel from '../../components/Carousel'
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import img12 from '../../Images/translation.png';

//IMAGES 

import Caseimg from '../../Images/home4.png';
import Chatimg from '../../Images/home3.png';
import rehabimg from '../../Images/home2.png';
import legalimg from '../../Images/home1.png';

const Home = ({navigation}) => {
  return (
    <View className='bg-[#EAECF9] w-full h-full'>

    <View className='m-2 bg-[#EAECF9]'>
            <View className="flex-row justify-between mt-2 items-center ">
                  <View className='rounded-lg' >
                        <TouchableOpacity onPress={()=>navigation.navigate("Notification")}><AdjustmentsHorizontalIcon color="#ff7754" size={40} /></TouchableOpacity>
                  </View>
                  <View className='rounded-lg'>
                        <Text className='font-bold text-2xl'>E-PRISON</Text>
                  </View>
                  <View className='rounded-lg p-1'>
                  <TouchableOpacity onPress={()=>navigation.navigate("Notification")}><Image source={img12} className='w-8 h-8 mr-2'/></TouchableOpacity>
                  </View>
            </View>

            
      <View className='mt-5'>
            <Carousel/>
      </View>
            

         {/* CARDS */}

      <View className="flex-row justify-around flex-wrap w-[100%] h-[100%] rounded-t-3xl ">

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("LawyerPageNavigation")}>
                              <View className='w-[80%] h-[80%] mx-1 p-3 '>
                              <Image source={legalimg} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Legal Services</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("Rehabilitation")}>
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={rehabimg} className="w-[110%] h-[90%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Rehabilitaion</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("CaseStatus")}>
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={Caseimg} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Case Status</Text>
                        </TouchableOpacity>
                  </View>

                  <View className='rounded-lg mt-5 w-[45%] h-[20%] '>
                        <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("ChatBot")}>
                              <View className='w-[80%] h-[80%] mx-3 p-3'>
                              <Image source={Chatimg} className="w-[100%] h-[100%]"/>
                              </View>
                              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>ChatBot</Text>
                        </TouchableOpacity>
                  </View>

      </View> 

    </View>
</View>

  )
}

export default Home