import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import RadioForm from 'react-native-simple-radio-button';
import {
  ICChecklist,
  ICCod,
  ICCreditCard2,
  ICGoogleWallet,
  ICPayPal,
} from '../../assets';
import {Button, Gap, Header, Strip} from '../../components';
import {colors, fonts} from '../../utils';

var tes = [
  {label: 'Credit / Debit Card', value: 0},
  {label: 'Cash On Delivery', value: 1},
  {label: 'Paypal', value: 2},
  {label: 'Google Wallet', value: 3},
];

export default class PaymentChoose extends Component {
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
      <>
        <Header
          title="Payment"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrap}>
          <View style={styles.page}>
            <Text style={styles.text}>Choose your payment method</Text>
            <View style={styles.wrapper}>
              <RadioForm
                radio_props={tes}
                initial={4}
                onPress={(value) => {}}
                selectedButtonColor={'#CDCACA'}
                buttonColor={'#CDCACA'}
                buttonSize={16}
                labelStyle={styles.lableStyle}
                buttonStyle={{top: 20}}
                style={{marginLeft: 40}}
              />
              <View style={styles.icon}>
                <ICCreditCard2 />
                <Gap height={60} />
                <ICCod />
                <Gap height={60} />
                <ICPayPal />
                <Gap height={55} />
                <Strip />
                <ICGoogleWallet />
              </View>
            </View>
            <View style={styles.strip1} />
            <View style={styles.strip2} />
            <View style={styles.strip3} />
            <View style={styles.strip4} />
            <Gap height={80} />
            <Button
              title="Pay"
              onPress={() => {
                this.showAlert();
              }}
            />
            <AwesomeAlert
              customView={
                <View style={styles.alert}>
                  <Image source={ICChecklist} style={styles.alertImage} />
                  <Text style={styles.alertTitle}>Yuppy!!</Text>
                  <Text style={styles.alertText}>
                    Your Payment Receive to Seller
                  </Text>
                </View>
              }
              show={showAlert}
              showProgress={false}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
            />
          </View>
          <Gap height={20} />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.white,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  strip1: {
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    opacity: 0.5,
    marginHorizontal: 30,
    marginTop: -285,
  },
  strip2: {
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    opacity: 0.5,
    marginHorizontal: 30,
    marginTop: 80,
  },
  strip3: {
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    opacity: 0.5,
    marginHorizontal: 30,
    marginTop: 80,
  },
  strip4: {
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    opacity: 0.5,
    marginHorizontal: 30,
    marginTop: 80,
  },
  text: {
    fontSize: 24,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  icon: {
    marginRight: 60,
  },
  lableStyle: {
    left: 10,
    marginBottom: 60,
    fontSize: 16,
    fontFamily: fonts.secondary[600],
  },
  alert: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 30,
  },
  alertTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: fonts.secondary[700],
    color: colors.text.secondary,
    marginBottom: 20,
  },
  alertText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginBottom: 30,
  },
});
