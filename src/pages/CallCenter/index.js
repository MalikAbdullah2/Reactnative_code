import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICChatNull} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const CallCenter = () => {
  return (
    <>
      <Header title="Call Center" />
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={ICChatNull} style={styles.image} />
          <Text style={styles.title}>We're Happy to Help You!</Text>
          <Text style={styles.text}>
            If you have complain about {'\n'}the product chat me
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Chat Me</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
      </View>
    </>
  );
};

export default CallCenter;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 120,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.secondary[700],
    color: colors.text.secondary,
    opacity: 0.7,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.header,
    height: 45,
    width: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textButton: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
});
