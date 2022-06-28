import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextailContainerComponent } from './container/container.component';
import { NextailRowComponent } from './row/row.component';
import { NextailColumnDirective } from './column/column.directive';

@NgModule({
  declarations: [NextailContainerComponent, NextailRowComponent, NextailColumnDirective],
  imports: [CommonModule],
  exports: [NextailContainerComponent, NextailRowComponent, NextailColumnDirective],
})
export class NextailGridModule {}
