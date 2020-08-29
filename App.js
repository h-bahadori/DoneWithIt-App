import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');
  return (

    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        // maxLength={5}
        // clearButtonMode="always"
        // secureTextEntry
        keyboardType="numeric"
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}


      />
    </Screen>


  );
}

