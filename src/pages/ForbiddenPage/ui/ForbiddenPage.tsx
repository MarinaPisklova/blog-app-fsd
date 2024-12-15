import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ForbiddenPage.module.scss';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation('');

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Text size="m" title={t('forbidden_page')} />}
      off={<TextDeprecated size={TextSize.M} title={t('forbidden_page')} />}
    />
  );

  return (
    <Page
      data-testid="ForbiddenPage"
      className={classNames(cls.ForbiddenPage, {}, [className])}
    >
      {content}
    </Page>
  );
};

export default memo(ForbiddenPage);
