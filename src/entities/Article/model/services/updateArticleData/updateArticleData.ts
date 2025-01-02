import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { getArticleDetailsData } from '../../selectors/articleDetails';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const updateArticleData = createAsyncThunk<
  Article,
  void,
  ThunkConfig<string>
>('profile/updateArticleData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const articleData = getArticleDetailsData(getState());

  try {
    const response = await extra.api.put<Article>(
      `/articles/${articleData?.id}`,
      articleData,
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
