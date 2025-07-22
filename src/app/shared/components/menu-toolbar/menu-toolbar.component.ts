import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lra-menu-toolbar',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './menu-toolbar.component.html',
  styleUrl: './menu-toolbar.component.scss'
})
export class MenuToolbarComponent {
  servidor = 'Hugo Izquierdo';
  isAuthenticated = true;
}
