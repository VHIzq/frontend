import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'lra-confirmation-snackbar',
  imports: [CommonModule, MatSnackBarModule, MatIconModule],
  templateUrl: './confirmation-snackbar.component.html',
  styleUrl: './confirmation-snackbar.component.scss',
})
export class ConfirmationSnackbarComponent {}
