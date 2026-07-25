import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { definePreset, palette } from '@primeuix/themes';
import { provideHttpClient, withFetch } from '@angular/common/http';

const AuraPurple = definePreset(Aura, {
  semantic: {
    primary: palette('{purple}'),
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: AuraPurple, options: { darkModeSelector: '.app-dark' } },
      license:
        'eyJpZCI6IjEyNGU2MzllLTAyZWMtNDE2Ny1iZTVmLWZlODhkOGFiNmM3ZCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQ4MTg5ODgsImV4cCI6MTgxNjM1NDk4OH0.j9G0Ghp_8TV33zYOFzKfoGac7c8PN9qqHUX5jggRyoMHfRuBAIWTsWskfD1FZ7tjeSfjSOypCyihg1jCbVzKBw',
    }),
  ],
};
