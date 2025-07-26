import { TestBed } from '@angular/core/testing';
import {  provideStore,  Store } from '@ngxs/store';
import { DashboardState, DashboardStateModel } from './dashboard.state';
import { DashboardAction } from './dashboard.actions';

describe('Dashboard store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [provideStore([DashboardState])]
      
    });

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    const expected: DashboardStateModel = {
      items: ['item-1']
    };
    store.dispatch(new DashboardAction('item-1'));
    const actual = store.selectSnapshot(DashboardState.getState);
    expect(actual).toEqual(expected);
  });

});
