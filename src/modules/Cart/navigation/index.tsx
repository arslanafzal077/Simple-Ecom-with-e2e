import React from 'react';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetail';
import Checkout from '../screens/Checkout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductScreen} />
    <Stack.Screen name="Cart" component={Checkout} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default CartStack;
