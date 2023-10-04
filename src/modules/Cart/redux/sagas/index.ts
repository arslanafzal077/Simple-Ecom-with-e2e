import {takeLatest, put} from 'redux-saga/effects';
import {invokeApi} from '@network';
import {setProductDetail, setProducts, toggleLoader} from '../actions';
import {ActionTypes} from '../types';
import {ResponseTypes} from '../../interfaces';
import {detailRequest} from '@Cart/interfaces/requests';
function* getProductRequest() {
  try {
    yield put(toggleLoader(true));
    let requestObj = {
      url: 'https://my-json-server.typicode.com/benirvingplt/products/products',
      method: 'GET',
    };

    let data: ResponseTypes.productList = yield invokeApi(requestObj);
    yield put(setProducts(data));
    yield put(toggleLoader(false));
  } catch (e) {
    yield put(toggleLoader(false));
    console.log(e);
  }
}
function* getProductDetailRequest({data}: {data: detailRequest}) {
  const {id, setLoader} = data;

  try {
    yield setLoader(true);
    let requestObj = {
      url: `https://my-json-server.typicode.com/benirvingplt/products/products/${id}`,
      method: 'GET',
    };

    let data: ResponseTypes.product = yield invokeApi(requestObj);
    yield put(setProductDetail(data));
    yield setLoader(false);
  } catch (e) {
    yield setLoader(false);
    console.log(e);
  }
}
export function* CartSagas() {
  yield takeLatest(ActionTypes.PRODUCTS_REQUEST, getProductRequest);
  yield takeLatest(ActionTypes.PRODUCT_DETAIL_REQUEST, getProductDetailRequest);
}
