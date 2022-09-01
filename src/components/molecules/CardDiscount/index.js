import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.422,
  height: 332,
  color: '#000',
  border: 2,
  radius: 10,
  opacity: 0.1,
  x: 0.15,
  y: 0.75,
  style: {
    marginTop: 15,
    marginRight: 10,
  },
};

const CardDiscount = ({
  onPress,
  title,
  price,
  rating,
  totalSale,
  image,
  totalDiscount,
}) => {
  return (
    <View style={styles.container}>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Image source={image} style={styles.image} />
          <Gap height={10} />
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Gap height={5} />
          <Text style={styles.price}>{price}</Text>
          <Gap height={10} />
          <View style={styles.rating}>
            <View style={styles.sectionRating}>
              <Text style={styles.titleRating}>{rating}</Text>
              <Image source={ICStar} style={styles.icon} />
            </View>
            <Text style={styles.titleSale}>{totalSale}</Text>
          </View>
          <View style={styles.discount}>
            <Text style={styles.totalDiscount}>{totalDiscount}</Text>
          </View>
        </TouchableOpacity>
      </BoxShadow>
    </View>
  );
};

export default CardDiscount;

const styles = StyleSheet.create({
  container: {paddingVertical: 5, marginRight: 10},
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 165,
    height: 330,
  },
  discount: {
    position: 'absolute',
    top: 0,
    height: 30,
    width: 60,
    backgroundColor: '#D7124A',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalDiscount: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.white,
  },
  image: {
    width: '100%',
    maxHeight: 200,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  rating: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {width: 15, height: 15},
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.black,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.black,
    paddingHorizontal: 10,
  },
  sectionRating: {
    flexDirection: 'row',
  },
  titleRating: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginRight: 5,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
});
