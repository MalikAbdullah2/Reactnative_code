import React from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {width} = Dimensions.get('window');

const Test = ({navigation}) => {
  return (
    <ScrollView>
      <SkeletonPlaceholder>
        <View style={{width: width, height: 200, marginTop: 80}} />
        <View
          style={{width: 180, height: 40, marginTop: 20, alignSelf: 'center'}}
        />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderRadius: 10,
              width: 178,
              height: 310,
              marginRight: 6,
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 20,
              elevation: 5,
            }}
          />
          <View
            style={{
              borderRadius: 10,
              width: 178,
              height: 310,
              marginRight: 6,
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 20,
              elevation: 5,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderRadius: 10,
              width: 178,
              height: 310,
              marginRight: 6,
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 20,
              elevation: 5,
            }}
          />
          <View
            style={{
              borderRadius: 10,
              width: 178,
              height: 310,
              marginRight: 6,
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 20,
              elevation: 5,
            }}
          />
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export default Test;

const styles = StyleSheet.create({});

// // import React from 'react';
// // import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
// // import LinearGradient from 'react-native-linear-gradient';
// // import {StyleSheet, View, Animated, Image} from 'react-native';

// // const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
// // const Test = ({hasData}) => {
// //   const [visible, setVisible] = React.useState(false);
// //   const [avatarVisible, setAvatarVisible] = React.useState(false);
// //   React.useEffect(() => {
// //     setTimeout(() => {
// //       hasData && setVisible(true);
// //     }, 1000);
// //   });
// //   // Handle animation
// //   const avatarRef = React.createRef();
// //   const firstLineRef = React.createRef();
// //   const secondLineRef = React.createRef();
// //   const thirdLineRef = React.createRef();

// //   React.useEffect(() => {
// //     const facebookAnimated = Animated.stagger(400, [
// //       avatarRef.current.getAnimated(),
// //       ,
// //     ]);
// //     Animated.loop(facebookAnimated).start();
// //   });

// //   return (
// //     <View>
// //       <View style={{flexDirection: 'row'}}>
// //         <ShimmerPlaceholder
// //           width={80}
// //           height={80}
// //           style={{marginRight: 10}}
// //           ref={avatarRef}
// //           stopAutoRun
// //           visible={avatarVisible}>
// //           {hasData && (
// //             <Image
// //               style={{width: 80, height: 80, borderRadius: 100}}
// //               source={{uri: 'https://unsplash.it/1000/1000'}}
// //               onLoadEnd={() => setAvatarVisible(true)}
// //             />
// //           )}
// //         </ShimmerPlaceholder>
// //       </View>
// //     </View>
// //   );
// // };

// // export default Test;

// // const styles = StyleSheet.create({});

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {NeuView} from 'react-native-neu-element';

// const Test = () => {
//   return (
//     <View>
//       <NeuView color="#eef2f9" height={100} width={100} borderRadius={16}>
//         // Your Code
//       </NeuView>
//       // Inset
//       <NeuView color="#eef2f9" height={100} width={100} borderRadius={16} inset>
//         // Your Code
//       </NeuView>
//       <Text>Test</Text>
//       // Convex
//       <NeuView
//         color="#eef2f9"
//         height={100}
//         width={100}
//         borderRadius={16}
//         convex>
//         // Your Code
//       </NeuView>
//       // Concave
//       <NeuView
//         color="#eef2f9"
//         height={100}
//         width={100}
//         borderRadius={16}
//         concave>
//         // Your Code
//       </NeuView>
//     </View>
//   );
// };

// export default Test;

// const styles = StyleSheet.create({});
