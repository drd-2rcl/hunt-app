import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import api, { baseURL } from '../services/api';
import { FlatList } from 'react-native-gesture-handler';

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
    this.setState({ docs });
  };

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

  render () {
    return (
      <View>
        <FlatList 
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}