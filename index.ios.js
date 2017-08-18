import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import InputAdder from './src/itemAdder';
import TextedSwitch from './src/textedSwitch';
import TodoList from './src/todoList';
import data from './src/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});

export default class DetoxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullList: data, displayedList: data };
  }

  handleSelectTodo = (item) => {
    const items = this.state.fullList;
    const newItems = items.map((currentItem) => {
      if (currentItem === item) {
        return { ...item, isChecked: !item.isChecked };
      }
      return currentItem;
    });

    this.setState({ fullList: newItems, displayedList: newItems });
  }

  handleAddTodo = (content) => {
    const item = { content, isChecked: false };
    const fullList = [...this.state.fullList, item];
    this.setState({ fullList, displayedList: fullList });
  }

  handleHideChecked = (isHiding) => {
    const items = this.state.fullList;
    if (isHiding) {
      const displayedList = items.filter((item) => !item.isChecked);
      return this.setState({ displayedList });
    }
    return this.setState({ displayedList: items });
  }

  render() {
    const items = this.state.displayedList;
    return (
      <View style={styles.container}>
        <InputAdder onAdd={this.handleAddTodo}/>
        <TextedSwitch
          onSwitch={this.handleHideChecked}
          content="Hide the checked"
          testID="switchHideChecked"
        />
        <TodoList
          items={items}
          onSelectTodo={this.handleSelectTodo}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('detoxExample', () => DetoxExample);
