import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignState } from '../store/sign/sign.state';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  // TODO: Mejorar validación usando roles en vez de emails hardcodeados
  const allowedEmails = ['impulse.studio.mx@gmail.com', 'vhmizq@gmail.com'];

  return store.selectOnce(SignState.getUser).pipe(
    map((user) => {
      const isAdmin = allowedEmails.includes(user?.email ?? '');
      return isAdmin ? true : router.createUrlTree(['/login']);
    })
  );
};
