import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lra-registry-list',
  imports: [
    //Angular
    CommonModule,

    //Material
    MatIconModule
  ],
  templateUrl: './registry-list.component.html',
  styleUrl: './registry-list.component.scss',
})
export class RegistryListComponent {
handleEdit() {
throw new Error('Method not implemented.');
}
handleDelete() {
throw new Error('Method not implemented.');
}
  registryListMock = [
    { id: 1, name: 'Registro 1', status: 'enviado' },
    { id: 2, name: 'Registro 2', status: 'pendiente' },
    { id: 3, name: 'Registro 3', status: 'eliminado' },
  ];
}
