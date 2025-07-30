import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { map } from 'rxjs';
import { SignState } from '../store/sign/sign.state';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(SignState.isLoggedIn).pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
