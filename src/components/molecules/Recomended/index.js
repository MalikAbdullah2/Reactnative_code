import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {BoxShadow} from 'react-native-shadow';
import {ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.45,
  height: 331,
  color: '#000',
  border: 2,
  radius: 10,
  opacity: 0.1,
  x: 0.2,
  y: 0.3,
  style: {
    marginTop: 15,
    marginRight: 6,
  },
};

// const shadowOpt2 = {
//   width: 178,
//   height: 300,
//   color: colors.border,
//   border: 2,
//   radius: 10,
//   opacity: 0.06,
//   x: 2,
//   y: 2,
//   style: {
//     marginVertical: 5,
//     marginRight: 12,
//   },
// };

export default class Recomended extends Component {
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
        <BoxShadow style={styles.container2} setting={shadowOpt}>
          {/* <BoxShadow setting={shadowOpt2}> */}
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
            <TouchableOpacity
              style={styles.wrapperDetail}
              onPress={this.props.onPress}>
              <Text numberOfLines={2} style={styles.title}>
                {this.props.title}
              </Text>
              <Text style={styles.price}>{this.props.price}</Text>
              <View style={styles.wrapperRating}>
                <View style={styles.wrapperRating2}>
                  <Text style={styles.titleRating}>{this.props.rating}</Text>
                  <Image source={ICStar} style={styles.icon} />
                </View>
                <Text style={styles.titleSale}>{this.props.totalSale}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* </BoxShadow> */}
        </BoxShadow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {paddingVertical: 5},
  container2: {
    flex: 1,
    width: '100%',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '100%',
    height: 330,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapperDetail: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: fonts.primary[600],
    color: colors.black,
  },
  wrapperRating: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperRating2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: -4,
  },
  titleRating: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginRight: 10,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  alert: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 300,
    height: 420,
    marginHorizontal: -25,
    marginVertical: -30,
  },
});
