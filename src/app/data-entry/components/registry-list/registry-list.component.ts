import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegistryListModel } from './registry-list.model';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmDeleteEntryComponent } from '../confirm-delete-entry/confirm-delete-entry.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmationSnackbarComponent } from '../confirmation-snackbar/confirmation-snackbar.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lra-registry-list',
  imports: [
    //Angular
    CommonModule,

    //Material
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './registry-list.component.html',
  styleUrl: './registry-list.component.scss',
})
export class RegistryListComponent implements OnChanges {
  @Input()
  entryList!: Array<RegistryListModel.Entry>;

  @Output()
  deleteEntry = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    this.handleOnListChange(changes);
  }

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private durationInSeconds = 4;

  displayedColumns: Array<string> = ['position', 'name', 'status', 'actions'];
  dataSource = new MatTableDataSource(this.entryList);

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
          this.openSnackBar();
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private confirmDelete(idEntry: number) {
    const entryList = this.entryList.filter((entry) => entry.id !== idEntry);
    this.entryList = entryList;
    this.deleteEntry.emit(idEntry);
  }

  private openSnackBar() {
    this.snackBar.openFromComponent(ConfirmationSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  private handleOnListChange(changes: SimpleChanges) {
    if (changes['entryList'] && changes['entryList'].currentValue) {
      this.dataSource.data = changes['entryList'].currentValue;
    }
  }
}
