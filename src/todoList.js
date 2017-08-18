import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClickableItem from './clickableItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class TodoList extends React.Component {
  handleSelectItem = (item) => {
    this.props.onSelectTodo(item);
  }

  renderItem = ({ item, index }) => {
    return (
      <ClickableItem
        model={item}
        position={index}
        testID={`todo-${index}`}
        onSelect={this.handleSelectItem}
      />
    );
  }

  keyExtractor = (item, index) => {
    return index;
  }

  render() {
    const items = this.props.items;
    return (
      <View style={styles.container}>
        <FlatList
          testID="todoList"
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default TodoList;
