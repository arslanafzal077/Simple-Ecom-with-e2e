import {product} from '@Cart/interfaces/responses';
import {getProductRequest, updateCart} from '@Cart/redux/actions';
import {useAppSelector} from '@redux/root-reducer';
import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ScreenTypes} from '../../interfaces';
import {useNavigation, useRoute} from '@react-navigation/native';

/* component containing the business logic separated from view for
 api call trigger */
const ProductServiceComponent = ({children}: ScreenTypes.screen) => {
  //get params from route
  const route = useRoute();
  const product = route.params?.product;
  // reducers
  let loader = useAppSelector(state => state?.cartReducer?.loader);

  const dispatch = useDispatch(); // dispatch action to reducer
  //sagas
  const onGetProductDetailRequest = () => dispatch(getProductRequest());
  console.log(product, 'product');

  //didMount
  useEffect(() => {
    console.log(product, route, 'product');

    // onGetProductDetailRequest();
  }, []);

  return children({
    product,
    loader,
  } as ScreenTypes.productDetail);
};

export default ProductServiceComponent;
