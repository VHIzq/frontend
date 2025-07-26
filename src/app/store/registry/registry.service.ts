import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistryStateModel } from './registry.state';
import { Observable } from 'rxjs';
import { Registry } from './registry.model';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  private readonly apiUrl = '/registry';
  private storageKey = 'registryEntries';

  constructor(private http: HttpClient) {}

  addNewEntry(payload: Registry.RegistryFormViewModelPayload): Observable<any> {
    return this.http.post(this.apiUrl, { items: payload });
  }

  addNewEntryLocal(payload: Registry.RegistryFormViewModelPayload): void {
    const existingEntries = JSON.parse(
      localStorage.getItem(this.storageKey) || '[]'
    );
    const updatedEntries = [...existingEntries, payload];
    localStorage.setItem(this.storageKey, JSON.stringify(updatedEntries));
  }

  getEntryList(): Observable<Array<Registry.RegistryFormViewModelPayload>> {
    return this.http.get<Array<Registry.RegistryFormViewModelPayload>>(
      this.apiUrl
    );
  }

  getRegistryEntriesFromStorage(): Array<Registry.RegistryFormViewModelPayload> {
    const data = localStorage.getItem(this.storageKey);
    if (!data) {
      return [];
    }

    return JSON.parse(data) || [];
  }
}
