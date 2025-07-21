import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegistryListModel } from './registry-list.model';

@Component({
  selector: 'lra-registry-list',
  imports: [
    //Angular
    CommonModule,

    //Material
    MatIconModule,
  ],
  templateUrl: './registry-list.component.html',
  styleUrl: './registry-list.component.scss',
})
export class RegistryListComponent {
  @Input()
  entryList!: Array<RegistryListModel.Entry>;

  @Output()
  deleteEntry =  new EventEmitter<number>();

  handleEdit() {
    throw new Error('Method not implemented.');
  }

  handleDeleteEntry(idEntry: number) {
    const entryList = this.entryList.filter((entry) => entry.id !== idEntry);
    this.entryList = entryList;
    this.deleteEntry.emit(idEntry);
  }
}
