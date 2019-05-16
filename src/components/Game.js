
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Number from './Number';

import {shuffle} from '../helpers/shuffle.js';

export default class Game extends React.Component {
  render() {
    let selectedNumbers = [];

    let hasBeenSelected = (index) =>  selectedNumbers.indexOf(index) >= 0;

    let numbers = Array.from({length: this.props.randomNumbers}).map(() => Math.floor(Math.random() * 10) + 1);
    let target = numbers.slice(0, 4).reduce((sum, num) => sum += num)

    let numbersMarkup = shuffle(numbers).map((num, index) => {
      return (
        <Number key={index} number={num} selected={hasBeenSelected(index)}/>
        )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.target}>{target}</Text>
        <View style={styles.numbersContainer}>{numbersMarkup}</View>
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
  }
});