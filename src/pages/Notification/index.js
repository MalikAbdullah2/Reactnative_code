import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICLogoNotification} from '../../assets';
import {Header, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Notification = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      <Header title="Notification" onPress={() => navigation.goBack()} />
      <View style={styles.strip} />
      <Gap height={20} />
      <TouchableOpacity style={styles.container}>
        <Image source={ICLogoNotification} style={styles.icon} />
        <View style={styles.title}>
          <Text style={styles.treva}>Treva Shop</Text>
          <Text style={styles.desc}>Thanks for downloaded treva shop ...</Text>
        </View>
      </TouchableOpacity>
      <Gap height={15} />
      <View style={styles.strip} />
      <Gap height={10} />
      <View style={styles.strip} />
      <Gap height={15} />
      <TouchableOpacity style={styles.container}>
        <Image source={ICLogoNotification} style={styles.icon} />
        <View style={styles.title}>
          <Text style={styles.treva}>Treva Shop</Text>
          <Text style={styles.desc}>Your item delivery</Text>
        </View>
      </TouchableOpacity>
      <Gap height={15} />
      <View style={styles.strip} />
      <Gap height={10} />
      <View style={styles.strip} />
      <Gap height={15} />
      <TouchableOpacity style={styles.container}>
        <Image source={ICLogoNotification} style={styles.icon} />
        <View style={styles.title}>
          <Text style={styles.treva}>Treva Shop</Text>
          <Text style={styles.desc}>Pending list item shoes</Text>
        </View>
      </TouchableOpacity>
      <Gap height={15} />
      <View style={styles.strip} />
      <Gap height={10} />
      <View style={styles.strip} />
      <Gap height={15} />
      <TouchableOpacity style={styles.container}>
        <Image source={ICLogoNotification} style={styles.icon} />
        <View style={styles.title}>
          <Text style={styles.treva}>Treva Shop</Text>
          <Text style={styles.desc}>Get 10% discount for macbook pro 2018</Text>
        </View>
      </TouchableOpacity>
      <Gap height={15} />
      <View style={styles.strip} />
      <Gap height={15} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  icon: {
    height: 50,
    width: 50,
  },
  title: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  treva: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginTop: 4,
    fontStyle: 'italic',
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.7,
  },
});
