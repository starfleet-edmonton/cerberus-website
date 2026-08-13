import { inject, Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  Auth as FirebaseAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { doc, Firestore, getDoc, setDoc } from 'firebase/firestore';
import { Auth, user } from 'ngx-firebase';
import { from, map, Observable, of, switchMap, tap } from 'rxjs';
import { LocalUser } from '../models/firestore.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: FirebaseAuth = inject(Auth) as FirebaseAuth;
  firestore = inject(Firestore);
  // firebaseUtilities: FirebaseUtilitiesService = inject(FirebaseUtilitiesService);

  user$ = user(this.auth as FirebaseAuth);
  id: string = '';

  loggedIn$ = this.user$.pipe(
    // Map the user object to a boolean indicating if the user is logged in
    tap((user: User | null) => {
      if (user?.uid != null) {
        this.id = user?.uid;
      }
    }),
    map((user) => !!user),
  );

  localUser$ = this.user$.pipe(
    switchMap((user) => {
      if (user?.uid != null) {
        this.id = user?.uid;
        const userDocRef = doc(this.firestore, `users/${user?.uid}`);
        return from(getDoc(userDocRef).then((u) => u.data() as LocalUser));
      } else {
        return of(null);
      }
    }),
  );

  loginWithEmailAndPassword(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        // Signed in
        //this.user2 = userCredential.user;
        // ...
        this._setUserData(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    return from(promise);
  }

  loginFromGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();

    const promise = signInWithPopup(this.auth as FirebaseAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        //this.user2 = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        this._setUserData(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        //debugger;
      });
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }

  sendResetPasswordEmail(email: string): Observable<void> {
    // Implement password reset logic here
    const promise = sendPasswordResetEmail(this.auth as FirebaseAuth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        //debugger;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        //debugger;
      });
    return from(promise);
  }

  updateProfile(displayName: string, photoURL: string): Observable<void> {
    const promise = updateProfile(this.auth.currentUser as User, {
      displayName,
      photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
    return from(promise);
  }

  private _setUserData(auth: UserCredential): Promise<User | LocalUser> {
    const user: LocalUser = {
      id: auth.user.uid,
      name: (auth.user.displayName || auth.user.email)!,
      email: auth.user.email!,
      emailVerified: auth.user.emailVerified,
      // custom ones
      platformId: auth.providerId,

      //lastRoute: string;
      //configId: string;
    };
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return setDoc(userDocRef, user, { merge: true }).then(() => user);
  }
}
