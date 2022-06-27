import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NextailProduct } from '@nextail-tech-test/nextail-api';
import { filter, Observable } from 'rxjs';
import { checkValueNotNull } from '../../../utils/check-value-not-null';
import { ProductsActions } from '../store/actions/action-types';
import { ProductsState } from '../store/reducers/products-store.reducer';
import { selectProducts } from '../store/selectors/products-store.selectors';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  products$: Observable<NextailProduct[] | null> = this.store.pipe(
    select(selectProducts),
    filter((value) => checkValueNotNull(value)),
  );

  constructor(private store: Store<ProductsState>) {}

  getProducts(): void {
    this.store.dispatch(ProductsActions.getProducts());
  }
}
