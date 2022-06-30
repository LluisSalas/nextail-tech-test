import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NextailButtonEvent, NextailButtonType } from './button.config';

@Component({
  selector: 'nextail-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'nextail-component nextail-button' },
})
export class NextailButtonComponent {
  @Input() type: NextailButtonType = 'primary';
  @Input() disabled = false;

  @Output() execute: EventEmitter<NextailButtonEvent> = new EventEmitter();

  get typeClass(): string {
    return `nextail-button--${this.type}`;
  }

  get disableClass(): string {
    return this.disabled ? 'nextail-button--disabled' : '';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick($event: any) {
    if (!this.disabled) {
      this.execute.emit({ event: $event });
    }
  }
}
