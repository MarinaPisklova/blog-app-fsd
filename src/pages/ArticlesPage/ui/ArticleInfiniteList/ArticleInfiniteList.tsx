import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  useArticlesPageError,
  useArticlesPageIsLoading,
  useArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { ArticleList } from '@/entities/Article';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useArticlesPageIsLoading();
  const view = useArticlesPageView();
  const error = useArticlesPageError();

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      error={error}
      className={className}
    />
  );
});
