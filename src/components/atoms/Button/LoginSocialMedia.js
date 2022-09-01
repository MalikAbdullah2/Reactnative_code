import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICFacebook, ICGoogle} from '../../../assets';
import {colors, fonts} from '../../../utils';


const LoginSecialMedia = ({title, icon, onPress}) => {
  const IconSocial = () => {
    if (icon === 'facebook') {
      return <ICFacebook width={20} />;
    }
    if (icon === 'google') {
      return <ICGoogle width={20} />;
    }
  };
  return (
    <TouchableOpacity style={styles.chooseLoginFacebook(icon)}>
      <IconSocial />
      <Text style={styles.loginFacebook(icon)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginSecialMedia;

const styles = StyleSheet.create({
  chooseLoginFacebook: (icon) => ({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: icon === 'facebook' ? colors.facebook : colors.white,
    borderRadius: 15,
    height: 50,
  }),
  loginFacebook: (icon) => ({
    fontSize: 14,
    color: icon === 'facebook' ? colors.white : colors.black,
    marginLeft: 30,
    fontFamily: fonts.secondary[400],
  }),
});
