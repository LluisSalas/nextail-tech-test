import { ChangeDetectionStrategy, Component, Input, SimpleChanges, OnChanges, HostBinding } from '@angular/core';

export type NextailProductWareHouseCoverageDescrriptionType = 'Very low' | 'Good';

@Component({
  selector: 'nextail-product-report-card-wh-coverage',
  templateUrl: './product-report-card-wh-coverage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-product-report-card-wh-coverage' },
})
export class NextailProductReportCardWhCoverageComponent implements OnChanges {
  @Input() whCoverage: number | undefined;
  whCoverageDescription: NextailProductWareHouseCoverageDescrriptionType | undefined;

  @HostBinding('class.nextail-product-report-card-wh-coverage--good')
  get isGoodCoverage(): boolean {
    return typeof this.whCoverage === 'number' && this.whCoverage >= 0.5;
  }

  @HostBinding('class.nextail-product-report-card-wh-coverage--very-low')
  get isVeryLowCoverage(): boolean {
    return typeof this.whCoverage === 'number' && this.whCoverage < 0.5;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['whCoverage']) {
      this.updateWhCoverageDescription();
    }
  }

  private updateWhCoverageDescription(): void {
    if (typeof this.whCoverage === 'number') {
      this.whCoverageDescription = this.whCoverage >= 0.5 ? 'Good' : 'Very low';
    }
  }
}
