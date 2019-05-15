
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Game extends React.Component {
  render() {
    const target = Math.floor(Math.random() * 40) + 10;
    // <Text>{this.props.randomNumbers}</Text>
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{target}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  target: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: '#FFE9B2',
  },
});