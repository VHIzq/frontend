import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'lra-preview-confirmation',
  imports: [
    // Material
    MatDialogModule,
  ],
  templateUrl: './preview-confirmation.component.html',
  styleUrl: './preview-confirmation.component.scss'
})
export class PreviewConfirmationComponent {

}
