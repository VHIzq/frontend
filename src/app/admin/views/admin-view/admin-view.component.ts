import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { Store } from '@ngxs/store';
import {
  DeleteDashboardEntry,
  EditDashboardEntry,
  GetDashboardData,
} from '../../../store/dashboard/dashboard.actions';
import { DashboardState } from '../../../store/dashboard/dashboard.state';
import { Observable } from 'rxjs';
import { DashboardModel } from '../../../store/dashboard/dashboard.model';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegistryFormComponent } from '../../../data-entry/components/registry-form/registry-form.component';

@Component({
  selector: 'lra-admin-view',
  imports: [
    CommonModule,
    DashboardComponent,
    MatSidenavModule,
    MatSidenavModule,
    RegistryFormComponent,
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
})
export class AdminViewComponent implements OnInit {
  private store = inject(Store);
  shouldOpenDrawer!: boolean;

  // Observable to get the dashboard data from the store

  getDashboardData$: Observable<Array<DashboardModel.RowData>> =
    this.store.select(DashboardState.getDashboardData);

  ngOnInit() {
    this.setupDashboardData();
  }

  handleOnDeleteEntry($entryId: string) {
    this.store.dispatch(new DeleteDashboardEntry($entryId));
  }

  handleOpenDrawer($event: boolean) {
    this.shouldOpenDrawer = $event;
  }

  handleOnEditEntry($entry: DashboardModel.RowData) {
    this.store.dispatch(new EditDashboardEntry($entry));
  }

  private setupDashboardData() {
    this.store.dispatch(new GetDashboardData());
  }
}
