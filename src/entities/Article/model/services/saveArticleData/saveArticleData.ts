import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { getArticleDetailsData } from '../../selectors/articleDetails';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveArticleData = createAsyncThunk<
  Article,
  void,
  ThunkConfig<string>
>('articleDetails/saveArticleData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const articleData = getArticleDetailsData(getState());

  try {
    const date = new Date();
    const response = await extra.api.post<Article>(`/articles`, {
      id: Date.now().toString(),
      views: 0,
      createdAt: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      user: getState().user.authData!,
      ...articleData,
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
