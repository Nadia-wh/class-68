
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <AppContainer/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Screen:{screen:SearchScreen}
});
const AppContainer = createAppContainer(TabNavigator);