import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PRODUCTS_STORE_NAME } from '../config/products-store.config';
import { ProductsEffects } from './effects/products-store.effects';
import { productsReducer } from './reducers/products-store.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PRODUCTS_STORE_NAME, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsStoreModule {}
