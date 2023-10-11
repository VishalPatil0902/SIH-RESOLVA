import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import {AdjustmentsHorizontalIcon,BellAlertIcon,ChatBubbleOvalLeftEllipsisIcon,MapPinIcon,AcademicCapIcon} from 'react-native-heroicons/solid'
import SearchBar from '../../components/SearchBar';
import img from '../../Images/Lawyer.jpeg'
import TopNav from '../../components/TopNav';

export default function FindLawyercopy(){
     const data=[{name:'DARSHIT SHAH',img:'../../Images/Lawyer.jpeg',location:'Bangalore,Karnataka',experience:'8+ Years of Experience',languages:'Hindi,Tamil +2'}
   ,{name:'PRANAV PATIL',img:'../../Images/Lawyer.jpeg',location:'Tilak Nagar,Maharashtra',experience:'1+ Years of Experience',languages:'Hindi,Marathi +2'},
{name:'TANIYA PAUL',img:'../../Images/Lawyer.jpeg',location:'Kalyan,Maharashtra',experience:'5+ Years of Experience',languages:'Hindi,English +1'},
{name:'PURAV SHANGVI',img:'../../Images/Lawyer.jpeg',location:'Surat,Gujarat',experience:'3+ Years of Experience',languages:'Hindi,Gujarathi '},
{name:'MUSTAFA CHUNEKAR',img:'../../Images/Lawyer.jpeg',location:'Lucknow,UP',experience:'12+ Years of Experience',languages:'Hindi,English +2'}]
   
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

            {/* <Text className='font-bold text-xl mt-2 ml-4 text-orange-300'>LAWYERS</Text> */}
            <View className='bg-orange-400 w-[95%] h-0.5 rounded-full mx-auto my-2' style={{elevation:10,shadowColor:'orange'}}></View>

               {data.map((e,index)=>{
                       return (
                        <View className='bg-white w-[95%] h-fit mt-3 rounded-2xl mx-3 flex-col' style={{elevation:10}}>
                        <TouchableOpacity key={index}>
                           <View className="flex flex-row pb-2">
                             <View><Image source={img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs ">Available</Text></View>
                                  <View className='ml-3 flex justify-start'>
                                  <Text className='text-center mb-1 font-bold text-2xl mt-5'>{e.name}</Text>
                                  <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2'>{e.location}</Text></View>
                                  <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>{e.experience}</Text></View>
                                 <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2'>{e.languages}</Text></View>
                           </View>
                        </View>
                   </TouchableOpacity>
                   </View>  
                       )
               })}
            
            <View className='mb-10'></View>
            
         </ScrollView>
        
            
        </>

     )
}