import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoginAction } from './login.actions';

export interface LoginStateModel {
  items: string[];
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    items: []
  }
})
@Injectable()
export class LoginState {

  @Selector()
  static getState(state: LoginStateModel) {
    return state;
  }

  @Action(LoginAction)
  add(ctx: StateContext<LoginStateModel>, { payload }: LoginAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
