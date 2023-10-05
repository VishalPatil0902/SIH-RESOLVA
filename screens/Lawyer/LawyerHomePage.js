import {View,Text, ScrollView} from "react-native";
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import Cards from "../../components/Cards";
import {LinearGradient} from 'expo-linear-gradient';
import Search2 from '../../Images/Search2.webp'
import MyLawyer from '../../Images/MyLawyer.png'
import documents from '../../Images/legaldocuments.png'
import Appointments from '../../Images/HoldingPhone.webp'



export default function LawyerHomePage(){
    
    return(
        <>
        <View className="w-[100%] h-[100%]  bg-[#EAECF9]" >
         <LinearGradient colors={['#7e6bec', '#c3e0f1']} className="rounded-b-[30px] h-[25%]">
         <View className="p-2  h-[20%] ">
             <View className="flex-row justify-between mt-2 ">
                <AdjustmentsHorizontalIcon color="white" size={40}/>
                <BellAlertIcon color="white" size={35}/>
             </View>

          </View>
          <Text className="text-center text-3xl m-4 mt-12 font-bold text-[#ffffff]">Welcome,to Your Legal Universe</Text>

          </LinearGradient>
                      {/* CARD OPTIONS  */}
                                
                     <View className="flex-row justify-around flex-wrap w-[100%] h-[100%]">
                        <Cards item={{ img:MyLawyer,title:"My Lawyer"}}/>
                        <Cards item={{ img:Search2,title:"Find Lawyer"}}/>
                        <Cards item={{ img:documents,title:"Documents"}}/>
                        <Cards item={{ img:Appointments,title:"Appointment"}}/>
                     </View>
                     <View className="bg-black w-[100%] h-[10px] relative"></View>
        </View>
</>

    )
}

