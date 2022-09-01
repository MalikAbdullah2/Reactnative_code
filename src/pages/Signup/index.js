import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ICLogo, ILSignup} from '../../assets';
import {ButtonGradient, Gap, Input} from '../../components';
import {fonts} from '../../utils';

const Signup = ({navigation}) => {
  return (
    <ImageBackground source={ILSignup} style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page2}>
        <Gap height={20} />
        <View style={styles.container}>
          <ICLogo />
          <Text style={styles.title}>Treva Shop</Text>
        </View>
        <Gap height={'18%'} />
        <View style={styles.container2}>
          <Input />
          <Gap height={20} />
          <View style={styles.wrapper}>
            <Text style={styles.signin}>Have Account ? </Text>
            <TouchableOpacity>
              <Text
                style={styles.signin}
                onPress={() => navigation.navigate('Signin')}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <Gap height={'10%'} />
        </View>
        <Gap height={'5%'} />
        <ButtonGradient
          title="Sign Up"
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={20} />
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    height: '100%',
    paddingHorizontal: 20,
  },
  page2: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[800],
    marginLeft: 20,
    color: 'white',
  },
  signin: {
    fontSize: 14,
    color: 'white',
    fontFamily: fonts.secondary[400],
  },
});
