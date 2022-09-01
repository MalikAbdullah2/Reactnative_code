import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  ICSearchFlat,
  ILRecomended2,
  ILRecomended3,
  ILRecomended7,
} from '../../assets';
import {Gap, Header, Label, Recomended} from '../../components';
import {colors, fonts} from '../../utils';

const Search = ({onPress, navigation}) => {
  return (
    <>
      <Header title="Search" onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.title}>
              Hello, i am Treva. What would you like to search ?
            </Text>
            <Gap height={20} />
            <View style={styles.form}>
              <ICSearchFlat style={styles.icon} />
              <TextInput style={styles.search} placeholder="Find you want" />
            </View>
            <Gap height={20} />
            <Text style={styles.keyword}>Popularity</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={20} />
            <View style={styles.chooseKey}>
              <Label label="Iphone X" />
              <Label label="Samsung" />
              <Label label="Note 9" />
              <Label label="Watch" />
              <Gap width={10} />
            </View>
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={20} />
            <View style={styles.chooseKey}>
              <Label label="Macbook" />
              <Label label="Apple" />
              <Label label="Nevada" />
              <Label label="PC" />
              <Gap width={10} />
            </View>
          </ScrollView>
          <Gap height={20} />
          <View style={styles.section}>
            <Text style={styles.keyword}>Favorite</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.favoriteWrapper}>
            <Gap width={20} />
            <Recomended
              image={ILRecomended7}
              title="Homipad Height ...."
              price="$ 10"
              rating="4.8"
              totalSale="512 Sale"
            />
            <Gap width={10} />
            <Recomended
              image={ILRecomended2}
              title="Arpenaz 4 Family ...."
              price="$ 200"
              rating="4.2"
              totalSale="812 Sale"
            />
            <Gap width={10} />
            <Recomended
              image={ILRecomended3}
              title="Mizzu Light ...."
              price="$ 4"
              rating="4.7"
              totalSale="1422 Sale"
            />
            <Gap width={14} />
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section: {paddingHorizontal: 20},
  title: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.header,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 12,
  },
  search: {
    flex: 1,
    height: 48,
    borderRadius: 10,
    fontSize: 14,
    marginLeft: 10,
    backgroundColor: colors.white,
  },
  keyword: {
    fontSize: 16,
    fontFamily: fonts.secondary[200],
  },
  chooseKey: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  favoriteWrapper: {
    paddingBottom: 20,
  },
});
