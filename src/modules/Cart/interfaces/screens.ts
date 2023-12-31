import {productList, product as productType} from './responses';

export interface screen {
  children?: any;
}

export interface product extends screen {
  loader: boolean;
  productList: productList;
  cartList: {
    [key: string]: productType;
  };
  onProductPress: (product: productType) => void;
  onPressCart: (id: any, quantity: any) => void;
  gotoCart: () => void;
}

export interface cart extends screen {
  productList: productList;
  cartList: {
    [key: string]: productType;
  };
  onPressCart: (id: any, quantity: any) => void;
}

export interface productDetail extends screen {
  loader: boolean;
  product: productType;
}
