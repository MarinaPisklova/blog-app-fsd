import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              data-testid="ArticlesPage"
              className={classNames(cls.ArticlesPageRedesigned, {}, [
                className,
              ])}
            >
              <ArticleInfiniteList className={cls.list} />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page
          data-testid="ArticlesPage"
          className={classNames(cls.ArticlesPage, {}, [className])}
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList className={cls.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
