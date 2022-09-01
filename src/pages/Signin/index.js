import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICLogo, ILLogin} from '../../assets';
import {Button, ButtonGradient, Gap, Input} from '../../components';
import {colors, fonts} from '../../utils';
import  {DummyActionCamera}  from '../../assets';
import { Image } from 'react-native';


const Signin = ({navigation, type}) => {
  return (
    <ImageBackground source={ILLogin} style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page2}>
        <Gap height={30} />
        <View style={styles.wraperLogo}>
         <Image //style={{ width: 1500,height:500}}
          source={require('../../assets/icon/hporx.png')}
         style={{ width: 250,
          height: 150, }}
         />
          
        </View>
        <View>
          {/* <Button
            title="Login with Facebook"
            button="social-media"
            icon="facebook"
          />
          <Gap height={10} />
          <Button
            title="Login with Google"
            button="social-media"
            icon="google"
          />
          <Gap height={20} />
          <Text style={styles.or}>OR</Text> */}
          <Gap height={20} />
          <Input />
          <Gap height={20} />
          
        </View>
        <ButtonGradient
          title="Sign In"
          onPress={() => navigation.navigate('MainApp')}
          style={styles.button}
        />
        <Gap height={10} />
        <View style={styles.wrapper}>
            
            <TouchableOpacity>
              <Text
                style={styles.signin}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <Text style={styles.signin}> Not Have Account ? </Text>
          </View>
          <Gap height={30} />
          <Text style={styles.or}>OR</Text>
       <View
       style={{
        flexDirection: "row",
        justifyContent: "center",
        //marginTop: "5%",
        marginBottom:"6%",
        margin:"10%",
      }}
       >
           <Image 
          source={require('../../assets/icon/newfb-icon.png')}
          style={{ width: 30,
            height: 30,
          borderRadius:20,
          }}
         />
          <Gap width={15} />
          <Image 
          source={require('../../assets/icon/gmail-icon.png')}
          style={{ width: 30,
            height: 30,
          borderRadius:25,
          }}
         />
         <Gap width={15} />
           <Image 
          source={require('../../assets/icon/link-icon.png')}
          style={{ width: 30,
            height: 30,
          borderRadius:25,
          }}
         />
<Gap width={15} />
           <Image 
          source={require('../../assets/icon/apple-icon.png')}
          style={{ width: 30,
            height: 40,
          //borderRadius:15,
          }}
         />



       </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 30,
  },
  page2: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  wraperLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  choose: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[800],
    marginLeft: 20,
    alignSelf: 'center',
    color: 'white',
  },
  or: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    alignSelf: 'center',
    color: 'white',
  },
  signin: {
    fontSize: 14,
    color: 'white',
    fontFamily: fonts.secondary[400],
  },
  // chooseLoginFacebook: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   flexDirection: 'row',
  //   backgroundColor: colors.facebook,
  //   borderRadius: 30,
  //   width: 330,
  //   height: 50,
  //   elevation: 10,
  // },
  // imageFacebook: {
  //   width: 15,
  //   height: 30,
  // },oginFacebook: {
  //   fontSize: 16,
  //   color: 'white',
  //   marginLeft: 30,
  //   fontFamily: fonts.secondary[400],
  // },
  // chooseLoginGoogle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   flexDirection: 'row',
  //   backgroundColor: colors.white,
  //   borderRadius: 30,
  //   width: 330,
  //   height: 50,
  //   elevation: 10,
  // },
  // imageGoogle: {
  //   width: 25,
  //   height: 25,
  // },
  // loginGoogle: {
  //   fontSize: 16,
  //   color: colors.text.secondary,
  //   marginLeft: 20,
  //   fontFamily: fonts.secondary[400],
  // },
  
 
});
