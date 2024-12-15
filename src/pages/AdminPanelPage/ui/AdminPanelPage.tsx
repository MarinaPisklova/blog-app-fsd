import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" variant="light" border="round" fullHeight>
          <VStack gap="16">
            <Text title={t('admin_panel_page')} />
          </VStack>
        </Card>
      }
      off={
        <VStack gap="16">
          <TextDeprecated size={TextSize.M} title={t('admin_panel_page')} />
        </VStack>
      }
    />
  );

  return (
    <Page
      data-testid="AdminPanelPage"
      className={classNames('', {}, [className])}
    >
      {content}
    </Page>
  );
};

export default memo(AdminPanelPage);
