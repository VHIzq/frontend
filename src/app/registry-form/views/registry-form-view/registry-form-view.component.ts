import { Component, inject } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';
import { RegistryForm } from '../../components/registry-form/registry-form.model';
import { Store } from '@ngxs/store';
import { AddRegistryFormView } from '../../../store/registry-form-view/registry-form-view.action';

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
    console.log('data - parent', formData);
    this.store.dispatch(new AddRegistryFormView(formData));
  }
}
