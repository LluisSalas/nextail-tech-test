// NgRx
import { createReducer, on } from '@ngrx/store';

// API
import { NextailProduct } from '@nextail-tech-test/nextail-api';

// Actions
import { ProductsActions } from '../actions/action-types';

export interface ProductsState {
  products: NextailProduct[] | null;
}

export const initialState: ProductsState = {
  products: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, (state) => {
    return { ...state, products: null };
  }),
  on(ProductsActions.getProductsSuccess, (state, action) => {
    return { ...state, products: action.products };
  }),
);
