import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NextailProductExtended } from '@nextail-tech-test/nextail-api';

const PRODUCT_IMAGE_BASE_PATH = 'assets/images';

@Component({
  selector: 'nextail-product-report-card',
  templateUrl: './product-report-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-product-report-card' },
})
export class NextailProductReportCardComponent {
  @Input() product: NextailProductExtended | undefined;

  @Output() completeProduct = new EventEmitter<number>();

  get productImage(): string | null {
    return this.product ? `${PRODUCT_IMAGE_BASE_PATH}/${this.product.code}.jpg` : null;
  }

  onCompleteProduct(): void {
    this.completeProduct.emit(this.product?.code);
  }
}
