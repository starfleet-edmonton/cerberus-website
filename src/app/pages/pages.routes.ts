import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us';
import { ContactUsComponent } from './contact-us/contact-us';
import { OfficersComponent } from './officers/officers';

export default [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'officers', component: OfficersComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
