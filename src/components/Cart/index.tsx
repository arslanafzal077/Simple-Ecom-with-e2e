import {CartProps} from '@components/interfaces';
import React, {useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Cart = ({item, quantity, onPress, index}: CartProps) => {
  const addToCart = useCallback(() => {
    if (quantity > 0) {
      // check quantity null or unbdefinded
      onPress(item, quantity + 1);
    } else {
      onPress(item, 1);
    }
  }, [quantity, item]);

  //remove from cart
  const removeToCart = useCallback(
    () => onPress(item, quantity - 1),
    [quantity, item],
  );
  return (
    <View>
      {quantity > 0 ? (
        <View testID={`item${index}`} style={styles.cartView}>
          <Button title={'-'} onPress={removeToCart} testID={`sub${index}`} />
          <Text testID={`quantity${index}`}>({quantity})</Text>
          <Button title={'+'} onPress={addToCart} testID={`add${index}`} />
        </View>
      ) : (
        <Button
          title={'Add to cart'}
          onPress={addToCart}
          testID={`addto${index}`}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
