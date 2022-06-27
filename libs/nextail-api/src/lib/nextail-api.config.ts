import { InjectionToken } from '@angular/core';

export interface NextailApiConfig {
  basePath: string;
}

export const DEFAULT_NEXTAIL_API_CONFIG: NextailApiConfig = {
  basePath: '',
};

export const NEXTAIL_API_CONFIG_TOKEN = new InjectionToken<NextailApiConfig>('nextail-api.config');
