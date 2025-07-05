import { Routes } from '@angular/router';
import { RegistryFormViewComponent } from './registry-form/views/registry-form-view/registry-form-view.component';

export const routes: Routes = [
  {
    path: 'registry-form',
    pathMatch: 'full',
    title: 'Registro',
    component: RegistryFormViewComponent,
  },
];
