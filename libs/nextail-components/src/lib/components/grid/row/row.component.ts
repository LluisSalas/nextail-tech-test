import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { NEXTAIL_ROW_NO_GUTTERS_CLASS } from './row.config';

@Component({
  selector: 'nextail-row',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-component nextail-row' },
})
export class NextailRowComponent {
  constructor(private el: ElementRef) {}

  /**
   * @param setHasGutters value
   * if the values is false add no-gutter class
   */
  @Input() set hasGutters(value: boolean) {
    this.el.nativeElement.classList.remove(NEXTAIL_ROW_NO_GUTTERS_CLASS);
    if (value === false) {
      this.el.nativeElement.classList.add(NEXTAIL_ROW_NO_GUTTERS_CLASS);
    }
  }
}
