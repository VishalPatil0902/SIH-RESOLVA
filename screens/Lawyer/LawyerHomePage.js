import {View,Text, ScrollView} from "react-native";
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import Cards from "../../components/Cards";
import {LinearGradient} from 'expo-linear-gradient';
import Search2 from '../../Images/search.png'
import MyLawyer from '../../Images/lawyer.png'
import documents from '../../Images/agreement.png'
import Appointments from '../../Images/appointment.png'



export default function LawyerHomePage(){
    
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
            <View className='bg-white mt-20 rounded-3xl p-4 w-[80%] mx-auto ' style={{elevation:10,shadowColor:'orange'}}>
            <Text className="text-center text-2xl font-bold text-gray-500" >Welcome To Your Legal Universe</Text>
            </View>

          </LinearGradient>
                      {/* CARD OPTIONS  */}
                                
                     <View className="flex-row justify-around flex-wrap w-[100%] h-[100%] rounded-t-3xl">
                        <Cards item={{ img:MyLawyer,title:"My Lawyer"}}/>
                        <Cards item={{ img:Search2,title:"Find Lawyer"}}/>
                        <Cards item={{ img:documents,title:"Documents"}}/>
                        <Cards item={{ img:Appointments,title:"Appointment"}}/>
                     </View>
                     {/* <View className="bg-black w-[100%] h-[10px] relative"></View> */}
        </View>
</>

    )
}

