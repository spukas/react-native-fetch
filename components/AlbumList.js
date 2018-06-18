import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';

export default class AlbumList extends Component {
  state = { albums: [] };

  async componentDidMount() {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');

    this.updateAlbumsState(response.data);
  }

  updateAlbumsState = data => this.setState({ albums: data });

  render() {
    console.log('State', this.state);
    return <ScrollView />;
  }
}
