import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  THEME_LAST_DESIGN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('');
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      localStorage.setItem(
        THEME_LAST_DESIGN_LOCALSTORAGE_KEY,
        response.features?.isAppRedesigned ? 'new' : 'old',
      );

      return response;
    } catch (e) {
      console.log(e);
      return rejectWithValue('');
    }
  },
);
