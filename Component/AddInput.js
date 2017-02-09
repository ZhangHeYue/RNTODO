import React, { Component, PropTypes } from 'react';
import { AppRegistry, ListView, TextInput, View, Button, StyleSheet } from 'react-native';

export default class AddInput extends Component {

  static propTypes = {
    createTodo: PropTypes.func,
  };

  state = {
    inputText: '',
  };

  _changeText = (inputText) => {
    this.setState({inputText})
  }

  _onPressCreate = () => {
    this.props.createTodo(this.state.inputText);
  }

  render() {
    return (
      <View style = {styles.view}>
        <TextInput style = {styles.textInput}
          onChangeText={this._changeText}

        />
        <Button style = {styles.button} onPress={this._onPressCreate} title="添加" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  textInput: {
    flex: 1,
    height: 30,
    backgroundColor: '#333333',
    borderRadius: 3,
    margin: 10,
  },
  button: {
    margin: 10,
    height: 30,
  }
});
