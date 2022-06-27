import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NextailProduct } from '../entities/product.entity';
import { NEXTAIL_PRODUCTS } from '../data/products.data';

@Injectable({
  providedIn: 'root',
})
export class NextailProductsApi {
  getProducts(): Observable<NextailProduct[]> {
    // TODO: replace by real server call
    return of(NEXTAIL_PRODUCTS);
  }
}
