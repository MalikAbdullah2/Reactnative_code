import I18n from 'react-native-i18n';
import i18n from 'react-native-i18n';
import localization from 'react-native-localization';
import AsyncStorage from '@react-native-community/async-storage';

import en from './en-US.json';
import ar from './ar-DZ.json';
import hi from './hi-IN.json';
import id from './id-ID.json';
import zh from './zh-HK.json';

I18n.translations = {
  en,
  ar,
  hi,
  id,
  zh,
};

// const getLanguage = async () => {
//   try {
//     const choice = await localization.locale;
//     I18n.locale = choice.substr(0, 2);
//     I18n.initAsync();
//   } catch (error) {
//     console.log('unable to get locale');
//   }
// };

// getLanguage();

// export function t(name) {
//   return I18n.t(name);
// }

async function getLanguage() {
  const choice = await AsyncStorage.getItem('setLanguage');
  i18n.locale = choice;
  i18n.fallbacks = true;

  console.log(i18n.currentLocale());
}

getLanguage();

export function t(name: string) {
  return i18n.t(name);
}
