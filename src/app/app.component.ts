import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuToolbarComponent } from './shared/components/menu-toolbar/menu-toolbar.component';
import { FinderComponent } from './shared/components/finder/finder.component';

@Component({
  selector: 'lra-root',
  imports: [RouterOutlet, MenuToolbarComponent, FinderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //TODO: add service to handle authentication
  isAuthenticated = false;
}
