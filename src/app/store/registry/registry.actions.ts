import { Registry } from './registry.model';

export class AddNewEntry {
  static readonly type = '[RegistryFormView] Add new entry to list';
  constructor(public payload: Registry.RegistryFormViewModelPayload) {}
}

export class DeleteEntry {
  static readonly type = '[RegistryFormView] Delete entry from list';
  constructor(public payload: Registry.EntryIdPayload) {}
}
