import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  articleDetailsActions,
  articleDetailsReducer,
} from '../../model/slice/articleDetailsSlice';
import {
  useArticleDetailsError,
  useArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Article, ArticleBlock } from '../../model/types/article';
import { ArticleType } from '../../model/consts/articleConsts';
import cls from './ArticleDetailsEdit.module.scss';
import { ArticleDetailsEditRedesigned } from './ArticleDetailsEditRedesigned';
import { ArticleDetailsEditDeprecated } from './ArticleDetailsEditDeprecated';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleEditSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  return (
    <Skeleton className={cls.title} width="100%" height={200} border="16px" />
  );
};

export const ArticleDetailsEdit = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const isLoading = useArticleDetailsIsLoading();
  const error = useArticleDetailsError();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const onChangeTitle = useCallback(
    (value?: string) => {
      dispatch(
        articleDetailsActions.updateArticle({ title: value || '' } as Article),
      );
    },
    [dispatch],
  );

  const onChangeSubtitle = useCallback(
    (value?: string) => {
      dispatch(
        articleDetailsActions.updateArticle({
          subtitle: value || '',
        } as Article),
      );
    },
    [dispatch],
  );

  const onChangeImg = useCallback(
    (value?: string) => {
      dispatch(
        articleDetailsActions.updateArticle({
          img: value || '',
        } as Article),
      );
    },
    [dispatch],
  );

  const onChangeType = useCallback(
    (type?: ArticleType) => {
      dispatch(
        articleDetailsActions.updateArticle({
          type,
        } as Article),
      );
    },
    [dispatch],
  );

  const onChangeBlocks = useCallback(
    (blocks?: ArticleBlock[]) => {
      dispatch(
        articleDetailsActions.updateArticle({
          blocks,
        } as Article),
      );
    },
    [dispatch],
  );

  let content;

  if (isLoading) {
    content = <ArticleEditSkeleton />;
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        title={t('loadingError.articles')}
      />
    );
  } else {
    const props = {
      id,
      onChangeTitle,
      onChangeSubtitle,
      onChangeImg,
      onChangeBlocks,
      onChangeType,
    };
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleDetailsEditRedesigned {...props} />}
        off={<ArticleDetailsEditDeprecated {...props} />}
      />
    );
  }

  return (
    <DynamicModuleLoader key={id} reducers={reducers} removeAfterUnmount>
      <VStack
        gap="16"
        max
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
