import React, { Component, PropTypes } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';
import MyCell from './MyCell';

export default class MyList extends Component {

  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  static propTypes = {
    dataSource: PropTypes.array,
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