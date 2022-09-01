import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {ICGoogle, ICFacebook} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ChooseLogin = ({onPress, button}) => {
  const ChooseLoginButton = () => {
    if (button === 'facebook') {
      return (
        <TouchableOpacity style={styles.chooseLoginFacebook}>
          <Image source={ICFacebook} style={styles.image} />
          <Text style={styles.loginFacebook}>Login With Facebook</Text>
        </TouchableOpacity>
      );
    }
    if (button === 'google') {
      return (
        <TouchableOpacity style={styles.chooseLoginGoogle}>
          <Image source={ICGoogle} style={styles.image} />
          <Text style={styles.loginGoogle}>Login With Google</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.chooseLoginFacebook}>
        <Image source={ICFacebook} style={styles.image} />
        <Text style={styles.loginFacebook}>Login With Facebook</Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <ChooseLoginButton />
    </TouchableOpacity>
  );
};

export default ChooseLogin;

const styles = StyleSheet.create({
  chooseLoginFacebook: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.facebook,
    borderRadius: 30,
    width: 330,
    height: 60,
  },
  chooseLoginGoogle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 30,
    width: 330,
    height: 60,
  },
  image: {width: 15, height: 30},
  loginFacebook: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontFamily: fonts.secondary[600],
  },
  loginGoogle: {
    fontSize: 20,
    color: colors.secondary,
    marginLeft: 20,
    fontFamily: fonts.secondary[600],
  },
});
