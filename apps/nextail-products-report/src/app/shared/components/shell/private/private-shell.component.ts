import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nextail-private-shell',
  templateUrl: './private-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-products-report-shell nextail-products-report-shell--private' },
})
export class NextailPrivateShellComponent {}
