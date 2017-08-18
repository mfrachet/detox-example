import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  LayoutAnimation
} from 'react-native';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#5C6BC0',
  },
  secondary: {
    width: 50,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#ffffff',
  },
  placeholderColor: {
    color: '#dddddd',
  }
});

class InputAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleInputChanges = (text) => {
    if (!this.state.inputValue || !text) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
    this.setState({ inputValue: text });
  }

  onAdd = () => {
    const inputValue = this.state.inputValue;
    this.props.onAdd(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const inputValue = this.state.inputValue;

    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="#dddddd"
          style={[styles.main, styles.textColor]}
          placeholder="Add a new todo item"
          onChangeText={this.handleInputChanges}
          value={inputValue}
        />
        {
          inputValue !== '' &&
          <TouchableOpacity
            testID="touchableAdder"
            style={styles.secondary}
            onPress={this.onAdd}
          >
            <Text style={styles.textColor} testID="textAdd">Add</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default InputAdder;
