import React from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

const img1 = require('../Images/Banner5.png');
const img2 = require('../Images/Banner7.png'); 
const img3 = require('../Images/Banner3Home.png');

const imageArray = [img1, img2, img3]; 

export default function Carousel() {
  return (
    // <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' ,height:'fit-content'}}>
        <FlatList className=''
          horizontal
          showsHorizontalScrollIndicator={false}
          data={imageArray} 
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: width * 0.85, height: height * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ display:'flex',width: '90%', height: '90%', borderRadius: 10, elevation: 10,shadowColor:'blue'}}>
                  <Image source={item} style={{ flex: 1, width:'100%'}} className='rounded-[10px] '/> 
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
    // </View>
  );
}
