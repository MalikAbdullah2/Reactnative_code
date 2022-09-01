import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICAdd, ICSend} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, ButtonIconSend} from '../../atoms';

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICAdd style={styles.add} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Type a Message"
        value={value}
        onChangeText={onChangeText}
      />
      <ButtonIconSend disable={value.length < 1} onPress={onButtonPress} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    marginRight: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: colors.text.secondary,
    borderWidth: 1,
    flex: 1,
    fontFamily: fonts.primary[400],
    maxHeight: 45,
  },
});
