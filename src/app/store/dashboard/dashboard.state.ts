import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { DashboardAction } from './dashboard.actions';

export interface DashboardStateModel {
  items: string[];
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    items: []
  }
})
@Injectable()
export class DashboardState {

  @Selector()
  static getState(state: DashboardStateModel) {
    return state;
  }

  @Action(DashboardAction)
  add(ctx: StateContext<DashboardStateModel>, { payload }: DashboardAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
