import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nextail-private-header',
  templateUrl: './private-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-products-report-header nextail-products-report-header--private' },
})
export class NextailPrivateHeaderComponent {
  @Input() logo: string | undefined;
}
