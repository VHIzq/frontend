import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AuthAction } from './auth.actions';

export interface AuthStateModel {
  items: string[];
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    items: []
  }
})
@Injectable()
export class AuthState {

  @Selector()
  static getState(state: AuthStateModel) {
    return state;
  }

  @Action(AuthAction)
  add(ctx: StateContext<AuthStateModel>, { payload }: AuthAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
