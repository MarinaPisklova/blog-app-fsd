import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  useArticlesPageError,
  useArticlesPageIsLoading,
  useArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useArticlesPageIsLoading();
  const view = useArticlesPageView();
  const error = useArticlesPageError();
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      error={error}
      className={className}
      onLoadNextPart={onLoadNextPart}
    />
  );
});
