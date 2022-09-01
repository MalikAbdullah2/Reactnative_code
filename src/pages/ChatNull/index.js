import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICChatNull, ICNotMessage} from '../../assets';
import {Header} from '../../components';
import {colors, fonts} from '../../utils';

const ChatNull = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Message" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Image source={ICNotMessage} style={styles.image} />
        <Text style={styles.title}>Not Message Yet</Text>
      </View>
    </View>
  );
};

export default ChatNull;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginTop: 20,
  },
});
