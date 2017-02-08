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
    this.props.createTodo('aa')
  }

  render() {
    return (
      <View style = {styles.view}>
       <TextInput style = {styles.textInput}
        onChangeText={this._changeText}
        value={this.state.text}
      />
      <Button style = {styles.button} onPress={this._onPressCreate} title="添加" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: 260,
    height: 30,
    backgroundColor: '#eeeeee',
    borderRadius: 3,
    margin: 10,
  },
  button: {
    height: 30,
  }
});
