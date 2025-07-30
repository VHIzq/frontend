import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { faker } from '@faker-js/faker';
import { DashboardModel } from './dashboard.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lra-dashboard',
  imports: [
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.handleOnDashboardChange(changes);
  }
  @Output()
  deleteRowId = new EventEmitter<string>();

  @Input()
  dashboardData!: Array<DashboardModel.RowData>;

  columnHeaders: Array<string> = [
    'Nombre',
    'Primer Apellido',
    'Segundo Apellido',
    'Edad',
    'Correo electrónico',
    'Celular',
    'Calle',
    'Número',
    'Código Postal',
    'Referencia',
    'Región',
    'Estado',
    'Número de Casa',
    'Sexo',
    'Líder de Casa de Paz',
    'Número de Casa de Paz',
    '¿Primera vez?',
    'Fecha Primera Visita',
    'Red',
    'Pastor',
    'Discipulador',
    'Tipo de Entrada',
    'Invitado por',
    'Comentarios',
    'Día de Visita',
    'Hora de Visita',
  ];

  displayedColumns: Array<string> = [
    'name',
    'firstLastName',
    'secondsLastName',
    'age',
    'email',
    'cellphone',
    'street',
    'streetNumber',
    'zipCode',
    'referende',
    'region',
    'state',
    'houseNumber',
    'sex',
    'peaceHouseLeader',
    'peaceHouseNumber',
    'isFirstTimeVisit',
    'dateFirstTimeVisit',
    'network',
    'pastor',
    'discipulador',
    'entryTipe',
    'invitedBy',
    'comments',
    'visitDay',
    'visitTime',
    'edit',
    'delete',
  ];

  dataSource = new MatTableDataSource(this.dashboardData);

  handleOnDashboardChange(changes: SimpleChanges) {
    if (changes['dashboardData'] && changes['dashboardData'].currentValue) {
      this.dataSource.data = changes['dashboardData'].currentValue;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleOnDelete(row: DashboardModel.RowData) {
    this.dashboardData = this.dashboardData.filter(
      (item) => item.rowDataId !== row.rowDataId
    );

    this.dataSource.data = this.dashboardData;

    this.deleteRowId.emit(row.rowDataId);
  }

  onEdit(_t30: any) {
    //TODO: add dispatch to edit the row
    throw new Error('Method not implemented.');
  }
}
