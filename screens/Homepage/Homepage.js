import React , {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {Platform} from 'react-native'

const HomePage = () => {
    const [isCard1Pressed, setcard1press] = useState(false);
    const [isCard2Pressed, setcard2press] = useState(false);
    const [isCard3Pressed, setcard3press] = useState(false);
    const [isCard4Pressed, setcard4press] = useState(false);
    const handlecard1press = () => {
    setcard1press(!isCard1Pressed);
    };
    const handlecard2press = () => {
    setcard2press(!isCard2Pressed);
    };
    const handlecard3press = () => {
    setcard3press(!isCard3Pressed);
    };
    const handlecard4press = () => {
    setcard4press(!isCard4Pressed);
    };

  return (
    <ImageBackground
      source={require('../../assets/background2.jpg')}
      style={styles.background}>
    <View style={styles.container}>
    <View style={styles.navbar}>
        <TouchableOpacity>
        <Image source={require('../../assets/multilingual.png')} style={styles.navImage} />
        </TouchableOpacity>
      
      </View>
      <View><Text style={styles.title}>Prisoner HomePage</Text></View>
      <View style={styles.cardContainer}>

        <TouchableOpacity  style={isCard1Pressed ? [styles.card, styles.cardpress] : styles.card} onPressIn={handlecard1press}>
        <Image source={isCard1Pressed ? require('../../assets/legalaid.png') : require('../../assets/legalaid-golden.png')} style={styles.cardImage} />
          <Text style={isCard1Pressed ? [styles.cardTitle, styles.cardtitlepress] : styles.cardTitle}>Legal Aid</Text>
        </TouchableOpacity>

        <TouchableOpacity style={isCard2Pressed ? [styles.card, styles.cardpress] : styles.card} onPressIn={handlecard2press}>
        <Image source={isCard2Pressed ? require('../../assets/rehab.png') : require('../../assets/rehab-golden.png')} style={styles.cardImage} />
          <Text style={isCard2Pressed ? [styles.cardTitle, styles.cardtitlepress] : styles.cardTitle}>Rehabilitation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={isCard3Pressed ? [styles.card, styles.cardpress] : styles.card} onPressIn={handlecard3press}>
        <Image source={isCard3Pressed ? require('../../assets/status.png') : require('../../assets/status-golden.png')} style={styles.cardImage} />
          <Text style={isCard3Pressed ? [styles.cardTitle, styles.cardtitlepress] : styles.cardTitle}>Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={isCard4Pressed ? [styles.card, styles.cardpress] : styles.card} onPressIn={handlecard4press}>
        <Image source={isCard4Pressed ? require('../../assets/chatbot.png') : require('../../assets/chatbot-golden.png')} style={styles.cardImage} />
          <Text style={isCard4Pressed ? [styles.cardTitle, styles.cardtitlepress] : styles.cardTitle}>Chatbot</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  cardImage: {
    width: 80, 
    height: 80,
    marginTop: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  card: {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#D4AF37',
    marginVertical: 20,
    alignItems: 'center',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D4AF37',
    marginTop: 20,
    marginBottom: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
  },
  navTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 10,
  },
  navImage: {
    width: 40, 
    height: 40,
  },
  cardpress: {
    backgroundColor: '#D4AF37',
  },
  cardtitlepress: {
    color: 'black',
  },
});

export default HomePage;
