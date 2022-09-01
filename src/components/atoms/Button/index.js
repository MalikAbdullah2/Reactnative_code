import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import LoginSecialMedia from './LoginSocialMedia';

const Button = ({title, button, icon, onPress}) => {
  const ButtonVariant = () => {
    if (button === 'transparent') {
      return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      );
    }
    if (button === 'social-media') {
      return <LoginSecialMedia title={title} icon={icon} />;
    }

    return (
      <TouchableOpacity style={styles.container2} onPress={onPress}>
        <Text style={styles.text2}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonVariant />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 30,
  },
  container2: {
    backgroundColor: colors.blueButton,
    paddingVertical: 10,
    width: 320,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: 'white',
  },
  text2: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
    color: 'white',
  },
});
