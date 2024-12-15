import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';
import { Card } from '@/shared/ui/redesigned/Card';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation('main');

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" variant="light" border="round" fullHeight>
          <VStack gap="16" align="center">
            <Text size="l" title={t('title')} variant="accent" bold />
            <Text size="m" title={t('subtitle')} />
            <Text size="s" title={t('text')} />
          </VStack>
        </Card>
      }
      off={
        <VStack gap="16" align="center">
          <TextDeprecated size={TextSize.L} title={t('title')} />
          <TextDeprecated size={TextSize.M} title={t('subtitle')} />
          <TextDeprecated size={TextSize.S} title={t('text')} />
        </VStack>
      }
    />
  );

  return (
    <Page data-testid="MainPage" className={classNames('', {}, [className])}>
      {content}
    </Page>
  );
};

export default memo(MainPage);
