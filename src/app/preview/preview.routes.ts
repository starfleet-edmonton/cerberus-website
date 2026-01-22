import { Routes } from '@angular/router';
import { PreviewPageComponent } from './page/page';
import { PreviewEventComponent } from './event/event';

export default [
  { path: 'page/:pageId', component: PreviewPageComponent },
  { path: 'event/:pageId', component: PreviewEventComponent },
  //{ path: 'contact-us', component: ContactUsComponent },
  //{ path: 'officers', component: OfficersComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
