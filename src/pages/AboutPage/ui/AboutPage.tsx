import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { ToggleFeatures } from '@/shared/lib/features';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AboutPageProps {
  className?: string;
}
const AboutPage = ({ className }: AboutPageProps) => {
  const { t } = useTranslation('about');

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" variant="light" fullHeight border="round">
          <VStack gap="16" align="center">
            <Text size="l" title={t('title')} bold />
            <Text size="s" title={t('text')} />
          </VStack>
        </Card>
      }
      off={
        <VStack gap="16" align="center">
          <TextDeprecated size={TextSize.L} title={t('title')} />
          <TextDeprecated size={TextSize.S} title={t('text')} />
        </VStack>
      }
    />
  );

  return (
    <Page data-testid="AboutPage" className={classNames('', {}, [className])}>
      {content}
    </Page>
  );
};

export default memo(AboutPage);
