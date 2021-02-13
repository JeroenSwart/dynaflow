import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import TaskOverview from './components/TaskOverview';
import ButtonNextInboxItem from './components/ButtonNextInboxItem'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>DynaFlow</Text>
      <Text>your best friend for optimal productivity</Text>
      <TaskOverview />
      <ButtonNextInboxItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#155',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red'
  }
});
