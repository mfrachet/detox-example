import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 14,
  }
});

const Item = ({ value, testID }) => (
  <View style={styles.container}>
    <Text style={styles.text} testID={testID}>{value}</Text>
  </View>
);

export default Item;
