import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Slider,
  Home,
  Signup,
  Signin,
  OnBoarding,
  Notification,
  Brand,
  Cart,
  Profile,
  FlashSale,
  Search,
  NikeSport,
  ProductDetail,
  Test,
  Payments,
  MyOrder,
  Camera,
  About,
  Chat,
  Language,
  Delivery,
  PaymentChoose,
  Man,
  WeekPromotion,
  SettingAccount,
  FlashSaleDetail,
  ChatNull,
  CallCenter,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Brand" component={Brand} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}} //menghilangkan header default
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}} //menghilangkan header default
      />
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Brand"
        component={Brand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FlashSale"
        component={FlashSale}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NikeSport"
        component={NikeSport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentChoose"
        component={PaymentChoose}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Man" component={Man} options={{headerShown: false}} />
      <Stack.Screen
        name="WeekPromotion"
        component={WeekPromotion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingAccount"
        component={SettingAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FlashSaleDetail"
        component={FlashSaleDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatNull"
        component={ChatNull}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CallCenter"
        component={CallCenter}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
