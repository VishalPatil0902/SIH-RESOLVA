import {TouchableOpacity,Text, Image,View} from 'react-native';

export default function Cards({item}){
    return(
        <View className='rounded-lg mt-16 w-[40%] h-[20%] '>
         <TouchableOpacity className="text-[#f5ddd7] rounded-md  bg-white justify-center p-1" style={{elevation:10,shadowColor:'blue'}}>
              <View className='w-[80%] h-[80%] mx-3 p-3'>
                   <Image source={item.img} className="w-[100%] h-[100%]"/>
              </View>
              <Text className='text-center text-xl m-1 font-bold w-max  text-gray-500'>{item.title}</Text>
         </TouchableOpacity>
        </View>

    )
}