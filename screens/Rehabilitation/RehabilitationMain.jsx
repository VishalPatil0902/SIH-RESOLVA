import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

// data
const items = ["one", "two", "three", "four", "five"];

// importing pages
import SearchBar from "../../components/SearchBar";

const RehabilitationMain = () => {
  return (
    <SafeAreaView style={styles.main} className="bg-[#EAECF9]">
      <ScrollView nestedScrollEnabled={true} className="p-4">
        {/* search bar */}
        <View className="h-[100px]">
          <SearchBar />
        </View>

        {/* Featured */}
        <Text className="text-xl font-bold my-2">Featured</Text>
        <View className="h-[200px] w-full rounded-xl my-2 bg-green-300 flex justify-center items-center p-4">
          <Text>
            This is an education feature where education promotion will be
            entered
          </Text>
        </View>

        {/* main browsing content */}

        {/* Video Courses */}
        <View className="mb-8">
          <Text className="text-xl font-bold my-2">Video Courses</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            {items.map((item, index) => {
              return (
                <Pressable>
                  <View
                    key={index}
                    className={`flex flex-row justify-center items-center h-[100px] w-[150px] rounded-xl border-solid border-4 border-[#FF7754] mr-4`}
                  >
                    <Text className="font-bold">{item}</Text>
                  </View>
                  <Text className="text-md font-bold w-[150px] ">
                    Course name
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Popular Courses */}
        <View className="mb-8">
          <Text className="text-xl font-bold my-2">Popular Courses</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            {items.map((item, index) => {
              return (
                <Pressable>
                  <View
                    key={index}
                    className="flex flex-row justify-center items-center h-[100px] w-[150px] rounded-xl border-solid border-4 border-[#FF7754] mr-4"
                  >
                    <Text className="font-bold">{item}</Text>
                  </View>
                  <Text className="text-md font-bold w-[150px] ">
                    Course name
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        {/* NGOs */}
        <View className="mb-8">
          <Text className="text-xl font-bold my-2">NGO</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            {items.map((item, index) => {
              return (
                <Pressable>
                  <View
                    key={index}
                    className="flex flex-row justify-center items-center h-[100px] w-[150px] rounded-xl border-solid border-4 border-[#FF7754] mr-4"
                  >
                    <Text className="font-bold">{item}</Text>
                  </View>
                  <Text className="text-md font-bold w-[150px] ">NGO name</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RehabilitationMain;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margintTop: Platform.OS === "android" ? 20 : null,
  },
});
