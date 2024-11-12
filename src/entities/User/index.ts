export {
  useUserAuthData,
  getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
  useUserInited,
  getUserInited,
} from './model/selectors/getUserInited/getUserInited';

export {
  useIsUserAdmin,
  useIsUserManager,
  useUserRoles,
  getUserRoles,
} from './model/selectors/roleSelectors';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/userConsts';
