import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  ILBrandApple,
  ILBrandFendi,
  ILBrandGucci,
  ILBrandNike,
  ILBrandSamsung,
  ILBrandSony,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BrandCategory = ({navigation, category, onPress}) => {
  const CategoryBrand = () => {
    if (category === 'Nike Sport') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandNike} style={styles.image} />
            <Text style={styles.title}>Nike Sport</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (category === 'Apple Tech') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandApple} style={styles.image} />
            <Text style={styles.title}>Apple Tech</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (category === 'Fendi Fashion') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandFendi} style={styles.image} />
            <Text style={styles.title}>Fendi Fashion</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (category === 'Gucci Fashion') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandGucci} style={styles.image} />
            <Text style={styles.title}>Guscci Fashion</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (category === 'Samsung Tech') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandSamsung} style={styles.image} />
            <Text style={styles.title}>Samsung Tech</Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (category === 'Sony Tech') {
      return (
        <View styles={styles.container}>
          <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={ILBrandSony} style={styles.image} />
            <Text style={styles.title}>Sony Tech</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View styles={styles.container}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Image source={ILBrandNike} style={styles.image} />
          <Text style={styles.title}>Nike Sport</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <CategoryBrand />
    </View>
  );
};

export default BrandCategory;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.white,
    position: 'absolute',
    fontFamily: fonts.primary[800],
  },
});
