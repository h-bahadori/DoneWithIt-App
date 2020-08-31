import React, { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Cloting", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);


  return (


    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />


    </Screen>


  );
}

