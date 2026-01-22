import { Component, resource } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { CommonModule } from '@angular/common';
import { PublicEventSkeleton } from '../../models/contentful.model';
import { Entry } from 'contentful';
import { EventDisplayComponent } from '../../components/event-display.component';

@Component({
  selector: 'app-events',
  imports: [CommonModule, EventDisplayComponent],
  providers: [ContentfulService],
  templateUrl: './events.html',
})
export class EventsComponent {
  eventEntriesResource = resource({
    defaultValue: [] as Entry<PublicEventSkeleton>[],
    loader: () => this.contentfulService.getPublicEvents(),
  });

  constructor(private contentfulService: ContentfulService) {}
}
