import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSLOVE'
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Página Main</Text>
      </View>
    )
  }
}