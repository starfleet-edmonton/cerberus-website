import { Routes } from '@angular/router';
//import { Access } from './access';
import { Login } from './login/login';
import { Events } from './events/events';
//import { Error } from './error';
import { authGuard } from '../../guards/auth-guard';

export default [
  // { path: 'access', component: Access },
  // { path: 'error', component: Error },
  { path: 'login', component: Login },
  { path: 'events', component: Events, canActivate: [authGuard] },
] as Routes;
