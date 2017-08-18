import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 14,
  },
  crossed: {
    textDecorationLine: 'line-through',
  },
});

class ClickableItem extends React.Component {
  handleSelect = () => {
    const { model, onSelect } = this.props;
    onSelect(model);
  }

  render() {
    const { model, testID } = this.props;
    const textStyle = [styles.text, model.isChecked && styles.crossed];

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handleSelect}
        testID={`touchable-${testID}`}
      >
        <Text style={textStyle} testID={testID}>{model.content}</Text>
      </TouchableOpacity>
    );
  }
}

ClickableItem.propTypes = {
  model: PropTypes.shape({
    isChecked: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  testID: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ClickableItem;
