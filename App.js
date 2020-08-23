import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DataScreen from './screens/DataScreen';
import CollegeSearchScreen from './screens/CollegeSearchScreen'; 

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  DataScreen:DataScreen,
  CollegeSearchScreen:CollegeSearchScreen
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
