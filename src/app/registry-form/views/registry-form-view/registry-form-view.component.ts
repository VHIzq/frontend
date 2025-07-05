import { Component } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';

@Component({
  selector: 'lra-registry-form-view',
  imports: [
    // Components
    RegistryFormComponent
  ],
  templateUrl: './registry-form-view.component.html',
  styleUrl: './registry-form-view.component.scss'
})
export class RegistryFormViewComponent {

}
