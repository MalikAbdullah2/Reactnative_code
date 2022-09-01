import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListPromotion = ({image, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Image source={image} style={styles.camera} />
      <Text style={styles.titleCamera}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListPromotion;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 10,
  },
  camera: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },

  titleCamera: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 0,
    fontSize: 18,
    fontFamily: fonts.secondary[600],
    color: colors.white,
  },
});
