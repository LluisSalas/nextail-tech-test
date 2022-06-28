import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [StoreModule.forRoot([]), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25 })],
})
export class AppStoreModule {}
