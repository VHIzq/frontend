import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class DashboardComponent {
  @Output()
  deleteRowId = new EventEmitter<string>();

  @Input()
  getDashboardData!: Array<DashboardModel.RowData>;

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

  mockData: DashboardModel.RowData[] = Array.from({ length: 20 }).map(() => {
    const date = faker.date.past();

    return {
      name: faker.person.firstName(),
      firstLastName: faker.person.lastName(),
      secondsLastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 80 }),
      email: faker.internet.email(),
      cellphone: faker.phone.number(),
      entryTipe: faker.helpers.arrayElement(['fiesta', 'reunión', 'evento']),
      invitedBy: faker.person.fullName(),
      visitDay: faker.date.weekday(),
      visitTime: faker.date
        .soon()
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      street: faker.location.street(),
      streetNumber: faker.string.numeric(2),
      zipCode: faker.location.zipCode('#####'),
      referende: faker.location.secondaryAddress(),
      region: faker.location.city(),
      state: faker.location.state(),
      houseNumber: faker.string.numeric(3),
      sex: faker.helpers.arrayElement(['M', 'F']),
      peaceHouseLeader: faker.person.fullName(),
      peaceHouseNumber: faker.string.numeric(2),
      isFirstTimeVisit: faker.datatype.boolean(),
      dateFirstTimeVisit: date,
      network: faker.company.name(),
      pastor: faker.person.fullName(),
      discipulador: faker.person.fullName(),
      comments: faker.lorem.sentence(),
      rowDataId: faker.string.uuid(),
    };
  });

  dataSource = new MatTableDataSource(this.mockData);

  applyFilter(event: Event) {
    const filterValue = (event?.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleOnDelete(row: DashboardModel.RowData) {
    this.mockData = this.mockData.filter(
      (item) => item.rowDataId !== row.rowDataId
    );

    this.dataSource.data = this.mockData;

    this.deleteRowId.emit(row.rowDataId);
  }

  onEdit(_t30: any) {
    //TODO: add dispatch to edit the row
    throw new Error('Method not implemented.');
  }
}
