import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignState } from '../store/sign/sign.state';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  //TODO: update with admin email or role check

  const isAdminRole = store.selectOnce(SignState.getUser).pipe(
    map((user) => {
      if (user?.email === 'vhmizq@gmail.com') {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );

  return isAdminRole;
};
