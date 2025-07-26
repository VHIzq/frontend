export class AuthAction {
  static readonly type = '[Auth] Add item';
  constructor(readonly payload: string) { }
}
