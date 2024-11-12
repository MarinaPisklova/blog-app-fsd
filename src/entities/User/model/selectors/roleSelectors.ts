import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../consts/userConsts';
import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useUserRoles, getUserRoles] = buildSelector(
  (state: StateSchema) => state.user.authData?.roles,
);

export const [useIsUserAdmin, isUserAdmin] = buildSelector(
  createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.ADMIN)),
  ),
);

export const [useIsUserManager, isUserManager] = buildSelector(
  createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.MANAGER)),
  ),
);
