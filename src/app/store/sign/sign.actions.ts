import { Sign } from './sign.model';

export class CreateEntryUser {
  static readonly type = '[Sign] Create entry user';
  constructor(readonly payload: Sign.EntryUserPayload) {}
}
