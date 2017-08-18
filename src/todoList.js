import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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

  keyExtractor = (item, index) => index

  renderItem = ({ item, index }) => (
    <ClickableItem
      model={item}
      position={index}
      testID={`todo-${index}`}
      onSelect={this.handleSelectItem}
    />
  );

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

TodoList.propTypes = {
  onSelectTodo: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodoList;
