import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICStar, ICStarBorder} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ListPromotion from './ListPromotion';

const List = ({avatar, date, desc, onPress, type}) => {
  if (type === 'promotion') {
    return <ListPromotion title={desc} image={avatar} onPress={onPress} />;
  }
  return (
    <View style={styles.wrapper}>
      <Image source={avatar} style={styles.avatarUser} />
      <View style={styles.section}>
        <View style={styles.section2}>
          <View style={styles.section3}>
            <Image source={ICStar} style={styles.starUser} />
            <Image source={ICStar} style={styles.starUser} />
            <Image source={ICStar} style={styles.starUser} />
            <Image source={ICStar} style={styles.starUser} />
            <Image source={ICStarBorder} style={styles.starUser} />
          </View>
          <Text style={styles.dateReview}>{date}</Text>
        </View>
        <Text style={styles.textUser}>{desc}</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondary,
  },
  section: {
    flex: 1,
    marginLeft: 15,
  },
  section2: {
    flexDirection: 'row',
  },
  section3: {
    flexDirection: 'row',
    marginRight: 10,
  },
  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
  },
  starUser: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  dateReview: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
  },
  textUser: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
    marginTop: 8,
    marginBottom: 10,
  },
});
