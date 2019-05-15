
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Game extends React.Component {
  render() {

    let addableNumbers = Array.from({length: this.props.randomNumbers}).map(() => Math.floor(Math.random() * 10));
    let target = addableNumbers.slice(0, 4).reduce((sum, num) => sum += num)

    let addables = addableNumbers.map(num => {
      return (
        <Text style={styles.addable}>{num}</Text>
      )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.target}>{target}</Text>
        <View style={styles.numbersContainer}>{addables}</View>
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
    margin: 15,
    padding: 20,
    backgroundColor: '#FFE9B2',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
  },
  addable: {
    fontSize: 30,
    textAlign: 'center',
    margin: 25,
    padding: 20,
    backgroundColor: '#FF977E',
  }
});