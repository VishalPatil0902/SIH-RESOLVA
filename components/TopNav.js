import {View} from 'react-native';
import {AdjustmentsHorizontalIcon,BellAlertIcon} from 'react-native-heroicons/solid'

export default function TopNav(){
    return (
        <>
            <View className="p-2  h-12">
               <View className="flex-row justify-between mt-2 ">
                  <AdjustmentsHorizontalIcon color="black" size={35}/>
                  <BellAlertIcon color="black" size={30}/>
                </View>
            </View>
        </>
    )
}