import { Routes } from '@angular/router';
import { PreviewPageComponent } from './page/page';

export default [
  { path: 'page/:pageId', component: PreviewPageComponent },
  //{ path: 'contact-us', component: ContactUsComponent },
  //{ path: 'officers', component: OfficersComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
