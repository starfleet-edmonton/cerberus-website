import { inject, Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  Auth as FirebaseAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { Auth, user } from 'ngx-firebase';
import { from, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: FirebaseAuth = inject(Auth) as FirebaseAuth;
  user$ = user(this.auth as FirebaseAuth);
  loggedIn$ = this.user$.pipe(
    // Map the user object to a boolean indicating if the user is logged in
    map((user) => !!user),
  );

  loginWithEmailAndPassword(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        // Signed in
        //this.user2 = userCredential.user;
        // ...
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
}
