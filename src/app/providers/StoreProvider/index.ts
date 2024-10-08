import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type {
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  StateSchemaKey,
  ReduxStoreWithManager,
  ThunkConfig,
};
export type { AppDispatch };
