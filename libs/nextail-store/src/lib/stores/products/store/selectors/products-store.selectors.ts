// NgRx
import { createSelector } from '@ngrx/store';

// Selectors
import { selectProductsState } from './feature-selector';

export const selectProducts = createSelector(selectProductsState, (state) => state.products);
