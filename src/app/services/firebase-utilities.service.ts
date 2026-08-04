import { Injectable } from '@angular/core';
import { Timestamp, GeoPoint } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseUtilitiesService {
  constructor() {}

  public convertTimestampToDate(timestamp: Timestamp | any): Date | any {
    return timestamp instanceof Timestamp
      ? new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate()
      : timestamp;
  }

  public convertDateToTimestamp(date: Date | any): Timestamp | any {
    return date instanceof Date ? Timestamp.fromDate(date) : date;
  }

  public convertGeoPointToMapString(geoPoint: GeoPoint | any): string | any {
    if (!(geoPoint instanceof GeoPoint)) {
      return geoPoint;
    }
    var mapString = `https://maps.google.com/?q=${geoPoint.latitude},${geoPoint.longitude}`;
    return mapString;
  }
}
