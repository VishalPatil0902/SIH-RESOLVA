import React from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

// Import your local images
const img1 = require('../Images/MyLawyer.png');
const img2 = require('../Images/appointment.png'); // Import more images as needed

const imageArray = [img1, img2]; // Add your local image components to this array

export default function Carousel() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <FlatList
          horizontal
          data={imageArray} 
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: width * 0.85, height: height * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ display:'flex',width: '90%', height: '90%', borderRadius: 10, elevation: 10, backgroundColor: 'green' }}>
                  <Image source={item} style={{ flex: 1, width:'40%'}} /> 
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()} // Add a unique key for each item
        />
      </View>
    </View>
  );
}
