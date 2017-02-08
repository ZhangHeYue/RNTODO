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

  removeTodo = (id) => {
    const items = this.state.items.filter(todo => todo.id !== id);
    this.setState(items);
  };

  changeTodo = (id) => {
    const items = this.state.items.map((todo) => {
      return todo.id === id ? { ...todo, finished: !todo.finished } : todo;
    });
    this.setState(items);
  };

  createTodo = (todo) => {
    const id = Date.now() + Math.random().toString().substr(2, 3);
    const newItem = { todo, id, createdAt: new Date().toString(), isFinish: false };
    const items = this.state.items.concat(newItem);
    this.setState(items);
  };

  render() {
    return (
      <View style={styles.view}>
        <MyList dataSource={this.state.items.map((todo) => !todo.isFinish)}
          changeTodo={this.changeTodo}
          removeTodo={this.removeTodo} />
        <MyList dataSource={this.state.items.map((todo) => todo.isFinish)}
          changeTodo={this.changeTodo}
          removeTodo={this.removeTodo} />
        <AddInput createTodo={this.createTodo} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  list: {
    width: 260,
    height: 30,
    backgroundColor: '#eeeeee',
    borderRadius: 3,
    margin: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
  input: {
    height: 30,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    backgroundColor: '#000'
  }
});
