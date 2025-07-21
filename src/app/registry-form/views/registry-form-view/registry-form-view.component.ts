import { Component, inject } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';
import { RegistryForm } from '../../components/registry-form/registry-form.model';

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
  handleOnSubmit(formData: RegistryForm.FormDataModel) {
    console.log('data - parent', formData);
  }
}
