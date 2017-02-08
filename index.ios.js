/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyView from './Component/MyView'

export default class AwesomeProject extends Component {
  render() {
    return (
      <MyView />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
