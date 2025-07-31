import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardModel } from './dashboard.model';
import { mockDashboardData } from './dashboard.mock.data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = '/dashboard';

  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get<Array<DashboardModel.RowData>>(this.apiUrl);
  }

  deleteDashboardEntry(params: { idEntry: string }) {
    return this.http.delete(this.apiUrl, {
      body: { idEntry: params.idEntry },
    });
  }

  mockGetDashboardData() {
    return of(mockDashboardData);
  }
}
