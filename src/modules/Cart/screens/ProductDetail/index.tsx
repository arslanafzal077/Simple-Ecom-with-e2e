import React from 'react';
import ProductDetailServiceComponent from './index.service';
import ProductDetailComponent from './index.ui';

const ProductDetail = () => (
  <ProductDetailServiceComponent>
    {(props: any) => <ProductDetailComponent {...props} />}
  </ProductDetailServiceComponent>
);

export default ProductDetail;
