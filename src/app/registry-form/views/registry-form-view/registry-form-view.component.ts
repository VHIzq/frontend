import { Component, inject } from '@angular/core';
import { RegistryFormComponent } from '../../components/registry-form/registry-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PreviewFormComponent } from '../../components/preview-form/preview-form.component';

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
  readonly dialogRef = inject(MatDialogRef<PreviewFormComponent>);
}
