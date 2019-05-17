
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Number from './Number';

import {shuffle} from '../helpers/shuffle.js';

export default class Game extends React.Component {
  state = {
    selectedNumbers: [],
    remainingSeconds: this.props.remainingSeconds
  };

  numbers = Array
    .from({length: this.props.randomNumbers})
    .map(() => Math.floor(Math.random() * 10) + 1);

  target = this.numbers
    .slice(0, 4)
    .reduce((sum, num) => sum += num);

  randomNumbers = shuffle(this.numbers);

  gameStatus = 'playing';


  hasBeenSelected = (index) =>  this.state.selectedNumbers.indexOf(index) >= 0;
  
  selectNumber = (index) => {
    this.setState((prevState) => {
      return {selectedNumbers: [...prevState.selectedNumbers, index]}
    })
  }

  componentDidMount() {
    currentInterval = setInterval(() => {
      this.setState((prevState) => {
        return {remainingSeconds: prevState.remainingSeconds -1 }
      }, () => {
        if (this.state.remainingSeconds === 0) {
          clearInterval(currentInterval)
        }
      })
    }, 1000)
  }

  calculateGameStatus = (nextState) => {
    const gameSum = nextState.selectedNumbers.reduce((sum, currentValue) => {
      return sum + this.numbers[currentValue];
    }, 0)
    if (nextState.remainingSeconds === 0) {
      return "lost";
    }
    if (gameSum < this.target) {
      return "playing"
    } else if (gameSum === this.target) {
      return "won";
    } else {
      return "lost";
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.selectedNumbers !== nextState.selectedNumbers || nextState.remainingSeconds === 0) {
      this.gameStatus = this.calculateGameStatus(nextState)
    }
  }

  render() {
    let numbersMarkup = this.randomNumbers.map((num, index) => {
      return (
        <Number 
          key={index} 
          id={index}
          number={num} 
          disabled={this.hasBeenSelected(index) || this.gameStatus !== 'playing'} 
          onPress={this.selectNumber}/>
        )
    })

    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`${this.gameStatus}`]]}>{this.target}</Text>
        <View style={styles.numbersContainer}>{numbersMarkup}</View>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{this.state.remainingSeconds}</Text>
        </View>
        {this.gameStatus !== 'playing' && <Button
          onPress={this.props.resetGame}
          title="Play Again"
          color="#841584"
          accessibilityLabel="Restart the game"
        />}
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
  counterContainer: {
    backgroundColor: '#669999',
    marginTop: 50,
    borderRadius: 100
  },
  counter: {
    fontSize: 70,
    padding: 20
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