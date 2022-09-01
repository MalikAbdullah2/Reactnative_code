import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ProgressViewIOSComponent,
} from 'react-native';
import {ICStar, ICLocationImage} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ProgressBar from 'react-native-progress/Bar';

const FlashSale = ({
  navigation,
  onPress,
  image,
  title,
  price,
  rating,
  totalSale,
  priceDiscount,
  location,
  available,
  bar,
  colorBar,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.priceDiscount}>{priceDiscount}</Text>
        {/* <View style={styles.strip} /> */}
        <Text style={styles.price}>{price}</Text>
        <View style={styles.rating}>
          <Text style={styles.titleRating}>{rating}</Text>
          <Image source={ICStar} style={styles.icon} />
          <Image source={ICStar} style={styles.icon} />
          <Image source={ICStar} style={styles.icon} />
          <Image source={ICStar} style={styles.icon} />
          <Image source={ICStar} style={styles.icon} />
          <Text style={styles.titleSale}>{totalSale}</Text>
        </View>
        <View style={styles.location}>
          <Image source={ICLocationImage} style={styles.iconLocation} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
        <Text style={styles.available}>{available}</Text>
        <ProgressBar
          progress={bar}
          color={colorBar}
          borderWidth={0}
          style={styles.bar}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginRight: 10},
  card: {
    backgroundColor: colors.white,
    width: 150,
    height: 320,
    marginRight: 6,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    alignSelf: 'center',
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 8,
  },
  icon: {width: 8, height: 8},
  title: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    marginLeft: 8,
    marginTop: 8,
  },
  priceDiscount: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginLeft: 8,
    marginTop: 8,
    textDecorationLine: 'line-through',
  },
  strip: {
    width: 55,
    height: 2,
    backgroundColor: '#000',
    marginLeft: 10,
    marginTop: -12,
  },
  price: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: colors.blueButton,
    marginLeft: 8,
    marginTop: 8,
  },
  titleRating: {
    fontSize: 8,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  titleSale: {
    fontSize: 8,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginLeft: 8,
  },
  iconLocation: {
    width: 7,
    height: 11,
    marginLeft: 10,
    marginTop: 5,
  },
  location: {
    flexDirection: 'row',
  },
  locationName: {
    marginTop: 4,
    marginLeft: 5,
    color: colors.text.secondary,
    fontFamily: fonts.primary[200],
    fontSize: 8,
  },
  available: {
    fontSize: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  bar: {
    marginLeft: 10,
    marginTop: 8,
  },
});
