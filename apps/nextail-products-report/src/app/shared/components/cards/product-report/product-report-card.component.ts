import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NextailProductExtended } from '@nextail-tech-test/nextail-api';
import { NextailBarGraphModel } from '@nextail-tech-test/nextail-components';

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

  graphPoints: NextailBarGraphModel[] = [
    {
      label: 'XS',
      value: 1,
    },
    {
      label: 'S',
      value: 1,
    },
    {
      label: 'M',
      value: 4,
    },
    {
      label: 'L',
      value: 0,
    },
    {
      label: 'XL',
      value: 7,
    },
  ];

  get productImage(): string | null {
    return this.product ? `${PRODUCT_IMAGE_BASE_PATH}/${this.product.code}.jpg` : null;
  }

  onCompleteProduct(): void {
    // TODO: add custom modal component
    if (window.confirm('Are you sure you want to mark this product as complete?')) {
      this.completeProduct.emit(this.product?.code);
    }
  }
}
