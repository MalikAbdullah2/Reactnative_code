import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DummyBook,
  DummyKarinaDress,
  DummyMacbook,
  DummyPhone,
  ICChat,
  ICFlashSale,
  ICNotificationWhite,
  ICSearch,
  ILCategory1,
  ILCategory2,
  ILCategory3,
  ILCategory4,
  ILCategory5,
  ILCategory6,
  ILCategory7,
  ILCategory8,
  ILFlashSaleBg,
  ILPromotion1,
  ILPromotion2,
  ILPromotion3,
  ILPromotion4,
  ILPromotion5,
  ILPromotion6,
  ILRecomended1,
  ILRecomended2,
  ILRecomended3,
  ILRecomended4,
  ILRecomended5,
  ILRecomended6,
  ILRecomended7,
} from '../../assets';
import {
  Banner,
  Category,
  FlashSale,
  Gap,
  MenuIcon,
  Promotion,
  Recomended,
} from '../../components';
import Countdown from '../../components/atoms/Countdown';
import {colors, fonts} from '../../utils';

const images = [
  require('../../assets/illustration/Banner.png'),
  require('../../assets/illustration/Baner2.png'),
  require('../../assets/illustration/Baner3.png'),
  require('../../assets/illustration/Baner4.png'),
  require('../../assets/illustration/Baner5.png'),
];

