import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import {MapPinIcon,ChevronLeftIcon,PhoneIcon,AcademicCapIcon,CheckCircleIcon,EnvelopeIcon,ChatBubbleLeftIcon,VideoCameraIcon} from 'react-native-heroicons/solid'
import img from '../../Images/Lawyer.jpeg'
import {LinearGradient} from 'expo-linear-gradient';

const MyLawyer = ({navigation}) => {
  return (
     <>
        <ScrollView className="h-[100%] bg-[#EAECF9]" showsVerticalScrollIndicator={false}>
            <View className="p-2  h-12">
               <View className="flex-row justify-between mt-3 ml-2">
               <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("LawyerHomePage")}><ChevronLeftIcon color="white" size={30}/></TouchableOpacity>

                </View>
            </View>

            <View className='p-2'>
                <View className='bg-orange-400 p-2 py-3 mt-6 justify-center flex items-center w-52 rounded-full h-52 mx-auto' style={{elevation:10,shadowColor:'green'}} >
                   <View className='bg-blue-500 rounded-full' style={{elevation:10,shadowColor:'black'}}>
                    <Image source={img}  className="w-52 h-52 rounded-lg justify-center "></Image>
                   </View>
                  </View>
                {/* <View className='justify-center items-center '><View className='bg-green-500 w-24 mt-2 flex-row items-center px-1 rounded-full py-1 justify-center'><CheckCircleIcon size={20} color="white" /><Text className='text-sm ml-1 w-fit'>Available</Text></View></View> */}
                <View className=' mt-1 items-center '><Text className='text-2xl'>DARSHIT H.SHAH</Text></View>
                <View className='bg-white mt-2 flex-row items-center px-1 rounded-lg py-1 justify-center' style={{elevation:5,shadowOffset:{width:6,height:6}}}><AcademicCapIcon size={20} color="#ff7751" /><Text className='text-sm ml-1 text-gray-500 font-medium'>8+ Years of Experience</Text><Text className='font-bold items-center justify-center mx-1'>|</Text><MapPinIcon size={18} color="#ff7754" /><Text className='text-sm ml-1 text-gray-500 font-medium'>Mumbai,MH</Text></View>
                <View className='bg-white mt-4 p-2 rounded-lg px-3' style={{elevation:5,shadowOffset:{width:6,height:6},shadowRadius:50}}><Text className='text-xl font-bold text-orange-400'>ABOUT</Text><Text className='text-sm text-gray-500 font-medium'>Darshit Shah is the new King of Law.
                It seems like Darshit Shah has claimed the throne as the new King of Law! But don't worry, his reign promises to be filled with laughter as well as justice. In fact, rumor has it that he's planning to introduce a new law that requires lawyers to wear clown wigs and oversized shoes in the courtroom to keep things light-hearted.</Text></View>
            </View>

            <View className=' p-2' style={{elevation:5,shadowOffset:{width:6,height:6}}}>
                <View className='bg-white mt-1 p-2 rounded-lg px-3' style={{elevation:5,shadowOffset:{width:6,height:6}}} >
                    <Text className='text-xl font-semibold text-orange-400'>CASE DETAILS</Text>
                    <View className='flex'>
                     <View className='my-1 h-fit '><Text className='h-fit first-line text-gray-500'>CASE NO : <Text className='text-blue-400'>7896523147</Text></Text></View>
                     <View className='my-1 h-fit '><Text className='text-gray-500'>APPLIED FOR BAIL:<Text className='text-blue-400'> Yes</Text></Text></View>
                    </View>
                </View>
            </View>

            <View className='mb-4 p-2' style={{elevation:5,shadowOffset:{width:6,height:6}}}>
                <View className='bg-white mt-2 flex-row items-center px-1 rounded-lg py-1 justify-center' style={{elevation:5,shadowOffset:{width:100,height:100},shadowRadius:5}}><PhoneIcon size={15} color="#ff7754" /><Text className='text-sm ml-1 text-gray-500 font-medium'>9082049861</Text><Text className='font-bold items-center justify-center mx-1'>|</Text><EnvelopeIcon size={15} color="#ff7754" /><Text className='text-sm ml-1 text-gray-500 font-medium'>masterpranav07@gmail.com</Text></View>
            </View>
            
            <View className='h-fit mb-10 p-2 flex flex-row justify-evenly'>
               <TouchableOpacity className='bg-white w-[45%] h-fit py-1 px-2d rounded-xl flex flex-row items-center justify-center border-1 border-green-500' style={{elevation:10,shadowColor:'green'}}><ChatBubbleLeftIcon color='green' className='items-center'/><Text className='ml-2 text-base text-green-400'>Message</Text></TouchableOpacity>
               <TouchableOpacity className='bg-white w-[45%] h-fit py-1 px-2d rounded-xl flex flex-row items-center justify-center border-1 border-blue-500' style={{elevation:10,shadowColor:'blue'}}><VideoCameraIcon color='blue' className='items-center'/><Text className='ml-2 text-base text-blue-400'>Video Call</Text></TouchableOpacity>
            </View>   

            <View className='mb-16'></View>

        </ScrollView>
     </>
  )
}

export default MyLawyer