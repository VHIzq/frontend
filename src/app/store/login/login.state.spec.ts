import { TestBed } from '@angular/core/testing';
import {  provideStore,  Store } from '@ngxs/store';
import { LoginState, LoginStateModel } from './login.state';
import { LoginAction } from './login.actions';

describe('Login store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [provideStore([LoginState])]
      
    });

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    const expected: LoginStateModel = {
      items: ['item-1']
    };
    store.dispatch(new LoginAction('item-1'));
    const actual = store.selectSnapshot(LoginState.getState);
    expect(actual).toEqual(expected);
  });

});
