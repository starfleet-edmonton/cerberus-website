import { ChangeDetectionStrategy, Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
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
  authService = inject(AuthService);
  privateEventService = inject(PrivateEventService);
  events$: Observable<PrivateEvent[]> = this.privateEventService.futureEvents$;

  doSomething() {
    this.privateEventService
      .addEvent({
        name: 'New Event 53',
        description: 'This is a new event.',
        dateAndTime: new Date(),
        address: '123 Main St, Anytown, USA',
        mapString: '0,0',
        ownerId: this.authService.id,
      })
      .subscribe(
        () => {
          console.log('Event added successfully');
        },
        (error) => {
          console.error('Error adding event:', error);
        },
      );
  }

  doSomethingElse() {
    this.privateEventService
      .updateEvent('lyYLkTjA8brTlBzz598P', {
        name: 'Updated Event Name 2',
        description: 'Updated event description 2.',
        //ownerId: this.authService.id,
      })
      .subscribe(
        () => {
          console.log('Event updated successfully');
        },
        (error) => {
          console.error('Error updating event:', error);
        },
      );
  }
}
