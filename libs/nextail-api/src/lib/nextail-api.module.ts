import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DEFAULT_NEXTAIL_API_CONFIG, NEXTAIL_API_CONFIG_TOKEN, NextailApiConfig } from './nextail-api.config';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class NextailApiModule {
  static forRoot(config?: NextailApiConfig): ModuleWithProviders<NextailApiModule> {
    return {
      ngModule: NextailApiModule,
      providers: [
        config
          ? { provide: NEXTAIL_API_CONFIG_TOKEN, useValue: config }
          : { provide: NEXTAIL_API_CONFIG_TOKEN, useValue: DEFAULT_NEXTAIL_API_CONFIG },
      ],
    };
  }
  static forChild(config?: NextailApiConfig): ModuleWithProviders<NextailApiModule> {
    return {
      ngModule: NextailApiModule,
      providers: [
        config
          ? { provide: NEXTAIL_API_CONFIG_TOKEN, useValue: config }
          : { provide: NEXTAIL_API_CONFIG_TOKEN, useValue: DEFAULT_NEXTAIL_API_CONFIG },
      ],
    };
  }
}
