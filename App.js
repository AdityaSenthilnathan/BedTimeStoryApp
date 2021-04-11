import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator = createBottomTabNavigator({
ReadStoryScreen:ReadStoryScreen,
WriteStoryScreen:WriteStoryScreen
})

const AppContainer  = createAppContainer(TabNavigator);