import TopNav from "../../components/TopNav"
import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import {MapPinIcon,ChevronLeftIcon,PhoneIcon,AcademicCapIcon,CheckCircleIcon,EnvelopeIcon} from 'react-native-heroicons/solid'
import img from '../../Images/Lawyer.jpeg'
import {LinearGradient} from 'expo-linear-gradient';



export default function LawyerDetails({navigation}){
    
    return(
        <>
        <ScrollView className="p-2 h-[100%] bg-[#EAECF9]" showsVerticalScrollIndicator={false}>
            <View className="p-2  h-12">
               <View className="flex-row justify-between mt-3 ml-2">
                  <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("FindLawyer")}><ChevronLeftIcon color="white" size={30}/></TouchableOpacity>
                </View>
            </View>

            <View >
                <View className='bg-orange-400 p-2 py-3 mt-6 justify-center flex items-center w-52 rounded-full h-52 mx-auto' style={{elevation:30,shadowColor:'black',shadowOpacity:1,shadowRadius: 1,shadowOffset:{width:-60,height:-60}}} >
                   <View className='bg-blue-500 rounded-full' style={{elevation:100,shadowColor:'black',shadowOpacity:1,shadowRadius: 1,shadowOffset:{width:-60,height:-60}}}>
                    <Image source={img}  className="w-52 h-52 rounded-xl justify-center "></Image>
                   </View>
                  </View>
                {/* <View className='justify-center items-center '><View className='bg-green-500 w-24 mt-2 flex-row items-center px-1 rounded-full py-1 justify-center'><CheckCircleIcon size={20} color="white" /><Text className='text-sm ml-1 w-fit'>Available</Text></View></View> */}
                <View className=' mt-1 items-center '><Text className='text-2xl font-semibold'>DARSHIT H.SHAH</Text></View>
                <View className='bg-white mt-2 flex-row items-center px-1 rounded-lg py-1 justify-center mx-1' style={{elevation:5,shadowOffset:{width:6,height:6}}}><AcademicCapIcon size={20} color="#ff7751" /><Text className='text-sm ml-1 font-semibold text-gray-500'>8+ Years of Experience</Text><Text className='font-bold items-center justify-center mx-1'>|</Text><MapPinIcon size={18} color="#ff7754" /><Text className='text-sm text-gray-500 ml-1 font-semibold '>Mumbai,MH</Text></View>
                <View className='bg-white mt-4 p-2 rounded-lg px-3 mx-1' style={{elevation:5,shadowOffset:{width:6,height:6},shadowRadius:50}}><Text className='text-xl font-bold text-orange-500'>ABOUT</Text><Text className='text-sm font-semibold text-gray-500'>Darshit Shah is the new King of Law.
                It seems like Darshit Shah has claimed the throne as the new King of Law! But don't worry, his reign promises to be filled with laughter as well as justice. In fact, rumor has it that he's planning to introduce a new law that requires lawyers to wear clown wigs and oversized shoes in the courtroom to keep things light-hearted.</Text></View>
            </View>

            <View className='' style={{elevation:5,shadowOffset:{width:6,height:6}}}>
                <View className='bg-white mt-4 p-2 rounded-lg px-3 mx-1' style={{elevation:5,shadowOffset:{width:6,height:6}}} >
                    <Text className='text-xl font-bold text-orange-500'>PRACTICE AREAS</Text>
                    <View className='flex flex-row flex-wrap pb-2'>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Criminal</Text></LinearGradient>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Corporate</Text></LinearGradient>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Property</Text></LinearGradient>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Robbery</Text></LinearGradient>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Money Laundering</Text></LinearGradient>
                    <LinearGradient colors={['white', 'white']} className='p-1 px-2 rounded-[3px] mt-3 mr-2 ' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-orange-500 font-semibold ' >Harrasment</Text></LinearGradient>


                    {/* <LinearGradient colors={['#ff7754', 'orange']} className='p-1 px-2 rounded-full mt-3 mr-2' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-white font-semibold' style={{elevation:6}}>Cryptocurrency</Text></LinearGradient> */}

                    </View>
                </View>
            </View>

            <View className='mt-2 mb-4 ' style={{elevation:5,shadowOffset:{width:6,height:6}}}>
                <View className='bg-white mt-2 flex-row items-center  rounded-full py-1 justify-center mx-1' style={{elevation:5,shadowOffset:{width:100,height:100},shadowRadius:5}}><PhoneIcon size={15} color="#ff7754" /><Text className='text-sm ml-1 font-semibold text-gray-500' >9082049861</Text><Text className='font-bold items-center justify-center mx-1'>|</Text><EnvelopeIcon size={15} color="#ff7754" /><Text className='ml-1 font-semibold text-gray-500' adjustsFontSizeToFit={true} numberOfLines={1}>masterpranav07@gmail.com</Text></View>
            </View>
            
            <View className='w-full flex items-center ' >
                <LinearGradient   colors={['#fc6076', '#ff9a44', '#ef9d43', '#e75516']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} className='w-[90%] mb-10 px-3 py-2 rounded-lg mt-2' style={{elevation:10,shadowColor:"black",shadowRadius:0}}><TouchableOpacity ><View><Text className='text-xl text-center font-semibold text-white'>REQUEST SERVICE</Text></View></TouchableOpacity></LinearGradient>
            </View>   
            

        </ScrollView>



        </>

    )
}

