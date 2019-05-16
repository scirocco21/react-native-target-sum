import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Number extends React.Component {
  handlePress = () => {
    if (this.props.selected) { return };
    this.props.onPress(this.props.id);
  }
  render() {
    return(
      <TouchableOpacity onPress={this.handlePress}>
         <Text style={[styles.number, this.props.selected && styles.selected]}>{this.props.number}</Text>
      </TouchableOpacity>
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
  },
  selected: {
    opacity: 0.3
  }
});