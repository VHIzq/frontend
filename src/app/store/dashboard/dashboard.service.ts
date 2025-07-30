import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardModel } from './dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = '/dashboard';

  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get<Array<DashboardModel.RowData>>(this.apiUrl);
  }
}
