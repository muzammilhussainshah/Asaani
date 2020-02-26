import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import StackNavigation from './src/navigation/StackNavigation'
export default class App extends Component {
  componentWillMount() {
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
});
