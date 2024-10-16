import { articlesPageActions } from '../../slices/articlesPageSlice';
import { initArticlesPage } from './initArticlesPage';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField, ArticleType } from '@/entities/Article';

jest.mock('../../slices/articlesPageSlice');

describe('initArticlesPage.test', () => {
  test('initArticlesPage called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    const paramsObj = {
      sort: '',
      search: '',
      order: '',
      type: '',
    };
    const searchParams = new URLSearchParams(paramsObj);

    await thunk.callThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(articlesPageActions.initState).toHaveBeenCalled();
  });

  test('initArticlesPage called with search params', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    const paramsObj = {
      sort: ArticleSortField.CREATED,
      search: 'some str',
      order: 'asc',
      type: ArticleType.ALL,
    };
    const searchParams = new URLSearchParams(paramsObj);

    await thunk.callThunk(searchParams);
    expect(thunk.dispatch).toBeCalledTimes(8);
    expect(articlesPageActions.initState).toHaveBeenCalled();
  });

  test('initArticlesPage not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk({} as URLSearchParams);
    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
