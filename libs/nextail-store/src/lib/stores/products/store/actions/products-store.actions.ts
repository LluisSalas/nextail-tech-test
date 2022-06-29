// NgRx
import { createAction, props } from '@ngrx/store';

// API
import { NextailProductExtended } from '@nextail-tech-test/nextail-api';

// Get products
export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction(
  '[Products] Get Products Success',
  props<{ products: NextailProductExtended[] }>(),
);

// Delte product
export const deleteProduct = createAction('[Products] Delete Product', props<{ code: number }>());
