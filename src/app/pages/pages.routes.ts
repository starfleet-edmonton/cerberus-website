import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us';
import { ContactUsComponent } from './contact-us/contact-us';
import { OfficersComponent } from './officers/officers';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners';

export default [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'officers', component: OfficersComponent },
  { path: 'events', component: EventsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
