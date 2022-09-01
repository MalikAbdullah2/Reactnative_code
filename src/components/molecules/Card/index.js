// import React, {Component} from 'react';
// import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
// import {ILRecomended1, ILRecomended2} from '../../../assets';
// import {fonts} from '../../../utils';

// const resizeComponent = (value, percentage) => {
//   return value - value * (percentage / 100);
// };

// const window = {
//   height: Dimensions.get('window').height,
//   width: Dimensions.get('window').width,
// };

// const CardContainerSize = {
//   width: resizeComponent(window.width, 50),
//   height: resizeComponent(300, 5),
// };

// const ListData = [
//   {id: 1, name: 'Firrona Skirt', price: '$ 10', image: ILRecomended1},
//   {id: 2, name: 'Arpenaz 4 family', price: '$ 200', image: ILRecomended2},
// ];

// class Container extends Component {
//   render() {
//     return <View style={styles.container}>{this.props.children}</View>;
//   }
// }

// class CardItem extends Component {
//   render() {
//     return (
//       <View style={styles.cardContainer}>
//         <View style={styles.card}>{this.props.children}</View>
//       </View>
//     );
//   }
// }

// export default class Card extends Component {
//   render() {
//     return (
//       <Container>
//         <CardItem>
//           <Image source={ILRecomended1} style={styles.image} />
//           <Text style={styles.title}>Firrona Skirt</Text>
//           <View style={styles.priceContainer}>
//             <Text style={styles.price}>$ 10</Text>
//           </View>
//         </CardItem>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   cardContainer: {
//     height: 300,
//     width: CardContainerSize.width,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     height: resizeComponent(300, 5),
//     width: resizeComponent(CardContainerSize.width, 5),
//     elevation: 5,
//     borderRadius: 10,
//   },
//   image: {
//     width: resizeComponent(CardContainerSize.width, 7),
//     height: 200,
//     resizeMode: 'stretch',
//   },
//   title: {
//     fontSize: 12,
//     fontFamily: fonts.secondary[600],
//     padding: 10,
//   },
//   priceContainer: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//   },
//   price: {
//     fontSize: 12,
//     fontFamily: fonts.secondary[600],
//   },
// });

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILRecomended1, ICStar, ILRecomended2} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Recomended = ({navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={ILRecomended1} style={styles.image} />
        <Text style={styles.title}>Firrona Skirt</Text>
        <Text style={styles.title}>$ 10</Text>
        <View style={styles.rating}>
          <Text style={styles.titleRating}>4.8</Text>
          <Image source={ICStar} style={styles.icon} />
          <Text style={styles.titleSale}>932 Sale</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={ILRecomended2} style={styles.image} />
        <Text style={styles.title}>Arpenaz 4 family ....</Text>
        <Text style={styles.title}>$ 200</Text>
        <View style={styles.rating}>
          <Text style={styles.titleRating}>4.2</Text>
          <Image source={ICStar} style={styles.icon} />
          <Text style={styles.titleSale}>892 Sale</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Recomended;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 178,
    height: 300,
    marginRight: 12,
    marginBottom: 20,
    justifyContent: 'center',
    elevation: 5,
  },
  image: {width: 150, height: 200, alignSelf: 'center'},
  rating: {
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 8,
  },
  icon: {width: 15, height: 15},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginLeft: 8,
    marginTop: 8,
  },
  titleRating: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
  },
  titleSale: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginLeft: 75,
  },
});
