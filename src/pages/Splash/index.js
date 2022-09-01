import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILSplashScreen} from '../../assets';
import {fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  }, [navigation]);
  return (
    <ImageBackground source={ILSplashScreen} style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.bold}>HPORx</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[200],
    color: 'green',
  },
  bold: {
    fontSize: 34,
    fontFamily: fonts.primary[800],
    color: 'green',
  },
});
