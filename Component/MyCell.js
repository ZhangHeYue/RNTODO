import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class MyCell extends Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isFinish: PropTypes.bool,
    changeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  };

  _onPressChange = () => {
    this.props.changeTodo(this.props.id);
  };

  _onPressRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    return (
      <View style={styles.cell}>
        <Button onPress={this._onPressChange} style={styles.leftButton} title="点击" />
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        <Button onPress={this._onPressRemove} style={styles.rightButton} title="删除" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    paddingLeft: 0,
    paddingRight: 0,
  },
  imageView: {
    width: 160,
    height: 150,
    backgroundColor: '#333333',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
