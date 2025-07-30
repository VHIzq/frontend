import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuToolbarComponent } from './shared/components/menu-toolbar/menu-toolbar.component';
import { FinderComponent } from './shared/components/finder/finder.component';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SignState } from './store/sign/sign.state';

@Component({
  selector: 'lra-root',
  imports: [CommonModule, RouterOutlet, MenuToolbarComponent, FinderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store);

  //TODO: add service to handle authentication
  /* isAuthenticated$: Observable<boolean> = this.store.select(
    SignState.isLoggedIn
  ); */
  isAuthenticated$ = true;
}
