// NgRx
import { createReducer, on } from '@ngrx/store';

// API
import { NextailProductExtended } from '@nextail-tech-test/nextail-api';

// Actions
import { ProductsActions } from '../actions/action-types';

export interface ProductsState {
  originalProducts: NextailProductExtended[] | null;
  products: NextailProductExtended[] | null;
}

export const initialState: ProductsState = {
  originalProducts: null,
  products: null,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.getProducts, (state) => {
    return { ...state, products: null, originalProducts: null };
  }),
  on(ProductsActions.getProductsSuccess, (state, action) => {
    return { ...state, products: action.products, originalProducts: action.products };
  }),
  on(ProductsActions.deleteProduct, (state, action) => {
    const newProducts = state.products ? state.products.filter((item) => item.code !== action.code) : null;
    return { ...state, products: newProducts };
  }),
);
