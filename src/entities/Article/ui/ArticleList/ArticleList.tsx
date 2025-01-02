/* eslint-disable react/prop-types */
import { forwardRef, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Components,
  GridComponents,
  Virtuoso,
  VirtuosoGrid,
} from 'react-virtuoso';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
  error?: string;
  onLoadNextPart?: () => void;
  isRecommendations?: boolean;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 3 : 1).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      className={cls.card}
      // eslint-disable-next-line react/no-array-index-key
      key={`skeleton-${view}-${index}`}
      view={view}
    />
  ));

const getComponentsGrid = (
  isLoading: boolean,
  view: ArticleView,
): GridComponents => ({
  List: forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        ...style,
      }}
    >
      {children}
      {isLoading ? <>{getSkeletons(view)}</> : null}
    </div>
  )),
  Item: ({ children, ...props }) => <div {...props}>{children}</div>,
});

const getComponentsList = (
  isLoading: boolean,
  view: ArticleView,
): Components<Article> => ({
  Footer: () => (isLoading ? <>{getSkeletons(view)}</> : null),
});

const getComponentsListRedesigned = (
  isLoading: boolean,
  view: ArticleView,
): Components<Article> => ({
  Footer: () => (isLoading ? <>{getSkeletons(view)}</> : null),
  Item: ({ children, ...props }) => (
    <div {...props} style={{ marginBottom: '16px' }}>
      {children}
    </div>
  ),
});

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
    error,
    onLoadNextPart,
    isRecommendations = false,
  } = props;
  const { t } = useTranslation('articles');

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Text size="m" title={t('loadingError.articles')} />}
        off={
          <TextDeprecated
            size={TextSize.M}
            title={t('loadingError.articles')}
          />
        }
      />
    );
  }

  if (!isLoading && !articles.length) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div className={classNames(cls.ArticleListRedesigned, {}, [])}>
            <Text size="m" title={t('not_found')} />
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            <TextDeprecated size={TextSize.M} title={t('not_found')} />
          </div>
        }
      />
    );
  }

  const gridViewRedesigned = isRecommendations ? (
    <>
      {articles.map((article) => (
        <ArticleListItem
          article={article}
          view={view}
          target={target}
          key={article.id}
          className={cls.card}
        />
      ))}
    </>
  ) : (
    <VirtuosoGrid
      style={{ width: '100%' }}
      useWindowScroll
      endReached={onLoadNextPart}
      components={getComponentsGrid(isLoading ?? false, view)}
      data={articles}
      // eslint-disable-next-line react/no-unstable-nested-components
      itemContent={(_, item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      )}
    />
  );

  const gridViewDeprecated = isRecommendations ? (
    <>
      {articles.map((article) => (
        <ArticleListItem
          article={article}
          view={view}
          target={target}
          key={article.id}
          className={cls.card}
        />
      ))}
    </>
  ) : (
    <VirtuosoGrid
      endReached={onLoadNextPart}
      components={getComponentsGrid(isLoading ?? false, view)}
      data={articles}
      // eslint-disable-next-line react/no-unstable-nested-components
      itemContent={(_, item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      )}
    />
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames(cls.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {view === ArticleView.BIG ? (
            <Virtuoso
              style={{ width: '100%' }}
              useWindowScroll
              endReached={onLoadNextPart}
              data={articles}
              // eslint-disable-next-line react/no-unstable-nested-components
              itemContent={(_, item) => (
                <ArticleListItem
                  article={item}
                  view={view}
                  target={target}
                  key={item.id}
                  className={cls.card}
                />
              )}
              components={getComponentsListRedesigned(isLoading ?? false, view)}
            />
          ) : (
            gridViewRedesigned
          )}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {view === ArticleView.BIG ? (
            <Virtuoso
              endReached={onLoadNextPart}
              data={articles}
              components={getComponentsList(isLoading ?? false, view)}
              // eslint-disable-next-line react/no-unstable-nested-components
              itemContent={(_, item) => (
                <ArticleListItem
                  article={item}
                  view={view}
                  target={target}
                  key={item.id}
                  className={cls.card}
                />
              )}
            />
          ) : (
            gridViewDeprecated
          )}
        </div>
      }
    />
  );
});
