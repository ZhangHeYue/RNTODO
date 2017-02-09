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
    const id =  this.props.id
    this.props.changeTodo(id);
  };

  _onPressRemove = () => {
    const id =  this.props.id
    this.props.removeTodo(id);
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
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
  },
  leftButton: {
    borderRadius: 3,
    margin: 10,
  },
  rightButton: {
    borderRadius: 3,
    margin: 10,
  },
  text: {
    width: 160,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 3,
    margin: 10,
    textAlign: 'auto',
    fontSize: 15,
    alignSelf: 'center',
  },
});
