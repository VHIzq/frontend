import { Routes } from '@angular/router';
import { RegistryFormViewComponent } from './registry-form/views/registry-form-view/registry-form-view.component';
import { RegistryListComponent } from './registry-form/components/registry-list/registry-list.component';
import { RegistryListViewComponent } from './registry-form/views/registry-list-view/registry-list-view.component';

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
