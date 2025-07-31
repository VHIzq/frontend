import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { DeleteDashboardEntry, GetDashboardData } from './dashboard.actions';
import { DashboardModel } from './dashboard.model';
import { DashboardService } from './dashboard.service';

export interface DashboardStateModel {
  dashboardData: Array<DashboardModel.RowData>;
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    dashboardData: [],
  },
})
@Injectable()
export class DashboardState {
  private dataService = inject(DashboardService);

  @Selector()
  static getState(state: DashboardStateModel) {
    return state;
  }

  @Selector()
  static getDashboardData(
    state: DashboardStateModel
  ): Array<DashboardModel.RowData> {
    return state.dashboardData;
  }

  @Action(GetDashboardData)
  getDashboardData(ctx: StateContext<DashboardStateModel>) {
    return this.dataService.mockGetDashboardData().subscribe((data) => {
      ctx.patchState({ dashboardData: data });
    });
  }

  @Action(DeleteDashboardEntry)
  deleteDashboardEntry(
    ctx: StateContext<DashboardStateModel>,
    action: DeleteDashboardEntry
  ) {
    return this.dataService
      .deleteDashboardEntry({ idEntry: action.payload })
      .subscribe(() => {
        ctx.dispatch(new GetDashboardData());
      });
  }
}
