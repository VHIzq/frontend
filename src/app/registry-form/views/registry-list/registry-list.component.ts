import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { faker } from '@faker-js/faker';

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
  registryListMock = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    status: faker.helpers.arrayElement(['enviado', 'pendiente', 'eliminado']),
  }));

  handleEdit() {
    throw new Error('Method not implemented.');
  }
  handleDelete() {
    throw new Error('Method not implemented.');
  }
}
