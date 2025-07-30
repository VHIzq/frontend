import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { CreateEntryUser, LoginUser, LogoutUser } from './sign.actions';
import { SignService } from './sign.service';
import { Sign } from './sign.model';

export interface SignStateModel {
  items: string[];
  isLoggedIn: boolean;
  user: Sign.User | null;
}

@State<SignStateModel>({
  name: 'sign',
  defaults: {
    items: [],
    isLoggedIn: false,
    user: null,
  },
})
@Injectable()
export class SignState {
  private signService = inject(SignService);

  @Selector()
  static getState(state: SignStateModel) {
    return state;
  }

  @Selector()
  static isLoggedIn(state: SignStateModel) {
    return state.isLoggedIn;
  }

  @Selector()
  static getUser(state: SignStateModel) {
    return state.user;
  }

  @Action(CreateEntryUser)
  createEntryUser(
    ctx: StateContext<SignStateModel>,
    { payload }: CreateEntryUser
  ) {
    return this.signService.createNewEntryUser(payload);
  }

  @Action(LoginUser)
  loginUser(ctx: StateContext<SignStateModel>, { payload }: LoginUser) {
    return this.signService.loginWithEmailAndPassword(payload).subscribe({
      next: (userCredential) => {
        const mappedUser: Sign.User = {
          kind: 'identitytoolkit#VerifyPasswordResponse',
          localId: userCredential.user.uid,
          email: userCredential.user.email ?? '',
          displayName: userCredential.user.displayName ?? '',
          idToken: (userCredential as any).idToken ?? '',
          registered: true,
          refreshToken: userCredential.user.refreshToken ?? '',
          expiresIn: '',
        };

        ctx.patchState({
          isLoggedIn: true,
          user: mappedUser,
        });
      },
      error: () => {
        ctx.patchState({
          isLoggedIn: false,
          user: null,
        });
      },
    });
  }

  @Action(LogoutUser)
  logoutUser(ctx: StateContext<SignStateModel>) {
    return this.signService.logoutUser().subscribe({
      next: () => {
        ctx.patchState({
          isLoggedIn: false,
          user: null,
        });
      },
      error: () => {
        ctx.patchState({
          isLoggedIn: true,
          user: ctx.getState().user,
        });
      },
    });
  }
}
