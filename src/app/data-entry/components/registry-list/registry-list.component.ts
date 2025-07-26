import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegistryListModel } from './registry-list.model';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmDeleteEntryComponent } from '../confirm-delete-entry/confirm-delete-entry.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationSnackbarComponent } from '../confirmation-snackbar/confirmation-snackbar.component';

@Component({
  selector: 'lra-registry-list',
  imports: [
    //Angular
    CommonModule,

    //Material
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  templateUrl: './registry-list.component.html',
  styleUrl: './registry-list.component.scss',
})
export class RegistryListComponent {
  @Input()
  entryList!: Array<RegistryListModel.Entry>;

  @Output()
  deleteEntry = new EventEmitter<number>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private durationInSeconds = 4;

  handleEdit() {
    throw new Error('Method not implemented.');
  }

  handleOpenModal(idEntry: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteEntryComponent, {
      width: '400px',
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((shouldDelete: boolean) => {
        if (shouldDelete) {
          this.confirmDelete(idEntry);

          //TODO: Implement a service to handle the deletion of entries
          this.openSnackBar();
        }
      });
  }

  private confirmDelete(idEntry: number) {
    const entryList = this.entryList.filter(
      (entry) => entry.id !== idEntry
    );
    this.entryList = entryList;
    this.deleteEntry.emit(idEntry);
  }

  private openSnackBar() {
    this.snackBar.openFromComponent(ConfirmationSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
