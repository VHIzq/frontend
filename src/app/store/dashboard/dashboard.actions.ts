export class DashboardAction {
  static readonly type = '[Dashboard] Add item';
  constructor(readonly payload: string) { }
}
