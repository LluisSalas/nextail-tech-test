import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NextailProductExtended } from '@nextail-tech-test/nextail-api';
import { ProductsFacade } from '@nextail-tech-test/nextail-store';

@Component({
  selector: 'nextail-products-report-list-view',
  templateUrl: './products-report-list.view.html',
  host: { class: 'nextail-products-report-list-view' },
})
export class NextailProductsReportListView implements OnInit, OnDestroy {
  products: NextailProductExtended[] | null | undefined;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    // TO DO: pending add loader
    this.productsFacade.getProducts();
    this.buildGetProductsSubscription();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onCompleteProduct(code: number): void {
    this.productsFacade.deleteProduct(code);
  }

  trackProductsByCode(index: number, item: NextailProductExtended) {
    return item.code;
  }

  private buildGetProductsSubscription(): void {
    this.productsFacade.products$.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.products = value;
    });
  }
}
