import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nextail-private-main-layout',
  templateUrl: './private-main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-products-review-private-main-layout' },
})
export class NextailPrivateMainLayoutComponent {}
