import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Item from './item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class List extends React.Component {

  renderItem = ({ item, index }) => {
    return <Item value={item} testID={`todo-${index}`} />;
  }

  keyExtractor = (item, index) => {
    return index;
  }

  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          testID="list"
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default List;
