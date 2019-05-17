/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {name as appName} from '../../app.json';
import Game from './Game.js';

export default class App extends React.Component {
  state = {
    gameId: 1
  }

  resetGame = () => {
    this.setState((prevState) => {
      return {gameId: prevState.gameId + 1};
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{appName}</Text>
        <Game 
          key={this.state.gameId} 
          randomNumbers={6} 
          remainingSeconds={10}
          resetGame={this.resetGame}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
