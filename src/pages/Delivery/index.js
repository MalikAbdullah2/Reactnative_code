import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts} from '../../utils';

const Delivery = ({navigation, onPress}) => {
  return (
    <>
      <Header title="Delivery" onPress={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.wrapper}>
        <View style={styles.page}>
          <View>
            <Gap height={20} />
            <Text style={styles.title}>
              Where are your ordered {'\n'}items shipped ?
            </Text>
            <Gap height={20} />
            <Input type="pay" placeholder="PIN Code" />
            <Gap height={10} />
            <Input type="pay" placeholder="Locality" />
            <Gap height={10} />
            <Input type="pay" placeholder="City" />
            <Gap height={10} />
            <Input type="pay" placeholder="State" />
          </View>
          {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PaymentChoose')}>
        <Text style={styles.text}>Go To Payment</Text>
      </TouchableOpacity> */}
          <View>
            <Button
              title="Go to Payment"
              onPress={() => navigation.navigate('PaymentChoose')}
            />
            <Gap height={20} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  wrapper: {flexGrow: 1},
  title: {
    fontSize: 24,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.secondary[300],
  },
  button: {
    backgroundColor: colors.blueButton,
    height: 50,
    marginHorizontal: 20,
    marginVertical: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.white,
  },
});
