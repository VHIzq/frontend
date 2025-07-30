import { Sign } from './sign.model';

export class CreateEntryUser {
  static readonly type = '[Sign] Create entry user';
  constructor(readonly payload: Sign.EntryUserPayload) {}
}

export class LoginUser {
  static readonly type = '[Sign] Login user';
  constructor(readonly payload: Sign.LoginUserPayload) {}
}

export class LogoutUser {
  static readonly type = '[Sign] Logout user';
  constructor() {}
}