const Home = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.search}>
            <Image source={ICSearch} style={styles.icon} />
            <Text
              style={styles.titleSearch}
              placeholder="Treva Shop"
              textColor={colors.borderstrip}>
              Treva Shop
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChatNull')}>
          <Image source={ICChat} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image source={ICNotificationWhite} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          {/* Banner */}
          <View style={styles.circleDiv}>
            <Banner images={images} />
          </View>
          <Gap height={200} />
          {/* <Image source={ILBanner} style={styles.image} /> */}
          {/* Menu */}
          <View style={styles.menu}>
            <Text style={styles.title}>Menu</Text>
            <MenuIcon onPress={() => navigation.navigate('Camera')} />
          </View>

          {/* Akhir Menu Component */}

          <View style={styles.gap} />
          <Gap height={20} />

          {/* Week Promotion */}
          <Text style={styles.title}>Week Promotion</Text>
          <Gap height={20} />
          <View style={styles.weekPromotion}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.promotionCategory}>
                <Promotion
                  image={ILPromotion1}
                  title="Discount"
                  percent="10%"
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
                <Promotion
                  image={ILPromotion2}
                  title="Start From"
                  percent="$ 50"
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
                <Promotion
                  image={ILPromotion3}
                  title="Discount"
                  percent="20%"
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
                <Promotion
                  image={ILPromotion4}
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
                <Promotion
                  image={ILPromotion5}
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
                <Promotion
                  image={ILPromotion6}
                  onPress={() => navigation.navigate('WeekPromotion')}
                />
              </View>
            </ScrollView>
          </View>

          {/* Akhir Promotion Component */}

          {/* Flash Sale */}
          <View style={styles.flashSale}>
            <ImageBackground source={ILFlashSaleBg} style={styles.bg}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginRight: 20}}>
                  <ICFlashSale />
                  <Text style={styles.titleFlash}>Flash</Text>
                  <Text style={styles.titleSale}>Sale</Text>
                  <Gap height={80} />
                  <Text style={styles.saleTime}>End sale in :</Text>
                  <Countdown color="white" />
                </View>
                <View style={styles.promotionCategory}>
                  <FlashSale
                    image={DummyMacbook}
                    title="Apple Macbook Pro ..."
                    priceDiscount="$ 2,020"
                    price="$ 1,300"
                    totalSale="(56)"
                    location="United Kingdom"
                    available="9 Available"
                    bar={0.6}
                    colorBar={'#FFA500'}
                    style={styles.flashSaleCard}
                    onPress={() => navigation.navigate('FlashSale')}
                  />
                  <FlashSale
                    image={DummyKarinaDress}
                    title="7 Level Karina Dress ..."
                    priceDiscount="$ 14"
                    price="$ 10"
                    totalSale="(16)"
                    location="United Kingdom"
                    available="24 Available"
                    bar={0.8}
                    colorBar={'#52B640'}
                    style={styles.flashSaleCard}
                    onPress={() => navigation.navigate('FlashSale')}
                  />
                  <FlashSale
                    image={DummyPhone}
                    title="Samsung Galaxy ..."
                    priceDiscount="$ 1,000"
                    price="$ 950"
                    totalSale="(20)"
                    location="United Kingdom"
                    available="14 Available"
                    bar={0.7}
                    colorBar={'#52B640'}
                    style={styles.flashSaleCard}
                    onPress={() => navigation.navigate('FlashSale')}
                  />
                  <FlashSale
                    image={DummyBook}
                    title="Harry Potter Spesial ..."
                    priceDiscount="$ 25"
                    price="$ 20"
                    totalSale="(22)"
                    location="United Kingdom"
                    available="5 Available"
                    bar={0.3}
                    colorBar={'#FFA500'}
                    style={styles.flashSaleCard}
                    onPress={() => navigation.navigate('FlashSale')}
                  />
                </View>
              </ScrollView>
            </ImageBackground>
          </View>

          {/* Akhir Flash Sale Component */}

          {/* Category */}
          <View>
            <Gap height={20} />
            <Text style={styles.title}>Category</Text>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginRight: 20}}>
              <View>
                <Category
                  image={ILCategory1}
                  onPress={() => navigation.navigate('Man')}
                />
                <Category
                  image={ILCategory2}
                  onPress={() => navigation.navigate('Man')}
                />
              </View>
              <View>
                <Category
                  image={ILCategory3}
                  onPress={() => navigation.navigate('Man')}
                />
                <Category
                  image={ILCategory4}
                  onPress={() => navigation.navigate('Man')}
                />
              </View>
              <View>
                <Category
                  image={ILCategory5}
                  onPress={() => navigation.navigate('Man')}
                />
                <Category
                  image={ILCategory6}
                  onPress={() => navigation.navigate('Man')}
                />
              </View>
              <View>
                <Category
                  image={ILCategory7}
                  onPress={() => navigation.navigate('Man')}
                />
                <Category
                  image={ILCategory8}
                  onPress={() => navigation.navigate('Man')}
                />
              </View>
            </ScrollView>
          </View>

          {/* Akhir Category Component */}

          <View style={styles.gap} />

          {/* Recomended */}
          <Gap height={20} />
          <Text style={styles.title}>Recomended</Text>
          <Gap height={5} />
          <View style={styles.recomended}>
            <Recomended
              image={ILRecomended1}
              title="Firona Skirt"
              price="$ 10"
              rating="4.8"
              totalSale="932 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
            <Recomended
              image={ILRecomended2}
              title="Arpenaz 4 family ..."
              price="$ 200"
              rating="4.2"
              totalSale="892 Sale"
              onPress={() => navigation.navigate('FlashSaleDetail')}
            />
            <Recomended
              image={ILRecomended3}
              title="Mizzu valicipous ...."
              price="$ 4"
              rating="4.7"
              totalSale="1422 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
            <Recomended
              image={ILRecomended4}
              title="Menty solid blue ...."
              price="$ 15"
              rating="4.4"
              totalSale="523 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
            <Recomended
              image={ILRecomended5}
              title="Korea choker ther .."
              price="$ 20"
              rating="4.7"
              totalSale="1422 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
            <Recomended
              image={ILRecomended6}
              title="Mon cheri pinguin"
              price="$ 3"
              rating="4.4"
              totalSale="523 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
            <Recomended
              image={ILRecomended7}
              title="Dr. Kevin Women .."
              price="$ 15"
              rating="4.1"
              totalSale="654 Sale"
              onPress={() => navigation.navigate('ProductDetail')}
            />
          </View>
          {/* Akhir Recomended Component */}
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Home;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gap: {
    height: 0,
    borderColor: colors.borderGap,
    borderWidth: 10,
  },
  circleDiv: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.header,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: width * 0.69,
    height: 40,
  },
  linearGradient: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    marginLeft: 20,
  },
  titleSearch: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.primary[200],
    marginLeft: 10,
    color: colors.borderstrip,
  },
  image: {
    height: 200,
    width: 400,
  },
  icon: {
    width: 20,
    height: 19,
  },
  menu: {
    flex: 1,
    height: 250,
  },
  promotionCategory: {
    flexDirection: 'row',
  },
  weekPromotion: {
    marginLeft: 20,
  },
  bg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleFlash: {
    fontSize: 30,
    fontFamily: fonts.secondary[800],
    color: colors.white,
  },
  titleSale: {
    fontSize: 30,
    fontFamily: fonts.secondary[300],
    color: colors.white,
    marginTop: -10,
  },
  saleTime: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.white,
  },
  category: {
    marginLeft: 20,
  },
  slide: {
    marginTop: 0,
  },
  recomended: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
