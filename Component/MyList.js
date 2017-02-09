import React, { Component, PropTypes } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';
import MyCell from './MyCell';

export default class MyList extends Component {

  state = {
    dataSource: (new ListView.DataSource({ rowHasChanged: (r1, r2) => { return r1 !== r2; } })).cloneWithRows(
      this.props.items
    )
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.items);
    this.setState({ dataSource });
  }

  static propTypes = {
    items: PropTypes.array,
    changeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  };

  render() {
    return (
      <View style={styles.view}>
        <ListView
          dataSource={this.state.dataSource}
          style={styles.listView}
          renderRow={(rowData) =>
            <MyCell id={rowData.id}
              title={rowData.title}
              isFinish={rowData.isFinish}
              changeTodo={this.props.changeTodo}
              removeTodo={this.props.removeTodo} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 22,
    paddingLeft: 0,
    paddingRight: 0,
  },
  listView: {
    paddingLeft: 0,
    paddingRight: 0,
  }
})