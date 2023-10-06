import {product} from '@Cart/interfaces/responses';

export interface CartProps {
  item: product;
  quantity: number;
  index: number;
  onPress: (id: product, quantity: number) => void;
}
