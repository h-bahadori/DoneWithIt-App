import React from 'react';
import { View, Text } from 'react-native';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <Icon
        name="email"
        size="50"
        backgrounfColor="red"
        iconColor="white"
      />

    </Screen>
  );
}
