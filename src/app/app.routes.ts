import { Routes } from '@angular/router';
import { RegistryFormViewComponent } from './data-entry/views/registry-form-view/registry-form-view.component';
import { RegistryListViewComponent } from './data-entry/views/registry-list-view/registry-list-view.component';
import { SignupComponentView } from './data-entry/views/signup-view/signup.component.view';
import { LoginComponentView } from './data-entry/views/login-view/login.component.view';
import { authGuard } from './data-entry/guards/auth.guard';
import { guestGuard } from './data-entry/guards/guest.guard';

export const routes: Routes = [
  {
    path: 'registry-form',
    pathMatch: 'full',
    title: 'Registro',
    component: RegistryFormViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'registry-list',
    title: 'Lista de Registros',
    component: RegistryListViewComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signup',
    title: 'Registro',
    component: SignupComponentView,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponentView,
  },
];
