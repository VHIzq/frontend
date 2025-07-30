import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignState } from '../../store/sign/sign.state';
import { map } from 'rxjs';

export const guestGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(SignState.isLoggedIn).pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return router.createUrlTree(['/registry-form']);
      } else {
        return true;
      }
    })
  );
};
