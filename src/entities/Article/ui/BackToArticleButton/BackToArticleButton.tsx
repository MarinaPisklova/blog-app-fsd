import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { getRouteArticleDetails } from '@/shared/const/router';

export const BackToArticleButton = memo(() => {
  const { t } = useTranslation('articles', { keyPrefix: 'edit' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const onBackToArticle = useCallback(() => {
    navigate(getRouteArticleDetails(id ?? ''));
  }, [id, navigate]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Button onClick={onBackToArticle}>{t('back_btn')}</Button>}
      off={
        <ButtonDeprecated onClick={onBackToArticle}>
          {t('back_btn')}
        </ButtonDeprecated>
      }
    />
  );
});
