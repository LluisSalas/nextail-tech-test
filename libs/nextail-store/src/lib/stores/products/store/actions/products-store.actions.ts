// NgRx
import { createAction, props } from '@ngrx/store';

// API
import { NextailProduct } from '@nextail-tech-test/nextail-api';

// Get people
export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction(
  '[Products] Get Products Success',
  props<{ products: NextailProduct[] }>(),
);
