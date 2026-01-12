import { Routes } from '@angular/router';
import { AppLayout } from './layout/components/app.layout';
import { HomePageComponent } from './pages/homepage/homepage';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: HomePageComponent },
      //{ path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
      //{ path: 'documentation', component: Documentation },
      { path: 'pages', loadChildren: () => import('./pages/pages.routes') },
      { path: 'preview', loadChildren: () => import('./preview/preview.routes') },
    ],
  },
  //{ path: 'landing', component: Landing },
  { path: 'notfound', component: Notfound },
  //{ path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' },
];
