import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import Router from './routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('learnfrench', () => App);
