import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideOptimus } from '@openng/optimus-ui/config';
import Aura from '@openng/optimus-ui-themes/aura';

import { routes } from './app.routes';
import { definePreset, palette } from '@openng/optimus-ui-themes';
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
    provideOptimus({ theme: { preset: AuraPurple, options: { darkModeSelector: '.app-dark' } } }),
  ],
};
