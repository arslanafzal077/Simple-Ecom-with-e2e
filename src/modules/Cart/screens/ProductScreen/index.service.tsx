import {product} from '@Cart/interfaces/responses';
import {getProductRequest, updateCart} from '@Cart/redux/actions';
import {useNavigation} from '@react-navigation/core';
import {useAppSelector} from '@redux/root-reducer';
import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ScreenTypes} from '../../interfaces';

/* component containing the business logic separated from view for
 api call trigger */
const ProductDetailServiceComponent = ({children}: ScreenTypes.screen) => {
  //navigation
  const navigation = useNavigation();

  // reducers
  let loader = useAppSelector(state => state?.cartReducer?.loader);
  let productList = useAppSelector(state => state?.cartReducer?.productList);
  let cartList = useAppSelector(state => state?.cartReducer?.cart);

  const dispatch = useDispatch(); // dispatch action to reducer

  //actions
  const onUpdateCart = (data: product) => dispatch(updateCart(data));

  //sagas
  const onGetProductRequest = () => dispatch(getProductRequest());

  //didMount
  useEffect(() => {
    onGetProductRequest();
  }, []);

  //on press add to card
  const onPressCart = useCallback((item, quantity) => {
    quantity >= 0 && onUpdateCart({...item, quantity});
  }, []);

  //goto cart screen
  const gotoCart = useCallback(() => navigation.navigate('Cart'), [navigation]);

  //onProduct Press
  const onProductPress = product =>
    navigation.navigate('ProductDetail', {product: product});

  return children({
    loader,
    productList,
    cartList,
    onProductPress,
    onPressCart,
    gotoCart,
  } as ScreenTypes.product);
};

export default ProductDetailServiceComponent;
