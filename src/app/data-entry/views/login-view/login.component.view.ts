import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { LoginModel } from '../../components/login/login.model';
import { LoginUser } from '../../../store/sign/sign.actions';

@Component({
  selector: 'lra-login-view',
  imports: [LoginComponent, CommonModule],
  templateUrl: './login.component.view.html',
  styleUrl: './login.component.view.scss',
})
export class LoginComponentView {
  private store = inject(Store);

  handleOnLogin(userData: LoginModel.LoginUser) {
    this.store.dispatch(new LoginUser(userData));
  }
}
