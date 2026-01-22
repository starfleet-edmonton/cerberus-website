import { Entry } from 'contentful';
import { PublicEventSkeleton } from '../models/contentful.model';
import { Component, input } from '@angular/core';
import { CtDatePipe } from '../pipes/contentful-date.pipe';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-event-display',
  imports: [CommonModule, CardModule, CtDatePipe],
  providers: [],
  template: `
    <p-card [style]="{ maxWidth: '50rem', overflow: 'hidden' }">
      <ng-template #title> {{ entry().fields.title }}</ng-template>
      <ng-template #subtitle> {{ entry().fields.dateAndTime | ctDate }} </ng-template>
      <div>{{ entry().fields.description }}</div>
      @if (entry().fields.address) {
        <div>Address: {{ entry().fields.address }}</div>
      }
      @if (entry().fields.location) {
        <div>
          <a
            target="_blank"
            href="https://maps.google.com/?q={{ entry().fields.location.lat }},{{
              entry().fields.location.lon
            }}"
            >Google Maps</a
          >
        </div>
      }
    </p-card>
    <br />
  `,
})
export class EventDisplayComponent {
  public entry = input<Entry<PublicEventSkeleton>>({} as Entry<PublicEventSkeleton>);
}
