import { Injectable, OnDestroy, inject } from '@angular/core';
import {
  doc,
  Firestore,
  collection,
  query,
  onSnapshot,
  where,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { from, map, switchMap, Observable, BehaviorSubject } from 'rxjs';
import { collectionSnapshots, docData } from 'ngx-firebase';
import { PrivateEvent } from '../models/firestore.model';
import { FirebaseUtilitiesService } from './firebase-utilities.service';

@Injectable({
  providedIn: 'root',
})
export class PrivateEventService implements OnDestroy {
  firestore = inject(Firestore);
  firebaseUtilities: FirebaseUtilitiesService = inject(FirebaseUtilitiesService);

  private futureEventsSubject = new BehaviorSubject<PrivateEvent[]>([]);
  public futureEvents$: Observable<PrivateEvent[]> = this.futureEventsSubject.asObservable();

  private unsubscribe: () => void;

  constructor() {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const q = query(collection(this.firestore, 'events'), where('dateAndTime', '>=', twoDaysAgo));
    this.unsubscribe = onSnapshot(q, (querySnapshot) => {
      const events: PrivateEvent[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as any;
        data.dateAndTime = this.firebaseUtilities.convertTimestampToDate(data.dateAndTime);
        data.mapString = this.firebaseUtilities.convertGeoPointToMapString(data.geo);
        events.push(data);
      });

      //events.sort((a, b) => a.dateAndTime.getTime() - b.dateAndTime.getTime());
      this.futureEventsSubject.next(events);
    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  public addEvent(event: PrivateEvent): Observable<any> {
    return from(addDoc(collection(this.firestore, 'events'), event));
  }

  public updateEvent(eventId: string, event: Partial<PrivateEvent>): Observable<any> {
    const eventDocRef = doc(this.firestore, 'events', eventId);
    return from(setDoc(eventDocRef, event, { merge: true }));
  }
}
