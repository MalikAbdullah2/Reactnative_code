import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICHomeActive,
  ICHome,
  ICBrandActive,
  ICBrand,
  ICCartActive,
  ICCart,
  ICProfileActive,
  ICProfile,
} from '../../../assets/icon';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHome style={styles.icon} />;
    }
    if (title === 'Brand') {
      return active ? <ICBrandActive /> : <ICBrand style={styles.icon} />;
    }
    if (title === 'Cart') {
      return active ? <ICCartActive /> : <ICCart style={styles.icon} />;
    }
    if (title === 'Account') {
      return active ? <ICProfileActive /> : <ICProfile style={styles.icon} />;
    }
    return <ICHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon style={styles.icon} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 12,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[800],
  }),
});
