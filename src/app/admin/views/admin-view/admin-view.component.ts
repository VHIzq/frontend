import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { Store } from '@ngxs/store';
import { GetDashboardData } from '../../../store/dashboard/dashboard.actions';
import { DashboardState } from '../../../store/dashboard/dashboard.state';
import { Observable } from 'rxjs';
import { DashboardModel } from '../../../store/dashboard/dashboard.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lra-admin-view',
  imports: [ CommonModule, DashboardComponent],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss',
})
export class AdminViewComponent implements OnInit {
  private store = inject(Store);

  getDashboardData$: Observable<Array<DashboardModel.RowData>> =
    this.store.select(DashboardState.getDashboardData);

  ngOnInit() {
    this.setupDashboardData();
  }

  setupDashboardData() {
    this.store.dispatch(new GetDashboardData());
  }
}
