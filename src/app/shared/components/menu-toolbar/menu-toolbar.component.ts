import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'lra-menu-toolbar',
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './menu-toolbar.component.html',
  styleUrl: './menu-toolbar.component.scss'
})
export class MenuToolbarComponent {
  servidor = 'Hugo Izquierdo';
  isAuthenticated = true;
}
