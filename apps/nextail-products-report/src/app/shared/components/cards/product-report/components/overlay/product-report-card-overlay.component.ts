import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nextail-product-report-card-overlay',
  templateUrl: './product-report-card-overlay.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-product-report-card-overlay' },
})
export class NextailProductReportCardOverlayComponent {
  @Output() completeProduct = new EventEmitter<void>();

  // TODO: add service to avoid duplicated output
  onCompleteProduct(): void {
    this.completeProduct.emit();
  }
}
