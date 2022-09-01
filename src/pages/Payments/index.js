// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {DummyCreditCard, ICCreditCard} from '../../assets';
// import {Gap, Header} from '../../components';
// import {colors, fonts} from '../../utils';

// const Payments = ({navigation}) => {
//   return (
//     <View>
//       <Header title="Payment" onPress={() => navigation.goBack()} />
//       <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
//         <Image source={DummyCreditCard} style={styles.card} />
//         <Text style={styles.title}>Card Information</Text>
//         <Gap height={20} />
//         <View style={styles.information}>
//           <Text style={styles.bold}>My Personal Card</Text>
//           <Image source={ICCreditCard} style={styles.iconCC} />
//         </View>
//         <View style={styles.information}>
//           <View>
//             <Text style={styles.cardNumber}>Card Number</Text>
//             <Text style={styles.number}>9867 - 2312 - 3212 - 4213</Text>
//           </View>
//           <View>
//             <Text style={styles.cardNumber}> Exp.</Text>
//             <Text style={styles.number}>12/29</Text>
//           </View>
//         </View>
//         <View style={styles.information}>
//           <View>
//             <Text style={styles.cardNumber}>Card Name</Text>
//             <Text style={styles.number}>Allisa Hearth</Text>
//           </View>
//           <View>
//             <Text style={styles.cardNumber}>CVV / CVC</Text>
//             <Text style={styles.number}>965</Text>
//           </View>
//         </View>
//         <View style={styles.edit}>
//           <TouchableOpacity>
//             <Text style={styles.editDetail}>Edit Detail</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.title}>Transaction Details</Text>
//         <Gap height={20} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Jan 01</Text>
//           <Text style={styles.item}>Buy Dress Red ...</Text>
//           <Text style={styles.price}>$ 50</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={10} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Feb 12</Text>
//           <Text style={styles.item}>Buy Iphone X</Text>
//           <Text style={styles.price}>$ 900</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={10} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Mar 21</Text>
//           <Text style={styles.item}>Buy Macbook Pro</Text>
//           <Text style={styles.price}>$ 2500</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={10} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Oct 18</Text>
//           <Text style={styles.item}>Buy Samsung G ...</Text>
//           <Text style={styles.price}>$ 500</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={10} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Dec 02</Text>
//           <Text style={styles.item}>Buy Rexona Man</Text>
//           <Text style={styles.price}>$ 4</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={10} />
//         <View style={styles.transaction}>
//           <Text style={styles.date}>Jan 02</Text>
//           <Text style={styles.item}>Buy Candy Blue</Text>
//           <Text style={styles.price}>$ 2</Text>
//         </View>
//         <Gap height={10} />
//         <View style={styles.strip} />
//         <Gap height={120} />
//       </ScrollView>
//     </View>
//   );
// };

// export default Payments;

