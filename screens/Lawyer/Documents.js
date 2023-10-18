import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import React from 'react'
import {ChevronLeftIcon,PhoneIcon,EnvelopeIcon,EllipsisVerticalIcon} from 'react-native-heroicons/solid'
import img from '../../Images/key.png'
import {LinearGradient} from 'expo-linear-gradient';


const Documents = ({navigation}) => {
  return (
    <>    
        <ScrollView className="bg-[#EAECF9]" >
           <View className='h-52'>
            
           <LinearGradient colors={['#52e5e7', '#130cb7']} className="p-2  h-[100%] rounded-b-3xl " style={{elevation:10,shadowColor:'black'}}>
                   <View className="p-2  h-[100%] rounded-b-3xl " >
                   <View className="flex-row justify-between mt-3 ml-2">
                   <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("LawyerHomePage")}><ChevronLeftIcon color="white" size={30}/></TouchableOpacity>                     
                   </View>
                   <LinearGradient colors={['#52e5e7', '#130cb7']} className=' w-[90%] h-[80%] mx-auto mt-12 rounded-3xl p-1' style={{elevation:20,shadowColor:'blue'}}>
                   <View  >
                        <View className='flex-row p-2 flex-wrap justify-around w-[100%] '><View className='w-20 h-20 bg-white flex items-center justify-center rounded-full'><Image source={img} className='w-16 h-16' /></View><View><Text className='text-white text-xl my-auto  text-center font-bold'>ACCESS MANAGER</Text></View></View>
                        <View className=' my-auto '><Text className='italic font-bold text-white text-center text-base'>Manage Your Documents Access Here..</Text></View>
                   </View>
                   </LinearGradient>
                </View>
                </LinearGradient>

           </View>


           <View className='mt-16 rounded-lg p-1 px-2' ><Text className='text-xl font-semibold text-green-800' style={{textShadowColor: 'green',textShadowOffset: {width: 1, height: 1},textShadowRadius: 0}}>GRANTED ACCESS TO LAWYER</Text></View>
            
           <View className=''>
              <View className='mb-2 mt-1 p-2 '>
                  <View className='bg-white mt-2 p-2 rounded-lg px-3 flex-row justify-between' style={{elevation:5,shadowOffset:{width:6,height:6}}} >
                     <Text className='text-lg font-semibold text-orange-400'>AADHAAR CARD</Text>
                     <EllipsisVerticalIcon color='black' size={25}/>
                 </View>
              </View>
            </View>


            <View className='mt-5 rounded-lg p-1 px-2' style={{}}><Text className='text-xl font-semibold text-red-500 '>DENIED ACCESS TO LAWYER</Text></View>
            
            <View className=''>
              <View className='mb-2 mt-1 p-2'>
                  <View className='bg-white mt-2 p-2 rounded-lg px-3 flex-row justify-between' style={{elevation:5,shadowOffset:{width:6,height:6}}} >
                     <Text className='text-lg font-semibold text-orange-400'>PAN CARD</Text>
                     <EllipsisVerticalIcon color='black' size={25}/>
                 </View>
              </View>
            </View>


            {/* <View className='mt-2 mb-4 ' style={{elevation:5,shadowOffset:{width:6,height:6}}}>
                <View className='bg-white mt-2 flex-row items-center px-1 rounded-full py-1 justify-center' style={{elevation:5,shadowOffset:{width:100,height:100},shadowRadius:5}}><PhoneIcon size={20} color="#ff7754" /><Text className='text-sm ml-1 text-gray-500 font-medium'>+91-9082049861</Text><Text className='font-bold items-center justify-center mx-1'>|</Text><EnvelopeIcon size={18} color="#ff7754" /><Text className='text-sm ml-1 text-gray-500 font-medium'>masterpranav07@gmail.com</Text></View>
            </View> */}
            
            {/* <View className='h-fit mb-10 p-2 flex flex-row justify-evenly'>
               <TouchableOpacity className='bg-white w-[40%] h-fit py-1 px-2d rounded-xl flex flex-row items-center justify-center border-1 border-green-500' style={{elevation:10,shadowColor:'green'}}><ChatBubbleLeftIcon color='green' className='items-center'/><Text className='ml-2 text-base text-green-400'>Message</Text></TouchableOpacity>
               <TouchableOpacity className='bg-white w-[40%] h-fit py-1 px-2d rounded-xl flex flex-row items-center justify-center border-1 border-blue-500' style={{elevation:10,shadowColor:'blue'}}><VideoCameraIcon color='blue' className='items-center'/><Text className='ml-2 text-base text-blue-400'>Video Call</Text></TouchableOpacity>
            </View>    */}
          <View className='mt-5'></View>
        </ScrollView>
  </>

  )
}

export default Documents