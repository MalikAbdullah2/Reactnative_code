import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Gap } from '..';
import { ICMail, ICPassword } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Image } from 'react-native';
const Input = ({ type, placeholder }) => {
  if (type === 'pay') {
    return (
      <View>
        <TextInput placeholder={placeholder} style={styles.inputPay} />
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/name-ico.png')}
          />
          <TextInput style={{
            marginLeft: 20, height: 60, width: '100%',
            borderColor: colors.white,
          }}
            placeholder="First Name"
            placeholderTextColor="white" 
            />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/name-ico.png')}
          />
          <TextInput style={styles.input} placeholder="Middle Name"
          placeholderTextColor="white" 
          />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/name-ico.png')}
          />
          <TextInput style={styles.input} placeholder="Last Name"
          placeholderTextColor="white" 
          />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/family.png')}
          />
          <TextInput style={styles.input} placeholder="Family Name"
          placeholderTextColor="white" 
          />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/phone-icon.png')}
          />
          <TextInput style={styles.input} placeholder="Phone Number"
          placeholderTextColor="white" 
          />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/newmail-icon.png')}
          />
          <TextInput style={styles.input} placeholder="Email (david@gmail.com)" 
          placeholderTextColor="white" 
          />
        </View>
        <Gap height={10} />
        <View style={styles.form}>
          <Image style={styles.icon}
            source={require('../../../assets/icon/newpass-icon.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white" 
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    height: 40, 
    width: "95%", 
    borderColor: 'black',
    borderWidth: 1.2, 
    marginBottom: 20,
    borderRadius:15,
  },
  input: {
    marginLeft: 20, height: 60, width: '100%',
    color: 'black',
  },
  icon: {
    padding: 10,
    marginLeft: 20,
    height: 1,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    //backgroundColor:'white',

  },
  label: {
    fontSize: 50,
    color: 'black',
    marginBottom: 6,
    fontFamily: fonts.primary[600],
  },
  inputPay: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.secondary,
    paddingVertical: 15,
    color: 'white',
    borderColor: colors.white,
  },
});
