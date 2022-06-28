import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nextail-container',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-component nextail-container' },
})
export class NextailContainerComponent {}
