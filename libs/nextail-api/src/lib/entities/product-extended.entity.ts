import { NextailProduct } from './product.entity';

export type NextailProductWareHouseCoverageDescrriptionType = 'Very low' | 'Good';

export interface NextailProductExtended extends NextailProduct {
  warehouseCoverageDescription: NextailProductWareHouseCoverageDescrriptionType;
}
