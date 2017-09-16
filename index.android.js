/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './App';
import {
  AppRegistry,
} from 'react-native';

export default class RNScrollViewTest extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('RNScrollViewTest', () => RNScrollViewTest);
