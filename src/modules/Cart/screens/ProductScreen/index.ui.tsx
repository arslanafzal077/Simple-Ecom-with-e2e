import Cart from '@components/Cart';
import React from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import FastImage from 'react-native-fast-image';

//view component of product screen
const ProductDetailComponent = ({
  loader,
  productList,
  cartList,
  onProductPress,
  onPressCart,
  gotoCart,
}: ScreenTypes.product) => {
  return (
    <View style={styles.mainView}>
      <FlatList
        testID={'productList'}
        data={productList}
        style={styles.flStyle}
        ListEmptyComponent={() =>
          loader ? null : <Text>No Product Available</Text>
        }
        renderItem={({item, index}) => (
          <Pressable
            style={styles.itemView}
            testID={`product${index}`}
            onPress={() => onProductPress(item)}>
            <FastImage style={styles.itemImage} source={{uri: item.img}} />
            <View style={styles.pDetail}>
              <Text style={styles.pName}>{item.name}</Text>
              <Text style={styles.price}>Price: {item.price}</Text>
              <Text>Colour: {item.colour}</Text>
              <Cart
                quantity={cartList[item.id]?.quantity || 0}
                onPress={onPressCart}
                item={item}
                index={index}
              />
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Pressable
        testID={'checkoutButton'}
        style={styles.btn}
        onPress={gotoCart}>
        <Text style={styles.btnTitle}>Checkout</Text>
      </Pressable>
      {loader && (
        <View style={styles.loadingView}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};
export default ProductDetailComponent;
