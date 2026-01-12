import { Component, resource } from '@angular/core';
import { PageDisplayComponent } from '../../components/contentful-page.component';
import { ContentfulService } from '../../services/contentful.service';
import { CommonModule } from '@angular/common';
import { PublicEventSkeleton } from '../../models/contentful.model';
import { Entry } from 'contentful';
import { CardModule } from 'primeng/card';
import { CtDatePipe } from '../../pipes/contentful-date.pipe';

@Component({
  selector: 'app-events',
  imports: [CommonModule, CardModule, CtDatePipe],
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
