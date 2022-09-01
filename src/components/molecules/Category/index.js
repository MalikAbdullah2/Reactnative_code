import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const Category = ({image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.illustration} />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  illustration: {
    width: 170,
    height: 120,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
});
