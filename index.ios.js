import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import InputAdder from './src/itemAdder';
import TextedSwitch from './src/textedSwitch';
import List from './src/list';
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
    this.state = { dataSet: data };
  }

  onAdd = (newItem) => {
    const dataSet = [...this.state.dataSet, newItem];
    this.setState({ dataSet });
  }

  /**
   * @todo missing a switch to display crossed item or not
   * @return {[type]} [description]
   */
  render() {
    const dataSet = this.state.dataSet;
    return (
      <View style={styles.container}>
        <InputAdder onAdd={this.onAdd}/>
        <TextedSwitch content="Hide the checked" testID="switchHideChecked" />
        <List items={dataSet} />
      </View>
    );
  }
}

AppRegistry.registerComponent('detoxExample', () => DetoxExample);
