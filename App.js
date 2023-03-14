import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('Type text to speech');

  const textToSpeech = () => {
    Speech.speak(text);
  }

  return (
    <View style={ styles.container }>
      <TextInput style={ styles.input }
        onChangeText={ (text) => setText(text) }
        value={ text }
        keyboardType="ascii-capable"
        onFocus={ (text) => setText('') }
      />
      <Button title="PRESS TO HEAR TEXT" onPress={ textToSpeech } />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    width: '75%',
    fontSize: 20,
    padding: 10,
    height: 40,
    textAlign: 'center',
  },
});
