import { Component, inject } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';
import { RegistryForm } from '../../components/registry-form/registry-form.model';
import { Store } from '@ngxs/store';
import { AddNewEntry } from '../../../store/registry/registry.actions';

@Component({
  selector: 'lra-registry-form-view',
  imports: [
    // Components
    RegistryFormComponent,
  ],
  templateUrl: './registry-form-view.component.html',
  styleUrl: './registry-form-view.component.scss',
})
export class RegistryFormViewComponent {
  private store = inject(Store);

  handleOnSubmitNewEntry(formData: RegistryForm.FormDataModel) {
    this.store.dispatch(new AddNewEntry(formData));
  }
}
