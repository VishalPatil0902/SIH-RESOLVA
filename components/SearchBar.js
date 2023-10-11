import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "react-native-heroicons/solid";

const SearchBar = () => {
  return (

             <View className="w-[100%] h-12 flex-row items-center justify-around mt-3">
            {/* <TouchableOpacity><View className="bg-[#FF7754] p-3 mt-4  rounded-lg"><MagnifyingGlassIcon color="white" size={20}/></View></TouchableOpacity> */}
            <View className="bg-white w-[85%] h-[100%] p-1 rounded-lg mt-4 mr-2 flex-row items-center">
            <TouchableOpacity><View className="bg-[#FF7754] p-2 rounded-lg mr-3 ml-0.5"><MagnifyingGlassIcon color="white" size={20}/></View></TouchableOpacity>
                <TextInput placeholder='Search Lawyer... ' className='w-[100%]' />
            </View>
            <TouchableOpacity><View className="bg-[#FF7754] p-2 mt-4 mr-2 rounded-lg"><FunnelIcon color="white" size={20}/></View></TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TextInput placeholder="Search Lawyer... " className="w-[100%]" />
      </View>
      <TouchableOpacity>
        <View className="bg-[#FF7754] p-2 mt-4 mr-2 rounded-lg">
          <FunnelIcon color="white" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
