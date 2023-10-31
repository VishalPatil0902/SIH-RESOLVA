import {View,Text, ScrollView, TextInput, TouchableOpacity, FlatList,Image} from 'react-native';
import {BellAlertIcon,ChatBubbleOvalLeftEllipsisIcon,MapPinIcon,AcademicCapIcon,ChevronLeftIcon,MagnifyingGlassIcon,FunnelIcon,} from 'react-native-heroicons/solid'

import {LinearGradient} from 'expo-linear-gradient';

import { Modal, Portal,PaperProvider,List } from 'react-native-paper';
import { useState } from 'react';



export default function FindLawyercopy( { navigation } ){
     const data=[{name:'Darshit Shah',img:require('../../Images/Lawyer3.jpg'),location:'Bangalore,Karnataka',experience:'8+ Years of Experience',languages:'Hindi,Tamil +2'}
   ,{name:'Prana Patil',img:require('../../Images/Lawyer1.jpg'),location:'Tilak Nagar,Maharashtra',experience:'1+ Years of Experience',languages:'Hindi,Marathi +2'},
{name:'Taniya Paul',img:require('../../Images/Lawyer2.jpg'),location:'Kalyan,Maharashtra',experience:'5+ Years of Experience',languages:'Hindi,English +1'},
{name:'Purav Shangvi',img:require('../../Images/Lawyer.jpeg'),location:'Surat,Gujarat',experience:'3+ Years of Experience',languages:'Hindi,Gujarathi '},
{name:'Selena Gomez',img:require('../../Images/Lawyer5.jpeg'),location:'Lucknow,UP',experience:'12+ Years of Experience',languages:'Hindi,English +2'}]
   
   const [visible, setVisible] = useState(false);
   const showModal = () => setVisible(true);
   const hideModal = () => setVisible(false);
   const containerStyle = {backgroundColor: 'white', padding: 20};
   const [expanded,setExpanded] = useState(true); 
   const handlePress = () => setExpanded(!expanded);
   const titleTextStyle = {color: 'rgb(194 65 12)', fontSize:18,fontWeight:800,};
  
    const accordionStyle = {
      borderRadius: 18, 
      backgroundColor:'rgb(254 215 170)',
    };
    
   return(
      <PaperProvider>
        
        <ScrollView className="p-2 bg-[#EAECF9] h-[100%]" showsVerticalScrollIndicator={false}>

         {/* // */}
            <View className="p-2  h-12">
               <View className="flex-row justify-between mt-2 ">
               <TouchableOpacity className='bg-[#FF7754] rounded-lg p-1' onPress={() => navigation.navigate("LawyerHomePage")}><ChevronLeftIcon color="white" size={30} /></TouchableOpacity>
                  <BellAlertIcon color="#ff7754" size={30} />
                </View>
            </View>
            {/* // */}

               {/* {filter Lawyer}  */}
               <Portal>
               <Modal visible={visible} onDismiss={hideModal} className='mx-2 h-[80%] mt-16 rounded-xl p-2 bg-white flex' style={{backgroundColor: 'rgba(255, 255, 255, 1)'}} >
               <ScrollView showsVerticalScrollIndicator={false}>
               <Text className='font-semibold text-center text-xl text-orange-800'>FILTER LAWYERS</Text>
                       
               <List.Section title="City" className='rounded-2xl' titleStyle={titleTextStyle}>
                        <View style={accordionStyle} className=''>
                        <List.Accordion
                        className='rounded-t-lg text-orange-700 bg-orange-400 font-bold'
                        title="Select City" containerStyle={accordionStyle} titleStyle={{color:'white',fontWeight:800}} >
                        <List.Item title="Mumbai"  />
                        <List.Item title="Delhi" />
                        <List.Item title="Kolkata" />
                        <List.Item title="Pune" />
                        <List.Item title="Chennai" />
                        <List.Item title="Raipur" />

                        </List.Accordion>
                        </View>
               </List.Section>

               
               <List.Section title="Specialization" className='rounded-2xl' titleStyle={titleTextStyle}>
                        <View style={accordionStyle} className=''>
                        <List.Accordion
                        className='rounded-t-lg text-orange-700 bg-orange-400 font-bold'
                        title="Select Specialization" containerStyle={accordionStyle} titleStyle={{color:'white',fontWeight:800}}>
                        <List.Item title="Real Estate"  />
                        <List.Item title="Cryptocurrency" />
                        <List.Item title="Robbery" />
                        <List.Item title="Shoplifting" />
                        <List.Item title="Fraud" />
                        <List.Item title="Moter vehicle theft" />

                        </List.Accordion>
                        </View>
               </List.Section>

               
               <List.Section title="Years of Experience" className='rounded-2xl' titleStyle={titleTextStyle}>
                        <View style={accordionStyle} className='' >
                        <List.Accordion
                        className='rounded-t-lg text-orange-700 bg-orange-400 font-bold'
                        title="Select Years of Experience" containerStyle={accordionStyle}  titleStyle={{color:'white',fontWeight:800}}>
                        <List.Item title="0"  />
                        <List.Item title="1" />
                        <List.Item title="2" />
                        <List.Item title="3" />
                        <List.Item title="4" />
                        <List.Item title="5+" />

                        </List.Accordion>
                        </View>
               </List.Section>

               
               <List.Section title="Availability" className='rounded-2xl' titleStyle={titleTextStyle}>
                        <View style={accordionStyle} className=''>
                        <List.Accordion
                        className='rounded-t-lg text-orange-700 bg-orange-400 font-bold'
                        title="Select Availability" containerStyle={accordionStyle} titleStyle={{color:'white',fontWeight:800}}>
                        <List.Item title="Available"  />
                        <List.Item title="Not Available" />
                        <List.Item title="Available in 2 days" />
                        <List.Item title="Availabel in 5 days" />
                        </List.Accordion>
                        </View>
               </List.Section>
               </ScrollView>


               </Modal>
               </Portal>

               {/* {filter Lawyer}  */}

          <Text className="text text-xl ml-2 mt-12 font-bold text-black">Hello Pranav,</Text>
          <Text className="text text-xl ml-2 font-bold text-black">Find The Perfect Lawyer</Text>

            {/* // */}

            <View>
               <View className="w-[100%] h-12 flex-row items-center justify-around mt-3">
                     <View className="bg-white w-[85%] h-[100%] p-1 rounded-lg mt-4 mr-2 flex-row items-center">
                        <TouchableOpacity>
                           <View className="bg-[#FF7754] p-2 rounded-lg mr-3 ml-0.5">
                           <MagnifyingGlassIcon color="white" size={20} />
                           </View>
                        </TouchableOpacity>
                        <TextInput placeholder="Search Lawyer... " className="w-[100%]" />
                     </View>
                     <TouchableOpacity>
                        <View className="bg-[#FF7754] p-2 mt-4 mr-2 rounded-lg">
                           <FunnelIcon color="white" size={20} onPress={showModal}/>
                        </View>
                     </TouchableOpacity>
               </View>
            </View>

            {/* // */}


          <View className="w-[100%]">
           <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} className="mt-4 h-fit p-2">
           <View><LinearGradient colors={['#ff7754', 'orange']} className="mr-2 h-10 rounded-3xl border-none" ><TouchableOpacity className='border-none' style={{elevation:10,shadowColor:'orange'}}><View className='border-none'><Text className='w-[100%] h-[100%] justify-center font-semibold px-4 py-2 rounded-3xl text-white'>Property</Text></View></TouchableOpacity></LinearGradient></View>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Corporate</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Criminal</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Family</Text></View></TouchableOpacity>
           <TouchableOpacity><View className="mr-2 h-10"><Text className='w-[100%] h-[100%] justify-center  text-gray-500 font-semibold px-4 py-2 rounded-3xl border bg-white'>Real Estate</Text></View></TouchableOpacity>

            {/* className='p-1 px-2 rounded-full mt-3 mr-2' useAngle={true} angle={0} start={{x:0.4,y:0}} end={{x:1,y:0}} style={{elevation:6}}><Text className='text-sm  text-white font-semibold' style={{elevation:6}}>Cryptocurrency</Text> */}

           </ScrollView>
          </View>

            {/* <Text className='font-bold text-xl mt-2 ml-4 text-orange-300'>LAWYERS</Text> */}
            <View className='bg-orange-400 w-[95%] h-0.5 rounded-full mx-auto my-2' style={{elevation:10,shadowColor:'orange'}}></View>

               {data.map((e,index)=>{
                       return (
                        <View className='bg-white w-[95%] h-fit mt-3 rounded-2xl mx-3 flex-col' style={{elevation:10}} key={e.name}>
                        <TouchableOpacity  onPress={() => navigation.navigate("LawyerDetails")}>
                           <View className="flex flex-row pb-2">
                             <View><Image source={e.img} className="w-20 h-20 rounded-full ml-3 mt-5"/><Text className=" border border-green-400 text-center ml-5 mt-2 rounded-3xl p-1 text-green-400 font-semibold text-xs ">Available</Text></View>
                                  <View className='ml-3 flex justify-start'>
                                  <Text className='text-center mb-1 font-bold text-xl mt-5 text-gray-600 flex flex-wrap'>{e.name}</Text>
                                  <View className="flex flex-row items-center ml-3 mt-1"><MapPinIcon size={15} color="#FF7754" /><Text className='text-sm ml-2 text-gray-500'>{e.location}</Text></View>
                                  <View className="flex flex-row items-center ml-3 mt-1"><AcademicCapIcon size={15} color="#FF7754"/><Text className='text-sm ml-2 text-gray-500'>{e.experience}</Text></View>
                                 <View className="flex flex-row items-center ml-3 mt-1"><ChatBubbleOvalLeftEllipsisIcon size={15} color="#FF7754"/><Text className='text-sm ml-2 text-gray-500'>{e.languages}</Text></View>
                           </View>
                        </View>
                   </TouchableOpacity>
                   </View>  
                       )
               })}
            
            <View className='mb-24'></View>
            
         </ScrollView>
        
               {/* <View className='bg-green-400 bg-opacity-5 z-10 w-full h-12 rounded-xl mx-2 mb-2 flex-row justify-around absolute  '>
                  <HomeIcon size={15} color="#FF7754" />
               </View> */}
      </PaperProvider>

     )
}