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
  Image,
  TextInput
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ChevronLeftIcon ,MagnifyingGlassIcon,FunnelIcon} from "react-native-heroicons/solid";

// importing images
const img0 = require("../../Images/rehab0.jpeg");
const img1 = require("../../Images/rehab1.jpeg");
const img2 = require("../../Images/rehab2.jpeg");
const img3 = require("../../Images/rehab3.jpeg");
const img4 = require("../../Images/rehab4.jpeg");
const img5 = require("../../Images/rehab5.jpeg");

const ngo1 = require("../../Images/NGO1.jpg");
const ngo2 = require("../../Images/NGO2.jpg");
const ngo3 = require("../../Images/NOG3.jpg");
const ngos = [ngo1, ngo2, ngo3];

const img6 = require("../../Images/rehab6.jpg");
const img7 = require("../../Images/rehab7.jpg");
const img8 = require("../../Images/rehab8.jpg");
const img9 = require("../../Images/rehab9.jpg");
const img10 = require("../../Images/rehab10.jpg");


// data
const items = [
  { img: img1, course: "Maths" },
  { img: img2, course: "Finance" },
  { img: img3, course: "Data Science" },
  { img: img4, course: "Carpentry" },
  { img: img5, course: "Electronics" },
];
const popular = [
  { img: img6, course: "Maths" },
  { img: img7, course: "Finance" },
  { img: img8, course: "Data Science" },
  { img: img9, course: "Carpentry" },
  { img: img10, course: "Electronics" },
];
const NGO = [
  { img: ngo1, course: "WeCare" },
  { img: ngo2, course: "LifeMatters" },
  { img: ngo3, course: "EIKTS" },
];

// importing pages
import SearchBar from "../../components/SearchBar";

const RehabilitationMain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main} className="bg-[#EAECF9]">
      <StatusBar barStyle={"dark-content"} />
      <ScrollView nestedScrollEnabled={true} className="p-4 mb-16">
        <TouchableOpacity
          className="bg-[#FF7754] rounded-lg p-1 w-[40px]"
          onPress={() => navigation.navigate("HomePage")}
        >
          <ChevronLeftIcon color="white" size={30} />
        </TouchableOpacity>
        {/* search bar */}
        <View className="h-[100px]">
        <View>
      <View className="w-[100%] h-12 flex-row items-center justify-around mt-3">
        <View className="bg-white w-[85%] h-[100%] p-1 rounded-lg mt-4 mr-2 flex-row items-center">
          <TouchableOpacity>
            <View className="bg-[#FF7754] p-2 rounded-lg mr-3 ml-0.5">
              <MagnifyingGlassIcon color="white" size={20} />
            </View>
          </TouchableOpacity>
          <TextInput placeholder="Search Courses... " className="w-[100%]" />
        </View>
        <TouchableOpacity>
          <View className="bg-[#FF7754] p-2 mt-4 mr-2 rounded-lg">
            <FunnelIcon color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
        </View>

        {/* Featured */}
        <Text className="text-xl font-bold my-2">Featured</Text>
        <View className="h-[200px] w-full rounded-xl mb-5 bg-green-300 flex justify-center items-center p-4">
          <Image source={img0} className="rounded-[10px] w-[110%] h-[120%]" />
        </View>

        {/* main browsing content */}

        {/* Get in touch with us */}
        <View>
          <Text className="text-xl font-bold ">Get in Touch With us</Text>
          <View className="flex flex-row justify-start pl-4">
            <Pressable className="flex flex-row justify-center items-center border-2  py-4 px-2 gap-x-2 my-4 rounded-xl">
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
                    className="h-[100px] w-[170px] rounded-xl mr-4"
                    style={{ elevation: 10 }}
                  >
                    <Image
                      source={item.img}
                      className="rounded-[10px] w-[100%] h-[100%]"
                    />
                  </View>
                  <Text className="text-md font-bold w-[150px] mt-2">
                    {item.course}
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
            {popular.map((item, index) => {
              return (
                <Pressable key={index}>
                  <View
                    key={index}
                    className="h-[100px] w-[170px] rounded-xl mr-4"
                    style={{ elevation: 10 }}
                  >
                    <Image
                      source={item.img}
                      className="rounded-[10px] w-[100%] h-[100%]"
                    />
                  </View>
                  <Text className="text-md font-bold w-[150px] mt-2">
                    {item.course}
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
            {NGO.map((item, index) => {
              return (
                <Pressable key={index}>
                  <View
                    key={index}
                    className="h-[100px] w-[170px] rounded-xl mr-4"
                    style={{ elevation: 10 }}
                  >
                    <Image
                      source={item.img}
                      className="rounded-[10px] w-[100%] h-[100%]"
                    />
                  </View>
                  <Text className="text-md font-bold w-[150px] mt-2">
                    {item.course}
                  </Text>
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
