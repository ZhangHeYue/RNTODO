import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import MyList from '../Component/MyList';
import AddInput from '../Component/AddInput';

export default class MyView extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  _removeTodo = (id) => {
    const items = this.state.items.filter(todo => todo.id !== id);
    this.setState({items});
  };

  _changeTodo = (id) => {
    const items = this.state.items.map((todo) => {
      return todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo;
    });
    this.setState({items});
  };

  _createTodo = (title) => {
    const id = Date.now() + Math.random().toString().substr(2, 3);
    const newItem = { title, id, createdAt: new Date().toString(), isFinish: false };
    const items = [...this.state.items, newItem];
    this.setState({items});
  };

  render() {
    return (
      <View style={styles.view}>
        <MyList items={this.state.items.filter((todo) => !todo.isFinish)}
          changeTodo={this._changeTodo}
          removeTodo={this._removeTodo} />
        <MyList items={this.state.items.filter((todo) => todo.isFinish)}
          changeTodo={this._changeTodo}
          removeTodo={this._removeTodo} />
        <AddInput createTodo={this._createTodo} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    // width: 260,
    height: 100,
    backgroundColor: '#eeeeee',
    borderRadius: 3,
    margin: 10,
  },
  input: {
    position: 'absolute',
    backgroundColor: '#222',
    bottom: 0,
  }
});
