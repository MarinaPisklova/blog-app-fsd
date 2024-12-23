import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text size="m" title={t('unexpected_error')} />
          <Button onClick={reloadPage}>{t('reload_page_btn')}</Button>
        </>
      }
      off={
        <>
          <TextDeprecated size={TextSize.M} title={t('unexpected_error')} />
          <ButtonDeprecated onClick={reloadPage}>
            {t('reload_page_btn')}
          </ButtonDeprecated>
        </>
      }
    />
  );

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>{content}</div>
  );
};
