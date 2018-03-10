import React, { PureComponent } from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Header from './Header';
import Content from './Content';
import { getPlatformElevation } from '../../utils';

class ListItem extends PureComponent {
  onPressed = () => {
    const { onPress, item } = this.props;
    onPress(item);
  };
  render() {
    const { item, isHidden } = this.props;
    const { name, ...rest } = item;

    if (isHidden) {
      return null;
    }

    return (
      <TouchableWithoutFeedback onPress={this.onPressed}>
        <View style={styles.container}>
          <Header name={name} />
          <Content {...rest} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    ...getPlatformElevation(4),
  },
});

export default ListItem;
