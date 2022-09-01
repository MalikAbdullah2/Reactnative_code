import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ICStar, ICLocationImage} from '../../../assets';
import {colors, fonts} from '../../../utils';
import ProgressBar from 'react-native-progress/Bar';
import {BoxShadow} from 'react-native-shadow';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Gap} from '../../atoms';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.452,
  height: 432,
  color: '#000',
  border: 2,
  radius: 10,
  opacity: 0.1,
  x: 0.15,
  y: 0.75,
  style: {
    marginTop: 15,
  },
};

export default class FlashSaleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.container}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => {
                this.showAlert();
              }}>
              <AwesomeAlert
                customView={
                  <Image source={this.props.image} style={styles.alertImage} />
                }
                show={showAlert}
                showProgress={false}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
              />
              <Image source={this.props.image} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPress}>
              <Gap height={10} />
              <Text numberOfLines={2} style={styles.title}>
                {this.props.title}
              </Text>
              <Gap height={10} />
              <Text style={styles.priceDiscount}>
                {this.props.priceDiscount}
              </Text>
              {/* <View style={styles.strip} /> */}
              <Text style={styles.price}>{this.props.price}</Text>
              <Gap height={10} />
              <View style={styles.rating}>
                <Text style={styles.titleRating}>{this.props.rating}</Text>
                <Image source={ICStar} style={styles.icon} />
                <Image source={ICStar} style={styles.icon} />
                <Image source={ICStar} style={styles.icon} />
                <Image source={ICStar} style={styles.icon} />
                <Image source={ICStar} style={styles.icon} />
                <Text style={styles.titleSale}>{this.props.totalSale}</Text>
              </View>
              <Gap height={10} />
              <View style={styles.location}>
                <Image source={ICLocationImage} style={styles.iconLocation} />
                <Text style={styles.locationName}>{this.props.location}</Text>
              </View>
              <Gap height={10} />
              <Text style={styles.available}>{this.props.available}</Text>
              <ProgressBar
                progress={this.props.bar}
                color={this.props.colorBar}
                borderWidth={0}
                style={styles.bar}
              />
            </TouchableOpacity>
          </View>
        </BoxShadow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  card: {
    backgroundColor: colors.white,
    width: '100%',
    height: 430,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {width: 15, height: 15, marginRight: 2},
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    paddingHorizontal: 10,
  },
  priceDiscount: {
    fontSize: 14,
    paddingHorizontal: 10,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: fonts.primary[700],
    color: colors.blueButton,
  },
  titleRating: {
    fontSize: 12,
    marginLeft: 10,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  iconLocation: {
    width: 10,
    height: 14,
  },
  location: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  locationName: {
    fontSize: 12,
    marginLeft: 5,
    color: colors.text.secondary,
    fontFamily: fonts.primary[200],
  },
  available: {
    fontSize: 12,
    paddingHorizontal: 10,
  },
  bar: {
    marginLeft: 10,
    marginTop: 5,
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 280,
    height: 280,
  },
});
