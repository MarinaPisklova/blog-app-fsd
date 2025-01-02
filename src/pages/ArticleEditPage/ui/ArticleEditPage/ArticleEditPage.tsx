import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { memo } from 'react';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsEdit, ArticleSaveButton } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const title = isEdit
    ? t('article_edit_page.redactor')
    : t('article_edit_page.creator');

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <Page
              className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
              <VStack gap="16" max>
                <Card padding="24" max border="partial">
                  <Text size="m" title={title} />
                </Card>
                <ArticleDetailsEdit id={id} />
              </VStack>
            </Page>
          }
          right={
            <Card padding="24" border="partial" className={cls.card}>
              <ArticleSaveButton />
            </Card>
          }
        />
      }
      off={
        <Page
          data-testid="ArticleEditPage"
          className={classNames(cls.ArticleEditPage, {}, [className])}
        >
          <VStack gap="16" max>
            <HStack justify="between" max>
              <TextDeprecated size={TextSize.M} title={title} />
              <ArticleSaveButton />
            </HStack>
            <ArticleDetailsEdit id={id} />
          </VStack>
        </Page>
      }
    />
  );

  return content;
};

export default memo(ArticleEditPage);
