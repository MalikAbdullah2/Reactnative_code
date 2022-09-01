import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const Promotion = ({image, title, percent, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={image} style={styles.illustration}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.percent}>{percent}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  illustration: {
    marginBottom: 28,
    width: 150,
    height: 140,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
    textAlign: 'center',
    marginTop: 108,
  },
  percent: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginLeft: 4,
    textAlign: 'center',
    marginTop: 108,
  },
});
