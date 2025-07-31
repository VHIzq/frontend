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
