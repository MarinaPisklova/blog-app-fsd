import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { updateArticleData } from '../../model/services/updateArticleData/updateArticleData';
import { saveArticleData } from '../../model/services/saveArticleData/saveArticleData';
import { useArticleDetailsData } from '../../model/selectors/articleDetails';
import { articleDetailsActions } from '../../model/slice/articleDetailsSlice';
import {
  normilizeBlocks,
  validateArticleData,
} from '../../model/services/validateArticleData/validateArticleData';
import { Article } from '../../model/types/article';
import { ValidateArticleError } from '../../model/consts/articleConsts';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleSaveButton = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles', { keyPrefix: 'edit' });
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const article = useArticleDetailsData();

  const normilizeArticle = useCallback(() => {
    if (!article) return;

    const normilizedArticle: Article = {
      ...article,
      blocks: normilizeBlocks(article?.blocks ?? []),
    };
    dispatch(articleDetailsActions.updateArticle(normilizedArticle));
  }, [article, dispatch]);

  const onSaveArticle = useCallback(() => {
    if (!article) {
      dispatch(
        articleDetailsActions.setValidateErrors([
          ValidateArticleError.NO_BLOCKS,
          ValidateArticleError.NO_IMAGE,
          ValidateArticleError.NO_TITLE,
        ]),
      );
      return;
    }

    normilizeArticle();
    const errors = validateArticleData(article);
    dispatch(articleDetailsActions.setValidateErrors(errors));
    if (errors.length > 0) {
      return;
    }

    if (isEdit) {
      dispatch(updateArticleData());
    } else {
      dispatch(saveArticleData());
    }
  }, [article, dispatch, isEdit, normilizeArticle]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Button onClick={onSaveArticle}>{t('save_btn')}</Button>}
      off={
        <ButtonDeprecated onClick={onSaveArticle}>
          {t('save_btn')}
        </ButtonDeprecated>
      }
    />
  );
});
