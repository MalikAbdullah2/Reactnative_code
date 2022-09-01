import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {JSONBrandCategory} from '../../assets';
import {BrandCategory, Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const Brand = ({navigation}) => {
  return (
    <>
      <Header type="brand-page" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Gap height={10} />
          {JSONBrandCategory.data.map((item) => {
            return (
              <BrandCategory
                key={item.id}
                category={item.category}
                onPress={() => navigation.navigate('NikeSport')}
              />
            );
          })}
          <Gap height={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default Brand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 20,
    marginRight: 20,
  },
  brand: {
    fontSize: 24,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 180,
    borderRadius: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
});