// const styles = StyleSheet.create({
//   container: {
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   card: {
//     width: 350,
//     height: 200,
//   },
//   title: {
//     fontSize: 20,
//     fontFamily: fonts.secondary[600],
//     color: colors.text.secondary,
//     marginTop: 40,
//   },
//   information: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   bold: {
//     fontSize: 16,
//     fontFamily: fonts.secondary[600],
//     color: colors.text.secondary,
//   },
//   iconCC: {
//     width: 30,
//     height: 20,
//     alignSelf: 'center',
//   },
//   cardNumber: {
//     fontSize: 14,
//     fontFamily: fonts.secondary[300],
//     color: colors.text.secondary,
//     marginTop: 12,
//   },
//   number: {
//     fontSize: 14,
//     fontFamily: fonts.secondary[300],
//     textAlign: 'right',
//   },
//   edit: {
//     backgroundColor: colors.borderstrip,
//     width: 350,
//     height: 40,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   editDetail: {
//     fontSize: 16,
//     fontFamily: fonts.secondary[600],
//     color: colors.blueMessage,
//   },
//   transaction: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   date: {
//     fontSize: 14,
//     fontFamily: fonts.secondary[300],
//     color: colors.text.secondary,
//     marginLeft: 20,
//   },
//   item: {
//     fontSize: 14,
//     fontFamily: fonts.secondary[300],
//   },
//   price: {
//     fontSize: 14,
//     fontFamily: fonts.secondary[300],
//     color: colors.price,
//     marginRight: 20,
//   },
//   strip: {
//     height: 0,
//     borderColor: colors.borderstrip,
//     borderWidth: 0.5,
//     marginLeft: 20,
//     marginRight: 20,
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {DummyCreditCard, ICCreditCard} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';

const shadowOpt = {
  width: 350,
  height: 215,
  color: colors.border,
  border: 2,
  radius: 10,
  opacity: 0.06,
  x: 0,
  y: 0,
  style: {
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
};

const shadowOpt2 = {
  width: 350,
  height: 300,
  color: colors.border,
  border: 2,
  radius: 10,
  opacity: 0.06,
  x: -1,
  y: -50,
  style: {
    marginHorizontal: 10,
    marginVertical: 45,
    alignSelf: 'center',
    justifyContent: 'center',
  },
};

const Payments = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Payment" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ImageBackground source={DummyCreditCard} style={styles.card}>
          <Text style={styles.backgroundNumber}>
            9 8 6 7 - 2 3 1 2 - 3 2 1 2 - 4 2 1 3
          </Text>
          <View style={styles.cardDetail}>
            <View style={styles.nameText}>
              <Text style={styles.backgroundCardName}>Card Name</Text>
              <Text style={styles.backgroundCardName}>Alisa Hearth</Text>
            </View>
            <View style={styles.cvvText}>
              <Text style={styles.cvv}>CVV / CVC</Text>
              <Text style={styles.cvv}>765</Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.title}>Card Information</Text>
        <Gap height={20} />
        <BoxShadow setting={shadowOpt}>
          <View style={styles.cardPersonal}>
            <View style={styles.information}>
              <Text style={styles.bold}>My Personal Card</Text>
              <Image source={ICCreditCard} style={styles.iconCC} />
            </View>
            <View style={styles.detailNumber}>
              <View style={styles.cardNumberDetail}>
                <Text style={styles.cardNumber}>Card Number</Text>
                <Text style={styles.Number}>9867 - 2312 - 3212 - 4213</Text>
                <Text style={styles.cardNumber}>Card Name</Text>
                <Text style={styles.Number}>Allisa Hearth</Text>
              </View>
              <View style={styles.cardNumberDetail}>
                <Text style={styles.cardNumber}>Exp.</Text>
                <Text style={styles.Number}>12/29</Text>
                <Text style={styles.cardNumber}>CVV/CVC.</Text>
                <Text style={styles.Number}>765</Text>
              </View>
            </View>
            <View style={styles.edit}>
              <TouchableOpacity>
                <Text style={styles.editDetail}>Edit Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BoxShadow>
        <Text style={styles.title}>Transaction Details</Text>
        <Gap height={20} />
        <BoxShadow setting={shadowOpt2}>
          <View style={styles.transactionDetail}>
            <Gap height={20} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Jan 01</Text>
              <Text style={styles.item}>Buy Dress Red ...</Text>
              <Text style={styles.price}>$ 50</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={10} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Feb 12</Text>
              <Text style={styles.item}>Buy Iphone X</Text>
              <Text style={styles.price}>$ 900</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={10} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Mar 21</Text>
              <Text style={styles.item}>Buy Macbook Pro</Text>
              <Text style={styles.price}>$ 2500</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={10} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Oct 18</Text>
              <Text style={styles.item}>Buy Samsung G ...</Text>
              <Text style={styles.price}>$ 500</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={10} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Dec 02</Text>
              <Text style={styles.item}>Buy Rexona Man</Text>
              <Text style={styles.price}>$ 4</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={10} />
            <View style={styles.transaction}>
              <Text style={styles.date}>Jan 02</Text>
              <Text style={styles.item}>Buy Candy Blue</Text>
              <Text style={styles.price}>$ 2</Text>
            </View>
            <Gap height={10} />
            <View style={styles.strip} />
            <Gap height={20} />
          </View>
        </BoxShadow>
      </ScrollView>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingRight: 20,
  },
  backgroundNumber: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginTop: 60,
  },
  card: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  cardDetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  backgroundCardName: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.white,
  },
  cvv: {
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.white,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginTop: 40,
  },
  cardPersonal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  detailNumber: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  bold: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.text.secondary,
    marginTop: 12,
  },
  iconCC: {
    width: 30,
    height: 20,
    alignSelf: 'center',
    marginRight: 40,
  },
  cardNumber: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
    marginTop: 12,
  },
  number: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    textAlign: 'right',
  },
  edit: {
    backgroundColor: colors.borderstrip,
    height: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  editDetail: {
    fontSize: 16,
    fontFamily: fonts.secondary[600],
    color: colors.blueMessage,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionDetail: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 100,
    marginLeft: 2,
    marginRight: 3,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.text.secondary,
    marginLeft: 20,
  },
  item: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.secondary[300],
    color: colors.price,
    marginRight: 20,
  },
  strip: {
    height: 0,
    borderColor: colors.borderstrip,
    borderWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.5,
  },
});
