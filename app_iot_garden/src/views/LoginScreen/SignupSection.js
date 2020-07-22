import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
