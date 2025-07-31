import { DashboardModel } from "./dashboard.model";

export class DashboardAction {
  static readonly type = '[Dashboard] Add item';
  constructor(readonly payload: string) { }
}

export class GetDashboardData {
  static readonly type = '[Dashboard] Get data';
  constructor() { }
}

export class DeleteDashboardEntry {
  static readonly type = '[Dashboard] Delete entry';
  constructor(readonly payload: string) { }
}

export class EditDashboardEntry {
  static readonly type = '[Dashboard] Edit entry';
  constructor(readonly payload: DashboardModel.RowData) { }
}