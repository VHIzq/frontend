import { Injectable } from '@angular/core';
import { Sign } from './sign.model';
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
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
    console.log('service');
    return from(
      createUserWithEmailAndPassword(this.auth, payload.email, payload.password)
    );
  }
}
