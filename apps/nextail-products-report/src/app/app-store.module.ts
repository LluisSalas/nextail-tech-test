import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsStoreModule } from '@nextail-tech-test/nextail-store';

// TODO: move feature store to specific modules
const GLOBABAL_STORES = [ProductsStoreModule];

@NgModule({
  imports: [
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    ...GLOBABAL_STORES,
  ],
})
export class AppStoreModule {}
