import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sign } from './sign.model';

@Injectable({
  providedIn: 'root',
})
export class SignService {
  constructor(private http: HttpClient) {}
  //TODO: implemente firebase to register new entry user
  createNewEntryUser(payload: Sign.EntryUserPayload) {}
}
