import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator = createBottonTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
});
const AppContainer = createAppContainer(TabNavigator)