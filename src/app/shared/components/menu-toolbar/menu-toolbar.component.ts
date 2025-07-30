import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngxs/store';
import { LogoutUser } from '../../../store/sign/sign.actions';
import { SignState } from '../../../store/sign/sign.state';
import { filter, take } from 'rxjs';

@Component({
  selector: 'lra-menu-toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './menu-toolbar.component.html',
  styleUrl: './menu-toolbar.component.scss',
})
export class MenuToolbarComponent {
  private store = inject(Store);
  private router = inject(Router);

  handleOnLogout() {
    this.store.dispatch(new LogoutUser()).subscribe({
      next: () => {
        this.store
          .select(SignState.isLoggedIn)
          .pipe(
            filter((isLoggedIn) => !isLoggedIn),
            take(1)
          )
          .subscribe(() => {
            this.router.navigate(['/login']);
          });
      },
      error: (err) => {
        console.warn('error', err);
      },
    });
  }

  servidor = 'Hugo Izquierdo';
  isAuthenticated = true;
}
