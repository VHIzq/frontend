import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lra-confirm-delete-entry',
  imports: [CommonModule, MatDialogModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './confirm-delete-entry.component.html',
  styleUrl: './confirm-delete-entry.component.scss',
})
export class ConfirmDeleteEntryComponent {
  modal!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.modal = this.fb.group({
      comments: ['', Validators.required],
    });
  }

  handleCloseModal(confirm: boolean) {
    if (confirm && this.modal.valid) {
      this.dialogRef.close(this.modal.value.comments);
    } else {
      this.dialogRef.close(false);
    }
  }
}
