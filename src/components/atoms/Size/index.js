import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ICChooseActive, ICChoose} from './../../../assets';
import {colors} from '../../../utils';

const Size = ({title, active, onPress, onLongPress}) => {
  const ChooseSize = () => {
    if (title === 'S') {
      return active ? (
        <Image source={ICChooseActive} />
      ) : (
        <Image source={ICChoose} />
      );
    }
    return <Image source={ICChoose} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <ChooseSize />
    </TouchableOpacity>
  );
};

export default Size;

const styles = StyleSheet.create({
  sizeBorder: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 20,
  },
  sizeBorderActive: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.facebook,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 20,
  },
});
