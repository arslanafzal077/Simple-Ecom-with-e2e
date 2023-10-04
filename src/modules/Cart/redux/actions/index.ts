import {product, productList} from '@Cart/interfaces/responses';
import {ActionTypes} from '../types';
import {detailRequest} from '@Cart/interfaces/requests';

export const getProductRequest = () => ({
  type: ActionTypes.PRODUCTS_REQUEST,
});

export const toggleLoader = (status: boolean) => ({
  type: ActionTypes.TOGGLE_LOADER,
  status,
});

export const setProducts = (productList: productList) => ({
  type: ActionTypes.SET_PRODUCTS,
  productList,
});

export const updateCart = (data: product) => ({
  type: ActionTypes.UPDATE_CART,
  data,
});

export const getProductDetalRequest = (data: detailRequest) => ({
  type: ActionTypes.PRODUCT_DETAIL_REQUEST,
  data,
});

export const setProductDetail = (product: product) => ({
  type: ActionTypes.SET_PRODUCTS_DETAIL,
  product,
});
