import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import {AdjustmentsHorizontalIcon,BellAlertIcon,ChatBubbleOvalLeftEllipsisIcon,MapPinIcon,AcademicCapIcon} from 'react-native-heroicons/solid'
import SearchBar from '../../components/SearchBar';
import img from '../../Images/Lawyer.jpeg'
import TopNav from '../../components/TopNav';

export default function FindLawyer(){
     
   
   
   //rgb(246,121,11) to rgb(251,83,38)

   
   return(
        <>
        <ScrollView className="p-2 bg-[#EAECF9] h-[100%] ">
         {/* // */}
             <TopNav/>
            {/* // */}
          <Text className="text text-xl ml-2 mt-12 font-bold text-black">Hello Pranav,</Text>
          <Text className="text text-xl ml-2 font-bold text-black">Find The Perfect Lawyer</Text>
            {/* // */}

            <SearchBar/>

          <View className="w-[100%]">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} className="mt-8 h-fit p-2">
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-black font-semibold px-4 py-2 rounded-3xl border bg-[#f0beb1]'>Corporate</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Criminal</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Family</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Real Estate</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white '>Property</Text></View></TouchableOpacity>
           </ScrollView>
          </View>

            <Text className='font-bold text-2xl mt-2 ml-2 mb-5'>Lawyers</Text>



            <View className='bg-white w-[95%] h-48 mb-5 rounded-2xl mx-3 flex-col'>
            <TouchableOpacity>
               <View className="flex flex-row">
                  <View><Image source={img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs">Available</Text></View>
                   <View className='ml-3 flex justify-start'>
                   <Text className='text-center mb-1 font-bold text-2xl mt-5'>Darshit Shah</Text>
                   <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2'>Bangalore,Karnataka</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>8+ Years of Experience</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>Hindi,Marathi+2</Text></View>
                  </View>
               </View>
               </TouchableOpacity>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="ml-4">
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Corporate</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Family</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               </ScrollView>
            </View>  

            <View className='bg-white w-[95%] h-48 mb-5 rounded-2xl mx-3 flex-col'>
            <TouchableOpacity>
               <View className="flex flex-row">
                  <View><Image source={img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs">Available</Text></View>
                   <View className='ml-3 flex justify-start'>
                   <Text className='text-center mb-1 font-bold text-2xl mt-5'>Darshit Shah</Text>
                   <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2'>Bangalore,Karnataka</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>8+ Years of Experience</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>Hindi,Marathi+2</Text></View>
                  </View>
               </View>
               </TouchableOpacity>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="ml-4">
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Corporate</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Family</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               </ScrollView>
            </View>  

            <View className='bg-white w-[95%] h-48 mb-5 rounded-2xl mx-3 flex-col'>
            <TouchableOpacity>
               <View className="flex flex-row">
                  <View><Image source={img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs">Available</Text></View>
                   <View className='ml-3 flex justify-start'>
                   <Text className='text-center mb-1 font-bold text-2xl mt-5'>Darshit Shah</Text>
                   <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2'>Bangalore,Karnataka</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>8+ Years of Experience</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>Hindi,Marathi+2</Text></View>
                  </View>
               </View>
               </TouchableOpacity>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="ml-4">
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Corporate</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Family</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               </ScrollView>
            </View>  

            <View className='bg-white w-[95%] h-48 mb-5 rounded-2xl mx-3 flex-col'>
            <TouchableOpacity>
               <View className="flex flex-row">
                  <View><Image source={img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs">Available</Text></View>
                   <View className='ml-3 flex justify-start'>
                   <Text className='text-center mb-1 font-bold text-2xl mt-5'>Darshit Shah</Text>
                   <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2'>Bangalore,Karnataka</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>8+ Years of Experience</Text></View>
                   <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>Hindi,Marathi+2</Text></View>
                  </View>
               </View>
               </TouchableOpacity>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="ml-4">
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Corporate</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Family</Text>
               <Text className='h-7 ml-1 mt-2 text-xs  border-none bg-[#f0beb1] px-2 py-1 rounded-full'>Cryptocurrency issues</Text>
               </ScrollView>
            </View>  



         </ScrollView>
        
            
        </>

     )
}