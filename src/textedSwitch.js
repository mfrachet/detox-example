import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 10,
    backgroundColor: '#f4f4f4'
  },
  main: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10
  },
});

class TextedSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  onValueChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { content, testID } = this.props;
    const isChecked = this.state.isChecked;

    return(
      <View style={styles.container}>
        <Switch
          onValueChange={this.onValueChange}
          value={isChecked}
          testID={testID}
        />
        <Text style={styles.main}>{content}</Text>
      </View>
    );
  }
}

export default TextedSwitch;
