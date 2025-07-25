import { RegistryFormView } from "./registry-form-view.model";

export class AddRegistryFormView {
  static readonly type = '[RegistryFormView] Add new entry to list';
  constructor(public payload: RegistryFormView.RegistryFormViewModelPayload) {}
}

export class DeleteRegistryFormView {
  static readonly type = '[RegistryFormView] Delete entry from list';
  constructor(public payload: RegistryFormView.EntryIdPayload) {}
}