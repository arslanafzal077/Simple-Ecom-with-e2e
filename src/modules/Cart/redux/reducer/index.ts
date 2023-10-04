import {ActionTypes} from '../types';

const initialState = {
  loader: false,
  productList: [],
  cart: {},
  productDetail: {},
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LOADER:
      return {
        ...state,
        loader: action.status,
      };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        productList: action.productList,
      };
    case ActionTypes.UPDATE_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.data.id]: action.data,
        },
      };
    case ActionTypes.SET_PRODUCTS_DETAIL:
      return {
        ...state,
        productDetail: action.product,
      };
    default:
      return state;
  }
};

export default cartReducer;
