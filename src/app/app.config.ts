import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  DateAdapter,
} from '@angular/material/core';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from '../environments/firebase.config';
import { SignState } from './store/sign/sign.state';
import { RegistryState } from './store/registry/registry.state';
import { DashboardState } from './store/dashboard/dashboard.state';
import { provideHttpClient } from '@angular/common/http';

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNativeDateAdapter(),
    provideHttpClient(),
    provideStore(
      [SignState, RegistryState, DashboardState],
      withNgxsReduxDevtoolsPlugin()
    ),
  ],
};
function provideNativeDateAdapter():
  | import('@angular/core').Provider
  | import('@angular/core').EnvironmentProviders {
  return [
    MatNativeDateModule,
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY',
          timeInput: 'HH:mm',
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          timeInput: 'HH:mm',
          timeOptionLabel: 'HH:mm',
        },
      },
    },
  ];
}
