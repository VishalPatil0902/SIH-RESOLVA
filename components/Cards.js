import {TouchableOpacity,Text, Image} from 'react-native';

export default function Cards({item}){
    return(
        <TouchableOpacity className="flex m-2 mt-10   text-white rounded-md w-[40%] h-[30%] bg-white justify-center" style={{shadowColor: '#000', // For iOS
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 15,}}>
              <Image source={item.img} className="w-[100%] h-[70%]  p-3 "/>
              <Text className='text-center text-xl m-1 font-bold w-max text-black'>{item.title}</Text>
        </TouchableOpacity>
    )
}