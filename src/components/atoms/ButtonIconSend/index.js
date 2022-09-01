import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICSend, ICSendActive} from '../../../assets';

const ButtonIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container}>
        <ICSend />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ICSendActive />
    </TouchableOpacity>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
