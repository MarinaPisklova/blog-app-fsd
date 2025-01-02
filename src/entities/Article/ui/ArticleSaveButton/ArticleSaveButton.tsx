import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { updateArticleData } from '../../model/services/updateArticleData/updateArticleData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticleSaveButton = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles', { keyPrefix: 'edit' });

  const onSaveArticle = useCallback(() => {
    dispatch(updateArticleData());
  }, [dispatch]);

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
