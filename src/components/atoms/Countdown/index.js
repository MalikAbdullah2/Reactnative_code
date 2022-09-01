import React from 'react';
import CountDown from 'react-native-countdown-component';
import {StyleSheet, Text, View} from 'react-native';
import {Category} from '../../molecules';
import {fonts} from '../../../utils';

const Countdown = ({color}) => {
  const Time = () => {
    if (color === 'white') {
      return (
        <CountDown
          size={16}
          until={864000}
          digitStyle={{
            backgroundColor: 'transparent',
          }}
          digitTxtStyle={{color: '#FFF'}}
          separatorStyle={{color: '#FFF'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          style={styles.number}
        />
      );
    }
    if (color === 'black') {
      return (
        <CountDown
          size={18}
          until={864000}
          digitStyle={{
            backgroundColor: 'transparent',
            marginLeft: -5,
            marginRight: -5,
          }}
          digitTxtStyle={{color: '#000'}}
          separatorStyle={{color: '#000'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          style={styles.number}
        />
      );
    }
    return (
      <CountDown
        size={16}
        until={864000}
        digitStyle={{
          backgroundColor: 'transparent',
        }}
        digitTxtStyle={{color: '#fff'}}
        separatorStyle={{color: '#fff'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        style={styles.number}
      />
    );
  };
  return (
    <View>
      <Time />
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  number: {marginLeft: -10, fontFamily: fonts.secondary[800]},
});
