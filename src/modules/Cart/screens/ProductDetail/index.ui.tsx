import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import FastImage from 'react-native-fast-image';

//view component of product screen
const ProductComponent = ({loader, product}: ScreenTypes.productDetail) => {
  return (
    <View style={styles.mainView}>
      <FastImage
        style={styles.itemImage}
        resizeMode={'cover'}
        source={{uri: product?.img}}
      />
      <View style={styles.pDetail}>
        <Text style={styles.pName}>{product?.name}</Text>
        <Text style={styles.price}>Price: {product?.price}</Text>
        <Text>Colour: {product?.colour}</Text>
      </View>
      {loader && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
export default ProductComponent;
