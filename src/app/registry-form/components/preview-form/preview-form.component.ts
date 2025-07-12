import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lra-preview-form',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './preview-form.component.html',
  styleUrl: './preview-form.component.scss',
  standalone: true,
})
export class PreviewFormComponent {
  constructor(
    public dialogRef: MatDialogRef<PreviewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
