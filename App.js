import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// eslint-disable-next-line
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}

