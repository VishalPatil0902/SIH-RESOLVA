import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

// data
const items = ["one", "two", "three", "four", "five"];

// importing pages
import SearchBar from "../../components/SearchBar";

const RehabilitationMain = () => {
  return (
    <SafeAreaView style={styles.main} className="bg-[#EAECF9]">
      <StatusBar barStyle={"dark-content"} />
      <ScrollView nestedScrollEnabled={true} className="p-4">
        {/* search bar */}
        <View className="h-[100px]">
          <SearchBar />
        </View>

        {/* Featured */}
        <Text className="text-xl font-bold my-2">Featured</Text>
        <View className="h-[200px] w-full rounded-xl mb-5 bg-green-300 flex justify-center items-center p-4">
          <Text>
            This is an education feature where education promotion will be
            entered
          </Text>
        </View>

        {/* main browsing content */}

        {/* Get in touch with us */}
        <View>
          <Text className="text-xl font-bold ">Get in Touch With us</Text>
          <View className="flex flex-row justify-start pl-4">
            <Pressable className="flex flex-row justify-center items-center border-2 border-[#FF7754] py-4 px-2 gap-x-2 my-4 rounded-xl">
              <Text className="font-bold">Contact Us</Text>
              <FontAwesome name="video-camera" size={24} color="#FF7754" />
            </Pressable>
          </View>
        </View>

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
                <Pressable key={index}>
                  <View
                    key={index}
                    className={`flex flex-row justify-center items-center h-[100px] w-[170px] rounded-xl border-2 border-[#FF7754] mr-4`}
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
                <Pressable key={index}>
                  <View
                    key={index}
                    className="flex flex-row justify-center items-center h-[100px] w-[170px] rounded-xl border-2 border-[#FF7754] mr-4"
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
                <Pressable key={index}>
                  <View
                    key={index}
                    className="flex flex-row justify-center items-center h-[100px] w-[170px] rounded-xl border-2 border-[#FF7754] mr-4"
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
