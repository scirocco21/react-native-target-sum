
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Number from './Number';

import {shuffle} from '../helpers/shuffle.js';

export default class Game extends React.Component {
  state = {
    selectedNumbers: []
  };

  hasBeenSelected = (index) =>  this.state.selectedNumbers.indexOf(index) >= 0;
  
  selectNumber = (index) => {
      this.setState((prevState) => {
        return {selectedNumbers: [...prevState.selectedNumbers, index]}
      })
    }

  numbers = Array.from({length: this.props.randomNumbers}).map(() => Math.floor(Math.random() * 10) + 1);
  target = this.numbers.slice(0, 4).reduce((sum, num) => sum += num)
  randomNumbers = shuffle(this.numbers)

  render() {
    let numbersMarkup = this.randomNumbers.map((num, index) => {
      return (
        <Number 
          key={index} 
          id={index}
          number={num} 
          selected={this.hasBeenSelected(index)} 
          onPress={this.selectNumber}/>
        )
    })

    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
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