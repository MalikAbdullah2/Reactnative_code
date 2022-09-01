import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Card,
  CardDiscount,
  Gap,
  Header,
  HeaderSearch,
  Label,
} from '../../components';
import {
  DummyMan1,
  DummyMan2,
  DummyMan3,
  DummyMan4,
  DummyMan5,
  DummyMan6,
  DummyBannerMan,
  DummyKarinaDress,
  ICSearchFlat,
} from '../../assets';
import {colors, fonts} from '../../utils';
import BannerMan from '../../components/molecules/BannerMan';

const images = [
  require('../../assets/dummy/bannerMan1.png'),
  require('../../assets/dummy/bannerMan2.png'),
  require('../../assets/dummy/bannerMan3.png'),
  require('../../assets/dummy/bannerMan4.png'),
];

const Man = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HeaderSearch title="Man" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.circleDiv}>
          <BannerMan images={images} style={styles.banner} />
        </View>
        <Gap height={180} />
        <Gap height={30} />
        <View style={styles.double}>
          <Text style={styles.title}>Sub Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <View style={styles.chooseKey}>
            <Label label="Polo Shirt" />
            <Label label="Suit" />
            <Label label="Jeans" />
            <Label label="Watch" />
          </View>
          <Gap width={10} />
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <View style={styles.chooseKey}>
            <Label label="Shirt" />
            <Label label="Jacket" />
            <Label label="Bag" />
            <Label label="Shoes" />
          </View>
          <Gap width={10} />
        </ScrollView>
        <Gap height={20} />
        <View style={styles.double}>
          <Text style={styles.title}>Item Discount</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <CardDiscount
            image={DummyMan1}
            title="Firrona Skirt!"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyMan2}
            title="Arpenaz 4 Family..."
            price="$ 300"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyKarinaDress}
            title="T-shirt Blue"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <Gap width={10} />
        </ScrollView>
        <Gap height={20} />
        <View style={styles.double}>
          <Text style={styles.title}>News Item</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <CardDiscount
            image={DummyMan3}
            title="Crocodile T-shirt"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyMan4}
            title="T-shirt Blue"
            price="$ 300"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyKarinaDress}
            title="Action Camera"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <Gap width={10} />
        </ScrollView>
        <Gap height={20} />
        <View style={styles.double}>
          <Text style={styles.title}>News Item</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={20} />
          <CardDiscount
            image={DummyMan5}
            title="Firrona Skirt!"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyMan6}
            title="T-shirt Brown"
            price="$ 300"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <CardDiscount
            image={DummyKarinaDress}
            title="T-shirt Brown"
            price="$ 200"
            rating="4.8"
            totalSale="932 Sale"
            totalDiscount="10%"
          />
          <Gap width={10} />
        </ScrollView>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Man;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  circleDiv: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  banner: {
    width: 370,
    height: 200,
    alignSelf: 'center',
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.secondary[600],
    paddingLeft: 20,
  },
  seeMore: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    color: colors.header,
    paddingRight: 20,
  },
  chooseKey: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
