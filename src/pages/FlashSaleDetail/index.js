import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  ICCartWarna,
  ICChatWarna,
  ICFlashSaleIcon,
  ICStarWhite,
  ILRecomended2,
  ILRecomended7,
  DummyMan6,
  ICCart2,
} from '../../assets';
import {Gap, Header, Recomended} from '../../components';
import {colors, fonts} from '../../utils';

const images = [
  require('../../assets/dummy/Macbook.png'),
  require('../../assets/illustration/Recomended-Image2.png'),
  require('../../assets/illustration/Recomended-Image3.png'),
];

class FlashSaleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  change(nativeEvent) {
    console.log('nativeEvent:', nativeEvent);
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({
        active: slide,
      });
    }
  }

  render() {
    const {active} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Header title="Product Detail" icon={ICCart2} />
        </View>

        <ScrollView>
          <View style={styles.wrap}>
            <ScrollView
              onScroll={({nativeEvent}) => this.change(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}>
              {images.map((e, index) => (
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={e}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={active === index ? styles.dotActive : styles.dot}>
                  ●
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.flashsale}>
            <Image source={ICFlashSaleIcon} style={styles.flashsaleIcon} />
            <Text style={styles.flashsalename}>Flash Sale</Text>
            <Text style={styles.flashsaleavail}>9 Available</Text>
          </View>
          <Text style={styles.name}>Apple Macbook Pro 13 with Touch Bar</Text>
          <Text style={styles.priceDiscount}>$ 2,020</Text>
          <Text style={styles.price}>$ 1,300</Text>
          <View style={styles.strip} />
          <View style={styles.sale}>
            <View style={styles.rating}>
              <Text style={styles.nilai}>4.1</Text>
              <Image source={ICStarWhite} style={styles.star} />
            </View>
            <Text style={styles.totalSale}>(56)</Text>
          </View>
          <Gap height={20} />
          <View style={styles.stripGap} />
          <View style={styles.gap} />
          <View style={styles.stripGap} />
          <Gap height={20} />
          <Text style={styles.title}>Detail Product</Text>
          <Gap height={20} />
          <View>
            <Text style={styles.detailProduct}>1) Macbook Pro</Text>
            <Text style={styles.detailProduct}>2) SSD 256 GB</Text>
            <Text style={styles.detailProduct}>3) Ram 8 GB DDR4</Text>
            <Text style={styles.detailProduct}>4) Non Touch Bar</Text>
          </View>
          <Gap height={20} />
          <View style={styles.stripGap} />
          <View style={styles.gap} />
          <View style={styles.stripGap} />
          <Gap height={20} />
          <Text style={styles.title}>Description</Text>
          <Text style={styles.desc}>
            Lorem ipsum is simply dummy text ot the printing and typesetting
            industry. Lorem ipsum has been the industry’s standart dummy text
            ever since the 1500s, when an unknown printer took a gallery of type
            and scrambled it to make a type specimen.....
          </Text>
          <TouchableOpacity>
            <Text style={styles.more}>View More</Text>
          </TouchableOpacity>
          <Gap height={20} />
          <View style={styles.gap} />
          <View style={styles.topRatedProduct}>
            <View style={styles.topRated}>
              <Text style={styles.title}>Top Rated Products</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.ratedProduct}>
              <Recomended
                image={ILRecomended7}
                title="Arpenaz 4"
                price="$ 200"
                rating="4.2"
                totalSale="812 Sale"
              />
              <Recomended
                image={ILRecomended2}
                title="Arpenaz 4"
                price="$ 200"
                rating="4.2"
                totalSale="812 Sale"
              />
              <Recomended
                image={DummyMan6}
                title="Tariyaki Watusi"
                price="$ 200"
                rating="4.2"
                totalSale="812 Sale"
              />
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity style={styles.borderIcon}>
            <Image source={ICCartWarna} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.borderIcon}
            onPress={() => this.props.navigation.navigate('Chat')}>
            <Image source={ICChatWarna} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => this.props.navigation.navigate('PaymentChoose')}>
            <Text style={styles.pay}>Pay</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5, //25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    marginTop: 13,
    color: '#888',
    opacity: 0.5,
  },
  dotActive: {
    fontSize: 28,
    margin: 3,
    color: '#888',
    opacity: 0.5,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.white,
  },
  image: {
    height: 350,
    width: 300,
    alignSelf: 'center',
    marginBottom: 12,
  },
  flashsale: {
    backgroundColor: '#FF5252',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flashsaleIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  flashsalename: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginLeft: 12,
  },
  flashsaleavail: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginLeft: 120,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.secondary[600],
    marginLeft: 20,
    marginTop: 20,
  },
  priceDiscount: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginLeft: 20,
    textDecorationLine: 'line-through',
  },
  stripDiscount: {
    width: 70,
    height: 2,
    backgroundColor: colors.text.secondary,
    marginLeft: 18,
    marginTop: -12,
  },
  price: {
    fontSize: 24,
    fontFamily: fonts.primary[700],
    color: '#FF5252',
    marginLeft: 20,
    marginTop: 4,
    marginBottom: 20,
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
  },
  stripGap: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
  },
  gap: {
    height: 0,
    borderColor: colors.borderGap,
    borderWidth: 10,
  },
  rating: {
    backgroundColor: '#8BC34A',
    width: 90,
    height: 40,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
  },
  nilai: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.white,
    marginRight: 12,
  },
  totalSale: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginLeft: 10,
    opacity: 0.6,
  },
  sale: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  detailProduct: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginLeft: 20,
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
  },
  more: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.blueButton,
    alignSelf: 'center',
    marginTop: 8,
  },
  topRated: {
    backgroundColor: colors.borderGap,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.blueButton,
    marginRight: 20,
  },
  ratedProduct: {
    backgroundColor: colors.borderGap,
    flexDirection: 'row',
    marginLeft: 20,
  },
  topRatedProduct: {
    backgroundColor: colors.borderGap,
  },
  button: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  borderIcon: {
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 60,
    marginRight: 12,
  },
  icon: {
    height: 30,
    width: 30,
  },
  payButton: {
    width: 220,
    height: 45,
    backgroundColor: colors.blueButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pay: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.white,
  },
  delivery: {
    flexDirection: 'row',
  },
  deliveryTitle: {
    fontSize: 14,
    fontFamily: fonts.secondary[500],
    color: colors.blueButton,
    marginLeft: 20,
  },
  homeDelivery: {
    marginLeft: 20,
    marginTop: 4,
  },
  location: {
    flexDirection: 'row',
  },
  go: {
    width: 10,
    height: 20,
    alignSelf: 'center',
    marginLeft: 20,
  },
});

export default FlashSaleDetail;
