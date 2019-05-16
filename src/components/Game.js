
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

  gameStatus = () => {
    let status;
    const gameSum = this.state.selectedNumbers.reduce((sum, currentValue) => {
      return sum + this.numbers[currentValue];
    }, 0)

    if (gameSum < this.target) {
      status = "playing";
    } else if (gameSum === this.target) {
      status = "won";
    } else {
      status = "lost";
    }
    console.log(status, gameSum);
    return status;
  }

  render() {
    this.gameStatus();
    let numbersMarkup = this.randomNumbers.map((num, index) => {
      return (
        <Number 
          key={index} 
          id={index}
          number={num} 
          disabled={this.hasBeenSelected(index) || this.gameStatus() !== 'playing'} 
          onPress={this.selectNumber}/>
        )
    })

    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`${this.gameStatus()}`]]}>{this.target}</Text>
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
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
  },
  playing: {
    backgroundColor: '#FFE9B2'
  },
  lost: {
    backgroundColor: '#FFB2B2'
  },
  won: {
    backgroundColor: '#8ECC8E'
  }
});