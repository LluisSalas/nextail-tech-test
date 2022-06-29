import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NextailProduct } from '@nextail-tech-test/nextail-api';

@Component({
  selector: 'nextail-product-report-card',
  templateUrl: './product-report-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-product-report-card' },
})
export class NextailProductReportCardComponent {
  @Input() product: NextailProduct | undefined;

  @Output() completeProduct = new EventEmitter<number>();

  onCompleteProduct(): void {
    this.completeProduct.emit(this.product?.code);
  }
}
