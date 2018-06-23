import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnail}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.image} source={{ uri: album.image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)}>
        Buy {album.title}
      </Button>
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.shape({}).isRequired,
};

export default AlbumDetail;
