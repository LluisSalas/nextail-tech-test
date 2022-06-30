import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NextailBarGraphModel } from './bar-graph.config';

@Component({
  selector: 'nextail-bar-graph',
  templateUrl: './bar-graph.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-component nextail-bar-graph' },
})
export class NextailBarGraphComponent implements OnChanges {
  @Input() graphPoints: NextailBarGraphModel[] | undefined;

  totalGraphValue = 0;
  graphMaxHeight = 120;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['graphPoints']) {
      this.calculateTotalGraphValue();
    }
  }

  calculateGraphBarSize(graphPoint: NextailBarGraphModel): string {
    return Math.round((graphPoint.value * this.graphMaxHeight) / this.totalGraphValue) + '%';
  }

  private calculateTotalGraphValue() {
    if (Array.isArray(this.graphPoints)) {
      this.totalGraphValue = this.graphPoints.reduce((total, item) => {
        return total + item.value;
      }, 0);
    }
  }
}
