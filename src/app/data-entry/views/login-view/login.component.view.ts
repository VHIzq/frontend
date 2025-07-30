import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { LoginModel } from '../../components/login/login.model';
import { LoginUser } from '../../../store/sign/sign.actions';
import { Router } from '@angular/router';
import { SignState } from '../../../store/sign/sign.state';
import { filter, take } from 'rxjs';

@Component({
  selector: 'lra-login-view',
  imports: [LoginComponent, CommonModule],
  templateUrl: './login.component.view.html',
  styleUrl: './login.component.view.scss',
})
export class LoginComponentView {
  private store = inject(Store);
  private router = inject(Router);

  handleOnLogin(userData: LoginModel.LoginUser) {
    this.store.dispatch(new LoginUser(userData)).subscribe({
      next: () => {
        this.store
          .select(SignState.isLoggedIn)
          .pipe(
            filter((isLoggedIn) => isLoggedIn),
            take(1)
          )
          .subscribe(() => {
            this.router.navigate(['/registry-form']);
          });
      },
      error: (err) => {
        console.warn('error', err);
      },
    });
  }
}
