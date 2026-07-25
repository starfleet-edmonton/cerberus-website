import { Component } from '@angular/core';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from '@openng/optimus-ui/card';
import { Entry } from 'contentful';
import { FormsModule } from '@angular/forms';
import { FluidModule } from '@openng/optimus-ui/fluid';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { InputGroupModule } from '@openng/optimus-ui/inputgroup';
import { InputGroupAddonModule } from '@openng/optimus-ui/inputgroupaddon';
import { TextareaModule } from '@openng/optimus-ui/textarea';
import { PreviewContentfulService } from '../preview-contentful.service';
import { PublicEventSkeleton } from '../../models/contentful.model';
import { EventDisplayComponent } from '../../components/event-display.component';

@Component({
  selector: 'app-preview-event',
  imports: [
    ButtonModule,
    RouterModule,
    CardModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    FluidModule,
    InputGroupAddonModule,
    TextareaModule,
    EventDisplayComponent,
  ],
  providers: [PreviewContentfulService],
  template: `<app-event-display [entry]="event"></app-event-display>`,
})
export class PreviewEventComponent {
  event: Entry<PublicEventSkeleton> = {} as Entry<PublicEventSkeleton>;

  constructor(
    private contentfulService: PreviewContentfulService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.contentfulService.getOneEvent(params['pageId']).then((entry) => {
        this.event = entry;
      });
    });
  }
}
