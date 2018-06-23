import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { albums: [] };

  async componentDidMount() {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');

    this.updateAlbumsState(response.data);
  }

  updateAlbumsState = data => this.setState({ albums: data });

  renderAlbums = () =>
    this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));

  render() {
    console.log('State', this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}
