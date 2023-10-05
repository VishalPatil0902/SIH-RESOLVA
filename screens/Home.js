import {View,Text, ScrollView} from "react-native";
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import Cards from "../components/Cards";

export default function Home(){
    

    return(
        
        //TOP NAV BAR 
        <>

        <View className="p-2 bg-slate-100 h-[30%]">
            <View className="flex-row justify-between mt-2">
                <AdjustmentsHorizontalIcon color="white" size={40}/>
                <BellAlertIcon color="white" size={35}/>
            </View>
            <View>

            </View>


        </View>
                    {/* CARD OPTIONS  */}
                                
                    <View>

                    </View>

                    <View className="mx-4 flex-row justify-between flex-wrap">
                    <TouchableOpacity style={{width:wp(44),height:wp(65)}} className="flex justify-end relative p-4 py-6 space-y-2 mb-5 bg-black text-black">
              <Text>HEELO</Text>
        </TouchableOpacity>
                    </View>
        </>


    )
}