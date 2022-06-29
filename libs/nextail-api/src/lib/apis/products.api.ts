import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { NextailProduct } from '../entities/product.entity';
import { NEXTAIL_PRODUCTS } from '../data/products.data';
import { NextailProductExtended } from '../entities/product-extended.entity';

@Injectable({
  providedIn: 'root',
})
export class NextailProductsApi {
  getProducts(): Observable<NextailProduct[]> {
    // TODO: replace by real server call and add order in backend side by param
    return of(NEXTAIL_PRODUCTS).pipe(map((products) => this.orderBySalesRanking(products)));
  }

  getProductsExtended(): Observable<NextailProductExtended[]> {
    // TODO: replace by real server call
    return this.getProducts().pipe(map((products) => products.map((item) => this.formatProductExtended(item))));
  }

  private orderBySalesRanking(products: NextailProduct[]): NextailProduct[] {
    const orderedProducts = [...products];
    orderedProducts.sort(function (a, b) {
      return a.sales_ranking - b.sales_ranking;
    });
    return orderedProducts;
  }

  private formatProductExtended(product: NextailProduct): NextailProductExtended {
    const productExtended: NextailProductExtended = Object.assign({}, product as NextailProductExtended);
    productExtended.warehouseCoverageDescription = productExtended.wh_coverage > 0.5 ? 'Good' : 'Very low';
    return productExtended;
  }
}
