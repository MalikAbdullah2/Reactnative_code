import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICBack, ICSearchFlat} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HeaderSearch = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <ICBack onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <ICSearchFlat />
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
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
});
