import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api, { baseURL } from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSLOVE'
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get(baseURL);

    const { docs } = response.data;
    console.log(docs);
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Página Main</Text>
      </View>
    )
  }
}