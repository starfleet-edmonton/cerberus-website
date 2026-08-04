import { ChangeDetectionStrategy, Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PrivateEventService } from '../../../services/private-events.service';
import { PrivateEvent } from '../../../models/firestore.model';
import 'add-to-calendar-button';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './events.html',
  styleUrl: './events.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Events {
  privateEventService = inject(PrivateEventService);
  events$: Observable<PrivateEvent[]> = this.privateEventService.futureEvents$;

  constructor() {}
}
