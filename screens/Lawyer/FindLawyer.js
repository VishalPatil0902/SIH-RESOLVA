import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {AdjustmentsHorizontalIcon,BellAlertIcon,MagnifyingGlassIcon,FunnelIcon} from 'react-native-heroicons/solid'
import SearchBar from '../../components/SearchBar';

export default function FindLawyer(){
     
   const categories=['Corporate','criminal'];
   
   return(
        <>
        <View className='h-full bg-slate-500'>
        <ScrollView className="p-2 bg-[#EAECF9] h-[50%] ">
         {/* // */}
         <View className="p-2  h-[20%] ">
             <View className="flex-row justify-between mt-2 ">
                <AdjustmentsHorizontalIcon color="black" size={35}/>
                <BellAlertIcon color="black" size={30}/>
             </View>

          </View>

            {/* // */}
          <Text className="text text-xl ml-2 mt-12 font-bold text-black">Hello Pranav,</Text>
          <Text className="text text-xl ml-2 font-bold text-black">Find The Perfect Lawyer</Text>
            {/* // */}

            <SearchBar/>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} className="mt-8 h-[100%] ">
          <TouchableOpacity><View className="mr-2 h-[80%]"><Text className='w-[100%] h-[100%] justify-center  text-black font-semibold px-4 py-2 rounded-3xl border bg-[#f0beb1]'>Corporate</Text></View></TouchableOpacity>
          <TouchableOpacity><View className="mr-2 h-[80%]"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Criminal</Text></View></TouchableOpacity>
          <TouchableOpacity><View className="mr-2 h-[80%]"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Family</Text></View></TouchableOpacity>
          <TouchableOpacity><View className="mr-2 h-[80%]"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Real Estate</Text></View></TouchableOpacity>
          <TouchableOpacity><View className="mr-2 h-[80%]"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white '>Property</Text></View></TouchableOpacity>
          </ScrollView>

            {/* <View className='bg-black w-[50px] h-[50px]'>
                <Text>hello</Text>
            </View>   */}

         </ScrollView>
        
           <View ClassName="fixed">
              <Text>helloa</Text>
           </View>
        </View>
        </>

     )
}