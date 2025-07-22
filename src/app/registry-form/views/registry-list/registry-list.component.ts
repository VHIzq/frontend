import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegistryListModel } from './registry-list.model';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmDeleteEntryComponent } from '../../components/confirm-delete-entry/confirm-delete-entry.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';

@Component({
  selector: 'lra-registry-list',
  imports: [
    //Angular
    CommonModule,

    //Material
    MatIconModule,
    MatDividerModule,
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

  handleEdit() {
    throw new Error('Method not implemented.');
  }

  handleConfirmDelete(idEntry: number) {
    const entryList = this.entryList.filter((entry) => entry.id !== idEntry);
    this.entryList = entryList;
    this.deleteEntry.emit(idEntry);
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
          this.handleConfirmDelete(idEntry);
        }
      });
  }
}
