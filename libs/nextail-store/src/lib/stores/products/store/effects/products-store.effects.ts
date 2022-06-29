import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NextailProductExtended, NextailProductsApi } from '@nextail-tech-test/nextail-api';
import { exhaustMap, map } from 'rxjs';
import { ProductsActions } from '../actions/action-types';

@Injectable()
export class ProductsEffects {
  constructor(private action$: Actions, private productsApi: NextailProductsApi) {}

  // GET PRODUCTS
  getProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductsActions.getProducts),
      exhaustMap(() =>
        this.productsApi
          .getProductsExtended()
          .pipe(map((products: NextailProductExtended[]) => ProductsActions.getProductsSuccess({ products }))),
      ),
    ),
  );
}
