export interface PrivateEvent {
  name: string;
  description: string;
  dateAndTime: Date;
  address: string;
  mapString: string;
  ownerId: string;
}

export interface LocalUser {
  id: string;
  name?: string;
  email: string;
  emailVerified: boolean;

  // all field above (AND MANY MORE) are already provided by firebase
  // let's add some new

  platformId: string | null;
  //lang: string;
  // ... and more and more
}
