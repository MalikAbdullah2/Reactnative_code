import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const LabelSize = ({text, selected, onPress}) => {
  return (
    <TouchableOpacity style={styles.sizeBorder(selected)} onPress={onPress}>
      <Text style={styles.sizeChoose(selected)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LabelSize;

const styles = StyleSheet.create({
  sizeBorder: (selected) => ({
    width: 35,
    height: 35,
    marginRight: 6,
    borderRadius: 50 / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: selected === undefined ? colors.black : colors.pay,
  }),
  sizeChoose: (selected) => ({
    fontSize: 14,
    color: selected === undefined ? colors.black : colors.pay,
  }),
});
