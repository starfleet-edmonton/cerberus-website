import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us';
import { ContactUsComponent } from './contact-us/contact-us';
import { OfficersComponent } from './officers/officers';
import { EventsComponent } from './events/events.component';

export default [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'officers', component: OfficersComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
