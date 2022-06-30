import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nextail-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progress-bar.component.html',
  host: { class: 'nextail-component nextail-progress-bar' },
})
export class NextailProgressBarComponent {
  private _progress: number = 0;

  @Input() set progress(value: number | null | undefined) {
    this._progress = this.validateProgressValue(value);
  }

  get progress(): number {
    return this._progress;
  }

  private validateProgressValue(value: number | null | undefined): number {
    if (value === undefined || value === null || Number.isNaN(Number(value))) {
      value = 0;
    } else if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    return value;
  }
}
