import { Injectable } from '@angular/core';
import { Sign } from './sign.model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignService {
  auth = getAuth();

  createNewEntryUser(
    payload: Sign.EntryUserPayload
  ): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.auth, payload.email, payload.password)
    );
  }

  loginWithEmailAndPassword(
    userData: Sign.LoginUserPayload
  ): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.auth, userData.email, userData.password)
    );
  }
}
