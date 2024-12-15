import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';

export interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Text size="m" title={t('not_found_page')} />}
      off={<TextDeprecated size={TextSize.M} title={t('not_found_page')} />}
    />
  );

  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {content}
    </Page>
  );
};

export default memo(NotFoundPage);
