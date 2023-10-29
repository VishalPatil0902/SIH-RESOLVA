import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function ChatbotUI() {
  const [messages, setMessages] = useState([
    {
      text: 'Hello, you may ask about what rights or provision you would like to know ?',
      isUser: false,
    },
  ]);
  const [userInput, setUserInput] = useState('');

  const scrollViewRef = useRef();

  const sendUserMessage = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { text: userInput, isUser: true }];
    setMessages(newMessages);
    setUserInput('');

    // Replace with your chatbot logic here to receive a response.
    // For simplicity, we'll just simulate a response after a brief delay.
    setTimeout(receiveBotResponse, 5000);
  };

  const receiveBotResponse = () => {
    const botResponse = 'Hello! How can I assist you today?'; // Replace with the actual bot response
    setMessages((message)=>[...message,{ text: botResponse, isUser: false }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Chatbot</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.messageContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isUser ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendUserMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom:75,
  },
  topBar: {
    backgroundColor: '#ff7754',
    alignItems: 'center',
    padding: 10,
    paddingTop: 30, // Add padding to account for the status bar and notch
  },
  topBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexGrow: 1,
    padding: 16,
  },
  message: {
    maxWidth: '70%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'orange',
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#ff7754',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatbotUI;
