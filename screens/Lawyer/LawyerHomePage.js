import {View,Text, ScrollView, TouchableOpacity,Image} from "react-native";
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import Cards from "../../components/Cards";
import {LinearGradient} from 'expo-linear-gradient';
import Search2 from '../../Images/search.png'
import MyLawyer from '../../Images/lawyer.png'
import documents from '../../Images/agreement.png'
import Appointments from '../../Images/appointment.png'



export default function LawyerHomePage({ navigation }){
    
    return(
        <>
        <View className="w-[100%] h-[100%]  bg-[#EAECF9] rounded" >
         <LinearGradient colors={['#ED765E', '#FEA858']} className="h-[25%] rounded-b-3xl">
         <View className="p-2  h-[20%] ">
             <View className="flex-row justify-between mt-2 ">
                <View className='bg-white rounded-lg'>
                <AdjustmentsHorizontalIcon color="#ff7754" size={40}/>
                </View>
                <View className='bg-white rounded-lg p-1'>
                <BellAlertIcon color="#ff7754" size={33}/>
                </View>
             </View>

          </View>
            <View className='bg-white mt-20 rounded-3xl p-4 w-[80%] mx-auto ' style={{elevation:10,shadowColor:'orange'}} >
            <Text className="text-center text-2xl font-bold text-gray-500" >Welcome To Your Legal Universe</Text>
            </View>

          </LinearGradient>
                      {/* CARD OPTIONS  */}
                                
                     <View className="flex-row justify-around flex-wrap w-[100%] h-[100%] rounded-t-3xl">

                        <View className='rounded-lg mt-16 w-[40%] h-[20%] '>
                            <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("FindLawyer")}>
                                <View className='w-[80%] h-[80%] mx-3 p-3'>
                                    <Image source={Search2} className="w-[100%] h-[100%]"/>
                                </View>
                                <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Find Lawyer</Text>
                            </TouchableOpacity>
                        </View>

                            <View className='rounded-lg mt-16 w-[40%] h-[20%] '>
                                <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("MyLawyer")}>
                                    <View className='w-[80%] h-[80%] mx-3 p-3'>
                                        <Image source={MyLawyer} className="w-[100%] h-[100%]"/>
                                    </View>
                                    <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>My Lawyer</Text>
                                </TouchableOpacity>
                            </View>

                            <View className='rounded-lg mt-16 w-[40%] h-[20%] '>
                                <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} onPress={() => navigation.navigate("Documents")}>
                                    <View className='w-[80%] h-[80%] mx-3 p-3'>
                                        <Image source={documents} className="w-[100%] h-[100%]"/>
                                    </View>
                                    <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Documents</Text>
                                </TouchableOpacity>
                            </View>

                            <View className='rounded-lg mt-16 w-[40%] h-[20%] '>
                                <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}} >
                                    <View className='w-[80%] h-[80%] mx-3 p-3'>
                                        <Image source={Appointments} className="w-[100%] h-[100%]"/>
                                    </View>
                                    <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>Appointments</Text>
                                </TouchableOpacity>
                            </View>

                     </View> 

                     {/* <TouchableOpacity onPress={() => navigation.navigate("FindLawyer")} className='bg-black w-full h-10'><Cards item={{ img:MyLawyer,title:"My Lawyer"}}/></TouchableOpacity> */}



        </View>
    </>

    )
}

