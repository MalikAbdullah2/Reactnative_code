import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const LabelColor = ({color, selected, onPress}) => {
  return (
    <View style={styles.wrapper(color, selected)}>
      <TouchableOpacity onPress={onPress} style={styles.colorChoose(color)} />
    </View>
  );
};

export default LabelColor;

const styles = StyleSheet.create({
  wrapper: (color, selected) => ({
    width: 34,
    height: 34,
    padding: 4,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: selected === undefined ? colors.white : color,
    marginRight: 6,
  }),
  colorChoose: (color) => ({
    width: 28,
    height: 28,
    borderRadius: 50 / 2,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
