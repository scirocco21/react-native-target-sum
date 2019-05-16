import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Number extends React.Component {
  render() {
    return(
      <Text style={styles.number}>{this.props.number}</Text>
    );
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: 30,
    textAlign: 'center',
    margin: 25,
    padding: 20,
    backgroundColor: '#FF977E',
  }
});