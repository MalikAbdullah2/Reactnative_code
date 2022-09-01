import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {DummySepatuNike, ICSortir, ILNike} from '../../assets';
import {Gap, Header, Recomended} from '../../components';
import {colors, fonts} from '../../utils';

const {height, width} = Dimensions.get('window');

export default class PaymentChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {showAlert: false};
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };
  render() {
    const {showAlert} = this.state;
    return (
      <View style={styles.page}>
        <Header
          title="Nike Sport"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          <Image source={ILNike} style={styles.image} />
          <View style={styles.container}>
            <Text style={styles.lorem}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.titleButton}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.titleButton}>Notification</Text>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <View style={styles.filter}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.showAlert();
              }}>
              <Image source={ICSortir} style={styles.icon} />
              <Text style={styles.sort}>Sort</Text>
            </TouchableOpacity>
            <View style={styles.strip} />
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.showAlert();
              }}>
              <Image source={ICSortir} style={styles.icon} />
              <Text style={styles.sort}>Notification</Text>
            </TouchableOpacity>
            <AwesomeAlert
              customView={
                <View style={styles.alert}>
                  <Text style={styles.alertTitle}>SORT BY</Text>
                  <View style={styles.alertStrip} />
                  <Text style={styles.alertText}>Popularity</Text>
                  <Text style={styles.alertText}>New</Text>
                  <Text style={styles.alertText}>Discount</Text>
                  <Text style={styles.alertText}>Price: High-Low</Text>
                  <Text style={styles.alertText}>Price: Log-High</Text>
                  <Text style={styles.alertText}>-</Text>
                </View>
              }
              alertContainerStyle={styles.alertContainerStyle}
              show={showAlert}
              showProgress={false}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
            />
          </View>
          <Gap height={10} />
          <View style={styles.card}>
            <Recomended
              image={DummySepatuNike}
              title="Nike Sport Shoes ..."
              price="$ 100"
              rating="4.8"
              totalSale="892 Sale"
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Recomended
              image={DummySepatuNike}
              title="Nike Sport Shoes ..."
              price="$ 100"
              rating="4.8"
              totalSale="892 Sale"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          <View style={styles.card}>
            <Recomended
              image={DummySepatuNike}
              title="Nike Sport Shoes ..."
              price="$ 100"
              rating="4.8"
              totalSale="892 Sale"
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Recomended
              image={DummySepatuNike}
              title="Nike Sport Shoes ..."
              price="$ 100"
              rating="4.8"
              totalSale="892 Sale"
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          <Gap height={20} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: height,
    width: '100%',
  },
  container: {
    padding: 20,
  },
  lorem: {
    fontSize: 16,
    fontFamily: fonts.secondary[300],
    marginBottom: 20,
  },
  button1: {
    backgroundColor: colors.blueMessage,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: colors.blueButton,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  titleButton: {
    fontSize: 20,
    fontFamily: fonts.secondary[300],
    color: colors.white,
  },
  filter: {
    height: 50,
    elevation: 2,
    borderWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    borderColor: colors.borderstrip,
  },
  strip: {
    width: 1,
    height: 40,
    borderWidth: 0.5,
    borderColor: colors.borderstrip,
    marginLeft: -20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 5,
    marginRight: 10,
  },
  sort: {
    fontSize: 16,
    fontFamily: fonts.secondary[800],
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  alert: {
    width: width,
    height: 500,
    marginTop: 50,
  },
  alertContainerStyle: {
    width: 600,
    marginLeft: -103.5,
    paddingTop: 450,
  },
  alertImage: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 30,
  },
  alertTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: fonts.secondary[800],
    color: colors.text.secondary,
    marginBottom: 10,
  },
  alertStrip: {
    borderWidth: 0.5,
    borderColor: colors.borderstrip,
    opacity: 0.5,
    marginBottom: 20,
  },
  alertText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: fonts.secondary[400],
    color: colors.text.secondary,
    marginBottom: 30,
  },
});

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   View,
// } from 'react-native';
// import {
//   ImageHeaderScrollView,
//   TriggeringView,
// } from 'react-native-image-header-scroll-view';

// const {height, width} = Dimensions.get('window');

// const NikeSport = () => {
//   return (
//     <ImageHeaderScrollView
//       scrollViewBackgroundColor={true}
//       maxHeight={650}
//       maxWidth={width}
//       headerImage={require('../../assets/illustration/nikeHeader.png')}
//       renderForeground={() => (
//         <View
//           style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => console.log('tap!!')}>
//             <Text style={{backgroundColor: 'transparent'}}>Tap Me!</Text>
//           </TouchableOpacity>
//         </View>
//       )}>
//       <View style={{height: 1000}}>
//         <TriggeringView onHide={() => console.log('text hidden')}>
//           <Text>Scroll Me!</Text>
//         </TriggeringView>
//       </View>
//     </ImageHeaderScrollView>
//   );
// };

// export default NikeSport;

// const styles = StyleSheet.create({});
