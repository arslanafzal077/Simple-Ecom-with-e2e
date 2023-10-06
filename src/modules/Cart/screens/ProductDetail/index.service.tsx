import {getProductDetalRequest} from '@Cart/redux/actions';
import {useAppSelector} from '@redux/rootReducer';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ScreenTypes} from '../../interfaces';
import {useRoute} from '@react-navigation/native';
import {detailRequest} from '@Cart/interfaces/requests';

/* component containing the business logic separated from view for
 api call trigger */
const ProductServiceComponent = ({children}: ScreenTypes.screen) => {
  //get params from route
  const route = useRoute();
  const id = route.params?.product_id;

  //local states
  const [loader, setLoader] = useState(false);

  // reducers
  let product = useAppSelector(state => state?.cartReducer?.productDetail);

  // dispatch action to reducer
  const dispatch = useDispatch();

  //sagas
  const onGetProductDetailRequest = (data: detailRequest) =>
    dispatch(getProductDetalRequest(data));

  //didMount
  useEffect(() => {
    onGetProductDetailRequest({
      id: id,
      setLoader: status => setLoader(status),
    });
  }, []);

  return children({
    product,
    loader,
  } as ScreenTypes.productDetail);
};

export default ProductServiceComponent;
