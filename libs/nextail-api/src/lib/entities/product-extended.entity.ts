import { NextailProduct } from './product.entity';

export interface NextailProductExtended extends NextailProduct {
  stockout_rateFormatted: number | null;
}
