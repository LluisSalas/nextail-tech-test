import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NextailBarGraphModel } from '@nextail-tech-test/nextail-components';

@Component({
  selector: 'nextail-product-report-card-bar-graph',
  templateUrl: './product-report-card-bar-graph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-product-report-card-bar-graph' },
})
export class NextailProductReportCardBarGraphComponent implements OnChanges {
  @Input() productSizeStock: { [key: string]: any } | undefined;

  graphPoints: NextailBarGraphModel[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productSizeStock']) {
      this.calculateGraphPoints();
    }
  }

  private calculateGraphPoints(): void {
    if (
      typeof this.productSizeStock === 'object' &&
      !Array.isArray(this.productSizeStock) &&
      this.productSizeStock !== null
    ) {
      this.graphPoints = Object.entries(this.productSizeStock).map(([key, value]) => {
        return {
          label: key,
          value,
        } as NextailBarGraphModel;
      });
    }
  }
}
