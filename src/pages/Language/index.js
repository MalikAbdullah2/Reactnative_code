import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {
  DummyFlagArab,
  DummyFlagChn,
  DummyFlagEng,
  DummyFlagHindi,
  DummyFlagIndo,
} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const width = Dimensions.get('window').width;

const shadowOpt = {
  width: width * 0.88,
  height: 80,
  color: colors.border,
  border: 0,
  radius: 10,
  opacity: 0.06,
  x: 0,
  y: 4,
  style: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
};

export default function LanguageChange({navigation}) {
  // const onPress = async (language: string) => {
  //   await AsyncStorage.setItem('setLanguage', language).then(() => {});
  // };
  return (
    <>
      <Header title="Language" onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <ScrollView>
          <Gap height={20} />
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={styles.card}>
              <Image source={DummyFlagEng} style={styles.image} />
              <Text style={styles.name}>English</Text>
            </TouchableOpacity>
          </BoxShadow>
          <Gap height={20} />
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={styles.card}>
              <Image source={DummyFlagArab} style={styles.image} />
              <Text style={styles.name}>Arabic</Text>
            </TouchableOpacity>
          </BoxShadow>
          <Gap height={20} />
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={styles.card}>
              <Image source={DummyFlagChn} style={styles.image} />
              <Text style={styles.name}>Chinese</Text>
            </TouchableOpacity>
          </BoxShadow>
          <Gap height={20} />
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={styles.card}>
              <Image source={DummyFlagHindi} style={styles.image} />
              <Text style={styles.name}>Hindi</Text>
            </TouchableOpacity>
          </BoxShadow>
          <Gap height={20} />
          <BoxShadow setting={shadowOpt}>
            <TouchableOpacity style={styles.card}>
              <Image source={DummyFlagIndo} style={styles.image} />
              <Text style={styles.name}>Indonesia</Text>
            </TouchableOpacity>
          </BoxShadow>
          <Gap height={20} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  card: {
    height: 80,
    width: width * 0.88,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: fonts.secondary[500],
  },
});
