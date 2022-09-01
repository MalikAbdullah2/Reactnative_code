import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {CardDiscount, Gap, Header} from '../../components';
import {
  DummyAppleWatch,
  DummySamsungS8,
  DummyMacbookPro,
  DummyAsus1456,
  DummyOppo,
  DummyMacbookAir,
  DummyAsusA54ur,
  DummyXiaomi,
  ICSearchGrey,
} from '../../assets';
import {colors, fonts} from '../../utils';
import CardWeekPromotion from '../../components/molecules/CardWeekPromotion';

const Camera = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      <Header title="Week Promotion" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        {/* <TextInput style={styles.search} placeholder="Description" /> */}
        <View style={styles.search}>
          <ICSearchGrey style={styles.icon} />
          <TextInput
            style={styles.titleSearch}
            placeholder="Description"
            placeholderTextColor={colors.borderstrip}
          />
        </View>
        <Gap height={15} />
        <View style={styles.card}>
          <CardWeekPromotion
            image={DummyAppleWatch}
            title="Apple Watch Serie.."
            price="$ 400"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardWeekPromotion
            image={DummySamsungS8}
            title="Samsung Galaxy s8"
            price="$ 700"
            rating="4.8"
            totalSale="892 Sale"
            totalDiscount="10%"
          />
          <CardWeekPromotion
            image={DummyMacbookPro}
            title="Macbook Pro Touc.."
            price="$ 2000"
            rating="4.8"
            totalSale="1422 Sale"
            totalDiscount="10%"
          />
          <CardWeekPromotion
            image={DummyAsus1456}
            title="Asus 1456uq Ram..."
            price="$ 600"
            rating="4.8"
            totalSale="531 Sale"
            totalDiscount="10%"
          />
          <CardWeekPromotion
            image={DummyAsusA54ur}
            title="Asus a54ur Ram 4.."
            price="$ 500"
            rating="4.8"
            totalSale="130 Sale"
            totalDiscount="10%"
          />
          <CardWeekPromotion
            image={DummyXiaomi}
            title="Xiaomi Huamit 5x .."
            price="$ 100"
            rating="4.8"
            totalSale="31 Sale"
            totalDiscount="10%"
          />
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  weekPromotion: {
    flexDirection: 'row',
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
  },
  seeMore: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
    color: colors.header,
    marginRight: 20,
  },
  camera: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  titleCamera: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    marginTop: -60,
    marginLeft: 10,
    marginBottom: 20,
    color: colors.white,
  },
  chooseKey: {
    flexDirection: 'row',
  },
  category: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    width: 95,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginRight: 12,
    marginTop: 20,
    marginBottom: 1,
  },
  choose: {
    fontSize: 16,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
  },
  search: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    width: '100%',
    height: 50,
    elevation: 2,
    fontSize: 16,
    marginTop: 10,
  },
  icon: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.6,
  },
});
