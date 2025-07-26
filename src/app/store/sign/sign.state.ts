import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { CreateEntryUser } from './sign.actions';
import { SignService } from './sign.service';
import { Sign } from './sign.model';

export interface SignStateModel {
  items: string[];
}

@State<SignStateModel>({
  name: 'sign',
  defaults: {
    items: [],
  },
})
@Injectable()
export class SignState {
  private signService = inject(SignService);

  @Selector()
  static getState(state: SignStateModel) {
    return state;
  }

  @Action(CreateEntryUser)
  createEntryUser(
    ctx: StateContext<SignStateModel>,
    { payload }: CreateEntryUser
  ) {
    return this.signService.createNewEntryUser(payload);
  }
}
