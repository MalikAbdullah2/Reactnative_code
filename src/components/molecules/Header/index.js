import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICBack, ICSearchGrey} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Header = ({title, onPress, icon, type}) => {
  if (type === 'brand-page') {
    return (
      <View style={styles.containerBrand}>
        <Text style={styles.titleBrand}>Category Brand</Text>
        <ICSearchGrey style={styles.iconBrand} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ICBack onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  containerBrand: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  titleBrand: {
    fontSize: 20,
    color: colors.text.secondary,
    fontFamily: fonts.secondary[600],
  },
  iconBrand: {
    width: 20,
    height: 20,
  },
});
