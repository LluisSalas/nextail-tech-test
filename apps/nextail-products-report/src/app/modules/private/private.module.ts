import { NgModule } from '@angular/core';
import { NextailPrivateHeaderModule } from '../../shared/components/header/private/private-header.module';
import { NextailPrivateShellModule } from '../../shared/components/shell/private/private-shell.module';
import { NextailPrivateRoutingModule } from './private-routing.module';
import { NextailPrivateComponent } from './private.component';

@NgModule({
  declarations: [NextailPrivateComponent],
  imports: [NextailPrivateRoutingModule, NextailPrivateShellModule, NextailPrivateHeaderModule],
})
export class NextailPrivateModule {}
