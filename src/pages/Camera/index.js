import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DummyActionCamera,
  DummyCamera,
  DummyCamera1,
  DummyCamera2,
  DummyCamera3,
  DummyCameraDigital,
  DummyCompactCamera,
} from '../../assets';
import {CardDiscount, Gap, HeaderSearch, Label, List} from '../../components';
import {colors, fonts} from '../../utils';

const Camera = ({navigation}) => {
  return (
    <>
      <HeaderSearch title="Camera " onPress={() => navigation.goBack()} />
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <Text style={styles.title}>Week Promotion</Text>
          <Gap height={10} />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.weekPromotion}>
            <Gap width={20} />
            <List
              type="promotion"
              desc="Camera Digital"
              avatar={DummyCameraDigital}
            />
            <List
              type="promotion"
              desc="Compact Camera"
              avatar={DummyCompactCamera}
            />
            <List
              type="promotion"
              desc="Action Camera"
              avatar={DummyActionCamera}
            />
            <Gap width={10} />
          </ScrollView>
          <Gap height={40} />
          <View style={styles.double}>
            <Text style={styles.title}>Sub Category</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            <Gap width={20} />
            <View style={styles.chooseKey}>
              <Label label="Action" />
              <Label label="Digital" />
              <Label label="Analog" />
              <Label label="Spy Cam" />
            </View>
            <Gap width={10} />
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row'}}>
            <Gap width={20} />
            <View style={styles.chooseKey}>
              <Label label="Drone" />
              <Label label="Cam" />
              <Label label="CCTV" />
              <Label label="Accecoris" />
            </View>
            <Gap width={10} />
          </ScrollView>
          <Gap height={30} />
          <View style={styles.double}>
            <Text style={styles.title}>Item Discount</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <Gap height={5} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.card}>
            <Gap width={20} />
            <CardDiscount
              image={DummyCamera}
              title="Camera Digital"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCamera3}
              title="Compact Camera"
              price="$ 300"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCamera2}
              title="Action Camera"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <Gap width={10} />
          </ScrollView>
          <Gap height={30} />
          <View style={styles.double}>
            <Text style={styles.title}>Item Popular</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <Gap height={5} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.card}>
            <Gap width={20} />
            <CardDiscount
              image={DummyCamera1}
              title="Camera Digital"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCamera2}
              title="Compact Camera"
              price="$ 300"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCamera3}
              title="Action Camera"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <Gap width={10} />
          </ScrollView>
          <Gap height={30} />
          <View style={styles.double}>
            <Text style={styles.title}>New Item</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <Gap height={5} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.card}>
            <Gap width={20} />
            <CardDiscount
              image={DummyCameraDigital}
              title="Camera Digital"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCompactCamera}
              title="Compact Camera"
              price="$ 300"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyActionCamera}
              title="Action Camera"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCamera1}
              title="Action Camera"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <CardDiscount
              image={DummyCameraDigital}
              title="Action Camera"
              price="$ 200"
              rating="4.8"
              totalSale="932 Sale"
              totalDiscount="10%"
            />
            <Gap width={10} />
          </ScrollView>
          <Gap height={15} />
        </ScrollView>
      </View>
    </>
  );
};

export default Camera;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  weekPromotion: {
    flexDirection: 'row',
  },
  double: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    paddingHorizontal: 20,
    fontFamily: fonts.secondary[600],
  },
  seeMore: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    color: colors.header,
    paddingRight: 20,
  },
  chooseKey: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
