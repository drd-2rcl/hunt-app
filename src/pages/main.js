import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api, { baseURL } from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSLOVE'
  };

  state = {
    // counter: 0
    docs: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get(baseURL);

    const { docs } = response.data;
    // console.log(docs);

    this.setState({ docs });

    // this.setState({ counter: docs.length })
  };

  render () {
    return (
      <View>
        <Text>Página Main:</Text>
        {this.state.docs.map(product => <Text key={product._id} >{product.title}</Text>)}
      </View>
    )
  }
}