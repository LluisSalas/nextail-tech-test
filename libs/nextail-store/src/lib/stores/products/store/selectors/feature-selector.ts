// NgRx
import { createFeatureSelector } from '@ngrx/store';

// Reducers
import { ProductsState } from '../reducers/products-store.reducer';

// Config
import { PRODUCTS_STORE_NAME } from '../../config/products-store.config';

// feature selector
export const selectProductsState = createFeatureSelector<ProductsState>(PRODUCTS_STORE_NAME);
