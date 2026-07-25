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

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { provideFirebaseApp, provideAuth, provideFirestore } from 'ngx-firebase';

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

    // Initialize Firebase App
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDC4TwRc1gHFyzR0M6emJbKWM5bATv1wP8',
        authDomain: 'uss-cerberus.firebaseapp.com',
        projectId: 'uss-cerberus',
        storageBucket: 'uss-cerberus.firebasestorage.app',
        messagingSenderId: '664219191765',
        appId: '1:664219191765:web:b83be9e124570b886bd55c',
        measurementId: 'G-WGRQ4148PE',
      }),
    ),

    // Provide Firestore & Auth
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
};
