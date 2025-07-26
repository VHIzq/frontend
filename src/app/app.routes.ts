import { Routes } from '@angular/router';
import { RegistryFormViewComponent } from './data-entry/views/registry-form-view/registry-form-view.component';
import { RegistryListViewComponent } from './data-entry/views/registry-list-view/registry-list-view.component';

export const routes: Routes = [
  {
    path: 'registry-form',
    pathMatch: 'full',
    title: 'Registro',
    component: RegistryFormViewComponent,
  },
  {
    path: 'registry-list',
    title: 'Lista de Registros',
    component: RegistryListViewComponent,
  },
];
